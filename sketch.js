var laser1,laser2,laser3
var score,trophy,sophia
var car1,car2,car3,car4,car5,car6,car7,car8,car9,car10,car11,car12,car13,car14,car15,car16,car17,car18,car19,car20,car21,car22
var edges
var bg
var gameState = 0
var upImage,bottomImage,leftImage,rightImaeg,resetImage
var up,bottom,left,right,resetS
function preload(){
  upImage = loadImage("arrows/up_arrow.PNG")
  bottomImage = loadImage("arrows/bottom_arrow.PNG")
  leftImage = loadImage("arrows/left_arrow.PNG")
  rightImage = loadImage("arrows/right_arrow.PNG")
  resetImage = loadImage("arrows/reset.PNG")
}
function setup(){
  createCanvas(400,500)
  bg = createSprite(0,0,800,800);
  bg.shapeColor = "orange";
  up = createSprite(200,430)
  up.addImage(upImage)
  up.scale =0.5
  bottom = createSprite(200,480)
  bottom.addImage(bottomImage)
  bottom.scale =0.5
  left = createSprite(150,480)
  left.addImage(leftImage)
  left.scale =0.5
  right = createSprite(250,480)
  right.addImage(rightImage)
  right.scale =0.5
  laser1 = createSprite(210, 110, 30, 5);
  laser1.shapeColor = "red";
  laser2 = createSprite(260, 260, 30, 5);
  laser2.shapeColor = "red";
  laser3 = createSprite(130, 265, 20, 5);
  laser3.shapeColor = "red";
  score = 0;
  prize3 = createSprite(15, 120, 10, 10);
  prize3.shapeColor = "yellow";
  prize2 = createSprite(360, 120, 10, 10);
  prize2.shapeColor = "yellow";
  prize1 = createSprite(160, 120, 10, 10);
  prize1.shapeColor = "yellow";
  trophy = createSprite(380, 380, 20, 20);
  trophy.shapeColor = "yellow";
  sophia = createSprite(10, 10, 15, 15);
  car1 = createSprite(88, 30, 10, 57);
  car2 = createSprite(30, 50, 60, 10);
  car3 = createSprite(30, 100, 75, 10);
  car4 = createSprite(135, 100, 65, 10);
  car5 = createSprite(120, 70, 10, 57);
  car6 = createSprite(180, 26, 10, 52);
  car7 = createSprite(180, 80, 130, 10);
  car8 = createSprite(240, 55, 10, 60);
  car9 = createSprite(290, 30, 100, 10);
  car10 = createSprite(370, 95, 100, 10);
  car11 = createSprite(325, 200, 10, 200);
  car12 = createSprite(250, 140, 50, 10);
  car13 = createSprite(230, 230, 10, 190);
  car14 = createSprite(315, 330, 180, 10);
  car15 = createSprite(270, 350, 10, 30);
  car16 = createSprite(170, 360, 200, 10);
  car17 = createSprite(40, 210, 10, 210);
  car18 = createSprite(120, 310, 150, 10);
  car19 = createSprite(190, 200, 10, 230);
  car20 = createSprite(85, 240, 10, 150);
  car21 = createSprite(135, 180, 10, 165);
  car22 = createSprite(320, 380, 10, 45);
  resetS = createSprite(200,230)
  resetS.addImage(resetImage)
  resetS.scale = 0.5
  resetS.visible = false;
  sophia.shapeColor = "blue";
  laser1.velocityX = 5;
  laser2.velocityX = 4;
  laser3.velocityX = 3;
  edges = new Group();
}
function draw() {
  background("white");
  drawSprites();
  textSize(15);
  text("Sophia", 5, 30);
  text("Trophy", 350, 355);
  text(("Score: " + score)  + "/3", 280, 15);
  if(gameState === 0){
    createEdges();

    if (mousePressedOver(up)) {
      sophia.y = sophia.y - 3;
    }
    if (mousePressedOver(bottom)) {
      sophia.y = sophia.y + 3;
    }
    if (mousePressedOver(left)) {
      sophia.x = sophia.x - 3;
    }
    if (mousePressedOver(right)) {
      sophia.x = sophia.x + 3;
    }
    if (sophia.isTouching(car1)||sophia.isTouching(car2)||sophia.isTouching(car3)||sophia.isTouching(car4)||sophia.isTouching(car5)||sophia.isTouching(car6)||sophia.isTouching(car7)||sophia.isTouching(car8)||sophia.isTouching(car9)||sophia.isTouching(car10)||sophia.isTouching(car11))  {
      sophia.x = 15;
      sophia.y = 15;
      prize1.visible = true;
      prize1.x = 160;
      prize1.y = 120;
      prize2.visible = true;
      prize2.x = 360;
      prize2.y = 120;
      prize3.visible = true;
      prize3.x = 15;
      prize3.y = 120;
      score = 0;
    }
    if (sophia.isTouching(car12)||sophia.isTouching(car13)||sophia.isTouching(car14)||sophia.isTouching(car15)||sophia.isTouching(car16)||sophia.isTouching(car17)||sophia.isTouching(car18)||sophia.isTouching(car19)||sophia.isTouching(car20)||sophia.isTouching(car21)||sophia.isTouching(car22))  {
      sophia.x = 15;
      sophia.y = 15;
      prize1.visible = true;
      prize1.x = 160;
      prize1.y = 120;
      prize2.visible = true;
      prize2.x = 360;
      prize2.y = 120;
      prize3.visible = true;
      prize3.x = 15;
      prize3.y = 120;
      score = 0;
    }

    if (sophia.isTouching(trophy)) {
      gameState = 1;
    }
    if (sophia.isTouching(prize1)) {
      prize1.visible = false;
      prize1.x = 140;
      prize1.y = 90;
      score = score + 1;
    }
    if (sophia.isTouching(prize2)) {
      prize2.visible = false;
      prize2.x = 140;
      prize2.y = 90;
      score = score + 1;
    }
    if (sophia.isTouching(prize3)) {
      prize3.visible = false;
      prize3.x = 140;
      prize3.y = 90;
      score = score + 1;
    }
    if (laser1.isTouching(car19) || laser1.isTouching(car11)) {
      laser1.bounceOff(car19);
      laser1.bounceOff(car11);
    }
    if (laser2.isTouching(car13) || laser2.isTouching(car11)) {
      laser2.bounceOff(car13);
      laser2.bounceOff(car11);
    }
    if (laser3.isTouching(car19) || laser3.isTouching(car20)) {
      laser3.bounceOff(car19);
      laser3.bounceOff(car20);
    }
    if (sophia.isTouching(laser1) || sophia.isTouching(laser2) || sophia.isTouching(laser3)) {
      sophia.x = 15;
      sophia.y = 15;
      prize1.visible = true;
      prize1.x = 160;
      prize1.y = 120;
      prize2.visible = true;
      prize2.x = 360;
      prize2.y = 120;
      prize3.visible = true;
      prize3.x = 15;
      prize3.y = 120;
      score = 0;
    }
  }
  if (gameState === 1){
  laser1.setVelocity(0, 0);
  laser2.setVelocity(0, 0);
  laser3.setVelocity(0, 0);
  sophia.x = 10
  sophia.y = 10
  fill("red");
  textSize(70);
  textFont("comicsans");
  text("YOU WIN", 50, 160); 
  resetS.visible = true;
    if (mousePressedOver(resetS)){
      gameState = 0;
      resetS.visible = false;
      laser1.velocityX = 5;
      laser2.velocityX = 4;
      laser3.velocityX = 3;
    }
  }

}
function createEdges(){
  var top_edge = createSprite(200,0,400,5);
  edges.add(top_edge)
  var bottom_edge = createSprite(200,400,400,5)
  edges.add(bottom_edge)
  var left_edge = createSprite(0,200,5,400)
  edges.add(left_edge)
  var right_edge = createSprite(400,200,5,400)
  edges.add(right_edge)
  if (sophia.isTouching(edges)) {
    sophia.bounce(edges);
  }
}