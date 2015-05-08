#pragma strict

//var newColor : Color = Color.white;
var newColor : Color;

function Start () {
	// Make a game object
	var lightGameObject : GameObject = new GameObject("The Light");

	// Add the light component
	var lightComp = lightGameObject.AddComponent.<Light>();

	// Set color and position
	lightComp.color = Color.blue;

	// Set the position (or any transform property)
	lightGameObject.transform.position = Vector3(0, 5, 0);
	
	newColor = light.color;
	
//	Debug.Log("Light script ran!!");
}


function Update () {

	ColorChanging();

//	lightGameObject.enable;

}

function ColorChanging(){
 
 var colorA = Color.white;
 var colorB = Color.red;
 var colorC = Color.gray;
 var colorD = Color.blue;
 
 if(Input.GetKey(KeyCode.Alpha1)) { 
 newColor = colorA;
 //	Debug.Log("You hit 1");
 }
 if(Input.GetKey(KeyCode.Alpha2)){ 
 newColor = colorB;
  //	Debug.Log("You hit 2");
 }
 
  if(Input.GetKey(KeyCode.Alpha3)) { 
 newColor = colorC;
 //	Debug.Log("You hit 1");
 }
 if(Input.GetKey(KeyCode.Alpha4)){ 
 newColor = colorD;
  //	Debug.Log("You hit 2");
 }
 // light.color = Color.Lerp(light.color, newColor, Time.time);  //2 is smoothing


}