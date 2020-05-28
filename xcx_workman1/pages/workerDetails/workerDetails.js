//获取应用实例
const app = getApp()

const qingqiu = require('../../utils/request.js')
const api = require('../../utils/config.js')

Page({
  data: {
    workerDetail:[],
    // showList: [{
    //   id: 1,
    //   pinglun: '12',
    //   liulan: '12',
    // },
    //   {
    //     id: 2,
    //     pinglun: '12',
    //     liulan: '12',
    //   },
    //   {
    //     id: 3,
    //     pinglun: '12',
    //     liulan: '12',
    //   },
    // ],
    showList:[],
    id:'',
    wxUserId:''
  },

  onLoad: function (options) {
    var workerDetail = JSON.parse(options.obj)
    console.log(workerDetail)
    this.id = workerDetail.id
    this.setData({
      workerDetail :workerDetail 
    })
    this.grshowList()
  },
  // 获取工人晒晒
  grshowList() {
    var that = this
    var data={
      wxUserId:that.id,
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
  }
})