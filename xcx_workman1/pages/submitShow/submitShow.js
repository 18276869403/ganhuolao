// pages/submitShow/submitShow.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    needscontent: '',
    cityname: '',
    areaname: '',
    cityId: '',
    areaId: '',
    city: [{
        id: 1,
        areaName: '万载'
      },
      {
        id: 2,
        areaName: '万载111'
      }
    ],
    area: [{
        id: 1,
        areaName: '双桥镇'
      },
      {
        id: 2,
        areaName: '双桥镇11'
      }
    ],
    showImg: [{
        id: 1,
        showimg: '../image/tu.png'
      },
      {
        id: 2,
        showimg: '../image/tu.png'
      },
      {
        id: 3,
        showimg: '../image/tu.png'
      }
    ],
    tupian: '',
    tupianlist: [],
    imgUrl: '',
    cityname1: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  onShow: function() {

  },
  lijifabu: function() {

  },
  fanhui: function() {
    wx.switchTab({
      url: '../showwork/showwork',
    })
  },
  //获取输入的晒活内容
  commentinput: function(e) {
    this.setData({
      needscontent: e.detail.value
    })
  },
  //地址 显示弹窗样式
  showModal: function(e) {
    debugger
    this.setData({
      hasMask: true
    })
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.opacity(0).rotateX(-100).step();
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function() {
      animation.opacity(1).rotateX(0).step();
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)


  },
  //隐藏弹窗样式 地址
  hideModal: function() {
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
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  cityyiji: function() {
    var that = this
    qingqiu.get("oneAreaService", {}, function(re) {
      if (re.data.result.length > 0) {
        that.setData({
          cityId: re.data.result[0].id,
          cityname1: re.data.result[0].areaName
        })
      }
      that.setData({
        city: re.data.result
      })
      that.cityerji()
    })
  },
  cityerji: function() {
    var that = this
    var data = {
      oneAreaId: that.data.cityId
    }
    qingqiu.get("getAllTwoArea", data, function(re) {
      that.setData({
        area: re.data.result
      })
    })
  },
  // 左侧按钮
  cityleft: function(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var id = e.currentTarget.dataset.id
    var name = e.currentTarget.dataset.name
    that.setData({
      cityId: id,
      curIndex: index,
      cityname1: name,
    })
  },
  // 右侧单选点击
  arearight: function(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var id = e.currentTarget.dataset.id
    var name = e.currentTarget.dataset.name
    that.setData({
      areaId: id,
      curIndex: index,
      areaname: name,
      showModalStatus: false,
      cityname: this.data.cityname1
    })
  },



})