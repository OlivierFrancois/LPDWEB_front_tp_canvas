// Création d'un p pour stocker les informations du curseur
let localX = document.getElementById('local-x');
let localY = document.getElementById('local-y');

let globalX = document.getElementById('global-x');
let globalY = document.getElementById('global-y');

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


// Position de la souris
canvas.addEventListener('mousemove', (e) => {
	// Position globale (dans la fenêtre)
	globalX.innerText = e.clientX;
	globalY.innerText = e.clientY;

	//Position locale (dans le canvas)
	let offset = [canvas.offsetLeft, canvas.offsetTop];
	localX.innerText = e.clientX - offset[0];
	localY.innerText = e.clientY - offset[1];
})


// Dessin de cercles
let circles = [];

canvas.addEventListener('click', (e) => {
	// Rayon et couleur aléatoires
	const max = 100;
	let randomRadius = Math.floor(Math.random() * Math.floor(max));
	let randomColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)

	// Tracé du cercle
	ctx.beginPath();
	ctx.fillStyle = randomColor;
	let x = e.clientX - canvas.offsetLeft;
	let y = e.clientY - canvas.offsetTop;
	let angleFrom = 0;
	let angleTo = 2 * Math.PI;
	ctx.arc(x, y, randomRadius, angleFrom, angleTo, false);
	ctx.fill();

	// Stockage du cercle tracé
	let circle = {
		color: randomColor,
		radius: randomRadius,
		x: x,
		y: y
	};
	circles.push(circle);
})


//Affichage des dessins dans le select
let select = document.getElementById('select-draw');

for (let i = 0; i < localStorage.length; i++) { // Créer une option pour chaque élément stocké
	let newOption = document.createElement('option');

	newOption.setAttribute('value', localStorage.key(i));
	newOption.innerText = localStorage.key(i);

	select.appendChild(newOption);
}


// Bouton save
let saveBtn = document.getElementById('save-draw');

saveBtn.addEventListener('click', () => {
	// Le texte contenu dans l'input devient le nom de l'élément stocké
	// Le tableau de cercles est converti en JSON
	let title = document.getElementById('title-save').value;
	localStorage.setItem(title, JSON.stringify(circles));
})


// Bouton load
let loadBtn = document.getElementById('load-select');

loadBtn.addEventListener('click', () => {
	// Récupération du nom du dessin via le select
	let title = document.getElementById('select-draw').value;
	circles = JSON.parse(localStorage.getItem(title));

	// Chaque cercle contenu dans le tableau récupéré est redessiné
	circles.forEach(circle => {
		ctx.beginPath();
		ctx.fillStyle = circle.color;
		let angleFrom = 0;
		let angleTo = 2 * Math.PI;
		ctx.arc(circle.x, circle.y, circle.radius, angleFrom, angleTo, false);
		ctx.fill();
	})
});