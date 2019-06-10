function Snake(){
  this.direction='right';
  this.elements=[]
}

Snake.prototype.tou=function(){
  var $oldHead=this.elements[0];
  if($oldHead==undefined){
    return{left:0,top:0}
  }else{
    var X=$oldHead.position().left;
    var Y=$oldHead.position().top;
    if(this.direction=='right'){
      X+=20
    }else if(this.direction=='left'){
      X-=20
    }else if(this.direction=='top'){
      Y-=20
    }else if(this.direction='bottom'){
      Y+=20
    }
    return{left:X,top:Y}
  }
}

Snake.prototype.shen=function(){
  var weizhi=this.tou();
  var shen=this.elements[0];
  if(shen!=undefined){
    shen.removeClass().addClass('snake-body')
  }
  var newhade=$('<div class="snake-head"></div>');
  this.elements.unshift(newhade)
  newhade.appendTo('#map')
  newhade.css({
    left:weizhi.left,
    top:weizhi.top
  })
}

Snake.prototype.xianshen=function(){
  for(var i=0;i<=3;i++){
  this.shen()
}
}

Snake.prototype.move=function(){
   var Head=this.elements.pop()
   Head.remove()
   this.shen()
}

Snake.prototype.isD=function(){
  var HEAD=this.elements[0]
  var Left=HEAD.position().left;
  var Top=HEAD.position().top;
  if( Left < 0 ||Left >= $('#map').width() ||Top < 0 ||Top >= $('#map').height()) {
    return true;

  }else{
    return false;
  }
}

Snake.prototype.isEnt=function(food){
  var snakeHead=this.elements[0]
  var snakeLeft=snakeHead.position().left;
  var snakeTop=snakeHead.position().top;
  if(snakeLeft==food.X&&snakeTop==food.Y){
    return true;
  }else{
    return false;
  }
}