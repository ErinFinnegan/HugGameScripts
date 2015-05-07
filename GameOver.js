#pragma strict


var onoff : boolean; 
var screenObject : GameObject;

//function Start () {

//}


function Update () { 
  if (onoff == true) {
  
      screenObject.SetActive(true); 
    //GameObject.SetActive()
    
    }
    
    if (onoff == false) {
      screenObject.SetActive(false); 
       
    }

}
