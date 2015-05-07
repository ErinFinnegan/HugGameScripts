#pragma strict

var girlAnimator: Animator;

girlAnimator.GetComponent(Animator);



function Start () {

girlAnimator.SetBool("HugBack", false);

}

function Update () {


if(KidMovement.GotAHug == true){

girlAnimator.SetBool("HugBack", true);
}

else{

girlAnimator.SetBool("HugBack", false);
}

//Debug.Log(KidMovement.GotAHug);

}