class stone {
    constructor(x, y,  radius) {
        var options = {
            
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.radius=radius;
        this.body = Bodies.circle(x, y, this.radius, options);
      
        this.i2=loadImage("stone.png");
        World.add(world, this.body);
         
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
       image(this.i2, 0, 0, 50,50);
        pop();
      }
}