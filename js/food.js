 function Food(){
  this.x=0;
  this.y=0;
  this.element = $('<div class="food"></div>').appendTo('#map'); 
 }
 
 Food.prototype.shiwu=function(){
   var width=$('#map').width()/20
   var height=$('#map').height()/20
   var leftX=Math.floor(Math.random()*width)
   var topY=Math.floor(Math.random()*height)
   this.X=leftX*20;
   this.Y=topY*20;
   this.element.css({
     left:this.X,
     top:this.Y,
   })
 }
