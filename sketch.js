var car , carA;
var bike , bikeA;
var BGG;
var SBG ;
var D;
var BG;
var SBP , SBPA ;
var SCP ,SCPA ;
var btn1 , BTN1A;
var btn2 , BTN2A ;
var A , a ;
var gameState=0;


function preload(){
    bikeA=loadAnimation("sb1.png","sb2.png","sb3.png","sb4.png");
    carA = loadAnimation("sc2.png","sc2.png","sc3.png","sc4.png");
    BGG = loadImage("bgg.jpg"); 
    SBG = loadImage("sbg.png");
    D = loadImage("d.jpg");
    BG = loadImage("bg.jpg");
    SBPA = loadImage("sbp.png");
    SCPA = loadImage("scp.png");
    BTN1A = loadImage("b1.png");
    BTN2A = loadImage("b2.png");
    
}
function setup(){
 createCanvas(1000,400);

 // adding sprites 

    bike = createSprite(380,200);
    bike.addAnimation("bikes",bikeA);
    bike.visible=false;

    car = createSprite(380,100);
    car.addAnimation("cars",carA);
    car.visible=false;

    SBP = createSprite(380,200);
    SBP.addAnimation("bikes",SBPA);
    SBP.visible=false;

    SCP=createSprite(380,100);
    SCP.addAnimation("cars",SCPA);
    SCP.visible=false;

// adding buttons 
    btn1 = createSprite(90,130);
    btn1.addImage("s1",BTN1A)
    btn1.visible = false;

    btn2 = createSprite(90,290);
    btn2.addImage("s2",BTN2A)
    btn2.visible = false;

}

function draw(){
background(SBG);
 // game state change function for background
 if(keyCode==32){
   gs2();
   }
 if ((btn1)){
    gs3();
 } 


  drawSprites();    
}

// seperate function for game state change 
function gs2(){
    gameState=2;
    background(D);

    SBP.x=100;
    SBP.y=80;
    SBP.visible=true;
    SBP.scale=0.6;
    btn1.visible=true;

    SCP.x=100;
    SCP.y=240;
    SCP.visible=true
    SCP.scale= 0.6;
    btn2.visible=true;
}

function gs3(){
    gameState=3;
    backgrouud(BG);
}