class Chain {
    constructor(bodyA,pointB){
        var op = {
            bodyA:bodyA,
            pointB:pointB,
            length:80,
            stiffness:0.01,
        }
        this.pointB=pointB;
        this.chain=constraint.create(op);
        World.add(world,this.chain);

        
    }
    fly(){
this.chain.bodyA=null;
    }
    attach(body){
        this.chain.bodyA=body;
    }
    display(){
        if(this.chain.bodyA){

        
        strokeWeight(4);
        stroke("black");
        fill("black");
    var pointA = this.chain.bodyA.position;
    var pointB = this.pointB;
    line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}