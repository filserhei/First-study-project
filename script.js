'use strict';
const numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt('Один из просмотренных последних фильмов', '');
const b = prompt('Оцените его', '');
const c = prompt('Один из просмотренных последних фильмов', '');
const d = prompt('Оцените его', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; 
console.log(personalMovieDB);