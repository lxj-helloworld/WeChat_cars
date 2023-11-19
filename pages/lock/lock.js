// pages/lock/lock.js
var _self = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:""
  },
  onLoad: function() {
    _self = this
    // 查看是否授权
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log("onLoad  " + res.userInfo)
              _self.setData({
                avatarUrl:res.userInfo.avatarUrl
              })
            }
          })
        }
      }
    })
  },
  bindGetUserInfo (e) {
    console.log(e.detail.userInfo)
    this.setData({
      avatarUrl:e.detail.userInfo.avatarUrl
    })
  }
})