class Drops{
    constructor(x,y){
        var options= {
            isStatic: false, 
            restitution: 1,
            friction: 1
        }
     this.body = Bodies.circle(x,y,5,options);
     this.radius = 5 
     World.add(world,this.body)
     
    

    }
    display(){
        fill("blue")
        ellipse(0,0,this.radius, this.radius);
        ellipseMode(CENTER);
    }
}