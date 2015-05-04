
//Script from:  http://unity3d.com/learn/tutorials/projects/survival-shooter/game-over

var playerHealth : int;      // Reference to the player's health.
//var playerHealth : int;  
var restartDelay : float = 5f;          // Time to wait before restarting the level


private var anim : Animator;            // Reference to the animator component.
private var restartTimer : float;       // Timer to count up to restarting the level

//GetComponent(PlayerMovement).currentRep


function Awake ()
{
    // Set up the reference.
    anim = GetComponent (Animator);
    
    //playerHealth = GetComponent(PlayerMovement).currentRep;
}


function Update ()
{

  playerHealth = GetComponent(PlayerMovement).currentRep;


//	playerHealth = GetComponent(PlayerMovement).currentRep;

    // If the player has run out of health...
   // if(playerHealth.currentHealth <= 0)  //original 
     if(playerHealth <= 0)
    {
        // ... tell the animator the game is over.
        anim.SetTrigger ("GameOver");

        // .. increment a timer to count up to restarting.
        restartTimer += Time.deltaTime;

        // .. if it reaches the restart delay...
        if(restartTimer >= restartDelay)
        {
            // .. then reload the currently loaded level.
            Application.LoadLevel(Application.loadedLevel);
        }
    }
}