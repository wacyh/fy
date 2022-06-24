const back = wx.getBackgroundAudioManager();

var total_micro_second = 1000*90;



function count_down(that) {

  that.setData({
    clock: date_format(total_micro_second)
  });

  if (total_micro_second <= 0) {
    that.setData({
      clock: "已经截止"
    });
    return;}
  
  setTimeout(function () {
    total_micro_second -=10;
    count_down(that);
  }, 10)

}


function date_format(micro_second) {

  var second = Math.floor(micro_second / 1000);

  var hr = Math.floor(second / 3600);

  var min = fill_zero_prefix(Math.floor((second - hr * 3600) / 60));

  var sec = fill_zero_prefix((second - hr * 3600 - min * 60));

  var micro_sec = fill_zero_prefix(Math.floor((micro_second % 1000) / 10));

  return  min + ":" + sec + " " + micro_sec;
}

function fill_zero_prefix(num) {
  return num < 10 ? "0" + num : num
}

 Page({

    data: {
      count:0,
      count1:0,
      clock: '',
    },
    
    addOne: function(){
      this.setData({
        count: this.data.count + 1
      })
    },
  
    addOne1: function(c){
      this.setData({
        count1: this.data.count1 + 1
      })
      this.setData({
        count: this.data.count + 1
      }) 
      if (count==70&count1==16) {
       wx.navigateTo({
       url: 'demo9/demo9',
       })
      }
    },

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
  },

  onLoad: function () {
    count_down(this);
  }


  
  })





























 

  
 




