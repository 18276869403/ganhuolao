// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      height: wx.getSystemInfoSync().windowHeight,　　//屏幕高度
      width: wx.getSystemInfoSync().windowWidth　　//屏幕宽度
    })
    console.log(this.data.height)
  },

  getCode: function(){
    wx.request({
      url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx14e076d27e942480&secret=fb16e928e1a41fa0e8f21b2f50aa89d5',
      method: 'get',
      success: function (res) {
        let data = {
          scene: '123456', // 要传递的参数
          page: 'pages/index/index', // 扫码进入的小程序页面
        }
    wx.request({
          url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token='+res.data.access_token,
          method: 'post',
          data:data,
          // dataType: 'json',
          responseType: 'arraybuffer',         //将返回数据 按文本解析修改为arraybuffer
          success: function (res) {
            console.log()
            self.setData({
               //再arraybuffer转为base64  显示图片
              url: 'data:image/png;base64,'+wx.arrayBufferToBase64(res.data)
            })
          }
        })
      }
    })
  }
})