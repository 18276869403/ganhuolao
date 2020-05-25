// pages/mine/mine.js
//index.js
//获取应用实例
const app = getApp()
// var qingqiu = require('../../config/request.js')
// var api = require('../../config/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 0 普通用户，1工人，2商家
    userType: 1,
    star: 4,
    chushihua: '1',
    wxState: 2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function(options) {
  //   this.chushishouquan()
  //   this.setData({
  //     wxState: app.globalData.wxState
  //   })
  // },
  onShow() {
    this.chushishouquan()
    this.setData({
      wxState: app.globalData.wxState
    })

    if (app.globalData.wxid == null || app.globalData.wxid == '') {
      this.onUser()
    }
  },

  onUser: function() {
    var that = this
    wx.login({
      success: function(res) {
        qingqiu.get("getKeyInfo", {
          code: res.code
        }, function(re) {
          app.globalData.wxid = re.data.result.wxUser.id
          if (re.data.result.wxUser.picUrl != null && re.data.result.wxUser.picUrl.length > 0) {
            app.globalData.sqgl = 1
          }
          app.globalData.openid = re.data.result.openId
          app.globalData.wxState = re.data.result.wxUser.wxState
        }, "POST")
      }
    })
  },
  chushishouquan() {
    var that = this
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            lang: 'zh_CN',
            success(res) {
              // debugger
              const userInfo = res.userInfo
              var data = {
                id: app.globalData.wxid,
                openId: app.globalData.wxid,
                picUrl: userInfo.avatarUrl,
                sex: userInfo.gender,
                wxNc: userInfo.nickName
              }
              qingqiu.get("add", data, function(re) {}, 'post')
              console.log(res.userInfo)
              that.setData({
                chushihua: '0'
              })
            }
          })
        } else {
          that.setData({
            chushihua: '1'
          })
          // that.showModal1()
        }
      }
    })
  },
  //用户授权
  bindGetUserInfo(e) {
    var that = this
    console.log(e.detail.userInfo)
    if (e.detail.errMsg == "getUserInfo:fail auth deny") {
      wx.showToast({
        title: '未授权',
        icon: 'none'
      })
    } else {
      wx.getUserInfo({
        lang: 'zh_CN',
        success(res) {
          // debugger
          const userInfo = res.userInfo
          var data = {
            id: app.globalData.wxid,
            openId: app.globalData.openid,
            picUrl: userInfo.avatarUrl,
            sex: userInfo.gender,
            wxNc: userInfo.nickName
          }
          qingqiu.get("add", data, function(re) {
            if (re.data.success == true) {
              app.globalData.sqgl = 1
              that.setData({
                chushihua: '0',
                showModalStatus1: false
              })
            }
          }, 'post')
          console.log(res.userInfo)

        }
      })
    }
  },
  //显示弹窗样式 授权
  showModal1: function(e) {
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation

    animation.opacity(0).rotateX(-100).step();
    this.setData({
      animationData: animation.export(),
      showModalStatus1: true
    })
    setTimeout(function() {
      animation.opacity(1).rotateX(0).step();
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)


  },
  //隐藏分类弹窗样式
  hideModal1: function() {
    var that = this;
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      hasMask: false
    })

    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus1: false,
        navLeftItems: [],

      })
    }.bind(this), 200)
  },
  // 跳转到我的雇佣页面
  myEmploy: function() {
    wx.navigateTo({
      url: '../myEmploy/myEmploy',
    })
  },

  // 申请成为工人或者商家
  applyBusiness: function() {
    wx.navigateTo({
      url: '../applyBusiness/applyBusiness',
    })
  },
  // 跳转到我的资料页面
  myInfo: function () {
    wx.navigateTo({
      url: '../myInfo/myInfo',
    })
  },
  // 跳转到我的需求页面
  myNeeds: function() {
    wx.navigateTo({
      url: '../myNeeds/myNeeds',
    })
  },
  // 跳转到我的晒活页面
  showwork: function() {
    wx.navigateTo({
      url: '../showwork/showwork',
    })
  },
  // 跳转到我留言页面
  myMessage: function () {
    wx.navigateTo({
      url: '../myMessage/myMessage',
    })
  },
  // 跳转到我的商品页面
  myGoods: function () {
    wx.navigateTo({
      url: '../myGoods/myGoods',
    })
  },
  // 跳转到我的推荐页面
  myRecommend: function () {
    wx.navigateTo({
      url: '../myRecommend/myRecommend',
    })
  },
  phonecall: function () {
    wx.makePhoneCall({
      phoneNumber: '17656453456' //仅为示例，并非真实的电话号码
    })
  }




})