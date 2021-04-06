const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground, holder,ball
var stand1,stand2
var box
var slingShot
//var polygon__img

function preload(){
    // polygon_img=loadImage("polygon.png")
    // background_img=loadImage("bg.png")
}


function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    stand1= new stand(380,300,270,10);
    stand2= new stand(700,200,200,10);

    //level one
    box1 = new Box(280,275,30,40);
    box2 = new Box(310,275,30,40);
    box3 = new Box(340,275,30,40);
    box4 = new Box(370,275,30,40);
    box5 = new Box(400,275,30,40);
    box6 = new Box(430,275,30,40);
    box7 = new Box(460,275,30,40);
    box8 = new Box(490,275,30,40);
    //level two
    box9 = new Box(310,235,30,40);
    box10 = new Box(340,235,30,40);
    box11= new Box(370,235,30,40);
    box12 = new Box(400,235,30,40);
    box13 = new Box(430,235,30,40);
    box14 = new Box(460,235,30,40);
    //level three
    box15 = new Box(340,195,30,40);
    box16 = new Box(340,195,30,40);
    box17 = new Box(340,195,30,40);
    box18 = new Box(340,195,30,40);
    //level four
    box19 = new Box(340,195,30,40);
    box20 = new Box(340,195,30,40);
    //level five
    box21 = new Box(340,195,30,40);

    //set two
    //level one
    box22 = new Box(340,195,30,40);
    box23 = new Box(340,195,30,40);
    box24 = new Box(340,195,30,40);
    box25 = new Box(340,195,30,40);
    box26 = new Box(340,195,30,40);
    //level two
    box27 = new Box(340,195,30,40);
    box28 = new Box(340,195,30,40);
    box29 = new Box(340,195,30,40);
    //level three
    box29 = new Box(340,195,30,40);
    box30 = new Box(30,40)

    // level four
    box31 = new Box(30,40)


    //ball with slings
    ball = Bodies.Circle(50,200,20)
    world.add(world,ball)


  
    slingshot = new SlingShot(this.ball,{x:230, y:230});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(2);
    stroke(15);

    stand1.display();
    stand2.display();

    stroke(15)
    fill("black")
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    stroke(15);
    fill("orange");
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();

    stroke(15);
    fill("violate")
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    stroke(15);
    fill("Blue");
    box19.display();
    box20.display();

    stroke(15);
    fill("green");
    box21.display();

    stroke(15);
    fill("red");
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    stroke(15);
    fill("yellow");
    box26.display();
    box27.display();
    box28.display();

    stroke(15);
    fill("pink");
    box29.display();
    box30.display();

    stroke(15);
    fill("blue")
    box31.display();
    
    ecllipse(ball.position.x,ball.position,y,20);

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.ball,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}