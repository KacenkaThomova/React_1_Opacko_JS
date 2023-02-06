'use strict';

/* tady bude tvůj kód */
console.log('JavaScript ve stránce funguje');

const movieList = document.querySelector ('#movies')

const showMovies = (data) => {
    data.forEach((item) => {
        
       /* movieList.innerHTML += `
        <div class="movie">
        <img class="movie__img" 
            src="${posterUrl}" 
            alt="Vykoupení z věznice Shawshank">
        <h2 class="movie__title"> <a href=${url}>${title}</a></h2>
        <p class="movie__year">${year}</p>
        <p class="movie__genre">${genres}</p>
        </div> `*/
        console.log(title)
    });
}

fetch ('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
.then((resp) => resp.json())
.then((data) => showMovies(data))
