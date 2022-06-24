Page({
    data: {
      count:0,
      count1:0,
    },
  
    addOne: function(){
      this.setData({
        count: this.data.count + 1
      })
    },
    decreaseOne:function(){
      this.setData({
        count:this.data.count-1
      })
    },
    addOne1: function(){
      this.setData({
        count1: this.data.count1 + 1
      })
    },
    decreaseOne1:function(){
      this.setData({
        count1:this.data.count1-1
      })
    },
  })
  