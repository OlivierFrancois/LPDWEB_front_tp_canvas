// Mise en place et création d'un canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

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


