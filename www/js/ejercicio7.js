'use strict';

//Selecciono el botón y los cuadrados predeterminados en los div con las clases
const squareWithColor = document.querySelector('.square-color');
const button = document.querySelector('button');

//creo un color RGB a partir de numeros aleatorios  con la función Math random
const randomColor = () => {
    const color1 = () => Math.floor(Math.random() * 256);
    const color2 = () => Math.floor(Math.random() * 256);
    const color3 = () => Math.floor(Math.random() * 256);

    return `rgb(${color1()}, ${color2()}, ${color3()})`; //retorno un color RGB
};

//seleccionamos todos los cuadrados (div) de nuestro html para que en la primera carga tengan ya un color aleatorio
window.addEventListener('load', () => {
    const initialSquares = document.querySelectorAll('div');
    for (const square of initialSquares) {
        square.style.background = randomColor();
    }
});

//cada segundo hacemos que cambien de color seleccionandoles y dandoles otro color aleatorio
setInterval(() => {
    const squares = document.querySelectorAll('div'); //seleccionamos todos los div
    for (const square of squares) {
        square.style.background = randomColor();
    }
}, 1000); //1000ms -> 1s

// creamos el evento para el 'click del ratón y que añada un cuadrado (div) nuevo con su color aleatorio
button.addEventListener('click', (click) => {
    click.preventDefault();
    const addDiv = document.createElement('div');
    addDiv.style.backgroundColor = `${randomColor()}`;
    squareWithColor.append(addDiv);
});
