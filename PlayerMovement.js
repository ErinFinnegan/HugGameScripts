﻿
#pragma strict

var moveLeft : KeyCode;
var moveRight: KeyCode;

var speed: float=1;

var shoot: KeyCode;
var shootTime : float = 0;


var fireball : GameObject;

var animator : Animator;

animator.GetComponent(Animator);
//animator.GetComponentInChildren(Animator);


function Start () {


}

function Update () {


//Maybe I need to declare a boolean??
//boolean Hugging = Input.Get___SOMETHING?

 //animator.SetBool("Hugging", false);


if(Input.GetKey(moveLeft)){
//transform.Translate(Vector3.left*speed);
//animator.SetFloat("Speed", -100)
//Debug.Log("left");
 animator.SetBool("Hugging", true);
  animator.SetBool("HugState", true);

}

else if(Input.GetKey(moveRight)){
//transform.Translate(Vector3.right*speed);
 animator.SetBool("Hugging", true);
   animator.SetBool("HugState", true);
//animator.SetFloat("Speed", 100);
//Debug.Log("right");


}

//
//else if(Input.GetKey(shoot)){
//
////animator.SetBoolean  ("Speed", -100)
//
////animator.SetBool(true);
//
//if(Time.time - shootTime > 0.15){
//	Instantiate(fireball, transform.position, Quaternion.Euler(0, 0, 90));
//	shootTime = Time.time;
//}
//}

else{

animator.SetBool("Hugging", false);
animator.SetBool("HugState", false);
//speed = 0;
//animator.SetFloat("Speed", 0);

}
}

function OnCollisionEnter2D(coll : Collision2D){
if(coll.gameObject.tag == "Wall"){

Debug.Log("wall!");

speed*=-1;
}

}