"use strict"

class Button{

	constructor(x, y, w, h, callback){
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		this.callback = callback
	}
	draw(){
		ctx.beginPath();
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(this.x, this.y, this.w, this.h);
		ctx.stroke();
	}
}

class Cube{

	constructor(x, y, size){
		this.x = x;
		this.y = y;
		this.size = size;
		this.a = 9.8;
		this.v = 0
	}

	draw(){
		ctx.beginPath();
		ctx.fillStyle = "#7f7f7f";
		ctx.fillRect(this.x, this.y, this.size / scale, this.size / scale);
		ctx.stroke();
	}

	physics(){
		this.v += this.a * deltaTime;
		if (this.y + this.size / scale + this.v >= canvas.height){
			this.v *= -0.8;
			this.y = canvas.height - this.size / scale
		}
		this.y += this.v
	}
}
class Circle{

	constructor(x, y, r){
		this.x = x;
		this.y = y;
		this.y = y
		this.a = 9.8;
		this.v = 0
	}

	draw(){

	}

	physics(){
		
	}
}

function start(){
	run = !run
	if (run){
		intervalId1 = setInterval(draw, deltaTime * 1000);
	} else {
		clearInterval(intervalId1)
	}
}

function draw(){
	ctx.beginPath();
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0, canvas.width, canvas.height);
	ctx.stroke();
	for (let i = 0; i < figures.length; i++){
		figures[i].draw()
		figures[i].physics()
	}
	for (let i = 0; i < buttons.length; i++){
		buttons[i].draw()
	}
}

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

canvas.width = 1200
canvas.height = 600

let deltaTime = 1/120 // 1/fps
let scale = 1/50 // m/pix
let figures = [new Cube(150, 150, 0.5), new Circle(200, 150, 0.5)]
let buttons = [new Button(10, 10, 50, 20)]
let run = false
let intervalId1