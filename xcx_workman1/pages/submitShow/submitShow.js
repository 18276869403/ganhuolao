// pages/submitShow/submitShow.js
const app = getApp()
const qingqiu = require('../../utils/request.js')
const api = require('../../utils/config.js')
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
    cityname1: '',
    picIurl1:'',
    picIurl:''
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
  // 发布晒晒
  lijifabu(){
    var that =this
    var data={
      wxUserId : 257,
      backup3:0,
      caseName : that.data.needscontent,
      picOne:that.data.picIurl1
    }
    qingqiu.get("insertCase", data, function(re) {
    console.log(re)
    if (re.success == true) {
          wx.switchTab({
            url: '../showwork/showwork',
          })
    } 
  },'post')
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
  // 图片上传（对接完成）
  upimg: function(e) {
    var type = e.currentTarget.dataset.type
    var index = e.currentTarget.dataset.number
    var that = this
    let uploadFile = ''; //最后处理完，图片上传的图片地址
    wx.chooseImage({
      sizeType: ['compressed'], // 指定只能为压缩图，首先进行一次默认压缩
      sourceType: ['album', 'camera'],
      success:function(res) {
        console.log(res)
       const tempFilePaths = res.tempFilePaths;
 
       //获得原始图片大小
       wx.getImageInfo({
         src: res.tempFilePaths[0],
         success(res) {
           // console.log('获得原始图片大小',res.width)
           //console.log(res.height)
           var originWidth, originHeight;
           originHeight = res.height;
           originWidth = res.width;
           console.log(originWidth);
           //压缩比例
           // 最大尺寸限制
           var maxWidth = 1200,
             maxHeight = 600;
           // 目标尺寸
           var targetWidth = originWidth,
             targetHeight = originHeight;
           //等比例压缩，如果宽度大于高度，则宽度优先，否则高度优先
           if (originWidth > maxWidth || originHeight > maxHeight) {
             if (originWidth / originHeight > maxWidth / maxHeight) {
               // 要求宽度*(原生图片比例)=新图片尺寸
               targetWidth = maxWidth;
               targetHeight = Math.round(maxWidth * (originHeight / originWidth));
             } else {
               targetHeight = maxHeight;
               targetWidth = Math.round(maxHeight * (originWidth / originHeight));
             }
           }
           //尝试压缩文件，创建 canvas
           var ctx = wx.createCanvasContext('firstCanvas');
           ctx.clearRect(0, 0, targetWidth, targetHeight);
           ctx.drawImage(tempFilePaths[0], 0, 0, targetWidth, targetHeight);
           ctx.draw();
           //更新canvas大小
           that.setData({
             cw: targetWidth,
             ch: targetHeight
           });
           //保存图片
           setTimeout(function() {
             wx.canvasToTempFilePath({
               canvasId: 'firstCanvas',
               success: (res) => {
                 //写入图片数组
                 var uploadpic = "uploadPic[" + index + "]";
                 //
                 that.setData({
                   [uploadpic]: res.tempFilePath
                 });
                 uploadFile = res.tempFilePath;
                 wx.uploadFile({
                   url: api.uploadurl, //仅为示例，非真实的接口地址
                   filePath: uploadFile,
                   header: {
                    "Content-Type": "multipart/form-data"
                    },
                    formData: {
                      method: 'POST' //请求方式
                    },
                    name: 'file',
                    success(res) {
                      var r = res.data
                      var jj = JSON.parse(r);
                      var sj = api.viewUrl + jj.message
                      // res.data.data = ""
                      if (type == '1') {
                        that.setData({
                          picIurl: sj,
                          picIurl1:jj.message
                        })
                      } else if (type == '2') {
                        that.setData({
                          picIurltwo: sj,
                          picIurltwo1:jj.message
                        })
                      } else if (type == '3') {
                        that.setData({
                          picDetail: sj,
                          picDetail1:jj.message
                        })
                      } else if (type == '4') {
                        that.setData({
                          picDetailtwo: sj,
                          picDetailtwo1:jj.message
                        })
                      }
                    }
                 })
               },
               fail: (err) => {
                 console.error(err)
               }
             }, this)
           }, 500);
          }
        })
      }
    })
  }



})