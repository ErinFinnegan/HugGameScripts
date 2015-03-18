#pragma strict

var speed :  float= 3;
//var p : Vector3;

function Start () {

}

function Update () {

	transform.Translate(Vector3.right*speed);
	//Debug.Log("left!");
	
//	Debug.Log(Vector2);
//	Debug.Log("Huggee pos = " + this.transform.position[0]);

	
	if(this.transform.position[0] > 10 | this.transform.position[0] < -10) {
	speed*=-1;
	}


}

function OnCollisionEnter2D(coll : Collision2D){

if(coll.gameObject.tag == "Wall"){

Debug.Log("wall!");

speed*=-1;
}

}