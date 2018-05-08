// pages/shilihe/shilihe.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    mode: 'scaleToFill',
    array: [{
      src: '../../image/d1.jpg',
      unique: 'unique_1'
    }, {
      src: '../../image/d2.jpg',
      unique: 'unique_2'
    }, {
      src: '../../image/d3.jpg',
      unique: 'unique_3'
    }, {
      src: '../../image/d4.jpg',
      unique: 'unique_4'
    }]
  },

  // 使用微信内之后地图打开位置
  listenerBtnGetLocation: function () {
    wx.openLocation({
      //当前经纬度
      latitude: 39.86306,
      longitude: 116.46558,
      //缩放级别默认28
      scale: 28,
      //位置名
      name: '十里河灯饰城欧普旗舰店',
      //详细地址
      address: '朝阳区十里河灯饰城2F-2-20',
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

  // 打电话
  listenerBtnCallNumber:function(){
    wx.makePhoneCall({
      phoneNumber: '010-67326260' //仅为示例，并非真实的电话号码
    })
  }
})