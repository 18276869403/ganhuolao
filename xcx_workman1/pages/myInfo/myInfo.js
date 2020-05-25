// pages/myInfo/myInfo.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    birth: "2019-01-02",
    sex: '0',
    itemList: ['男', '女'],
    date: '1990-01-01',
    name: '',
    phone: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
  },

  //性别选择
  sexChoose: function () {
    var that = this;
    wx.showActionSheet({
      itemList: that.data.itemList,
      success(res) {
        console.log(res.tapIndex)
        that.setData({
          sex: res.tapIndex
        })
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  //日期选择器
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  //获取输入的名称
  nameinput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  //获取输入的手机号
  phoneinput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
})