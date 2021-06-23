const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

gameState = "onSling";

function preload() {

    this.polygonImg = loadImage('polygon.png');

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    Ground1 = new Ground(600,420,1200,20);
    Ground2 = new Ground(950,240,300,15);
    Ground3 = new Ground(530,330,300,15);

    Box1 = new Box(410,298,40,50);
    Box2 = new Box(450,298,40,50);
    Box3 = new Box(490,298,40,50);
    Box4 = new Box(530,298,40,50);
    Box5 = new Box(570,298,40,50);
    Box6 = new Box(610,298,40,50);
    Box7 = new Box(650,298,40,50);

    Box8 = new Box(450,248,40,50);
    Box9 = new Box(490,248,40,50);
    Box10 = new Box(530,248,40,50);
    Box11 = new Box(570,248,40,50);
    Box12 = new Box(610,248,40,50);

    Box13 = new Box(490,198,40,50);
    Box14 = new Box(530,198,40,50);
    Box15 = new Box(570,198,40,50);

    Box16 = new Box(530,148,40,50);

    //platform 2

    Box1q = new Box(830,208,40,50);
    Box2q = new Box(870,208,40,50);
    Box3q = new Box(910,208,40,50);
    Box4q = new Box(950,208,40,50);
    Box5q = new Box(990,208,40,50);
    Box6q = new Box(1030,208,40,50);
    Box7q = new Box(1070,208,40,50);

    Box8q = new Box(870,158,40,50);
    Box9q = new Box(910,158,40,50);
    Box10q = new Box(950,158,40,50);
    Box11q = new Box(990,158,40,50);
    Box12q = new Box(1030,158,40,50);

    Box13q = new Box(910,108,40,50);
    Box14q = new Box(950,108,40,50);
    Box15q = new Box(990,108,40,50);

    Box16q = new Box(950,58,40,50);

    polygon1 = new Polygon(175,200,100);

    Slingshot1 = new Slingshot(polygon1.body, {x: 140, y: 200});
}

function draw(){
    background("black");

    fill("gray");
    Ground1.display();

    fill("#CD5C5C");
    Ground2.display();
    Ground3.display();

    fill("#ADD8E6");
    Box1.display();
    Box2.display();
    Box3.display();
    Box4.display();
    Box5.display();
    Box6.display();
    Box7.display();

    fill("pink");
    Box8.display();
    Box9.display();
    Box10.display();
    Box11.display();
    Box12.display();

    fill("gray");
    Box13.display();
    Box14.display();
    Box15.display();

    fill("#CBC3E3");
    Box16.display();

    //platform 2

    fill("#ADD8E6");
    Box1q.display();
    Box2q.display();
    Box3q.display();
    Box4q.display();
    Box5q.display();
    Box6q.display();
    Box7q.display();

    fill("pink");
    Box8q.display();
    Box9q.display();
    Box10q.display();
    Box11q.display();
    Box12q.display();

    fill("gray");
    Box13q.display();
    Box14q.display();
    Box15q.display();

    fill("#CBC3E3");
    Box16q.display();

    polygon1.display();

    Slingshot1.display();

    drawSprites();

}

function mouseDragged() {
    if(gameState !== "launched") {
        Matter.Body.setPosition(polygon1.body, { x: mouseX, y: mouseY });
        //Matter.Body.applyForce(polygon1.body,polygon1.body.position,{x: 55, y: -55}) 
    }
}

function mouseReleased() {
    gameState = "launched";

    if(gameState == "launched") {
        Slingshot1.fly();
        
    }

}