// https://js13kgames.com/2025/games  -giochi fatti con canvas

const myCanvas = document.getElementById('my-canvas');
console.log('canvas', myCanvas.width, myCanvas.height);

const ctx = myCanvas.getContext('2d');

// // retangolo x,y, larghezza, altezza
// ctx.fillRect(10, 10, 100, 50);

// ctx.fillStyle= 'pink';
// ctx.fillRect(500, 300, 90, 10);

// ctx.strokeRect(200, 200, 30, 30);

// ctx.strokeStyle = 'orange';
// ctx.strokeRect(500, 600, 100, 100);

// for (let i = 0; i < 100; i++) {
//     const randomX = Math.random()*myCanvas.width;
//     const randomY = Math.random()*myCanvas.height;

//     const randomWidth = Math.random()*myCanvas.width/2;
//     const randomHeight = Math.random()*myCanvas.height/2;

//     //--- colori a random rgb--//
//     const red = Math.round(Math.random()*255);
//     const green = Math.round(Math.random()*255);
//     const blue = Math.round(Math.random()*255);
//     const alpha = Math.random();
//     ctx.fillStyle = 'rgba('+ red + ',' + green + ',' + blue + ',' + alpha + ')';

//     //--- altro modo per colori a random rgb--//
//     // const colorRandom = 'rgb('+
//     //   Math.floor(Math.random()*256)+','+
//     //   Math.floor(Math.random()*256)+','+
//     //   Math.floor(Math.random()*256)+')';
//     // ctx.fillStyle = colorRandom;

//     ctx.fillRect(randomX, randomY, randomWidth, randomHeight);
// }

//------------------------------- disegna un rettangolo ogni secondo-----------------------------//
// setInterval(() => {
//     //------------ pulisce il canvas prima di disegnare un nuovo rettangolo----------------//
//     // ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

//     //------------ altro modo per pulire il canvas----------------//
//     // ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
//     // ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

//     //------------------ dimensioni random del rettangolo------------------//
//     const randomWidth = Math.random()*myCanvas.width/2;
//     const randomHeight = Math.random()*myCanvas.height/2;

//     //------------------ disegna un rettangolo a random ogni secondo e toglie la larghezza e altezza-------//
//     //  creata in precedenza per far cosi che non partano dal basso ma in senso veramente randomico--------//
//     const randomX = Math.random()*(myCanvas.width - randomWidth);
//     const randomY = Math.random()* (myCanvas.height - randomHeight);

//     //------------------ colori a random rgb------------------------------//
//     const red = Math.round(Math.random()*255);
//     const green = Math.round(Math.random()*255);
//     const blue = Math.round(Math.random()*255);
//     const alpha = Math.random();
//     ctx.fillStyle = 'rgba('+ red + ',' + green + ',' + blue + ',' + alpha + ')';

//     ctx.fillRect(randomX, randomY, randomWidth, randomHeight);
// },300);

// const rettangolo = {
//     x: 400,
//     y: 400,
//     width: 10,
//     height: 10
// }

// setInterval(() => {
//     ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
//     rettangolo.x += 2; // va a destra e col meno 1 va a sinistra se si mette +2 cambia velocita con rispetto a 'y'
//     rettangolo.y -= 1; // va in giu e col meno 1 va in su
//     ctx.fillRect(rettangolo.x, rettangolo.y, rettangolo.width, rettangolo.height);

// }, 10);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                       le 3 funzioni principali di un gioco: setup, update, draw                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
const rectangles = [];

function setup() {
    for (let i = 0; i < 1000; i++) {

        const red = Math.round(Math.random() * 255);
        const green = Math.round(Math.random() * 255);
        const blue = Math.round(Math.random() * 255);
        const alpha = Math.random();

        const width = 3;
        const height = 3;

        const randomX = Math.random() * (myCanvas.width - width);
        const randomY = Math.random() * (myCanvas.height - height);

        const randomVX = Math.random() * 4 - 2; // velocita orizzontale tra 0 e 4
        const randomVY = Math.random() * 4 - 2; // velocita verticale tra 0 e 4

        const rect = {
            x: 400,
            y: 400,
            width: width,
            height: height,
            color: 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')',
            vX: randomVX,
            vY: randomVY
        }
        rectangles.push(rect);
    }

}
setup();
console.log(rectangles);

function update() {
    for (const rect of rectangles) {
        rect.x += rect.vX;
        rect.y += rect.vY;

        //cambio di direzione quando tocca i bordi
        if (rect.x + rect.width > myCanvas.width || rect.x < 0) {
            rect.vX *= -1;
        }
        if (rect.y + rect.height > myCanvas.height || rect.y < 0) {
            rect.vY *= -1;
        }
        // variazione casuale della velocita
        const diceX = Math.random();
        const diceY = Math.random();

        if (diceX > 0.8) {
            rect.vX += Math.random() * 3;
        }
        if (diceX < 0.2) {
            rect.vX -= Math.random() * 3;
        }       
        if (diceY > 0.8) {
            rect.vY += Math.random() * 3;
        }
        if (diceY < 0.2) {
            rect.vY -= Math.random() * 3;
        }
        //limite massimo velocita
        if (rect.vX > 3) {
            rect.vX = 3;
        }
        if (rect.vX < -3) {
            rect.vX = -3;
        }
        if (rect.vY > 3) {
            rect.vY = 3;
        }
        if (rect.vY < -3) {
            rect.vY = -3;
        }
    }
}
function draw() {
    //ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

    for (const rect of rectangles) {
        ctx.fillStyle = rect.color;
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    }
}
setInterval(() => {
    update();
    draw();
}, 18);


// usare p5.js per fare gli esercizi ---> getstarted