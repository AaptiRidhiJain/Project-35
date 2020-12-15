//defining variables
var dog, database, foodS, foodStock;
var dogImage, happyDogImage;

function preload()
{
  //loading images
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();

  foodStock = database.ref("Food");
  foodStock.on("value",readStock);

  createCanvas(500,500);
  
  dog = createSprite(300,200);
  dog = loadImage(dogImage);
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref("/").update({
    Food:x
  })
}

