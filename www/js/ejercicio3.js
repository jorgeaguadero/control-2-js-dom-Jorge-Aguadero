'use strict';

const converter = (num, base) => {
    if (base === 10) {
        //convertimos en string el número binario, para así poder calcular luego la longitud
        const strNum = num.toString();
        for (let i = 0; i <= strNum.length; i++) {
            if (strNum[i] !== '0' || strNum[i] !== '1') {
                return strNum; //debería de devolver el número decimal si le enviamos un número decimal y lo queremos convertir a decimal
            }
        }
        //Aqui guardaré el número decimal
        let decimal = 0;
        //recorreré cada posición del string y luego buscaré si hay un 1

        for (let i = 0; i < strNum.length; i++) {
            //Aqui vemos si coincide con un 1 la posición, para convertir a decimal la fórmula es (2 ^ x) y X es la posición del dígito
            if (strNum[i] === '1') {
                decimal += 2 ** (strNum.length - 1 - i); // con esta fórmula es como si cambiasemos el valor de [i] siendo así la posición de strNum[0]= el equivalente a strNum.length
            }
        }
        return decimal;
    }

    if (base === 2) {
        return num.toString(2); //convertimos el numero en decimal en un string de base 2
    } else {
        return 'Has introducido mal la base';
    }
};

const num = Number(prompt('Por favor indique un número en decimal o binario'));
const base = Number(prompt('Por favor indique la base a la que quieres convertir el número anterior'));

console.log(converter(num, base));
