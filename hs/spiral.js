let matrixArr = [];
let n = 7

//  NxN matrix
for(let i=0; i<n; i++){
    matrixArr.push(Array(n));
}

// Matrix to zero
for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        matrixArr[i][j] = 0;
    }
}

// Useful variables
let posX = Math.trunc(n/2);
let posY = Math.trunc(n/2);

let nextPx = posX;
let nextPy = posY;

let counter = 1;
let lastMove ='N';

matrixArr[posY][posX]= counter++;

//let moves = ['R','D','L','U'];


while(counter<=n*n){
    if(lastMove=='N' || lastMove=='U'){
        nextPx++;
        if(matrixArr[nextPy][nextPx]==0){
            matrixArr[nextPy][nextPx]= counter++;
            posX=nextPx;
            posY=nextPy;
            lastMove = 'R'
        }else{
            posY--;
            matrixArr[posY][posX]= counter++;
            nextPx = posX;
            nextPy = posY;
            lastMove = 'U';
        }
    }
    if(lastMove=='R'){
        nextPy++;
        if(matrixArr[nextPy][nextPx]==0){
            matrixArr[nextPy][nextPx]= counter++;
            posX=nextPx;
            posY=nextPy;
            lastMove = 'D';
        }else{
            posX++;
            matrixArr[posY][posX]= counter++;
            nextPx = posX;
            nextPy = posY;
            lastMove = 'R';
        }
    }
    if (lastMove=='D'){
        nextPx--;
        if(matrixArr[nextPy][nextPx]==0){
            matrixArr[nextPy][nextPx]= counter++;
            posX=nextPx;
            posY=nextPy;
            lastMove = 'L';
        }else{
            posY++;
            matrixArr[posY][posX]= counter++;
            nextPx = posX;
            nextPy = posY;
            lastMove = 'D';
        }
    }
         
    if (lastMove == 'L'){
        nextPy--;
        if(matrixArr[nextPy][nextPx]==0){
            matrixArr[nextPy][nextPx]= counter++;
            posX=nextPx;
            posY=nextPy;
            lastMove = 'U';
        }else{
            posX--;
            matrixArr[posY][posX]= counter++;
            nextPx = posX;
            nextPy = posY;
            lastMove = 'L';
        }
    }
}
console.log(matrixArr);