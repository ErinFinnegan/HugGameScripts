#pragma strict


var KidTimer: int;

//var GotAHug : boolean = false;
var GotAHug : boolean;

//var animator : Animator;

//animator.GetComponent(Animator);

function Start () {

KidTimer = Time.time;

}

function Update () {


if(this.transform.position.x < 0){

transform.Translate(Vector3.right* 0.05);

} else {

	if(this.transform.position[0] >= -0.5 && this.transform.position[0] <= 1 && PlayerMovement.HugState == true ){
	//&& playerOne.HugState == true
//	  animator.SetBool("GotHug", true);
//	Debug.Log("You hugged this person!!");
//		GotAHug = true;
//	} else {
//		animator.SetBool("GotHug", false);
	  // Debug.Log("You did not hug this person!!");
	//   GotAHug = false;
	//}
	//Debug.Log("Begin the hugging countdown! KidTimer = " + KidTimer);
  	//KidTimer++;
	//KidTimer = KidTimer + 1;
//	Debug.Log("GotHug = " + animator.GotHug);
 }
}



if(Time.time - KidTimer > 10){

transform.Translate(Vector3.right*0.05);

if(GotAHug == false){
 //Debug.Log("Lose some Rep!!");
 
 } else {
 // Debug.Log("Rep goes up!!");

 }


}



if(this.transform.position.x > 13){


Destroy(gameObject);

}

}