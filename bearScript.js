#pragma strict

static var speed : float;
var currentRotation : float;

function Start(){

speed = 2;

}



 
 

function Update () {

 //speed = speed * GummyController.score;

 //Debug.Log(speed);
	
	}

function OnCollisionEnter2D(coll : Collision2D){


//if (gummybear is blue){

//if(this part of the hexagon is blue for a ){

	
	
	if(coll.gameObject.tag == "Player"){
	
//	GameController.Score();
	GummyController.deadBear = true;
	
	Destroy(gameObject);
	
	
	}



}

 //limting the rotation/angle it rotates.
// function FixedUpdate(){
//  
// currentRotation = rigidbody.transform.eulerAngles.z;
// Debug.Log(currentRotation);
// 
//   if(currentRotation < -100)
//     rigidbody.transform.eulerAngles.z = -100;
//   else if(currentRotation > 100)
//     rigidbody.transform.eulerAngles.z = 100; 
// }