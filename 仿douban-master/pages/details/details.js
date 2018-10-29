// pages/details/details.js
Page({
  data:{
   list:[],
   index:null,
   title:null,
   content:"111111111"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log("index="+options.index);  //number
    wx.getStorage({
      key: 'list',
      success: function(res){
        // success
        console.log("获取缓存成功！");
        console.log(res.data);// 需要用res.data来取值
      },
      fail: function() {
        // fail
        console.log("获取缓存失败！")
      },
      complete: function() {
        // complete
      }
    });
    
    wx.request({
      url: 'https://api.douban.com/v2/book/1220562', //仅为示例，并非真实的接口地址
      data: {},
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log("res.data="+JSON.stringify(res.data))
      }
    })
  },
  changeContent:function(){
      this.setData({content:"方法中调用方法！"})
  },
  btnClick:function(){
    this.changeContent();
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