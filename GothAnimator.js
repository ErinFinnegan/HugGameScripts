#pragma strict

var gothAnimator: Animator;

gothAnimator.GetComponent(Animator);



function Start () {

gothAnimator.SetBool("Wiggle", false);

}

function Update () {


if(KidMovement.GotAHug == true){

gothAnimator.SetBool("Wiggle", true);
}

else{

 gothAnimator.SetBool("Wiggle", false);
}

//Debug.Log(KidMovement.GotAHug);

}