var myGamePiece;

function startGame() {
	myGameArea.start();
	myGamePiece = new component(30, 30, "red", 10, 120);
	readTextFile("planets.json")
}

var myGameArea = {
	canvas : document.getElementById("solarSystem"),
	start : function() {
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	}
}
function readTextFile(o)
{
	$.getJSON("planets.json", function(json) {
		console.log(json); // access the response object
		//console.log(json.data); // access the array
		var scale = 1*Math.pow(10,-4);
		var planetTest = JSON.parse(json);
		console.log(planetTest.radius * scale);
		myGamePiece = new component(planetTest.radius*scale, planetTest.radius*scale, planetTest.color,planetTest.x + 700,planetTest.y + 350);
		//j		        console.log(json.data[0]); // access the first object of the array
		//      console.log(json.data[0].number); // access the first object proprty of the array
	});
}

function showDataFile(e, o)
{
	console.log("asfaesf");
	console.log(e.target.result);
}
function component(width, height, color, x, y) {
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;    
	ctx = myGameArea.context;
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x,y,width,0,2*Math.PI);
	ctx.fill();
	//ctx.fillRect(this.x, this.y, this.width, this.height);
}

