//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls:[
      "http://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/0/0l01jm9yobh4xo4.jpg",
      "http://p6.qhimg.com/d/_hao360/video/img200909_18_145544738.jpg",
      "http://p1.qhimg.com/t01d2996b3305923b91.jpg",
      "http://p0.qhimg.com/dmsmty/120_110_100/t01d271d8c090330ae2.jpg"
    ]
  },
   onShow(){
      console.log('onShow');
  },
   onHide(){
     //当离开这个页面时执行
      console.log('onHide');
  }
  
})
