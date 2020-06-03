// pages/need/need.js
//获取应用实例
const app = getApp()
//调用接口js
const qingqiu = require('../../utils/request.js')
const api = require('../../utils/config.js')

Page({
  data: {
    viewUrl:api.viewUrl,
    animationData:'',
    showModalStatus:'',
    animationData:'',
    navRightItems:'',
    hasMask:'',
    // needsList: [{
    //     id: 1,
    //     needType: 0,
    //     title: '祥源乡新农村工程点需要友们火速联系！',
    //     price: '350/天',
    //     location: '万载 | 双桥镇',
    //     number: 2,
    //     date: '2019.11.15',
    //     status: '进行中'
    //   },
    //   {
    //     id: 2,
    //     needType: 1,
    //     title: '祥源乡新农村工程点需要友们火速联系！',
    //     price: '350/天',
    //     location: '万载 | 双桥镇',
    //     number: 2,
    //     date: '2019.11.15',
    //     status: '进行中'
    //   },
    //   {
    //     id: 3,
    //     needType: 0,
    //     title: '祥源乡新农村工程点需要友们火速联系！',
    //     price: '350/天',
    //     location: '万载 | 双桥镇',
    //     number: 2,
    //     date: '2019.11.15',
    //     status: '进行中'
    //   }
    // ],
    needsList:[],
    oneclass:[],
    twoclass:[],
    firstId:'',
    firstname:'',
    secondId:'',
    secondname:''
  },
  // 下拉刷新
  onPullDownRefresh: function () {
    this.onLoad()
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 1000);
  },
  onLoad: function() {
    this.xqneedlist()
    this.oneClass()
    this.twoClass()
  },
  // 一级分类
  oneClass(){
    var that =this
    var data={
      type:3
    }
    qingqiu.get("oneClassList", data, function(re) {
    if (re.success == true) {
      if (re.result != null) {
        that.oneclass = re.result
        that.setData ({
          oneclass : that.oneclass
        })
      } else {
        qingqiu.tk('未查询到任何数据')
      }
    } 
  })
  },
  // 二级分类
  twoClass(){
    var that =this
    var data={
      oneClassId:3
    }
    qingqiu.get("twoClassList", data, function(re) {
    if (re.success == true) {
      if (re.result != null) {
        that.twoclass = re.result
        that.setData ({
          twoclass : that.twoclass
        })
      } else {
        qingqiu.tk('未查询到任何数据')
      }
    } 
  })
  },
  // 左侧按钮
  left: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id
    var name = e.currentTarget.dataset.name
    that.setData({
      firstId: id,
      firstname: name
    })
    var data={
      oneClassId:that.data.firstId
    }
    qingqiu.get("twoClassList", data, function(re) {
    if (re.success == true) {
      if (re.result != null) {
        that.twoclass = re.result
        that.setData ({
          twoclass : that.twoclass
        })
      } else {
      }
    } 
  })
  },
  // 右侧单选点击
  right: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id
    var name = e.currentTarget.dataset.name
    that.setData({
      secondId: id,
      secondname: name,
      yijiname: this.data.yijiname1,
      showModalStatus: false,
    })
    this.xqneedlist()
  },
  // 需求列表
  xqneedlist() {
    var that = this
    var data={
      oneClassId:that.data.firstId,
      twoClassId:that.data.secondId,
      pages: 1,
      size: 10
    }
    qingqiu.get("zuixinxq", data, function(re) {
      if (re.success == true) {
        if (re.result != null) {
          that.needsList = re.result.records
          for(var i= 0 ; i < that.needsList.length; i++){
            re.result.records[i].publishTime = re.result.records[i].publishTime.split(' ')[0]
            if(re.result.records[i].backup1!= null&&re.result.records[i].backup1.length>0){
              re.result.records[i].backup1 = re.result.records[i].backup1.split(',')
            }
          }
          console.log(re.result.records)
          that.setData ({
            needsList : re.result.records
          })
        } else {
          qingqiu.tk('未查询到任何数据')
        }
      } 
    })
  },
  //显示弹窗样式
  showModal: function (e) {
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
    setTimeout(function () {
      animation.opacity(1).rotateX(0).step();
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏弹窗样式
  hideModal6: function () {
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
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
      var erjiId = ''
      var erjiName = ""
      for (var i = 0; i < that.data.navRightItems.length; i++) {
        if (that.data.navRightItems[i].isSelected == true) {
          if (erjiId != '') {
            erjiId = erjiId + ',' + that.data.navRightItems[i].id
            erjiName = erjiName + ',' + that.data.navRightItems[i].name
          } else {
            erjiId = that.data.navRightItems[i].id
            erjiName = that.data.navRightItems[i].name
          }

          that.setData({
            erjiName: erjiName,
            erjiId: erjiId,
          })
        }
      }
      that.setData({
        itemList: [],
        cost: ''
      })
    }.bind(this), 200)
  },
  // 跳转到需求详情页面
  needsDetails: function(e) {
    var obj1 =e.currentTarget.dataset.vall;
    var xqxq = JSON.stringify(obj1);
    wx.navigateTo({
      url: '../needsDetails/needsDetails?obj1=' + xqxq,
    })
  },
  // 跳转到提交需求页面
  submitNeeds: function() {
    wx.navigateTo({
      url: '../submitNeeds/submitNeeds',
    })
  },
})