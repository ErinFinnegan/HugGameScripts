
#pragma strict

//public var HugState : string;

var moveLeft : KeyCode;
var moveRight: KeyCode;

var DoTheyLikeHugs: UnityEngine.GameObject[];

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
   DoTheyLikeHugs = GameObject.FindGameObjectsWithTag("DoesNotLikeHugs");
  Debug.Log("Do they like hugs? " + DoTheyLikeHugs);

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
 Debug.Log("Proper Hug!!! ");
  currentRep = currentRep + 1;

  if (DoTheyLikeHugs == null){
   Damage();
   Debug.Log("Don't hug people who don't like it!!");
  
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

