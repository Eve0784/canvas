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
setInterval(() => {
    //------------ pulisce il canvas prima di disegnare un nuovo rettangolo----------------//
    // ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

    //------------ altro modo per pulire il canvas----------------//
    // ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    // ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

    //------------------ dimensioni random del rettangolo------------------//
    const randomWidth = Math.random()*myCanvas.width/2;
    const randomHeight = Math.random()*myCanvas.height/2;

    //------------------ disegna un rettangolo a random ogni secondo e toglie la larghezza e altezza-------//
    //  creata in precedenza per far cosi che non partano dal basso ma in senso veramente randomico--------//
    const randomX = Math.random()*(myCanvas.width - randomWidth);
    const randomY = Math.random()* (myCanvas.height - randomHeight);

    //------------------ colori a random rgb------------------------------//
    const red = Math.round(Math.random()*255);
    const green = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);
    const alpha = Math.random();
    ctx.fillStyle = 'rgba('+ red + ',' + green + ',' + blue + ',' + alpha + ')';

    ctx.fillRect(randomX, randomY, randomWidth, randomHeight);
},300);
