'use strict';

//asignamos las variables a su correspondiente en el HTML
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

const start = document.querySelector('.start');
const reset = document.querySelector('.reset');

let time;
//Tenemos la misma función que en el ejercicio 2 adaptada para contar cada seg
start.addEventListener('click', (click) => {
    click.preventDefault();
    let duration = 0;
    time = setInterval(() => {
        let sec = duration;
        let min = Math.trunc(sec / 60);

        if (sec >= 60) {
            sec = sec % 60;
        }
        if (sec < 10) {
            second.textContent = `0${sec}`;
        } else {
            second.textContent = sec;
        }

        if (min >= 60) {
            min = min % 60;
        }
        if (min < 10) {
            minute.textContent = `0${min}`;
        } else {
            minute.textContent = min;
        }
        duration = duration + 1;
    }, 1000);
});

reset.addEventListener('click', (click) => {
    click.preventDefault();
    clearInterval(time);
    //ponemos todo a 0 para resetear
    minute.textContent = '00';
    second.textContent = '00';
});
