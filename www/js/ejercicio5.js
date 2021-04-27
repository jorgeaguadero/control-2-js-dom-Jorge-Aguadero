'use strict';
const showMeCharacters = async () => {
    try {
        let episodes = []; //Array vacio para guardar los episodios
        let characters = []; // Array vacio para guardar los personajes
        const response = await fetch('https://rickandmortyapi.com/api/episode');
        const { info } = await response.json();
        const episodesPages = info.pages; //Obtener las páginas de los episodios de la API

        for (let i = 1; i <= episodesPages; i++) {
            const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${i}`);
            const { results } = await response.json();
            episodes = episodes.concat(results);
        }
        const januaryEpisodes = episodes.filter((episode) => episode.air_date.includes('January'));
        //Obtenemos los episodios de cada página y filtramos los de Enero utilizamos air_dates ya que es dónde nos dice la fecha entera

        for (const episode of januaryEpisodes) {
            for (const character of episode.characters) {
                const response = await fetch(`${character}`);
                const { name } = await response.json();

                characters.includes(name) ? characters : characters.push(name);
            }
        }
        //Filtramos los nombres de los personajes para crear un array con ellos, si se repite el nombre no lo volvemos a copiar y solo incluimos los nombres nuevos
        return characters;
    } catch (error) {
        console.log(error);
    }
};

showMeCharacters() //llamamos a la funcion anidando then y catch
    .then((characters) => {
        console.log(characters);
    })
    .catch((error) => {
        console.log(error);
    });
