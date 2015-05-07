#pragma strict


var onoff : boolean; 
var screenObject : GameObject;

//function Start () {

//}


function Update () { 


if (GetComponent(PlayerMovement).currentRep < 0){
//	onoff == true;
  	screenObject.SetActive(true); 
    
    } else {
    
 //   onoff == false;
    screenObject.SetActive(false); 
       
    }
    
}

