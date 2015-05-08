#pragma strict


//var onoff : boolean; 
var LoseScreen : GameObject;
var WinScreen : GameObject;
var LoseScreen2 : GameObject;
var WinScreen2 : GameObject;
var GameSelectScreen : GameObject;



function Start () {
  LoseScreen.SetActive(false); 
  WinScreen.SetActive(false); 
  LoseScreen2.SetActive(false); 
  WinScreen2.SetActive(false); 
  GameSelectScreen.SetActive(false); 
    
}


function Update () { 


if (GetComponent(PlayerMovement).currentRep < 0){
//	onoff == true;
  	LoseScreen.SetActive(true); 
    
    } else {
    
 //   onoff == false;
    LoseScreen.SetActive(false); 
       
    }
    
    
    if (GetComponent(PlayerMovement).currentRep > 9000){
//	onoff == true;
  	WinScreen.SetActive(true); 
    
    } else {
    
 //   onoff == false;
    WinScreen.SetActive(false); 
       
    }
    
}

