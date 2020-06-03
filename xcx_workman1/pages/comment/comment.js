// pages/comment/comment.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    needsname: '',
    needscontent: '',
    id: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  //获取输入的评论内容
  commentinput: function (e) {
    this.setData({
      needscontent: e.detail.value
    })
  },

})