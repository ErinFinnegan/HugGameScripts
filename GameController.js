#pragma strict


var gothKid: GameObject;
var ponytailGirl: GameObject;
//var DoTheyLikeHugs;


function Start () {


spawnKid();



}

function Update(){


}

function spawnKid(){

var randInt: int = Random.Range(0, 4);


if(randInt > 2){
  Instantiate(gothKid, Vector3(-13, 0, 0), Quaternion.identity);
  Debug.Log("Do they like hugs ?" + this.gothKid.tag);

}

else{

	Instantiate(ponytailGirl, Vector3(-13, 0, 0), Quaternion.identity);
	
	Debug.Log("Do they like hugs " + this.ponytailGirl.tag);

	
	}
	


}




