#pragma strict
var min : int;
var max : int;
var guess : int;

function Start () {
	StartGame();
}

function StartGame () {
	min = 1;
	max = 1000;
	guess = 500;
	
	Debug.Log("==============================");
	Debug.Log("Welcome! I can read your mind.");
	Debug.Log("Pick a number from " + min + " to " + max + ", but don't tell me!");
	
	Debug.Log("Is your number higher or lower than 500?");
	Debug.Log("Up arrow for higher, down arrow for lower and return key for equal");
	
	max = max + 1;
}

function Update () {
	if (Input.GetKeyDown("up")) {
		min = guess;
		NextGuess();
	} else if (Input.GetKeyDown("down")) {
		max = guess;
		NextGuess();
	} else if (Input.GetKeyDown("return")) {
		Debug.Log("I won!");
		StartGame();
	}
}

function NextGuess () {
	guess = (max + min) / 2;
	Debug.Log("Higher or lower than " + guess + "?");
	Debug.Log("Up arrow for higher, down arrow for lower and return key for equal");
}