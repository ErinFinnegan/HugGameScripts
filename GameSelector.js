#pragma strict

//var select1 : KeyCode;
//var select2 : KeyCode;



function Start () {
//
// select1 = KeyCode.LeftArrow;
// select2 = KeyCode.RightArrow;
//
}

function Update () {

 Debug.Log("This started");
		if (Input.GetKey (KeyCode.LeftArrow)) {
		//	Debug.Log("up arrow key is held down");
		  Application.LoadLevel("Main");
			
			}

		if (Input.GetKey (KeyCode.RightArrow)) {
		//	Debug.Log("down arrow key is held down");
		Application.LoadLevel("May3rd");
	
	}
 } 