//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    allData:null,
    errorData:null,
    loading:true,
    text:null,
    iconColor:null,
    pageloading:false
  },
  onReady:function(){
    this.setData({
          pageloading:true
    })
  },
  textValue:function(e){
    const text = e.detail.value;
    if(text==='') {
      this.setData({iconColor:null});
      return;
    };
    this.setData({
          text:text,
          iconColor:"#0068b6"
    });
  },
  searchBtn:function(e){
    const text = this.data.text;
    if(text==null) return;
    this.setData({
          loading:false
    });
    let that = this;
    wx.request({
      url: 'http://op.juhe.cn/onebox/basketball/team',
      data: {
        key:'b42ecb6b97abc95f3cc86afae3cb1cda',
        team:text
      },
      success: function(res){
        const errorData = res.data.error_code;
        if(errorData === 209204){
            that.setData({
              loading:true,
              allData:null,
              errorData:res.data.reason
            });
        }else{
          const data = res.data.result.list;
          that.setData({
            loading:true,
            errorData:null,
            allData:data           
          });
        };
      }
    });
  }
});