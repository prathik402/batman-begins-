class Player{
    constructor(x,y,width,height){
    var options = {
   isStatic: true
    }

   
   

   this.body = Bodies.rectangle(x,y,width,height,options);
   this.x = x;
   this.y = y;
   this.width = width;
   this.height = height;
   this.image = loadImage("walking_1.png");
   World.add(world, this.body);
   }
     
   
   display(){
       var pos =this.body.position;
       rectMode(CENTER);
       fill("brown");
       imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.width, this.height);
   }
   
   }
