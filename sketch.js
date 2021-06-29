const Engine= Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
var engine,world
var maxDrops 

function preload(){
    
}

function setup(){
var canvas = createCanvas(1200,400);


if(frameCount % 150 === 0){ for(var i=0; i<maxDrops; i++){ drops.push(new createDrop(random(0,400), random(0,400))); } }










engine = Engine.create();
world = engine.world;


    
}

function draw(){
background("black")
for(var i = 0; i<maxDrops; i++){ drops[i].showDrop(); drops[i].updateY() }



drawSprites();    
}   

