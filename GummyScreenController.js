#pragma strict


//var onoff : boolean; 
var LoseScreen : GameObject;
var WinScreen : GameObject;
var InstructionScreen : GameObject;

var GameOverTimer: int;





function Start () {
  LoseScreen.SetActive(false); 
  WinScreen.SetActive(false); 
  InstructionScreen.SetActive(true); 
  
  GameOverTimer = 0;
    
}


function Update () { 

if (GetComponent(GummyController).timer == 0){
 //if (GetComponent(GummyController).timer == 0  && GetComponent(GummyController).score<=0){
 //	Debug.Log("Instructions activate!!!!!");

    InstructionScreen.SetActive(false);   
 }


if (GetComponent(GummyController).score <10 && GummyController.gummytimer==0 	){
//	onoff == true;
  	LoseScreen.SetActive(true);
  	
  	GameOverTimer = GameOverTimer + 1;
    
    } else {
    
 //   onoff == false;
    LoseScreen.SetActive(false); 
       
    }
    
 
 //
 //
    
//    if( GummyController.winscreen==true){
   //if (GetComponent(GummyController).winscreen == true){
   if ( GummyController.score==10 && GummyController.gummytimer==0){
//	onoff == true;

  	WinScreen.SetActive(true); 
  	//Application.LoadLevel("GummyWINSCREEN");
  	
  	GameOverTimer = GameOverTimer + 1;
  	
    
    } else {
    
 //   onoff == false;
    WinScreen.SetActive(false); 
       
    }
   Debug.Log("GameOverTimer " + GameOverTimer);
   
   if (GameOverTimer > 300){
   	Application.LoadLevel("GameSelect");
   	GetComponent(GummyController).score = 0;
   }
}

