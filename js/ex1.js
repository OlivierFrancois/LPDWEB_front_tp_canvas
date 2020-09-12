// Création d'un p pour stocker les informations du curseur
let localX = document.getElementById('local-x');
let localY = document.getElementById('local-y');

let globalX = document.getElementById('global-x');
let globalY = document.getElementById('global-y');

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Position de la souris
canvas.addEventListener('mousemove', (e) => {
	globalX.innerText = e.clientX;
	globalY.innerText = e.clientY;

	let offset = [canvas.offsetLeft, canvas.offsetTop];
	localX.innerText = e.clientX - offset[0];
	localY.innerText = e.clientY - offset[1];
})

// Dessin de cercles
canvas.addEventListener('click', (e) => {
	const max = 100;
	randomRadius = Math.floor(Math.random() * Math.floor(max));
	randomColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)

	console.log(randomColor);
	ctx.beginPath();
	ctx.fillStyle = randomColor;

	let x = e.clientX - canvas.offsetLeft;
	let y = e.clientY - canvas.offsetTop;
	let angleFrom = 0;
	let angleTo = 2 * Math.PI;

	ctx.arc(x, y, randomRadius, angleFrom, angleTo, false);
	ctx.fill();
})