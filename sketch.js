var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var score = 0;
var turn = 0;
var particle;
var gameState = "PLAY";

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill ("lime");
  text("Score : "+score,700,30);
  textSize(25)
  fill ("yellow")
  text("500",180,570);
  text("500",100,570);
  text("500",20,570);
  text("500",260,570);
  text("100",340,570);
  text("100",420,570);
  text("100",500,570);
  text("200",580,570);  
  text("200",660,570);
  text("200",740,570);

  Engine.update(engine);
  console.log(turn)
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   if(particle!=null){
     particle.display();

     if (particle.body.position.y>760){
      if (particle.body.position.x<300){
       score = score+500;
       particle=null;
       if(turn>=5)gameState="END";
      }
     }
   }

   if(particle!=null){
    particle.display();

    if (particle.body.position.y>760){
     if (particle.body.position.x<301&&particle.body.position.x<600){
      score = score+100;
      particle=null;
      if(turn>=5){
        gameState="END";
      }
     }
    }
  }

  if(particle!=null){
    particle.display();

    if (particle.body.position.y>760){
     if (particle.body.position.x<601&&particle.body.position.x<900){
      score = score+200;
      particle=null;
      if(turn>=5){
        gameState="END";
      }
     }
    }
  }

  if(gameState=="END"){
    textSize(50);
    fill ("red");
    text("GAME OVER",250,250);
  }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mouseClicked(){
  if (gameState!=="END"){
    turn++;
    particle = new Particle(mouseX,10,10,10)
  }
}