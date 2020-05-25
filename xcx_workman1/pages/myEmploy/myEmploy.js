// pages/myEmploy/myEmploy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    needsTypeid: 1,
    needsTypeList: [{
        id: 1,
        name: '我的雇佣'
      },
      {
        id: 2,
        name: '雇佣我的'
      }
    ],
    messageList: [{
        id: 1,
        workername: '陈俊明',
        date: '2019-10-26 10-23',
        employeename: '张立',
        cost: '600',
        day: '2',
        tips: '来工地进行水电安装，大约13个平方差不多做2天就可以了，日结工资'
      },
      {
        id: 2,
        workername: '陈俊',
        date: '2019-10-26 10-23',
        employeename: '张飞',
        cost: '600',
        day: '2',
        tips: '来工地进行水电安装，大约13个平方差不多做2天就可以了，月结工资'
      },
      {
        id: 3,
        workername: '陈明',
        date: '2019-10-26 10-23',
        employeename: '张立里',
        cost: '600',
        day: '2',
        tips: '来工地进行水电安装，大约13个平方差不多做2天就可以了，日结工资'
      },
    ]
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
  phonecall: function() {
    wx.makePhoneCall({
      phoneNumber: '17656453456' //仅为示例，并非真实的电话号码
    })
  }

})