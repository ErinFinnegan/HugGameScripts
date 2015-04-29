#pragma strict


var gothKid: GameObject;
var ponytailGirl: GameObject;
static var DoTheyLikeHugs;
var HuggeesOnScreen: int;
static var KidTimer: int;
//var whatTimeIsIt: int;

function Start () {


spawnKid();
//UpdateRep();



}

function Update(){

HuggeesOnScreen = (GameObject.FindGameObjectsWithTag("LikesHugs").Length) + (GameObject.FindGameObjectsWithTag("DoesNotLikeHugs").Length);

KidTimer = KidTimer + 1;

//Debug.Log("Huggees on screen = " + HuggeesOnScreen);

//KidTimer = KidMovement.KidTimer;

//   	Debug.Log("Time.time = " + Time.time);
	Debug.Log("KidTimer in KidMovement = " + KidTimer);



}

function spawnKid(){

KidTimer = 0;

var randInt: int = Random.Range(0, 5);

GetComponent(KidMovement).GotAHug = false;

if(randInt > 2){
  Instantiate(gothKid, Vector3(-13, 0, 0), Quaternion.identity);
  DoTheyLikeHugs = this.gothKid.tag;
 // Debug.Log("Do they like hugs tag = " + DoTheyLikeHugs);

}

else{

	Instantiate(ponytailGirl, Vector3(-13, 0, 0), Quaternion.identity);
	
	DoTheyLikeHugs = this.ponytailGirl.tag;
//	Debug.Log("Do they like hugs = " + DoTheyLikeHugs);

	
	}
	
	
}

function LateUpdate(){  //this didn't work... need to set some kind of time variable here after a kid is destroyed to spawn a new one

 if (HuggeesOnScreen == 0 && KidTimer > 4) {  //enemy.GetComponent(EnemyScript)
  spawnKid();
  }

}

function AddRep (newRepValue : int) {
    GetComponent(PlayerMovement).currentRep += newRepValue;
//    UpdateRep ();
}

//function UpdateRep() {
//    repText.text = "Score: " + currentRep;
//}

