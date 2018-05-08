// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  // 使用微信内之后地图打开位置
  listenerBtnGetLocation: function () {
    wx.openLocation({
      //当前经纬度
      latitude: 39.74499,
      longitude: 116.699,
      //缩放级别默认28
      scale: 28,
      //位置名
      name: '瑞正园农庄',
      //详细地址
      address: '通州区张家湾镇小耕垡村(小耕垡路与张采路交汇处东南侧)',
      //成功打印信息
      success: function (res) {
        console.log(res)
      },
      //失败打印信息
      fail: function (err) {
        console.log(err)
      },
      //完成打印信息
      complete: function (info) {
        console.log(info)
      },
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})