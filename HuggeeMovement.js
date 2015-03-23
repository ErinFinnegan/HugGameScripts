#pragma strict


public var PlayerObject: GameObject;

public var playerMovement : PlayerMovement;

var speed :  float= 3;
//var p : Vector3;
var waitTime = 0;

var animator : Animator;

animator.GetComponent(Animator);

//var playerOne: PlayerMovement = GetComponent(PlayerMovement);

//PlayerMovement = GetComponent(PlayerMovement);

//var distance = Vector3.Distance(playerOne.transform.position, this.transform.position);

function Awake (){

//	playerMovement = GetComponent(PlayerMovement);

}


function Start () {

}

function Update () {

//Debug.Log("Player1 position = " + Player1hug.transform.position);

waitTime = Time.time;
//	Debug.Log("waitTime = " + waitTime);


 if(waitTime > 2) {
 
 
  //  Debug.Log("Hug State of P1 = " + PlayerMovement.HugState);

	transform.Translate(Vector3.right*speed);
	//Debug.Log("left!");
	
	//var distance = Vector3.Distance(object1.transform.position, object2.transform.position);
//	Debug.Log(Vector2);
  // Debug.Log("Huggee pos = " + this.transform.position[0]);
	
	if(this.transform.position[0] > 10 || this.transform.position[0] < -10) {
	speed*=-1;

	}

	if(this.transform.position[0] >= -0.5 && this.transform.position[0] <= 1 && PlayerMovement.HugState == true ){
	//&& playerOne.HugState == true
	  animator.SetBool("GotHug", true);
	} else {
		animator.SetBool("GotHug", false);
	}
			
 }	
}
function OnCollisionEnter2D(coll : Collision2D){

if(coll.gameObject.tag == "Wall"){

Debug.Log("wall!");

speed*=-1;
}

}