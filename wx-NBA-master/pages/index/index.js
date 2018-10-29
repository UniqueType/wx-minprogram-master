//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    swiperImgData:[
      'http://www.sinaimg.cn/dy/slidenews/2_img/2017_02/786_2037491_198550.jpg',
      'http://www.sinaimg.cn/dy/slidenews/2_img/2017_02/786_2037492_187614.jpg',
      'http://www.sinaimg.cn/dy/slidenews/2_img/2017_02/786_2037493_597862.jpg',
      'http://www.sinaimg.cn/dy/slidenews/2_img/2017_02/786_2037494_868490.jpg'
    ],
    allData:null,
    loading:false
  },
  onLoad: function () {
    let that = this;
    wx.request({
      url: 'http://op.juhe.cn/onebox/basketball/nba',
      data: {
        key:'b42ecb6b97abc95f3cc86afae3cb1cda'
      },
      success: function(res){
        that.setData({
          allData:res.data.result.list,
          loading:true
        });
      },
      fail: function() {
        alert('不好意思...数据请求失败！')
      },
      complete: function() {
        // complete
      }
    })
  },
  onPullDownRefresh: function() {
    console.log(1);
  }
});
