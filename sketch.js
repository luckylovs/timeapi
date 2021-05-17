const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var sunset1,sunset2,sunset3,sunset4,sunset5,sunset6,sunset7,sunset8,sunset9,sunset10,sunset11,sunset12;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    sunset1 = loadImage("sunrise1.png")
    sunset2 = loadImage("sunrise2.png")
    sunset3 = loadImage("sunrise3.png")
    sunset4 = loadImage("sunrise4.png")
    sunset5 = loadImage("sunrise5.png")
    sunset6 = loadImage("sunrise6.png")
    sunset7 = loadImage("sunset7.png")
    sunset8 = loadImage("sunset8.png")
    sunset9 = loadImage("sunset9.png")
    sunset10 = loadImage("sunset10.png")
    sunset11 = loadImage("sunset11.png")
    sunset12= loadImage("sunset12.png")
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
   if(backgroundImg)
        background(backgroundImg)


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")


    //change the data in JSON format
    var responseJSON = await response.json
    console.log(responseJSON)
    var datetime = responseJSON.datetime

    // write code slice the datetime
hour = datetime.slice(11,13)

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        bg = "sunrise1.png"
    }
    else if(hour>=06 && hour<=08 ){
        bg = "sunrise2.png"
        
    }
    else if(hour>=08 && hour<=10 ){
        bg = "sunrise3.png"
        
    }
    else if(hour>=10 && hour<=14 ){
        bg = "sunrise4.png"
        
    }
    else if(hour>=14 && hour<=16 ){
        bg = "sunrise5.png"
        
    }
    else if(hour>=16 && hour<=19 ){
        bg = "sunrise6.png"
        
    }
    else if(hour>=19 && hour<=20 ){
        bg = "sunset7.png"
        
    }
    else if(hour>=20 && hour<=21 ){
        bg = "sunset8.png"
        
    }
    else if(hour>=21 && hour<=23 ){
        bg = "sunste9.png"
        
    }
    else if(hour>=23 && hour<=0 ){
        bg = "sunset10.png"
        
    }
    else if(hour>=0 && hour<=3 ){
        bg = "sunset11.png"
        
    }
    else {
        bg = "sunrset12.png"
        
    }
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg)
}
