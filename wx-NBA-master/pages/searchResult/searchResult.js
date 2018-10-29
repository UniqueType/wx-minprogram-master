// pages/searchResult/searchResult.js
Page({
  data:{
    oneText:null,
    twoText:null,
    allData:null,
    errorData:null
  },
  onReady:function(){
  },
  oneInput:function(e){
    let text = e.detail.value;
    this.setData({
      oneText:text
    });
  },
  twoInput:function(e){
    let text = e.detail.value;
    this.setData({
      twoText:text
    });
  },
  searchBtn:function(){
    let oneText = this.data.oneText;
    let twoText = this.data.twoText;
    let that = this;
    wx.request({
      url: 'http://op.juhe.cn/onebox/basketball/combat',
      data: {
        key:'b42ecb6b97abc95f3cc86afae3cb1cda',
        hteam:oneText,
        vteam:twoText
      },
      success: function(res){
        const errorData = res.data.error_code;
         if(errorData === 209204){
            that.setData({
        //      loading:true,
               allData:null,
               errorData:res.data.reason
             });
         }else{
            const data = res.data.result.list;
            that.setData({
              //loading:true,
              errorData:null,
              allData:data           
            });
        };
      }
    });

  }
})