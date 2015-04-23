
#pragma strict

//public var HugState : string;

var moveLeft : KeyCode;
var moveRight: KeyCode;

var WhoWantsHugs: int;



static var damageAudio: AudioSource;  //today
var respawnAudio: AudioSource;   //today


static var currentRep=3;   //rep replaces hearts.  "rep" is your reputation
var rep: GameObject;
static var repBar: GameObject[];


static var HugState : boolean = false;

public var animator : Animator;

animator.GetBool("HugState");
//animator.GetComponent(Animator);
//animator.GetComponentInChildren(Animator);


function Start () {

	Spawn();
	  Debug.Log("HugState on Spawn = " + HugState);

}


function Update () {

var currentRep=10; 


if(Input.GetKeyDown(moveLeft) && Input.GetKey(moveRight)){
 Hug();
}

if(Input.GetKeyUp(moveLeft) && Input.GetKeyUp(moveRight)){
 HugState = false;
}


 switch(HugState){
 
   case true:
//   	 Debug.Log("HugState is case true");
   	 animator.SetBool("Hugging", true);
   	 break;
   	case false:
//	  Debug.Log("HugState is case false");
      break;
   }




}

function Hug(){
 animator.SetBool("Hugging", true);
 HugState = true;
 //Debug.Log("Proper Hug!!! ");
//  currentRep = currentRep + 1;
 WhoWantsHugs = GameObject.FindGameObjectsWithTag("LikesHugs").Length;
// Debug.Log("How many people want hugs " + WhoWantsHugs);
   if (WhoWantsHugs > 0){
      Debug.Log("This person loves hugs!!");
  } else {
   	 Debug.Log("This person hates hugs!!");
  }

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

