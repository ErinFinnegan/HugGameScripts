#pragma strict


var KidTimer: int;

function Start () {

KidTimer = Time.time;

}

function Update () {


if(this.transform.position.x < 0){

transform.Translate(Vector3.right* 0.05);

} 

else {

	
	//Debug.Log("Begin the hugging countdown! KidTimer = " + KidTimer);
  	//KidTimer++;
	//KidTimer = KidTimer + 1;

}



if(Time.time - KidTimer > 10){

transform.Translate(Vector3.right*0.05);


}



if(this.transform.position.x > 13){


Destroy(gameObject);

}

}