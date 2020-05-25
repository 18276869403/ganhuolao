//获取应用实例
const app = getApp()

Page({
  data: {
    workerDetail:[],
    showList: [{
      id: 1,
      pinglun: '12',
      liulan: '12',
    },
      {
        id: 2,
        pinglun: '12',
        liulan: '12',
      },
      {
        id: 3,
        pinglun: '12',
        liulan: '12',
      },
    ],
  },

  onLoad: function (options) {
    var workerDetail = JSON.parse(options.obj)
    console.log(workerDetail)
    this.setData({
      workerDetail :workerDetail 
    })
  },
})