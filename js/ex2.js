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
    yPos: 100
}


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

drawCheckerBoard(cherckerBoard);
drawPlayer(player);
