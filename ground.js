class Ground {
    constructor() {
        var options = {
            isStatic: true
        }
        this.ground = Bodies.rectangle(450,390,900,20,options);
        World.add(world,this.body);
    }
    display(){
        strokeweight(2)
        rectMode(CENTER);
        fill("brown");
        rect(this.ground.postionx,this.ground.posiyiony,900,20);
        
    }
}