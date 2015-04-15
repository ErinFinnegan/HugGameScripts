#pragma strict

var speed :  float= 0.2;
//var p : Vector3;
var waitTime = 0;

function Start () {

}

function Update () {

waitTime = Time.time;


 if(waitTime > 2) {
 
	transform.Translate(Vector3.left*speed);
	//Debug.Log("left!");
	
	//Debug.Log("Goth pos = " + this.transform.position);
	
//	if(Vector3.x < -10) {
//	speed*=-1;
//	}

	if(this.transform.position[0] > 10 || this.transform.position[0] < -10) {
	speed*=-1;
   }

 }

}

function OnCollisionEnter2D(coll : Collision2D){

if(coll.gameObject.tag == "Wall"){

Debug.Log("wall!");

speed*=-1;
}

}