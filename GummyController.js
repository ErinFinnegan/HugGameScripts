﻿#pragma strict

//var lastTime : float=0;
//
//var timeCounter: int = 10;

//so that these can pop up in gamecontroller heircheay
var blueBear : GameObject;
var greenBear : GameObject;
var yellowBear: GameObject;
var purpleBear: GameObject;
var orangeBear: GameObject;
var redBear: GameObject;
var YELLOWBear: GameObject;
var BLUEBearFreebie: GameObject;


static var blueBearBoolean : boolean = false;
static var greenBearBoolean: boolean= false;
static var yellowBearBoolean: boolean = false;
static var purpleBearBoolean: boolean = false;
static var orangeBearBoolean: boolean = false;
static var redBearBoolean: boolean = false;
static var YELLOWBearBoolean: boolean = false;
static var BLUEBearFreebieBoolean: boolean = false;


var skin : GUISkin;

//static var damageAudio: AudioSource; //staticfunctions need to use static variables.
var respawnAudio: AudioSource;

static var score : float=0;
static var deadBear : boolean = false;
//timer for instructions screen
static var timer : int=300;
//timer for gummybear game
static var gummytimer : int=2800; //this value equates to about 2200=30 seconds

//static var winscreen: boolean =false;



function Start () {
//ERIN>> where I am loading the instructions page, it's suppose to be mispelled...

//Application.LoadLevel("gummyinstrcutions");
//ERIN>> I want to eventaully load the game scene below
//yield WaitForSeconds (0.1);
//Application.LoadLevel

//if (Input.GetKeyDown('1')){
//Application.LoadLevel("Main");
////}

var audioSources = GetComponents(AudioSource);
score = 0;

//arranged in order it was created in inspector
//damageAudio=AudioSource[0];
//respawnAudio=AudioSource[1];




}//END OF START FUNCTION

function Update () {

 if (score>=10 && gummytimer==0) {
 Application.LoadLevel("GummyWINSCREEN");
 //yield WaitForSeconds(5);
 
 //Application.LoadLevel("GameSelect");
 //winscreen=true;
}
if(Input.GetKey(KeyCode.LeftArrow)) {
Application.LoadLevel("GummyLOSESCREEN");
 }


//    //Application.LoadLevel("GameSelect");
//THE LINE BELOW WON"T WORK
////GummyScreenController.WinScreen==true;
 Debug.Log("You won the gummy game!");


if (score<10 && gummytimer==0){

Application.LoadLevel("GummyLOSESCREEN");
}

Debug.Log("timer " + timer);


// (Input.GetKey(KeyCode.Escape)) 
if (Input.GetKey(KeyCode.Escape)){
  score = 0;
  timer -=Time.deltaTime;
  Application.LoadLevel("GameSelect");
}


//timer
timer -=Time.deltaTime;
gummytimer -=Time.deltaTime;
// if (timer <=0){
 //timer=0;
 //Debug.Log(timer);
// }


//if  (timer < 0){
// //if (GetComponent(GummyController).timer == 0  && GetComponent(GummyController).score<=0){
// //	Debug.Log("Instructions activate!!!!!");
////    GetComponent(GummyScreenController).InstructionScreen.SetActive(false);   
// }  else {
// 
// // 	Debug.Log("Instructions DEactivate!!!!!");
// 
// }



if(deadBear == true){
    //if dead bear hits the floor, deadbear==tru
    //once deadbear=tru, make dead bear = false
    deadBear = false;
    //make a new bear
    spawnBear();//

    }

//WAS REG TIMER and score<=100, I SWITCHED IT TO GUMMY TIMER and to 0
if (gummytimer==0 && score<=-100){

 // Application.LoadLevel("gameoverscreen");
//  yield WaitForSeconds(10);
//ERIN! ADD THE MAIN MENU SCREEN FOR BOTH OF OUR GAMES HERE
//Application.LoadLevel("gummyinstrcutions");
     	Application.LoadLevel("GameSelect");
     	Debug.Log("score " + score);
        Debug.Log("timer " + timer);
   }

 Debug.Log("score " + score);

} //end of update up here

//make new bears here
function spawnBear(){




var randomNumber= (Random.Range(1,8));

    //displaye
//    Debug.Log(randomNumber);

    if(randomNumber ==1){

    Instantiate(purpleBear, Vector3(0, 10, 0), Quaternion.identity);
//    Debug.Log("PurpleTrue");
     blueBearBoolean = false;
    greenBearBoolean = false;
    yellowBearBoolean = false;
    purpleBearBoolean = true;
    orangeBearBoolean = false;
    redBearBoolean = false;

    }

    if (randomNumber==2){

    Instantiate(redBear, Vector3(0, 10, 0), Quaternion.identity);
     blueBearBoolean = false;
    greenBearBoolean = false;
    yellowBearBoolean = false;
    purpleBearBoolean = false;
    orangeBearBoolean = false;
    redBearBoolean = true;
    }

    if (randomNumber == 3){

    Instantiate(greenBear, Vector3(0, 10, 0), Quaternion.identity);
     blueBearBoolean = false;
    greenBearBoolean = true;
    yellowBearBoolean = false;
    purpleBearBoolean = false;
    orangeBearBoolean = false;
    redBearBoolean = false;
    }

    if (randomNumber == 4){

    Instantiate(yellowBear, Vector3(0, 10, 0), Quaternion.identity);
    blueBearBoolean = false;
    greenBearBoolean = false;
    yellowBearBoolean = true;
    purpleBearBoolean = false;
    orangeBearBoolean = false;
    redBearBoolean = false;
    }

    if (randomNumber == 5){

    Instantiate(blueBear, Vector3(0, 10, 0), Quaternion.identity);
     blueBearBoolean = true;
    greenBearBoolean = false;
    yellowBearBoolean = false;
    purpleBearBoolean = false;
    orangeBearBoolean = false;
    redBearBoolean = false;
    
    }

    if (randomNumber == 6){

    Instantiate(orangeBear, Vector3(0, 10, 0), Quaternion.identity);
     blueBearBoolean = false;
    greenBearBoolean = false;
    yellowBearBoolean = false;
    purpleBearBoolean = false;
    orangeBearBoolean = true;
    redBearBoolean = false;
    }

    if (randomNumber == 7){
    Instantiate(YELLOWBear, Vector3(0, 10, 0), Quaternion.identity);
     blueBearBoolean = false;
    greenBearBoolean = false;
    yellowBearBoolean = false;
    purpleBearBoolean = false;
    orangeBearBoolean = false;
    redBearBoolean = false;
    YELLOWBearBoolean = true;

    }
if (randomNumber == 8){
    Instantiate(BLUEBearFreebie, Vector3(0, 10, 0), Quaternion.identity);
     blueBearBoolean = false;
    greenBearBoolean = false;
    yellowBearBoolean = false;
    purpleBearBoolean = false;
    orangeBearBoolean = false;
    redBearBoolean = false;
    YELLOWBearBoolean = false;
    BLUEBearFreebieBoolean =true;

    }





//
//    if(!respawnAudio.isPlaying){




//
//    respawnAudio.Play();
//}

}
//}//end of function down here
function OnGUI(){
//just count how many gummy bears are correct within in 20 seconds
GUI.skin = skin;
GUI.Label (new Rect (170, 350, 100, 100), "score: " + score);
//GUI.Label (new Rect (100, 50, 200, 300), "TEST");
//for timer display
//GUI.Box(new Rect(10,10,50,20),""+timer.ToString("0"));

GUI.Box(new Rect(170,300,80,30),"timer: "+gummytimer.ToString("0"));
}


static function Score(){

    score +=1;
     if (score>=10 && gummytimer==0) {
 //Application.LoadLevel("GummyWINSCREEN");
 yield WaitForSeconds(5);
 
 Application.LoadLevel("GameSelect");
 
}
// if (score>=10 && gummytimer==0){
// Application.LoadLevel("GummyWINSCREEN");
////    //Application.LoadLevel("GameSelect");
////THE LINE BELOW WON"T WORK
//////GummyScreenController.WinScreen==true;
// Debug.Log("You won the gummy game!");
//}

// }

//static function Fail(){
//score--;
//
}