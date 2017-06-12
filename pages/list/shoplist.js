// <span style="font-size:24px;" >//redirect.js

Page({

  onLoad: function (options) {
    console.log('order-loading')
    var that = this
    that.setData({
      selftitle:options.title
    })
  }
})