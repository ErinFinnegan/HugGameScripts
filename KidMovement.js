#pragma strict


static var KidTimer: int;

//var GotAHug : boolean = false;
static var GotAHug : boolean;

var WhoWantsHug: int;

//var animator : Animator;

//animator.GetComponent(Animator);

function Start() {
   WhoWantsHug = GameObject.FindGameObjectsWithTag("LikesHugs").Length;
 // KidTimer = Time.time;

//  Debug.Log("When the fuck is Start called");

}

function Update () {
 
//   	Debug.Log("Time.time = " + Time.time);
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
  RepFunction();
  Destroy(gameObject);
  PlayerMovement.HugState = false;

  }

}


function RepFunction(){
  if (WhoWantsHug > 0){
      Debug.Log("This person loves hugs!! CurrentRep " + GetComponent(PlayerMovement).currentRep);
      GetComponent(PlayerMovement).currentRep += 1;
      
  } 
  else {
   	 Debug.Log("This person hates hugs!!  CurrentRep " + GetComponent(PlayerMovement).currentRep);
   	 GetComponent(PlayerMovement).currentRep -= 1;
   	 PlayerMovement.Damage();
  }
}