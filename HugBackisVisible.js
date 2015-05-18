#pragma strict


//var onoff : boolean; 
static var HugBackSprite : GameObject;


function Start () {
  HugBackSprite.SetActive(false); 
    
}


function Update () { 
    
}

function SpawnHugBack(){

 // if (GetComponent((ponytailAnimator).girlAnimator).HugBack == true){

  //GetComponent(GameController).KidTimer
  //	onoff == true;
  	HugBackSprite.SetActive(true); 
    
 //   } else {
    
  //   onoff == false;
 //   HugBackSprite.SetActive(false); 
       
 //   }
}

function StopHugBack(){
  	HugBackSprite.SetActive(false); 

}

