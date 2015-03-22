
#pragma strict

//public var HugState : string;

var moveLeft : KeyCode;
var moveRight: KeyCode;

var speed: float=1;

var shoot: KeyCode;
var shootTime : float = 0;


public var fireball : GameObject;

public var HugState : boolean = false;

public var animator : Animator;

animator.GetComponent(Animator);
//animator.GetComponentInChildren(Animator);


function Start () {
//this.transform.position[0]

}

function Update () {

//Debug.Log("Player1 position = " + this.transform.position[0]);

//Maybe I need to declare a boolean??
//boolean Hugging = Input.Get___SOMETHING?

 //animator.SetBool("Hugging", false);



if(Input.GetKeyDown(moveLeft) && Input.GetKey(moveRight)){
//transform.Translate(Vector3.left*speed);
//animator.SetFloat("Speed", -100)
//Debug.Log("left");
 animator.SetBool("Hugging", true);
  animator.SetBool("HugState", true);
  Debug.Log("Proper Hug!!!");

}

else if(Input.GetKeyDown(moveLeft)){
   animator.SetTrigger("P1LeftArm");

}

else if(Input.GetKey(moveLeft)){
   animator.SetBool("LKeyDown", true);

}

else if(Input.GetKeyDown(moveRight)){
  animator.SetTrigger("P1RightArm");
 // Debug.Log("Right arm!!");
}

else if(Input.GetKey(moveRight)){
   animator.SetBool("RKeyDown", true);

}


else if(Input.GetKeyUp(moveLeft)){
   animator.SetBool("LKeyDown", false);
  // Debug.Log("left key up");

}

else if(Input.GetKeyUp(moveRight)){
   animator.SetBool("RKeyDown", false);
  // Debug.Log("left key up");

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
//animator.SetTrigger("P1RighArm");
//animator.SetTrigger("P1LeftArm");
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