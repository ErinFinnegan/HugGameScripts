#pragma strict



function Start () {

}

function Update () {


if(this.transform.position.x < 0){

transform.Translate(Vector3.right* 0.05);

} else {

Debug.Log("Begin the hugging countdown!");

}


}