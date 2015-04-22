
#pragma strict

//public var HugState : string;

var moveLeft : KeyCode;
var moveRight: KeyCode;



static var damageAudio: AudioSource;  //today
var respawnAudio: AudioSource;   //today


static var currentRep=3;   //rep replaces hearts.  "rep" is your reputation
var rep: GameObject;
static var repBar: GameObject[];



//var jumpAudio: AudioSource;
//jumpAudio = GetComponent(AudioSource);  //for Unity 5 only?


static var HugState : boolean = false;

public var animator : Animator;

animator.GetBool("HugState");
//animator.GetComponent(Animator);
//animator.GetComponentInChildren(Animator);


function Start () {
//this.transform.position[0]
	//var audioSources = GetComponents(AudioSource);
	//damageAudio = audioSources[0];
	//respawnAudio = audioSources[1];

	Spawn();
	  Debug.Log("HugState on Spawn = " + HugState);

}

	
//	SpawnHealth();  //from last week


function Update () {

var currentRep=10; 

//Debug.Log("Player1 position = " + this.transform.position[0]);

//Maybe I need to declare a boolean??
//boolean Hugging = Input.Get___SOMETHING?

 //animator.SetBool("Hugging", false);

 //animator.SetBool("HugState", HugState);
//   Debug.Log("HugState = on update" + HugState);

if(Input.GetKeyDown(moveLeft) && Input.GetKey(moveRight)){
//transform.Translate(Vector3.left*speed);
//animator.SetFloat("Speed", -100)
//Debug.Log("left");
 animator.SetBool("Hugging", true);
 HugState = true;
  Debug.Log("Hug State + Proper Hug!!! " + HugState);

  currentRep = currentRep + 1;
  
  //currentHealth = currentHealth+1;
  
  //if(!jumpAudio.isPlaying){ //if it isn't already playing
  
  //jumpAudio.Play();
  
  //}

}

//else if(Input.GetKeyDown(moveLeft)){
 //  animator.SetTrigger("P1LeftArm");

//}

//else if(Input.GetKey(moveLeft)){
//   animator.SetBool("LKeyDown", true);
//
//}

//else if(Input.GetKeyDown(moveRight)){
//  animator.SetTrigger("P1RightArm");
 // Debug.Log("Right arm!!");
//}

//else if(Input.GetKey(moveRight)){
//   animator.SetBool("RKeyDown", true);
//
//}

/*
else if(Input.GetKeyUp(moveLeft)){
   animator.SetBool("LKeyDown", false);
  // Debug.Log("left key up");

}

else if(Input.GetKeyUp(moveRight)){
   animator.SetBool("RKeyDown", false);
  // Debug.Log("left key up");

}
*/


//
//else if(Input.GetKey(shoot)){
//
////animator.SetBoolean  ("Speed", -100)
//
////animator.SetBool(true);
//
//if(Time.time - shootTime > 0.15){
//	Instantiate(fireball, transform.position, Quaternion.Euler(0, 0, 90));
//	shootTime = Time.time;
//}
//}

//else{
//animator.SetBool("LKeyDown", false);
//animator.SetBool("RKeyDown", false);
//animator.SetBool("Hugging", false);
//animator.SetBool("HugState", false);
//animator.SetTrigger("P1RighArm");
//animator.SetTrigger("P1LeftArm");
//speed = 0;
//animator.SetFloat("Speed", 0);

//}
}



function Spawn(){

for(var i: int=0; i < currentRep; i++){

Instantiate(rep, Vector3(i*1.5-6.5, 4, 0), Quaternion.identity); 

}

repBar = GameObject.FindGameObjectsWithTag("Reputation");


}



static function Damage(){

Destroy(repBar[currentRep-1]);
currentRep -= 1;

}

//function SpawnHealth(){
//   The health spawning function from last week's class
//}

//static function Damage(){
// the damage function from last week
//}