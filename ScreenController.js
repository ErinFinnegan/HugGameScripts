#pragma strict


//var onoff : boolean; 
var LoseScreen : GameObject;
var WinScreen : GameObject;
var LoseScreen2 : GameObject;
var WinScreen2 : GameObject;
var GameSelectScreen : GameObject;

var GameOverTimer: int;



function Start () {
  LoseScreen.SetActive(false); 
  WinScreen.SetActive(false); 
  LoseScreen2.SetActive(false); 
  WinScreen2.SetActive(false); 
  GameSelectScreen.SetActive(false); 
  
  GameOverTimer = 0;
    
}


function Update () { 


if (GetComponent(PlayerMovement).currentRep < 0 || GetComponent(GummyController).score < 0){
//	onoff == true;
  	LoseScreen2.SetActive(true);
  	
  	GameOverTimer = GameOverTimer + 1;
    
    } else {
    
 //   onoff == false;
    LoseScreen2.SetActive(false); 
       
    }
    
 if(GameOverTimer > 300){

  LoseScreen2.SetActive(true);
 
   } else {
    
    LoseScreen2.SetActive(false); 
       
    }
    
    
    if (GetComponent(PlayerMovement).currentRep > 1000){
//	onoff == true;
  	WinScreen.SetActive(true); 
  	
  	GameOverTimer = GameOverTimer + 1;
    
    } else {
    
 //   onoff == false;
    WinScreen.SetActive(false); 
       
    }
//   Debug.Log("GameOverTimer " + GameOverTimer);
   
   if (GameOverTimer > 300){
   	Application.LoadLevel("GameSelect");
   	GetComponent(PlayerMovement).currentRep = 300;
   }
}

