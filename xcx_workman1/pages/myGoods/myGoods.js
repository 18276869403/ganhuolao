// pages/myGoods/myGoods.js
const qingqiu = require('../../utils/request.js')
const api = require('../../utils/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    viewUrl:api.viewUrl,
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
    ],
    goodsLists:[],
    spmyid:'',
    spid:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.spmyid = JSON.parse(options.obj)
    this.mygoodsList()
  },
  // 我的商品
  mygoodsList() {
    var that = this
    var data={
      // userId:that.spmyid
      userId:256
  }
  qingqiu.get("tjsp", data, function(re) {
    console.log(re)
  if (re.success == true) {
    if (re.result != null) {
      that.goodsLists = re.result.records
      for(var i= 0 ; i < that.goodsLists.length; i++){
        if(re.result.records[i].goodPic1 !=null && re.result.records[i].goodPic1.length>0){
          that.goodsLists[i].goodPic1 = re.result.records[i].goodPic1.split(',')
        }            
      } 
      that.setData ({
        goodsLists : re.result.records
      })
    } else {
      qingqiu.tk('未查询到任何数据')
    }
  } 
})
},
  // 添加编辑商品
  addEditGoods:function(){
    wx.navigateTo({
      url: '../addEditGoods/addEditGoods',
    })
  },
  //删除我的商品
  DeletemyGood: function(e) {
    var spid =e.currentTarget.dataset.myspid;
    var data={
      id: spid 
    }
    qingqiu.get("deleteUserGood", data, function(re) {
      console.log(re)
    if (re.success == true) {
      if (re.result ==1) {
        qingqiu.tk('删除成功！')
      } else {
        qingqiu.tk('删除失败！')
      }
    } 
  })
}

})