// pages/lead/lead.js
Page({
  data:{
    "imgUrls":[
      "http://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/0/0l01jm9yobh4xo4.jpg",
      "http://p6.qhimg.com/d/_hao360/video/img200909_18_145544738.jpg",
      "http://p1.qhimg.com/t01d2996b3305923b91.jpg"
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  goIndex:function(){
    wx.switchTab({
      url:'../index/index'
    })
    //wx.navigateTo方法不起作用
    // wx.navigateTo({
    //   url:'../index/index'
    // })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})