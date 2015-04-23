
#pragma strict

//public var HugState : string;

//var moveLeft : KeyCode.LeftArrow;
//var moveRight: KeyCode.RightArrow;

var WhoWantsHug: GameObject[];



static var damageAudio: AudioSource;  //today
var respawnAudio: AudioSource;   //today


static var currentRep=3;   //rep replaces hearts.  "rep" is your reputation
var rep: GameObject;
static var repBar: GameObject[];


static var HugState : boolean = false;

public var animator : Animator;

animator.GetBool("HugState");
animator.GetComponent(Animator);
animator.GetComponentInChildren(Animator);


function Start () {

	Spawn();
	  Debug.Log("HugState on Spawn = " + HugState);
	  
	   WhoWantsHug = GameObject.FindGameObjectsWithTag("LikesHugs");

}


function Update () {

//var currentRep=10; 


if(Input.GetKey(KeyCode.LeftArrow) && Input.GetKey(KeyCode.RightArrow)){
 Hug();
} else {
 StopHugging();
}

//if(Input.GetKeyUp(moveLeft) && Input.GetKeyUp(moveRight)){
// StopHugging();
//}

//Debug.Log("Your Current Rep is " + currentRep);

// switch(HugState){
// 
//   case true:
////   	 Debug.Log("HugState is case true");
//   	 animator.SetBool("HugState", true);
//   	 break;
//   	case false:
//   	   	 animator.SetBool("HugState", false);
//   	   	 //StopHugging();
////	  Debug.Log("HugState is case false");
//      break;
//   }




}

function Hug(){
 animator.SetBool("HugState", true);
 HugState = true;
 //Debug.Log("Proper Hug!!! ");
//  currentRep = currentRep + 1;
// WhoWantsHug = GameObject.FindGameObjectsWithTag("LikesHugs");
 Debug.Log("How many people want hugs " + WhoWantsHug);
//   if (GameObject.tag == "LikesHugs"){
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
   Debug.Log("Stop freaking hugging");
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

