'use strict';

const paragraphs = document.querySelectorAll('p');

for (const paragraph of paragraphs) {
    /*Aqui quería recorrer los parrafos en busca de las palabas pero me atasqué
    las guardaría en un array llamado selectedWords para luego recorrerlo*/

    for (const word of selectedWords) {
        const underWord = `<u>${word}</u>`; //underword sería la palabra con el adorno de subrayado
        paragraph.innerHTML = paragraph.innerHTML.replaceAll(word, underWord); //cambiaría la palabra normal por la subrayada
    }
}
