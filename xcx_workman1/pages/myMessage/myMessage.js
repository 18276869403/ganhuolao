// pages/myMessage/myMessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    needsTypeid: 1,
    needsTypeList: [{
        id: 1,
        name: '我发起的留言'
      },
      {
        id: 2,
        name: '给我的留言'
      }
    ],
    messageList: [{
      id: 1,
      name: '万载梦天木门专卖店',
      date: '2019-10-26 10-23',
      sort1: '水电工',
      sort11: '泥瓦工',
      sort111: '水暖',
      sort2: '水电工',
      sort22: '泥瓦工',
      sort222: '水暖',
      area:'万载',
      street:'双桥镇'
    },
      {
        id: 2,
        name: '万载梦天木门专卖店',
        date: '2019-10-26 10-23',
        sort1: '水电工',
        sort11: '泥瓦工',
        sort111: '水暖',
        sort2: '水电工',
        sort22: '泥瓦工',
        sort222: '水暖',
        area: '万载',
        street: '双桥镇'
      },
      {
        id: 3,
        name: '万载梦天木门专卖店',
        date: '2019-10-26 10-23',
        sort1: '水电工',
        sort11: '泥瓦工',
        sort111: '水暖',
        sort2: '水电工',
        sort22: '泥瓦工',
        sort222: '水暖',
        area: '万载',
        street: '双桥镇'
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  changeType: function(e) {
    var that = this;
    var id = e.currentTarget.dataset.id
    that.setData({
      needsTypeid: id
    })
  },

})