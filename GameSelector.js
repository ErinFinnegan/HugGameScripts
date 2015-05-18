#pragma strict

//var select1 : KeyCode;
//var select2 : KeyCode;

//var currentKey : KeyCode;
//var lastKey : KeyCode;


function Start () {

//

// currectKey = the key pressed when this launches

// select1 = KeyCode.LeftArrow;
// select2 = KeyCode.RightArrow;
//
}

function Update () {

//currentKey = Input.GetKey();
//Debug.Log(currentKey);

// Debug.Log("This started");

 // if (currentKey != lastKey)
    if (Input.GetKey (KeyCode.Alpha6)) {
		//	Debug.Log("up arrow key is held down");
		  Application.LoadLevel("GummyMain");
			
			}

		if (Input.GetKey (KeyCode.RightArrow) || Input.GetKey (KeyCode.LeftArrow)) {
		//	Debug.Log("down arrow key is held down");
		Application.LoadLevel("May7th 10");
	
	}
	
}
//   }
// } 