const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;

var bg, bgImg;
var ground;
var hero;
var rope;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19;
var box20,box21,box22,box23,box24,box25,box26;
var monster;

function preload() {
  bgImg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(1400, 650);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(650,550,1350,15);

  hero = new Hero(400,800,250);

  rope = new Fly(hero.body,{x : 500 , y : 50});

  box1 = new Block(600,100,70,70);

  box2 = new Block(900,100,70,70);
  box3 = new Block(900,100,70,70);
  box4 = new Block(900,100,70,70);
  box5 = new Block(900,100,70,70);
  box6 = new Block(900,100,70,70);

  box7 = new Block(800,100,70,70);
  box8 = new Block(800,100,70,70);
  box9 = new Block(800,100,70,70);
  box10 = new Block(800,100,70,70);
  box11 = new Block(800,100,70,70);
  box12 = new Block(800,100,70,70);
  box13 = new Block(800,100,70,70);
  box14 = new Block(800,100,70,70);

  box15 = new Block(700,100,70,70);
  box16 = new Block(700,100,70,70);
  box17 = new Block(700,100,70,70);
  box18 = new Block(700,100,70,70);
  box19 = new Block(700,100,70,70);
  box20 = new Block(700,100,70,70);

  box21 = new Block(600,100,70,70);
  box22 = new Block(600,100,70,70);
  box23 = new Block(600,100,70,70);
  box24 = new Block(600,100,70,70);
  box25 = new Block(600,100,70,70);
  box26 = new Block(600,100,70,70);

  monster = new Monster(1200,400,300);
  

}

function draw() {
  background(bgImg);

  Engine.update(engine);

  ground.display();

  hero.display();

  rope.display();

  box1.display();

  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

 box15 .display();
 box16 .display();
 box17 .display();
 box18 .display();
 box19 .display();
 box20 .display();

 box21.display();
 box22.display();
 box23.display();
 box24.display();
 box25.display();
 box26.display();

 monster.display();
 // drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}
