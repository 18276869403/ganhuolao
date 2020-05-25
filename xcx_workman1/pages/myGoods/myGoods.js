// pages/myGoods/myGoods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [{
        id: 1,
        img: '../image/top.png',
        name: '室内F-10木门（含五金件五',
        price: '299'
      },
      {
        id: 2,
        img: '../image/top.png',
        name: '室内F-10木门（含五金件五',
        price: '299'
      },
      {
        id: 3,
        img: '../image/top.png',
        name: '室内F-10木门（含五金件五',
        price: '299'
      },
      {
        id: 4,
        img: '../image/top.png',
        name: '室内F-10木门（含五金件五',
        price: '299'
      },
      {
        id: 5,
        img: '../image/top.png',
        name: '室内F-10木门（含五金件五',
        price: '299'
      },
      {
        id: 6,
        img: '../image/top.png',
        name: '室内F-10木门（10木门（含五金件五10木门（含五金件五含五金件五',
        price: '299'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  // 添加编辑商品
  addEditGoods:function(){
    wx.navigateTo({
      url: '../addEditGoods/addEditGoods',
    })
  }

})