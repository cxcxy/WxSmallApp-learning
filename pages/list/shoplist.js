// <span style="font-size:24px;" >//redirect.js

Page({
  data: {
    mainDataArray:[
      1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13
    ]

  },
  onLoad: function (options) { // options 接受传参数
    console.log('order-loading')
    var that = this
    wx.request({
      url: 'http://10.0.60.121:8080/v1/product/group/products?paramJson={"groupId":10638}',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log('可以看到具体内容的json数据==' + JSON.stringify(res.data.data.products))
        that.setData({
          navLeftItems: res.data.data.products,
          navRightItems: res.data
        })
      }
    })
    that.setData({
      selftitle:options.title
    })
    // wx.request({
    //   url: '',
    // })

  }
})