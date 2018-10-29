// pages/item/item.js
var index1 = 0;
Page({
  data: {
    list: [{
      title: 1111111,
      display: "block",
      content: ["aaaaaaa", "bbbbbbb", "cccccccc"],
    }, {
      title: 2222222,
      display: "none",
      content: ["ddddddd", "eeeeee", "ffffffff"],
    }, {
      title: 333333,
      display: "none",
      content: ["gggggggg", 'hhhhhhhh', 'iiiiiii', 'jjjjjjj'],
    }],
    list0: [{
      title: 1111111,
      display: "block",
      content: ["aaaaaaa", "bbbbbbb", "cccccccc"],
    }, {
      title: 2222222,
      display: "none",
      content: ["ddddddd", "eeeeee", "ffffffff"],
    }, {
      title: 333333,
      display: "none",
      content: ["gggggggg", 'hhhhhhhh', 'iiiiiii', 'jjjjjjj'],
    }],
    list1: [{
      title: 1111111,
      display: "none",
      content: ["aaaaaaa", "bbbbbbb", "cccccccc"],
    }, {
      title: 2222222,
      display: "none",
      content: ["ddddddd", "eeeeee", "ffffffff"],
    }, {
      title: 333333,
      display: "none",
      content: ["gggggggg", 'hhhhhhhh', 'iiiiiii', 'jjjjjjj'],
    }]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var _this = this;
    //  console.log(options);

  },
  isDisplay: function (e) {
    var index = e.target.dataset.index;
    for (var i = 0; i < this.data.list.length; i++) {
      this.data.list[i].display = 'none';
      //console.log("index="+index+"  i="+i);
      if (i == index) {
        this.data.list[i].display = 'block';
      }
      console.log("i=" + i + "   display=" + this.data.list[i].display)
    }
    this.setData({ list: this.data.list });
    //////////////////////与上面一样的效果//////////////////////////////
    // var index = e.target.dataset.index;
    // for(var i=0;i<this.data.list0.length;i++){
    //    this.data.list0[i].display='none';
    // }
    // this.data.list0[index].display = "block" ;
    
    // this.setData({ list0: this.data.list0 });
  },
  isDisplay0: function (e) {
    var index = e.target.dataset.index;
    for(var i=0;i<this.data.list0.length;i++){
      if(i==index){
        this.data.list0[index].display = (this.data.list0[index].display == "block" ? "none" : "block");
      }else{
        this.data.list0[i].display='none';
      }
    }
    this.setData({ list0: this.data.list0 });
  },

  isDisplay1: function (e) {
    var index = e.target.dataset.index;
    this.data.list1[index].display = (this.data.list1[index].display == "block" ? "none" : "block");
    console.log(this.data.list1)
    this.setData({ list1: this.data.list1 });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})








/* 
var index = e.target.dataset.index;
    for (var i = 0; i < this.data.list1.length; i++) {
      if(index1==index){
        //当两者相等的话不作处理（两次点击的是同一个）
      }else{
         this.data.list1[i].display = 'none';
      }
      //console.log("index="+index+"  i="+i);
      if (i == index) {
        index1=index;
        this.data.list1[i].display=(this.data.list1[i].display=="block"?"none":"block");
        console.log( this.data.list1[i].display)
      }
    }
    console.log(this.data.list1)
     this.setData({ list1: this.data.list1 });
      */