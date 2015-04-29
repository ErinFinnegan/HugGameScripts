#pragma strict


static var KidTimer: int;

//var GotAHug : boolean = false;
static var GotAHug : boolean;

//var animator : Animator;

//animator.GetComponent(Animator);

function Start() {

 // KidTimer = Time.time;

//  Debug.Log("When the fuck is Start called");

}

function Update () {
 
   	Debug.Log("Time.time = " + Time.time);
//	Debug.Log("KidTimer in KidMovement = " + KidTimer);
	
	
if(this.transform.position.x < 0){

transform.Translate(Vector3.right* 0.05);

} else {

	if(this.transform.position[0] >= -0.5 && this.transform.position[0] <= 1 && PlayerMovement.HugState == true ){
	//&& playerOne.HugState == true
//  animator.SetBool("GotHug", true);
	Debug.Log("You hugged this person!!");
		GotAHug = true;
//	} else {
//		animator.SetBool("GotHug", false);
	  // Debug.Log("You did not hug this person!!");
	//   GotAHug = false;
	//}
  	//KidTimer++;
	//KidTimer = KidTimer + 1;
//	Debug.Log("GotHug = " + animator.GotHug);
 }
}



if(Time.time - GetComponent(GameController).KidTimer > 10){

transform.Translate(Vector3.right*0.05);

if(GotAHug == false){
 //Debug.Log("Lose some Rep!!");
 
 } else {
 // Debug.Log("Rep goes up!!");

 }


}



if(this.transform.position.x > 13 || GotAHug == true){

  Destroy(gameObject);
  PlayerMovement.HugState = false;

  }

}