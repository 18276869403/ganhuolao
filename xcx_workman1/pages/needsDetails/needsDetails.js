// pages/needsDetails/needsDetails.js
const app = getApp()
//调用接口js
const qingqiu = require('../../utils/request.js')
const api = require('../../utils/config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    viewUrl:api.viewUrl,
    // tupianlist: [{
    //   id: 1,
    //   tupian: '../image/top.png'
    // },
    // {
    //   id: 2,
    //   tupian: '../image/top.png'
    // },
    // {
    //   id: 3,
    //   tupian: '../image/top.png'
    // }
    // ],
    // jiedanList:[{
    //   id:1,
    //   name:'东鹏瓷砖万载总代',
    //   date:'05:00',
    //   details:'我可以做的，找我吧，我在哪哪哪哪',
    //   avator:'../image/top.png'
    // },
    //   {
    //     id: 2,
    //     name: '东鹏瓷砖万载总代',
    //     date: '05:00',
    //     details: '我可以做的，找我吧，我在哪哪哪哪',
    //     avator: '../image/top.png'
    //   },
    //   {
    //     id: 3,
    //     name: '东鹏瓷砖万载总代',
    //     date: '05:00',
    //     details: '我可以做的，找我吧，我在哪哪哪哪',
    //     avator: '../image/top.png'
    //   }],
    xqxqlist:[],
    jiedanList:[],
    tupianlist:[],
    id:'',
    wxUserid:''
  },

  onLoad: function (options) {
    var xqxqlist = JSON.parse(options.obj1)
    this.id = xqxqlist.id
    this.setData({
      xqxqlist: xqxqlist,
      wxUserid: app.globalData.wxid
    })
    console.log(this.data.wxUserid)
    console.log(xqxqlist)
    this.SelectjiedanList()
    // this.SelecttupianList()
  },
  // 接单人员
  SelectjiedanList() {
    var that = this
    var data={
      needId: that.id,
      pages: 1,
      size: 10
    }
    qingqiu.get("needSignPage", data, function(re) {
      if (re.success == true) {
        if (re.result != null) {
          that.jiedanList = re.result.records
          for(let obj of re.result.records){
            obj.picIurl = api.viewUrl + obj.picIurl
          } 
          console.log(re.result.records)
          that.setData ({
            jiedanList : re.result.records
          })
        } else {
          qingqiu.tk('未查询到任何数据')
        }
      } 
    })
  },
  // 图片
  // SelecttupianList() {
  //   var that = this
  //   var data={
  //     id: that.id,
  //     pages: 1,
  //     size: 10
  //   }
  //   qingqiu.get("zuixinxq", data, function(re) {
  //     if (re.success == true) {
  //       if (re.result != null) {
  //         // that.tupianlist = re.result.records
  //         for(let obj of re.result.records){
  //           obj.backup1 = api.viewUrl + obj.backup1.split(',')[0]
  //         }
  //         that.setData ({
  //           tupianlist : re.result.records
  //         })
  //         debugger
  //       } 
  //     } 
  //   })
  // },
  // 需求修改
  xiugaigunali(){
    wx.showToast({
      title: '这个按钮还没有对接哦！',
      icon:'success',
      duration:2000
    })
  },
  // 需求在线联系
  zaixianlianxi(){
    wx.showToast({
      title: '这个按钮还没有对接哦！',
      icon:'success',
      duration:2000
    })
  },
  // 需求报名
  baoming(){
    wx.showToast({
      title: '这个按钮还没有对接哦！',
      icon:'success',
      duration:2000
    })
  },
  // 需求删除
  shancuoxuqiu() {
    var that = this
    var data={
      id: that.id
    }
    wx.showModal({
      title:'提示',
      content:'您确定删除吗？',
      success:function(res){
        if(res.confirm){
          qingqiu.get("delYneedAndNeedSign", data, function(re) {
            if (re.success == true) {
               wx.showToast({
                 title: '删除成功',
                 icon:'success',
                 duration:2000
               })
              } else {
                wx.showToast({
                  title: re.message,
                  icon: 'none',
                  duration: 2000
                })
              } 
          })
        }else{
          return
        }
      }
    })
  },
  // 需求完成
  lianxita() {
    var that = this
    var data={
      id: that.id,
      needState: 1
    }
    console.log(data)
    qingqiu.get("needUpdateStateById", data, function(re) {
      console.log(re)
      if (re.success == true) {
        wx.showToast({
          title: '需求已完成',
          icon: 'success',
          duration: 3000
        })
      } else{
        wx.showToast({
          title: re.message,
          icon: 'none',
          duration: 2000
        })
      }
    },"put")
  }

})