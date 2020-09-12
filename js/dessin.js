// Mise en place et création d'un canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');


// Ombres portées
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 4; // Etendue du flou
ctx.shadowColor = 'black'; // Couleur de l'ombre


// Tracé de forme géométriques
ctx.fillStyle = 'crimson';
ctx.fillRect(10, 10, 200, 100); // x, y, largeur, hauteur


// Tracé de lignes
ctx.beginPath(); // Début d'un nouveau tracé
ctx.moveTo(100, 150); // Place le "stylo" en (100, 150)
ctx.lineTo(200, 250); // Ligne jusqu'au point (200; 250)
ctx.lineTo(400, 250); // Ligne jusqu'au point (400; 250)
ctx.lineTo(500, 150); // Ligne jusqu'au point (500; 150)
// Style des lignes
ctx.lineWidth = 10;
ctx.lineCap = 'round'; // round | butt | square
ctx.strokeStyle = 'blue';

// Rempli le polygone dessiné (automatiquement fermé)
ctx.fillStyle = 'cyan';
ctx.fill(); //Si placé après le stroke, le fill passe au dessus des lignes tracées

ctx.stroke(); // Tracé des lignes


// Autre façon de tracer un rectangle
ctx.beginPath();

ctx.rect(500, 300, 90, 90);
ctx.rect(450, 250, 90, 90); // Deuxième rectangle ; chevauche le premier (les bordures fusionnnent)

ctx.strokeStyle = 'black';
ctx.fillStyle = 'green';
ctx.lineWidth = 10;

ctx.stroke();
ctx.fill();


// Tracé d'arc de dercle
ctx.beginPath();

let x = canvas.width / 8; // divisé par 8 et pas 4 pour que le centre soit à l'intérieur (et non pas sur) du quart gauche
let y = canvas.height * 3 / 4;
let rayon = 40;
let angleFrom = 1.5 * Math.PI; // 3pi/2
let angleTo = Math.PI;
antiClockWise = false;

ctx.arc(x, y, rayon, angleFrom, angleTo, antiClockWise);
ctx.strokeStyle = 'purple';
ctx.stroke();


// Dessiner du texte
const msg = "20°C";
x = canvas.width/2;
y = canvas.height/2;

ctx.font = "48px sans-serif";
ctx.lineWidth = 2;
ctx.fillStyle = 'grey';
ctx.textAlign = 'center'; // centré horizontalement
ctx.textBaseline = 'middle'; // centré verticalement

ctx.fillText(msg, x, y);


// Ligne au dessus du texte
ctx.beginPath();
const widthText = ctx.measureText(msg).width;
const heightText = ctx.measureText(msg).actualBoundingBoxAscent + 10;
ctx.moveTo(x - widthText / 2, y - heightText);
ctx.lineTo(x + widthText / 2, y - heightText);

ctx.strokeStyle = 'grey';
ctx.lineWidth = 3;
ctx.stroke();


// Effacer une zone du canvas
//ctx.clearRect(100, 100, 300, 300);


// Dessiner le contenu d'une image
const image = new Image();
image.src = "ressources/pandacoffee.jpg";

// Taille de l'image
let ratio = image.width / image.height;
let width = canvas.width * 0.15;
let height = width / ratio;

x = canvas.width * 3 / 4;
y = 10;

image.onload = function() {
	ctx.drawImage(this, x, y, width, height);
}