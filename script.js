'use strict';
let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных последних фильмов', ''),
          b = prompt('Оцените его', '');
  
    if (a != null && b != null && a.length > 0 && b.length > 0 && a.length <= 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
    } else {
      i--;
      console.log('wrong');
    }
  }
}

rememberFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ощибка');
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  let i = 1;
  while (i <= 3) {
  const answer = prompt(`Ваш любимый жанр под номером ${i++}`);
  personalMovieDB.genres.push(answer);
  }
}

writeYourGenres();
showMyDB(personalMovieDB.privat);
