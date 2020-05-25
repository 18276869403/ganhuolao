// pages/needsDetails/needsDetails.js
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    tupianlist: [{
      id: 1,
      tupian: '../image/top.png'
    },
    {
      id: 2,
      tupian: '../image/top.png'
    },
    {
      id: 3,
      tupian: '../image/top.png'
    }
    ],
    jiedanList:[{
      id:1,
      name:'东鹏瓷砖万载总代',
      date:'05:00',
      details:'我可以做的，找我吧，我在哪哪哪哪',
      avator:'../image/top.png'
    },
      {
        id: 2,
        name: '东鹏瓷砖万载总代',
        date: '05:00',
        details: '我可以做的，找我吧，我在哪哪哪哪',
        avator: '../image/top.png'
      },
      {
        id: 3,
        name: '东鹏瓷砖万载总代',
        date: '05:00',
        details: '我可以做的，找我吧，我在哪哪哪哪',
        avator: '../image/top.png'
      }]
  },

  onLoad: function (options) {

  }

})