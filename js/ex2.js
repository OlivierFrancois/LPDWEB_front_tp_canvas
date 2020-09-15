const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

// Création du damier
function drawCheckerBoard (color, checkerBoardSize) {
    ctx.fillStyle = color;
    const wCell = width / checkerBoardSize;
    const hCell = height / checkerBoardSize;


    let fillCell = true; // Booléen servant à définir si la cellule du i, j du damier doit être remplie ou non
    for (let i = 0; i < Math.floor(width/checkerBoardSize); i++) {
        for (let j = 0; j < Math.floor(height/checkerBoardSize); j++) {
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

drawCheckerBoard('#008B8B', 10);

