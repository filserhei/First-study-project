'use strict';
const numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

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

if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ощибка');
}

console.log(personalMovieDB);