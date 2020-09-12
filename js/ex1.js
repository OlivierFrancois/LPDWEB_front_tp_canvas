// Création d'un p pour stocker les informations du curseur
let localX = document.getElementById('local-x');
let localY = document.getElementById('local-y');

let globalX = document.getElementById('global-x');
let globalY = document.getElementById('global-y');

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

console.log(canvas);

canvas.addEventListener('mousemove', (e) => {
	globalX.innerText = e.clientX;
	globalY.innerText = e.clientY;

	let offset = [canvas.offsetLeft, canvas.offsetTop];
	localX.innerText = e.clientX - offset[0];
	localY.innerText = e.clientY - offset[1];;
})