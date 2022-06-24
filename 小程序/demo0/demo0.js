const back = wx.getBackgroundAudioManager();
  
Page({

   backmusic: function () {
     player();
    function player() {
      back.title = "轻飘飘";  
      back.src = "https://gzc-download.ftn.qq.com/ftn_handler/b1f467eef7b8545f5803f20594d3ce34881af7debf680502cd7d2bc8078f879b73ca75cca1c12f9162b862e69436047cb56822aa746f8957e6492f83267e3efc/?fname=%E4%B8%AD%E5%B1%B1%E7%9C%9F%E6%96%97%20-%20%E3%81%B7%E3%82%8F%E3%81%B7%E3%82%8F%E3%82%8A%20(%E8%BD%BB%E9%A3%98%E9%A3%98).mp3&xffz=3958758&k=cbc84c347bbed7adf9bb1d3432333533d2500f3430333533111852510752020152051e070150531e005452061d0a5106001a000354005456510e520103551b33d08f9ed18182d2afabd1a5a3101e15d0b580d0b6bfd0b484d7b5bcd7b2b9151bdc8a88dd93abdc90ac1e1d594000218852c73a61468f4bb52d6b191b0d203bd7172261&code=47340353"; 

      back.onEnded(() => {
        player(); 
      })
    }
  },
 
  onLoad: function () {
    this.backmusic();
  }
})
