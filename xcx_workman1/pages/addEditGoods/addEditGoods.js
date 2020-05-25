// pages/addEditGoods/addEditGoods.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    imgUrl: '',
    needsname: '',
    needscontent: '',
    workaddress: '',
    linkman: '',
    phone: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},



  //获取输入的商品名字
  goodsnameinput: function(e) {
    this.setData({
      goodsname: e.detail.value
    })
  },
  //获取输入的原价
  originalPriceinput: function(e) {
    this.setData({
      originalPrice: e.detail.value
    })
  },
  //获取输入的优惠价
  salesPriceinput: function (e) {
    this.setData({
      salesPrice: e.detail.value
    })
  },
  //获取输入的商品详情
  detailscontentinput: function (e) {
    this.setData({
      detailscontent: e.detail.value
    })
  },

})