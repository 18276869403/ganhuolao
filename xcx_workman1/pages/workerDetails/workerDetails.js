//获取应用实例
const app = getApp()

const qingqiu = require('../../utils/request.js')
const api = require('../../utils/config.js')
const util = require('../../utils/util.js')

Page({
  data: {
    workerDetail:[],
    showList:[],
    id:'',
    wxUserId:'',
    istrue:0
  },

  onLoad: function (options) {
    var workerDetail = JSON.parse(options.obj)
    console.log(workerDetail)
    var id = workerDetail.id
    var phone = workerDetail.phone
    phone = util.formatPhone(phone)
    this.setData({
      id:id,
      workerDetail :workerDetail,
      phone:phone
    })
    this.grshowList()
  },
  phoneshow:function(){
    if(this.data.istrue == 0){
      this.setData({ 
        istrue:1
      })
    }else{
      this.setData({
        istrue:0
      })
    }
  },
  // 获取工人晒晒
  grshowList() {
    var that = this
    var data={
      wxUserId:this.data.id,
      pages: 1,
      size: 10
    }
    qingqiu.get("CasePage", data, function(re) {
      if (re.success == true) {
        if (re.result != null) {
          that.showList=re.result.records
          for(var i= 0 ; i < that.showList.length; i++){
            that.showList[i].picOne = api.viewUrl+re.result.records[i].picOne.split(',')[0]
          }  
          that.setData({
            showList:re.result.records
          })
        } 
      } 
    })
  },
  // 雇佣
  guyongta(){
  },
  phonecall:function(e){
    var phone = e.currentTarget.dataset.phone
    console.log(phone)
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  }
})