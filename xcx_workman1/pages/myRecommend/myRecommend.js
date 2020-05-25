// pages/myRecommend/myRecommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // jointype为0，入驻商家，为1，入驻工人
    recommendList: [{
      id: 1,
      url: '../image/top.png',
      name: '万载梦天万载梦天木门专卖店',
      jointype: 0,
      score: 10
    },
      {
        id: 2,
        url: '../image/top.png',
        name: '万载梦天万载梦天木门专卖店',
        jointype: 1,
        score: 100
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

})