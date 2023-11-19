// index.js
var _self = null
Page({
  data: {
    isPageShowing: false,
    setting: {
      skew: 0,
      rotate: 0,
      showLocation: true,
      showScale: true,
      subKey: "",
      layerStyle: -1,
      enableZoom: true,
      enableScroll: true,
      enableRotate: false,
      enable3D: false,
      enableOverlooking: false,
      enableSatellite: false,
      enableTrdffic: false,

    },
    location: {
      latitude: 35.987324,
      longitude: 120.04,
    },
    scale: 10,
    markers: [{
        iconPath: "/resources/car.png",
        id: 0,
        latitude: 39.92,
        longitude: 113.324520,
        width: 50,
        height: 50
      },
      {
        iconPath: "/resources/car.png",
        id: 1,
        latitude: 23.099994,
        longitude: 116.46,
        width: 50,
        height: 50
      }
    ]
  },
 onShow: function () {
    // 页面出现在前台时执行
    _self = this
    this.data.isPageShowing = true
    console.log(" onShow this.data.isPageShowing = " + this.data.isPageShowing)
  },
  onHide: function () {
    // 页面从前台变为后台时执行
    this.data.isPageShowing = false
    console.log("onHide  this.data.isPageShowing = " + this.data.isPageShowing)
  },
  onLocationTap() {
    console.log("qqeqr")
    wx.getFuzzyLocation({
      type: 'wgs84',
      success(res) {
        console.log(this.isPageShowing)
        _self.setData({
          location: {
            latitude: res.latitude,
            longitude: res.longitude,
          }
        })
        console.log("latitude = " + res.latitude)
        console.log("longitude = " + res.longitude)
      },
      fail(res) {
        console.log("res = " + JSON.stringify(res))
      }
    })
  },
  moveCars() {
    const map = wx.createMapContext('map')
    const dest = {
      latitude: 23.099994,
      longitude: 116.46,
    }

    const moveAgain = () => {
      dest.latitude += 3
      dest.longitude += 1
      map.translateMarker({
        destination: {
          latitude: dest.latitude + 3,
          longitude: dest.longitude + 1,
        },
        markerId: 1,
        duration: 5000,
        animationEnd: () => {
          console.log("this.data.isPageShowing = " + this.data.isPageShowing)
          if (this.data.isPageShowing) {
            moveAgain()
          }
        },
      })
    }
    moveAgain()
  },
  onScanClicked() {
    // wx.scanCode({
    //   success: (res) => {
    //     console.log("res = " + JSON.stringify(res))
    //   },
    //   fail: console.log
    // })
    wx.navigateTo({
      url: '/pages/register/register',
    })
  }

})