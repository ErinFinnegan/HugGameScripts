﻿#pragma strict

var audio1 : AudioClip; 
var audio2 : AudioClip; 

static var KidTimer: int;

//var GotAHug : boolean = false;
static var GotAHug : boolean;

var WhoWantsHug: int;

//var KidAnimator : Animator;


static var LikesHugs: boolean = true;

//var animator : Animator;

//animator.GetComponent(Animator);

function Start() {
   //WhoWantsHug = GameObject.FindGameObjectsWithTag("LikesHugs").Length;
 // KidTimer = Time.time;

//  Debug.Log("When the fuck is Start called");

}

function Update () {
 
//   	Debug.Log("Time.time = " + Time.time);
//	Debug.Log("KidTimer in KidMovement = " + KidTimer);
	
	
if(this.transform.position.x < 0){

transform.Translate(Vector3.right* 0.5);

} else {

	if(this.transform.position[0] >= -0.5 && this.transform.position[0] <= 1 && PlayerMovement.HugState == true ){
	//&& playerOne.HugState == true
//	Debug.Log("You hugged this person!!");
		GotAHug = true;
//	        KidAnimator.SetBool("HugBack", true);
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



if(GetComponent(GameController).KidTimer > 120){

///Debug.Log("This is when the kid should move off screen");
//Debug.Log("Time.time - GetComponent(GameController).KidTimer" + (Time.time - GetComponent(GameController).KidTimer));

transform.Translate(Vector3.right*0.5);



}

if(GotAHug == true){  //this is the working code
//  GetComponent(GameController).KidTimer = 0;
//  Debug.Log("Right before Rep get called");
  RepFunction();
 //     KidAnimator.SetBool("HugBack", false);
 // animator.SetBool("GotHug", false);
  Destroy(gameObject, 3);
  PlayerMovement.HugState = false;
  }  
  

if(this.transform.position.x > 13){  
//if(this.transform.position.x > 13 || GotAHug == true){  //this is the working code
//  GetComponent(GameController).KidTimer = 0;
//  Debug.Log("Right before Rep gets called");
  RepFunction();
  Destroy(gameObject, 3);
  PlayerMovement.HugState = false;
 // animator.SetBool("GotHug", false);
  }  
  
  
  
// if(this.transform.position.x > 13 && GotAHug == false) {  
//   DidntHugFunction();
//   Destroy(gameObject);
//  }


}


//function DidntHugFunction() {
//  if (WhoWantsHug <= 0) {
//    //this person hates hugs and you did well not to give them one
//      GetComponent(PlayerMovement).currentRep += 1;    
//  }   else {
//    //this person liked hugs and you didn't give them one!
//   	 GetComponent(PlayerMovement).currentRep -= 1;
//   	 PlayerMovement.Damage();
//  }
//}


function RepFunction(){
//  Debug.Log("Rep is called who wants hugs? " + LikesHugs);
  if (LikesHugs == true && GotAHug == true){
 //     Debug.Log("This person loves hugs and got one CurrentRep " + GetComponent(PlayerMovement).currentRep);
      GetComponent(PlayerMovement).currentRep += 1;
 //     audio.PlayOneShot(audio1);
      //audio1.Play();
      
  }
 // else { // this did not work as an else statement!!
 
 if (LikesHugs == false && GotAHug == false){
//   	 Debug.Log("This person hates hugs and was glad not to be hugged. CurrentRep " + GetComponent(PlayerMovement).currentRep);
   	 GetComponent(PlayerMovement).currentRep += 1;
   	 //PlayerMovement.Damage();
//   	 audio.PlayOneShot(audio1);
   	// audio1.PlayOneShot;
  }
  if (LikesHugs == true && GotAHug == false){
//      Debug.Log("This person wanted a hug and didn't get one " + GetComponent(PlayerMovement).currentRep);
      GetComponent(PlayerMovement).currentRep -= 1;
      //audio2.Play();
//      audio.PlayOneShot(audio2);
  }
  
 if (LikesHugs == false && GotAHug == true){
//   	 Debug.Log("This person hates hugs and you gave them one anyway. CurrentRep " + GetComponent(PlayerMovement).currentRep);
   	 GetComponent(PlayerMovement).currentRep -= 1;
   	 //PlayerMovement.Damage();
   	 //audio2.Play();
   //	 audio.PlayOneShot(audio2);
  }
 }