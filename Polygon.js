class Polygon{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution:0.5,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.circle(x,y,20,options);


        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
   
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();        
    }
}