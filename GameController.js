#pragma strict


var gothKid: GameObject;
var ponytailGirl: GameObject;



function Start () {


spawnKid();


}

function Update(){






}

function spawnKid(){

var randInt: int = Random.Range(0, 4);


if(randInt > 2){
  Instantiate(gothKid, Vector3(-13, 0, 0), Quaternion.identity);
}

else{

	Instantiate(ponytailGirl, Vector3(-13, 0, 0), Quaternion.identity);
	}

}




