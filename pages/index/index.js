// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    list:[],
    sicY:0,
    listc:[],
    animationData:{}
  },
  showlog() {
    wx.showModal({
      title:'公告',
      content:'微信支付已开通，小程序团队！感谢大家关注！为了保障您的权益，请在小程序内进行支付。'
    })
  },
  onLoad() {
      this.setData({
          search: this.search.bind(this)
      })
      wx.request({
        url: 'https://www.fastmock.site/mock/6ff3428fe7b205ec53a3fee8adb7cb12/movie/cwb',
        success:(res)=>{
          console.log(res.data.data.list)
          this.setData({
            list:[...res.data.data.list]
          })
        }
      })
  },
  sic(e){
  console.log(e)
  this.setData({
    sicY:e.detail.current
  })
  },
  search: function (value) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
          }, 200)
      })
  },
  selectResult: function (e) {
      console.log('select result', e.detail)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var animation = wx.createAnimation({
      duration:500
    })
    this.animation = animation
    var next = true
    setInterval(function(){
      if(next) {
        this.animation.translateY(-22).step()
        next = !next
      } else {
        this.animation.translateY(0).step()
        next = !next
      }
      this.setData({
        animationData:animation.export()
      })
    }.bind(this),1000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})