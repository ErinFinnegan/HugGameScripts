
#pragma strict

//public var HugState : string;

//var moveLeft : KeyCode.LeftArrow;
//var moveRight: KeyCode.RightArrow;

//var WhoWantsHug: GameObject[];
//var WhoWantsHug: int;



static var damageAudio: AudioSource;  //today
var respawnAudio: AudioSource;   //today


static var currentRep=300;   //rep replaces hearts.  "rep" is your reputation
//var rep: GameObject;
//static var repBar: GameObject[];


static var HugState : boolean = false;

public var animator : Animator;

animator.GetBool("HugState");
animator.GetComponent(Animator);
animator.GetComponentInChildren(Animator);

var newColor : Color;
//private var block;
//var srColor : renderer.material.color;
//var srColor : gameObject.GetComponent(SpriteRenderer).color;
//SpriteRenderer sr = gameObject.GetComponent<SpriteRenderer>(); 


function Start () {

//     GetComponent<SpriteRenderer>().color = Color.red;
//	newColor = newColor.white;

    gameObject.GetComponent(SpriteRenderer).color = newColor.white;  //this actually worked!!
    newColor = Color.white;
	
  //renderer = gameObject.GetComponent(SpriteRenderer);
//	block = new MaterialPropertyBlock();
	Spawn();

	//  Debug.Log("HugState on Spawn = " + HugState);
	  
//	   WhoWantsHug = GameObject.FindGameObjectsWithTag("LikesHugs").Length;

}


function Update () {

//var currentRep=10; 

 gameObject.GetComponent(SpriteRenderer).color = newColor;

 //if(Input.GetKey(KeyCode.Alpha1) || Input.GetKey(KeyCode.Alpha1) || Input.GetKey(KeyCode.Alpha2) || Input.GetKey(KeyCode.Alpha3) || Input.GetKey(KeyCode.Alpha4))  {
   ColorChanging();
 //}

 if(Input.GetKey(KeyCode.LeftArrow) && Input.GetKey(KeyCode.RightArrow)){
   Hug();
 } else {
  StopHugging();
 }



}

function Hug(){
 animator.SetBool("HugState", true);
 HugState = true;
 //Debug.Log("Proper Hug!!! ");
//  currentRep = currentRep + 1;
// WhoWantsHug = GameObject.FindGameObjectsWithTag("LikesHugs");
// Debug.Log("How many people want hugs " + WhoWantsHug);
//   if (WhoWantsHug > 0){
//      Debug.Log("This person loves hugs!! CurrentRep " + currentRep);
//      currentRep += 1;
//      
//  } 
//  else {
//   	 Debug.Log("This person hates hugs!!  CurrentRep " + currentRep);
//   	 currentRep -= 1;
//   	 Damage();
//  }

}

function StopHugging(){ 
   HugState = false;
   animator.SetBool("HugState", false);
   //Debug.Log("Stop freaking hugging");
}

function Spawn(){
//Debug.Log("Your Current Rep on Spawnstate " + currentRep);
//for(var i: int=0; i < currentRep; i++){
//
//  Instantiate(rep, Vector3(i*1.5-6.5, 4, 0), Quaternion.identity); 
//
//}

// repBar = GameObject.FindGameObjectsWithTag("Reputation");

}



static function Damage(){

 // Destroy(repBar[currentRep-1]);
  currentRep -= 1;

}



function ColorChanging(){
 
 //SpriteRenderer sr = gameObject.GetComponent<SpriteRenderer>(); 
 
 var colorA = Color.white;
 var colorB = Color.red;
 var colorC = Color.gray;
 var colorD = Color.blue;
 
 //default??
  //gameObject.GetComponent(SpriteRenderer).color = newColor.white; 
 
 if(Input.GetKey(KeyCode.Alpha1)) { 
   newColor = Color.white;
// 	Debug.Log("You hit 1");
//    block.SetColor("_Color", colorA);

 }
 if(Input.GetKey(KeyCode.Alpha2)){ 
 newColor = Color.red;
//  	Debug.Log("You hit 2");
 }
 
  if(Input.GetKey(KeyCode.Alpha3)) { 
 newColor = Color.black;
 //	Debug.Log("You hit 3");
 }
 if(Input.GetKey(KeyCode.Alpha4)){ 
 newColor = Color.blue;
//  	Debug.Log("You hit 4");
 }
 
//   block.newColor("_Color", Color.red);

//  block.SetColor("_Color", Color.red);
  //srColor.color = Color.Lerp(light.color, newColor, Time.time);  //2 is smoothing


}