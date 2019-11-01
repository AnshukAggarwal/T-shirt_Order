/*

	Your JavaScript will go here!
	To learn more about JavaScript, please visit this link
	
	https://www.w3schools.com/js/default.asp
	
*/
/*
window.onload = getready;

function getready(){
	*/

//get elements to be used.


/*var blackTshirt=document.getElementById("black");
var TshirtImg=document.getElementById("merch_image");
blackTshirt.onclick=updateBlack;
var TshirtColour=document.getElementById("tshirt_colour");

var whiteTshirt=document.getElementById("white");
whiteTshirt.onclick=updateWhite;

var redTshirt=document.getElementById("red");
redTshirt.onclick=updateRed;

var blueTshirt=document.getElementById("blue");
blueTshirt.onclick=updateBlue;

var greenTshirt=document.getElementById("green");
greenTshirt.onclick=updateGreen;

var purpleTshirt=document.getElementById("purple");
purpleTshirt.onclick=updatePurple;

//white t-shirt

function updateWhite(){
	if (whiteTshirt.checked == true){
	TshirtImg.src="images/tshirt-white.png"	
	TshirtColour.innerHTML="White";
		
	}
	
	
}
//black t-shirt
function updateBlack(){
	if (blackTshirt.checked == true){
		TshirtImg.src="images/tshirt-black.png";
		TshirtColour.innerHTML="Black"
	}
}
//red t-shirt
function updateRed(){
	if (redTshirt.checked == true){
		TshirtImg.src="images/tshirt-red.png";
		TshirtColour.innerHTML="Red"
	}
}

//blue t-shirt

function updateBlue(){
	if (blueTshirt.checked == true){
		TshirtImg.src="images/tshirt-blue.png";
		TshirtColour.innerHTML="Blue"
	}
}
//green t-shirt

function updateGreen(){
	if (greenTshirt.checked == true){
	TshirtImg.src="images/tshirt-green.png";
	TshirtColour.innerHTML="green"
		
	}
	
}

//purple t-shirt

function updatePurple(){
	if (purpleTshirt.checked == true){
		TshirtImg.src="images/tshirt-purple.png";
		TshirtColour.innerHTML="Purple"
	}
	
}*/

//get the elements to be used.

var radioOnchange="colourchange";


function colourchange(){
	//get the input in a variable
	var user_Inputs=document.getElementsByTagName("input");
	
	//a loop for every input
	for (i=0;i<user_Inputs.length;i++){
		//check if the input is a radio.
		if(user_Inputs[i].type=="radio"){
			//check if the radio button is checked.
			if(user_Inputs[i].checked){
				
				//objective:To change the image as per the colour selected
				
				var TshirtImg=document.getElementById("merch_image");
				TshirtImg.src="images/tshirt-"+user_Inputs[i].value+".png";
				var TshirtColour=document.getElementById("tshirt_colour");
				TshirtColour.innerHTML=user_Inputs[i].value;
				
				
			}
		}
		else{
			continue;
		}
		
	}
}
var sizeOnchange="sizeChange";

function sizeChange(){
	
	var user_Size=document.getElementById("size").value;
	
	
	var TshirtSize=document.getElementById("tshirst_size");
		
		
		TshirtSize.innerHTML=user_Size;	
		
		}
		
var styleOnchange="styleChange";
	function styleChange(){
		
		var user_Style=document.getElementById("style").value;
		
		var TshirtStyle=document.getElementById("tshirt_style");
		
		TshirtStyle.innerHTML=user_Style+" "+"T-shirt";
		
		
	}
		


/*
	
}
*/