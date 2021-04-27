'use strict';

function time() {
    /*empieza con duración 5 ya que pide que se imprima el tiempo cada 5 segundos, por tanto la primera impresión
    será a los 5 seg, después ya está puesto pra que se ejecute cada 5000ms-> 5 seg*/

    let duration = 5;
    const time = setInterval(() => {
        let sec = duration; //vamos igualar la variable sec a duration, ya que esta varía cada 5 seg
        let min = Math.trunc(sec / 60); //la función Math.trunc nos devuelve el resultado entero de la división 1 min->60seg
        let hour = Math.trunc(sec / 3600); // 1 hora->3600seg
        let day = Math.trunc(sec / 86400); //1 dia->86400seg he utilizado los segundos como base ya que es = duration
        if (sec >= 60) {
            sec = sec % 60;
        }
        if (min >= 60) {
            min = min % 60;
        }
        if (hour >= 24) {
            hour = hour % 24;
        }
        console.log(`la función lleva ejecutándose ${day} días ${hour} horas ${min} minutos ${sec} segundos`);
        duration += 5;
    }, 5000);
}

time();
