const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//Objet contenant les propriétés du damier
const cherckerBoard = {
    color: '#008B8B',
    size: 10,  
}

//Objet contenant les propriétés du player
const player = {
    radius: (canvas.height / 10) / 2,
    color: 'crimson',
    xPos: 100,
    yPos: 100,
    dx: 250,
    dy: 250,
    up: false,
    down: false,
    left: false,
    right: false
}

// Variables permettant de gérer le framerate dans la fonction main
let previousTime = 0;
let currentTime = new Date();
let deltaTime = 0;


//____________________________ Dessin du damier ____________________________//

function drawCheckerBoard (cherckerBoard) {
    ctx.fillStyle = cherckerBoard.color;
    const wCell = canvas.width / cherckerBoard.size;
    const hCell = canvas.height / cherckerBoard.size;


    let fillCell = true; // Booléen servant à définir si la cellule du i, j du damier doit être remplie ou non
    for (let i = 0; i < Math.floor(canvas.width / cherckerBoard.size); i++) {
        for (let j = 0; j < Math.floor(canvas.height / cherckerBoard.size); j++) {
            // Si la cellule est à remplir, on remplit puis on toggle fillCell
            if (fillCell) {
                ctx.fillRect(i*wCell, j*hCell, wCell, hCell);
                fillCell = !fillCell;
            }
            else {
                fillCell = !fillCell;
            }
        }
        // Sans cette ligne, on ne dessine que des rangées de couleur
        fillCell = !fillCell;
    }
}


//____________________________ Dessin du player ____________________________//

function drawPlayer(player) {
    ctx.beginPath();

	ctx.fillStyle = player.color;
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    
    ctx.arc(player.xPos, player.yPos, player.radius, 0, 2 * Math.PI, false);
    
    ctx.fill();
    ctx.stroke();
}


//____________________________ Gestion des inputs ____________________________//
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e)
{
    switch (e.keyCode) {
        case 38 : //Flèche haut
            //console.log('Flèche du haut pressée');
            player.up = true
            break;
        case 40 : //Flèche bas
            //console.log('Flèche du bas pressée');
            player.down = true
            break;
        case 39 : //Flèche droite
            //console.log('Flèche du droite pressée');
            player.right = true
            break;
        case 37 : //Flèche gauche
            //console.log('Flèche du gauche pressée');
            player.left = true
            break;
    }
}
function keyUpHandler(e)
{
    switch (e.keyCode) {
        case 38 : //Flèche haut
            //console.log('Flèche du haut pressée');
            player.up = false
            break;
        case 40 : //Flèche bas
            //console.log('Flèche du bas pressée');
            player.down = false
            break;
        case 39 : //Flèche droite
            //console.log('Flèche du droite pressée');
            player.right = false
            break;
        case 37 : //Flèche gauche
            //console.log('Flèche du gauche pressée');
            player.left = false
            break;
    }
}

//____________________________ Position du joueur ____________________________//
function MovePlayer (player, deltaTime) {
    if (player.up)
        player.yPos -= player.dy * deltaTime;
    if (player.down)
        player.yPos += player.dy * deltaTime;
    if (player.left)
        player.xPos -= player.dx * deltaTime; 
    if (player.right)
        player.xPos += player.dx * deltaTime;  
}

//____________________________ Main ____________________________//
function main() {
    currentTime = new Date();
    deltaTime = (currentTime - previousTime) / 1000;
    previousTime = currentTime;
    
    //console.log(deltaTime);

    // On commence par tout effacer
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Déplacement du joueur
    MovePlayer(player, deltaTime)

    // Dessin
    drawCheckerBoard(cherckerBoard);
    drawPlayer(player);
    requestAnimationFrame(main);
}

    main();