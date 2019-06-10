  function Game(){
    this.food=new Food();
    this.snake=new Snake();

    this.food.shiwu()
    this.snake.xianshen()
  }

var time
Game.prototype.start=function(){
  clearInterval(time)
  var that=this
  time=window.setInterval(function(){
    that.snake.move()
    var si=that.snake.isD()
    console.log(si)
    if(si){
      clearInterval(time)
      $('.dead').show(20);
    }
    var ent=that.snake.isEnt(that.food)
    if(ent){
      that.food.shiwu()
      that.snake.shen()
    }
  },100)
  $(document).keydown(function (e) { 
    var code = e.keyCode;  
    if (code == 37) {
      that.snake.direction = 'left';
    }else if (code == 38) {
      that.snake.direction = 'top';
    }else if (code == 39) {
      that.snake.direction = 'right';
    }else if (code == 40) {
      that.snake.direction = 'bottom';
    }
  });
}

Game.prototype.stop = function () { 
  clearInterval(time);
};

Game.prototype.reStart = function () {
  location.reload();
};



