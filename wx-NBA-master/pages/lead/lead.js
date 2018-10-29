// pages/lead/lead.js
Page({
  data:{
    imgData:[
        "http://www.sinaimg.cn/dy/slidenews/2_img/2017_02/786_2037496_702570.jpg",
        "http://www.sinaimg.cn/dy/slidenews/2_img/2017_02/786_2038118_299933.jpg",
        "http://www.sinaimg.cn/dy/slidenews/2_img/2017_02/786_2038120_584482.jpg"
    ],
    loading:false
  },
  goIndex:function(){
    wx.switchTab({
      url:'../index/index'
    })
  },
  onLoad:function(options){
  },
  onReady:function(){
    this.setData({
      loading:true
    });
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