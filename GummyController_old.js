#pragma strict

var lastTime : float=0;

var timeCounter: int = 10;

//so that these can pop up in gamecontroller heircheay
var blueBear : GameObject;
var greenBear : GameObject;
var yellowBear: GameObject;
var purpleBear: GameObject;
var orangeBear: GameObject;
var redBear: GameObject;
var YELLOWBear: GameObject;


static var blueBearBoolean : boolean = false;
static var greenBearBoolean: boolean= false;
static var yellowBearBoolean: boolean = false;
static var purpleBearBoolean: boolean = false;
static var orangeBearBoolean: boolean = false;
static var redBearBoolean: boolean = false;
static var YELLOWBearBoolean: boolean = false;




//var blueBearFREEBIE: GameObject;
//var blueBearORANGE: GameObject;
//var blueBearPURPLE: GameObject;

var skin : GUISkin;

//static var damageAudio: AudioSource; //staticfunctions need to use static variables.
var respawnAudio: AudioSource;

static var score : float=0;

static var deadBear : boolean = false;

function Start () {

//gets every audio source associated with this object and puts it in an array.
var audioSources = GetComponents(AudioSource);

//arranged in order it was created in inspector
//damageAudio=AudioSource[0];
//respawnAudio=AudioSource[1];


	


}

function Update () {

//Debug.Log(deadBear);

if(deadBear == true){
	//if dead bear hits the floor, deadbear==tru
	//once deadbear=tru, make dead bear = false
	deadBear = false;
	//make a new bear
	spawnBear();//
	
	}
	

	

}//end of update up here

//make new bears here
function spawnBear(){

timeCounter=timeCounter+10;



var randomNumber= (Random.Range(1,7));
	
	//displaye
//	Debug.Log(randomNumber);

	if(randomNumber ==1){

	Instantiate(purpleBear, Vector3(0, 10, 0), Quaternion.identity);
//	Debug.Log("PurpleTrue");
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
	
	
	
 //if(timeCounter > 2){
	
//	bearScript.speed++;

}

//	
//	if(!respawnAudio.isPlaying){




//	
//	respawnAudio.Play();
//}

//}
//}//end of function down here
function OnGUI(){
//just count how many gummy bears are correct within in 20 seconds
GUI.skin = skin;
GUI.Label (new Rect (Screen.width/4, 3, 100, 100), "" + score);

}


static function Score(){

	score +=1;
	
//	if (score == 8){
	
//	Application.LoadLevel()
//	}

}

static function Fail(){
  //score -=1;
}

//yield WaitForSeconds(10){
//
//
//}

//static function Damage(){
//	if(!damageAudio.isPlaying){
//	
//	damageAudio.Play();
//}

//}





