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
		if (Input.GetKey (KeyCode.Alpha1) || Input.GetKey (KeyCode.Alpha2) || Input.GetKey (KeyCode.Alpha3) || Input.GetKey (KeyCode.Alpha4)  || Input.GetKey (KeyCode.Alpha5)   || Input.GetKey (KeyCode.Alpha6)) {
		//	Debug.Log("up arrow key is held down");
		  Application.LoadLevel("GummyMain");
			
			}

		if (Input.GetKey (KeyCode.RightArrow) || Input.GetKey (KeyCode.LeftArrow)) {
		//	Debug.Log("down arrow key is held down");
		Application.LoadLevel("May7th");
	
	}
 } 