// pages/register/register.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    licImageSource: "",
    genderIndex: 0,
    birthDate: "1990-01-01",
    genders: ["未选择", "男", "女", "未知"],
    licNumber: "",
    name: "",
    state: "UNDEFINED"
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },
  uploadLic() {
    wx.chooseImage({
      success: res => {
        this.setData({
          licImageSource: res.tempFilePaths[0]
        })
        //TODO 上传图片
        setInterval(() => {
          this.setData({
            licNumber: "1234567890",
            name: "大螃蟹"
          })
        }, 3000)
      }
    })
  },
  onGenderChange(e) {
    this.setData({
      genderIndex: e.detail.value
    })
  },
  onBirthdateChange(e) {
    this.setData({
      birthDate: e.detail.value
    })
  },
  submit() {
    this.setData({
      state: "PENDING"
    })
    setInterval(() => {
      this.licVerifed()
    },3000)
  },
  reSubmit() {
    this.setData({
      state: "UNDEFINED",
      licImageSource:""
    })
  },
  licVerifed(){
    this.setData({
      state: "VERIFED"
    })
    wx.redirectTo({
      url: '/pages/lock/lock',
    })
  }

})