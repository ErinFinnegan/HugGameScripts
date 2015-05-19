#pragma strict

var girlAnimator: Animator;
var HugBackArms : GameObject;
var armHangTime : float;
//var cloneArms : EmptyGameObject; 

girlAnimator.GetComponent(Animator);



function Start () {

var cloneArms = Instantiate(HugBackArms,  Vector3(-0.32, 0, 0), Quaternion.identity);
  
girlAnimator.SetBool("HugBack", false);
 HugBackArms.SetActive(false);
//   Debug.Log("No hugbackarms!");

 //armHangTime = 0.5;

}

function Update () {


if(KidMovement.GotAHug == true){

  girlAnimator.SetBool("HugBack", true);
 
 	ArmsFunction();
 //   Destroy(HugBackArms, 3);
 // HugBackArms.SetActive(true); 
  
 // Debug.Log("THis is where the hug back arms should appear!");
 
// GetComponent(HugBackIsVisible).SpawnHugBack();
 

}

else{

girlAnimator.SetBool("HugBack", false);
 HugBackArms.SetActive(false); 
 //  Debug.Log("And then disappear!");
 
 //if (cloneArms != null){
//  DestroyArms();
  
 // }
}

//Debug.Log(KidMovement.GotAHug);

}

function ArmsFunction(){

//  HugBackArms.SetActive(true);  //commenting this out because it was too unpredictable

//  HugBackArms = Vector3(-0.32, 0, 0), Quaternion.identity;
  
 yield WaitForSeconds(1);
  
    HugBackArms.SetActive(false);

}

//function DestroyArms(){
//    Destroy(cloneArms); 
//}




