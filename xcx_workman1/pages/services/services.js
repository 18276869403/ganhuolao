//获取应用实例
const app = getApp()

const qingqiu = require('../../utils/request.js')
const api = require('../../utils/config.js')
const util = require('../../utils/util.js')

Page({
  data: {
    viewUrl: api.viewUrl,
    chooseworker: 1,
    needsList: [],
    goodsdata3: [],
    workerlist: [],
    workerlist1:[],
    businesslist1:[],
    businesslist: [],
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
  // 搜索框
  shurukuang:function(e){
    this.setData({
      sousuotext:e.detail.value
    })
  },
  // 搜索按钮
  btnsearch:function(){
    if(this.data.chooseworker == 1){
      this.setData({
        workerlist:[]
      })
      if(this.data.sousuotext == ""){
        this.setData({
          workerlist:this.data.workerlist1
        })
        return
      }
      var needs = this.data.workerlist1
      var index = 0 // 索引
      // 循环数组
      for(let i=0;i<needs.length;i++){
        if(needs[i].needTitle.indexOf(this.data.sousuotext) > -1){
          var list = "workerlist["+ index +"]"
          this.setData({
            [list]:needs[i]
          })
          ++index
        }
      }
    }else{
      this.setData({
        businesslist:[]
      })
      if(this.data.sousuotext == ""){
        this.setData({
          businesslist:this.data.businesslist1
        })
        return
      }
      var needs = this.data.businesslist1
      var index = 0 // 索引
      // 循环数组
      for(let i=0;i<needs.length;i++){
        if(needs[i].needTitle.indexOf(this.data.sousuotext) > -1){
          var list = "businesslist["+ index +"]"
          this.setData({
            [list]:needs[i]
          })
          ++index
        }
      }
    }
  },
  onLoad: function() {
    this.grneedlist(this.data.chooseworker)
    this.oneClass()
    this.twoClass()
  },
  changeType: function(e) {
    var that = this
    if (that.data.chooseworker == 0) {
      that.setData({
        chooseworker: 1
      })
      that.grneedlist(that.data.chooseworker)
    } else {
      that.setData({
        chooseworker: 0
      })
      that.sjneedlist(that.data.chooseworker)
    }
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
      } else {}
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
    this.grneedlist()
    this.sjneedlist()
  },
  // 全部
  quanbu:function(){
    var that = this
    that.data.firstId=''
    that.data.secondId=''
    that.data.firstname=''
    that.setData({
      showModalStatus: false,
      firstname:that.data.firstname
    })
    this.grneedlist()
    this.sjneedlist()
  },
  // 跳转到商家详情页面
  businessDetails: function (e) {
    var obj = JSON.stringify(e.currentTarget.dataset.vals)
    wx.navigateTo({
      url: '../businessDetails/businessDetails?obj=' + obj,
    })
  },
  // 推荐工人
  grneedlist(type) {
    var that = this
    var data={
      pages: 1,
      size: 10,
      wxState:type,
      oneClassId:that.data.firstId,
      twoClassId:that.data.secondId
    }
    qingqiu.get("wxUserPage", data, function(re) {
      if (re.success == true) {
        if (re.result != null) {
          for(let obj of re.result.records){
            if(obj.starClass == 0){
              obj.shopName = ""
            }else if(obj.starClass == 1){
              obj.shopName = "一级工匠"
            }else if(obj.starClass == 2){
              obj.shopName = "二级工匠"
            }else if(obj.starClass == 3){
              obj.shopName = "三级工匠"
            }else if(obj.starClass == 4){
              obj.shopName = "四级工匠"
            }if(obj.starClass == 5){
              obj.shopName = "五级工匠"
            }
            obj.dateBirth = util.ages(obj.dateBirth)
            obj.picIurl = that.data.viewUrl + obj.picIurl
            obj.oneClassName = obj.oneClassName.replace(/,/, " | ")
            obj.twoClassName = obj.twoClassName.replace(/,/, " | ")
          }
          that.setData({
            workerlist:re.result.records,
            workerlist1:re.result.records
          })
        } 
      } 
    })
  },

  // 推荐商家
  sjneedlist(type) {
    var that = this
    var data={
      pages: 1,
      size: 10,
      wxState:type,
      oneClassId:that.data.firstId,
      twoClassId:that.data.secondId
    }
    qingqiu.get("wxUserPage", data, function(re) {
      if (re.success == true) {
        if (re.result != null) {
          for(let obj of re.result.records){
            obj.picIurl = that.data.viewUrl + obj.picIurl
            obj.oneClassName = obj.oneClassName.replace(/,/, "|")
            obj.twoClassName = obj.twoClassName.replace(/,/, "|")
          }
          that.setData({
            businesslist:re.result.records,
            businesslist1:re.result.records
          })
        } 
      } 
    })
  },
  // 跳转到工人详情页面
  workerDetails: function (e) {
    var obj = JSON.stringify(e.currentTarget.dataset.vals)
    wx.navigateTo({
      url: '../workerDetails/workerDetails?obj=' + obj,
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
})