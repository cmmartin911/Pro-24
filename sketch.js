const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var bird1;
var ground;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8;
var iron1;

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(300,350,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(810,350,50);
    bird1 = new Hammer(100,100);
    iron1 = new iron(550,300,100,60);
    sand1 = new sand(400,384,5);
    sand2 = new sand(415,384,5);
    sand3 = new sand(385,384,5);
    sand4 = new sand(430,384,5);
    sand5 = new sand(475,384,5);
    sand6 = new sand(440,384,5);
    sand7 = new sand(380,384,5);
    sand8 = new sand(435,384,5);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    box1.display();
    ground.display();
    pig1.display();
    bird1.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    iron1.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
}