// pages/profile/profile.js
Page({
  data:{
    userData:[],
    pageloading:false
  },
  onReady:function(){
    const that = this;
    wx.getUserInfo({
      success: function(res) {
        let userInfo = res.userInfo.avatarUrl
        let nickName = res.userInfo.nickName
        that.setData({
          userData:[userInfo,nickName],
          pageloading:true
        });
      }
    });
  },
  onShareAppMessage: function () {
    return {
      title: 'NBA',
      desc: '尽享NBA,快乐由你我决定...',
      path: '/page/user?id=123'
    }
  }
});