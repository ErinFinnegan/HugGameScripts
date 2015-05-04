#pragma strict

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
	
	Debug.Log("Light script ran!!");
}


function Update () {

	ColorChanging();

//	lightGameObject.enable;

}

function ColorChanging(){
 
 var colorA = Color.green;
 var colorB = Color.red;
 
 if(Input.GetKey(KeyCode.Alpha1)) { 
 newColor = colorA;
 }
 if(Input.GetKey(KeyCode.Alpha2)){ 
 newColor = colorB;
 }
 
 light.color = Color.Lerp(Light.color, newColor, Time.deltaTime * 2);  //2 is smoothing


}