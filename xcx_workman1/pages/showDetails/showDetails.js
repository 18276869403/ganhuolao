// pages/showDetails/showDetails.js
const app = getApp()
const qingqiu = require('../../utils/request.js')
const api = require('../../utils/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: '',
    bannerImg:[],
    pinglunList:[],
    // bannerImg: [{
    //     id: 1,
    //     bannerimg: '../image/top.png'
    //   },
    //   {
    //     id: 2,
    //     bannerimg: '../image/top.png'
    //   },
    //   {
    //     id: 3,
    //     bannerimg: '../image/top.png'
    //   }
    // ],
    // pinglunList: [{
    //     id: 1,
    //     img: '../image/tu.png',
    //     nickname: '干活佬220用户',
    //     time: '2019.11.15 12:00',
    //     details: '很好，很漂亮'
    //   },
    //   {
    //     id: 1,
    //     img: '../image/tu.png',
    //     nickname: '干活佬220用户',
    //     time: '2019.11.15 12:00',
    //     details: '很好，很漂亮'
    //   },
    //   {
    //     id: 1,
    //     img: '../image/tu.png',
    //     nickname: '干活佬220用户',
    //     time: '2019.11.15 12:00',
    //     details: '很好，很漂亮'
    //   }
    // ],
    id: 0,
    wxCaseVo: null,
    // caseMsgList: [{
    //   id: 1,
    //   picUrl: '../image/top.png',
    //   wxNc: 'ssss',
    //   createTime: '2019.11.15 12:00',
    //   content: '室内F-10木门（含五金件）室内F-10木门（含五金件）室内F-10木门（含五金件）'
    // }]
    caseMsgList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    debugger
     var caseMsgList= JSON.parse(options.obj)
     this.setData({
      caseMsgList: caseMsgList
    })
  },

  onShow: function() {
  },
  fangda: function(e) {
    var img = e.currentTarget.dataset.img
    wx.previewImage({
      current: img, // 当前显示图片的http链接
      urls: this.data.bannerImg // 需要预览的图片http链接列表
    })
  },
  //跳转到添加评论页面
  comment: function() {
    wx.redirectTo({
      url: '../comment/comment?id=' + this.data.id,
    })
  },
  lianxita: function(e) {
    wx.makePhoneCall({
      phoneNumber: '19191919919'
    })
  },

})