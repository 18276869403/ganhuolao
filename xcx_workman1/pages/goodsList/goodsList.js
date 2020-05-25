// pages/goodsList/goodsList.js
//获取应用实例
const app = getApp()

Page({
  data: {
    goodslist: [{
        id: 1,
        name: '室内F-10木门（含五室内F-10木门（含五',
        price: '122',
        img: '../image/top.png',
        storename: ' 马克波罗瓷砖专卖店'
      },
      {
        id: 2,
        name: '室内F-10木门（含五室内F-10木门（含五',
        price: '120',
        img: '../image/chuang.png',
        storename: ' 马克波罗瓷砖专卖店'
      },
      {
        id: 3,
        name: '室内F-10木门（含五室内F-10木门（含五',
        price: '12',
        img: '../image/chuang.png',
        storename: ' 马克波罗瓷砖专卖店'
      },
    ],
    needsList: [{
        id: 1,
        needType: 0,
        title: '祥源乡新农村工程点需要友们火速联系！',
        price: '350/天',
        location: '万载 | 双桥镇',
        number: 2,
        date: '2019.11.15',
        status: '进行中'
      },
      {
        id: 2,
        needType: 1,
        title: '祥源乡新农村工程点需要友们火速联系！',
        price: '350/天',
        location: '万载 | 双桥镇',
        number: 2,
        date: '2019.11.15',
        status: '进行中'
      },
      {
        id: 3,
        needType: 0,
        title: '祥源乡新农村工程点需要友们火速联系！',
        price: '350/天',
        location: '万载 | 双桥镇',
        number: 2,
        date: '2019.11.15',
        status: '进行中'
      }
    ],
  },

  onLoad: function() {

  }
})