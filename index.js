'use strict';

/* tady bude tvůj kód */
console.log('JavaScript ve stránce funguje');

const movieList = document.querySelector ('#movies')

const Movie = ({title, url, posterUrl, genres, year}) => {
    movieList.innerHTML += `
        <div class="movie">
        <img class="movie__img" 
            src="${posterUrl}" 
            alt="${title}">
        <h2 class="movie__title"> <a href=${url}>${title}</a></h2>
        <p class="movie__year">${year}</p>
        <p class="movie__genre">${genres}</p>
        </div> `
    }

const showMovies = (data) => {
    movieLibrary.sort((filmA,filmB) => (filmA.title > filmB.title) ? 1 : ((filmB.title > filmA.title) ? -1 : 0))
    data.forEach((data) => {
        const {title, url, posterUrl, genres, year} = data
        Movie({title, url, posterUrl, genres, year})
    });
}

let movieLibrary;
fetch ('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
.then((resp) => resp.json())
.then(data => {
    movieLibrary = data;
    showMovies(movieLibrary);
})

const sortFromNewest = (e) => {
    e.preventDefault()
    const movieLibrarySorted = movieLibrary.sort((filmA,filmB) => filmB.year - filmA.year)
    showMovies(movieLibrarySorted)
}

document.querySelector('#fromNewest').addEventListener('submit',sortFromNewest)
document.querySelector('#fromNewest').addEventListener('submit',sortFromNewest.reverse)
