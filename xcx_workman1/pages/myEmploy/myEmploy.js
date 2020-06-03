// pages/myEmploy/myEmploy.js
const app = getApp()
const qingqiu = require("../../utils/request.js")
const api = require("../../utils/config.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    viewUrl:api.viewUrl,
    id:'',
    needsTypeid: 1,
    needsTypeList: [{
        id: 1,
        name: '我的雇佣'
      },
      {
        id: 2,
        name: '雇佣我的'
      }
    ],
    messageList: [{
        id: 1,
        workername: '陈俊明',
        date: '2019-10-26 10-23',
        employeename: '张立',
        cost: '600',
        day: '2',
        tips: '来工地进行水电安装，大约13个平方差不多做2天就可以了，日结工资'
      },
      {
        id: 2,
        workername: '陈俊',
        date: '2019-10-26 10-23',
        employeename: '张飞',
        cost: '600',
        day: '2',
        tips: '来工地进行水电安装，大约13个平方差不多做2天就可以了，月结工资'
      },
      {
        id: 3,
        workername: '陈明',
        date: '2019-10-26 10-23',
        employeename: '张立里',
        cost: '600',
        day: '2',
        tips: '来工地进行水电安装，大约13个平方差不多做2天就可以了，日结工资'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    this.getmyEmploy()
  },
  changeType: function(e) {
    var that = this;
    var id = e.currentTarget.dataset.id
    that.setData({
      needsTypeid: id
    })
    this.getmyEmploy()
  },
  phonecall: function(e) {
    var phone = e.currentTarget.dataset.phone
    wx.makePhoneCall({
      phoneNumber: phone 
    })
  },
  // 删除我的雇佣
  delEmploy:function(e){
    var that = this
    var data = {
      id:e.currentTarget.dataset.id
    }
    qingqiu.get("deleteUserWork",data,function(res){
      console.log(res)
    },'delete')
  },
  // 获取我的雇佣
  getmyEmploy:function(){
    var that = this
    var data = ""
    if(that.data.needsTypeid == 1){
      data = {
        wxCaseId:app.globalData.wxid
      }
    }else{
      data = {
        wxCaseId2:app.globalData.wxid
      }
    }
    qingqiu.get("userWorkPage",data,function(re){
      if (re.success == true) {
        if (re.result != null) {
          for(let obj of re.result.records){
            obj.picIurl = api.viewUrl + obj.picIurl
            obj.hiringTime = obj.hiringTime.split(' ')[0]
          }
          that.setData({
            messageList:re.result.records
          })
        }else{
          wx.showToast({
            title: '未雇佣工人',
            icon:'none',
            duration:3000
          })
        }
      } 
    })
  }
})