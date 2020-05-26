// pages/need/need.js
//获取应用实例
const app = getApp()
//调用接口js
const qingqiu = require('../../utils/request.js')
const api = require('../../utils/config.js')

Page({
  data: {
    // needsList: [{
    //     id: 1,
    //     needType: 0,
    //     title: '祥源乡新农村工程点需要友们火速联系！',
    //     price: '350/天',
    //     location: '万载 | 双桥镇',
    //     number: 2,
    //     date: '2019.11.15',
    //     status: '进行中'
    //   },
    //   {
    //     id: 2,
    //     needType: 1,
    //     title: '祥源乡新农村工程点需要友们火速联系！',
    //     price: '350/天',
    //     location: '万载 | 双桥镇',
    //     number: 2,
    //     date: '2019.11.15',
    //     status: '进行中'
    //   },
    //   {
    //     id: 3,
    //     needType: 0,
    //     title: '祥源乡新农村工程点需要友们火速联系！',
    //     price: '350/天',
    //     location: '万载 | 双桥镇',
    //     number: 2,
    //     date: '2019.11.15',
    //     status: '进行中'
    //   }
    // ],
    needsList:[]
  },

  onLoad: function() {
    this.xqneedlist()
  },
  // 需求列表
  xqneedlist() {
    var that = this
    var data={
      pages: 1,
      size: 10
    }
    qingqiu.get("zuixinxq", data, function(re) {
      if (re.success == true) {
        if (re.result != null) {
          that.needsList = re.result.records
          for(var i= 0 ; i < that.needsList.length; i++){
            re.result.records[i].publishTime = re.result.records[i].publishTime.split(' ')[0]
            re.result.records[i].backup1 = api.viewUrl+re.result.records[i].backup1.split(',')[0]
          }
          that.setData ({
            needsList : re.result.records
          })
        } else {
          qingqiu.tk('未查询到任何数据')
        }
      } 
    })
  },
 
  // 跳转到需求详情页面
  needsDetails: function(e) {
    var obj1 =e.currentTarget.dataset.vall;
    var xqxq = JSON.stringify(obj1);
    wx.navigateTo({
      url: '../needsDetails/needsDetails?obj1=' + xqxq,
    })
  },
  // 跳转到提交需求页面
  submitNeeds: function() {
    wx.navigateTo({
      url: '../submitNeeds/submitNeeds',
    })
  },
})