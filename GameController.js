#pragma strict


var gothKid: GameObject;
var ponytailGirl: GameObject;
static var DoTheyLikeHugs;


function Start () {


spawnKid();



}

function Update(){


}

function spawnKid(){

var randInt: int = Random.Range(0, 4);


if(randInt > 2){
  Instantiate(gothKid, Vector3(-13, 0, 0), Quaternion.identity);
  DoTheyLikeHugs = this.gothKid.tag;
  Debug.Log("Do they like hugs ?" + DoTheyLikeHugs);

}

else{

	Instantiate(ponytailGirl, Vector3(-13, 0, 0), Quaternion.identity);
	
	DoTheyLikeHugs = this.ponytailGirl.tag;
	Debug.Log("Do they like hugs " + DoTheyLikeHugs);

	
	}
	


}




