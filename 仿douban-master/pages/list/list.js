// pages/list/list.js
Page({
  data:{
    list:[{
      img:"../../images/home.png",title:"力王",directors:"aaaaa",cTime:"2016-02-12",grade:"5.6"
    },{
      img:"../../images/home.png",title:"大话西游",directors:"bbbb",cTime:"2013-12-02",grade:"8.3"
    },{
      img:"../../images/home.png",title:"X战警3",directors:"ccccc",cTime:"2015-07-01",grade:"7.5"
    },{
      img:"../../images/home.png",title:"千王之王",directors:"dddd",cTime:"2011-09-22",grade:"8.2"
    },{
      img:"../../images/home.png",title:"力王",directors:"aaaaa",cTime:"2016-02-12",grade:"9.4"
    },{
      img:"../../images/home.png",title:"大话西游",directors:"bbbb",cTime:"2013-12-02",grade:"4.7"
    },{
      img:"../../images/home.png",title:"X战警3",directors:"ccccc",cTime:"2015-07-01",grade:"5.2"
    },{
      img:"../../images/home.png",title:"千王之王",directors:"dddd",cTime:"2011-09-22",grade:"7.8"
    },{
      img:"../../images/home.png",title:"力王",directors:"aaaaa",cTime:"2016-02-12",grade:"5.6"
    },{
      img:"../../images/home.png",title:"大话西游",directors:"bbbb",cTime:"2013-12-02",grade:"8.3"
    },{
      img:"../../images/home.png",title:"X战警3",directors:"ccccc",cTime:"2015-07-01",grade:"7.5"
    },{
      img:"../../images/home.png",title:"千王之王",directors:"dddd",cTime:"2011-09-22",grade:"8.2"
    },{
      img:"../../images/home.png",title:"力王",directors:"aaaaa",cTime:"2016-02-12",grade:"9.4"
    },{
      img:"../../images/home.png",title:"大话西游",directors:"bbbb",cTime:"2013-12-02",grade:"4.7"
    },{
      img:"../../images/home.png",title:"X战警3",directors:"ccccc",cTime:"2015-07-01",grade:"5.2"
    },{
      img:"../../images/home.png",title:"千王之王",directors:"dddd",cTime:"2011-09-22",grade:"7.8"
    }],
    list0:[],
    title:"",
    loading:true,
    num:15
  },
  
  onLoad:function(options){
     // 页面初始化 options为页面跳转所带来的参数
      //this.setData({title:options.name});
      // for(var i=0;i<=10;i++){
      //    this.data.list0.push(this.data.list[i]);
      //   this.setData({list0: this.data.list0})
      // }


    console.log(options.type);
    // wx.request({
    //   url: 'https://api.douban.com/v2/movie/'+options.type, //仅为示例，并非真实的接口地址
    //   data: {},
    //   header: {
    //       'content-type': 'application/json'
    //   },
    //   success: function(res) {
    //     console.log(res.data)
    //     console.log("data======"+JSON.stringify(res.data))
    //    // _this.setData({list:res.data.subjects,title:res.data.title,loading:false})
    //   }
    // })
  },
   scrolltolower: function(e) {
     console.log("触发了scrolltolower事件...",e)
  },
  scrolltoupper: function(e) {
    console.log("触发了scrolltoupper事件...",e)
  },
  scroll: function(e) {
    console.log("触发了scroll事件...",e)
  },
  tolower:function(){
   
    if(num>this.data.list.length-5){
      this.setData({num:this.data.list.length});
    }else{
      this.setData({num:(this.data.num)+5});
    }
      
  },
  onReady:function(){
    var _this=this;
    // 页面渲染完成
    setTimeout(function(){
        _this.setData({loading:false});
    },500);
    
      
    
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




// wx.setStorage({
//       key: 'list',
//       data: this.data.list,//Object/String
//       success: function(res){
//         // success
//         console.log("设置缓存成功！")
//       },
//       fail: function() {
//         // fail
//         console.log("设置缓存失败！")
//       },
//       complete: function() {
//         // complete
//       }
//     })