const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//Objet contenant les propriétés du damier
const cherckerBoard = {
    color: '#008B8B',
    size: 10,  
}

//Objet contenant les propriétés du player
const player1 = {
    radius: (canvas.height / 10) / 2,
    dRadius: 100,
    color: 'crimson',
    xPos: 3 * canvas.width / 4,
    yPos: 3 * canvas.height / 4,
    dx: 250,
    dy: 250,
    up: false,
    down: false,
    left: false,
    right: false,
    grow: false,
    shrink: false
}
const player2 = {
    radius: (canvas.height / 10) / 2,
    dRadius: 100,
    color: 'darkorange',
    xPos: canvas.width / 4,
    yPos: canvas.height / 4,
    dx: 250,
    dy: 250,
    up: false,
    down: false,
    left: false,
    right: false,
    grow: false,
    shrink: false
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
    // Player 1
    if (e.keyCode === 38)
        player1.up = true;

    if (e.keyCode === 40)
        player1.down = true;

    if (e.keyCode === 39)
        player1.right = true;

    if (e.keyCode === 37)
        player1.left = true;

    // Player 2
    if (e.keyCode === 90)
        player2.up = true;

    if (e.keyCode === 83)
        player2.down = true;

    if (e.keyCode === 68)
        player2.right = true;

    if (e.keyCode === 81)
        player2.left = true;


    if (e.keyCode === 107) {
        player1.grow = true;
        player2.grow = true;
    }

    if (e.keyCode === 109) {
        player1.shrink = true;
        player2.shrink = true;
    }
}
function keyUpHandler(e)
{
    // Player 1
    if (e.keyCode === 38)
        player1.up = false;

    if (e.keyCode === 40)
        player1.down = false;

    if (e.keyCode === 39)
        player1.right = false;

    if (e.keyCode === 37)
        player1.left = false;

    // Player 2
    if (e.keyCode === 90)
        player2.up = false;

    if (e.keyCode === 83)
        player2.down = false;

    if (e.keyCode === 68)
        player2.right = false;

    if (e.keyCode === 81)
        player2.left = false;

    if (e.keyCode === 107) {
        player1.grow = false;
        player2.grow = false;
    }

    if (e.keyCode === 109) {
        player1.shrink = false;
        player2.shrink = false;
    }
}

//____________________________ Position du joueur ____________________________//
function MovePlayer (player, deltaTime) {

    if (player.up && ((player.yPos - player.radius) > 0))
        player.yPos -= player.dy * deltaTime;
        
    if (player.down && ((player.yPos + player.radius) < canvas.height))
        player.yPos += player.dy * deltaTime;

    if (player.left && ((player.xPos - player.radius) > 0))
        player.xPos -= player.dx * deltaTime; 

    if (player.right && ((player.xPos + player.radius) < canvas.width))
        player.xPos += player.dx * deltaTime;

    // TO DO : Normaliser le vecteur de déplacement
}

//____________________________ Taille du joueur ____________________________//
function SizePlayer(player, deltaTime) {
    if (player.grow) {
        player.radius += player.dRadius * deltaTime;
    }

    // Si le player appuie sur shrink et que son rayon ne deviendra pas négatif
    if (player.shrink && (player.radius > player.dRadius * deltaTime)) {
        player.radius -= player.dRadius * deltaTime;
    }
}


//____________________________ Main ____________________________//
function main() {
    currentTime = new Date();
    deltaTime = (currentTime - previousTime) / 1000;
    previousTime = currentTime;
    
    //console.log(deltaTime);

    // On commence par tout effacer
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Modification sur le joueur
    MovePlayer(player1, deltaTime);
    MovePlayer(player2, deltaTime);
    SizePlayer(player1, deltaTime);
    SizePlayer(player2, deltaTime);

    // Dessin
    drawCheckerBoard(cherckerBoard);
    drawPlayer(player1);
    drawPlayer(player2);
    requestAnimationFrame(main);
}

main();