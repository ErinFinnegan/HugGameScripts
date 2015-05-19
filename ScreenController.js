#pragma strict


//var onoff : boolean; 
var LoseScreen : GameObject;
var WinScreen : GameObject;
//var LoseScreen2 : GameObject;
//var WinScreen2 : GameObject;
//var GameSelectScreen : GameObject;

var GameOverTimer: int;



function Start () {
  LoseScreen.SetActive(false); 
  WinScreen.SetActive(false); 
 // LoseScreen2.SetActive(false); 
 // WinScreen2.SetActive(false); 
 // GameSelectScreen.SetActive(false); 
  
  GameOverTimer = 0;
    
}


function Update () { 

Debug.Log("Game Over Timer " + GameOverTimer);

if (GetComponent(PlayerMovement).currentRep < -10){
//	onoff == true;
  	LoseScreen.SetActive(true);
  	
  	GameOverTimer = GameOverTimer + 1;
    
    } else {
    
 //   onoff == false;
    LoseScreen.SetActive(false); 
       
    }
    
 if(GameOverTimer > 150){

  LoseScreen.SetActive(true);
 
   } else {
    
    LoseScreen.SetActive(false); 
       
    }
    
    
    if (GetComponent(PlayerMovement).currentRep > 9000){
//	onoff == true;
  	WinScreen.SetActive(true); 
  	
  	GameOverTimer = GameOverTimer + 1;
    
    } else {
    
 //   onoff == false;
    WinScreen.SetActive(false); 
       
    }
  Debug.Log("GameOverTimer " + GameOverTimer);
   
   if (GameOverTimer > 600){
   	Application.LoadLevel("GameSelect");
   	GetComponent(PlayerMovement).currentRep = 300;
   }
}

