#pragma strict


function Start () {
	// Make a game object
	var lightGameObject : GameObject = new GameObject("The Light");

	// Add the light component
	var lightComp = lightGameObject.AddComponent.<Light>();

	// Set color and position
	lightComp.color = Color.blue;

	// Set the position (or any transform property)
	lightGameObject.transform.position = Vector3(0, 5, 0);
	
	Debug.Log("Light script ran!!");
}


function Update () {

//	lightGameObject.enable;

}