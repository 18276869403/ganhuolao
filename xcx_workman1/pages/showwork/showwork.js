
//获取应用实例
const app = getApp()

Page({
  data: {
    showList: [{
      id: 1,
      pinglun: '120000',
      liulan: '1200000',
      url:'../image/top.png'
    },
    {
      id: 2,
      pinglun: '12',
      liulan: '12',
      url: '../image/chuang.png'
    },
    {
      id: 3,
      pinglun: '12',
      liulan: '12',
      url: '../image/chuang.png'
    },
      {
        id: 4,
        pinglun: '12',
        liulan: '12',
        url: '../image/top.png'
      },
    ],
  },

  onLoad: function () {

  },
  // 发布弹窗显示
  showModal1: function () {
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
      showModalStatus1: true
    })
    setTimeout(function () {
      animation.opacity(1).rotateX(0).step();
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //发布弹窗关闭
  hideModal1: function () {
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    // flag = 0;
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      hasMask: false
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus1: false
      })
    }.bind(this), 200)
  },
})