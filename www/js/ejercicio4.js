'use strict';

const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

const newArray = []; // creo un array vacío para guardar los nombres sin repetir
for (let i = 0; i < names.length; i++) {
    //recorro el array y si el nombre no está ya en el array lo añado
    if (newArray.indexOf(names[i]) === -1) {
        newArray.push(names[i]);
    }
}
