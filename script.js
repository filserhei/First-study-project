'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов посмотрели?', '');
  
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов посмотрели?', '');
    }
  },
  rememberFilms: function () {
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
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ощибка');
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function() {
    let i = 1;
    while (i <= 3) {
    const answer = prompt(`Ваш любимый жанр под номером ${i++}`);
    if (answer == null || answer == '') {
      i--;
    } else {
    personalMovieDB.genres.push(answer);
    }
  }
  personalMovieDB.genres.forEach((element, index) => console.log(`Любимый жанр №${index + 1} - это ${element}`));
  },
  toggleVisibleMyDB: function() {
    personalMovieDB.privat = !personalMovieDB.privat;
  }
};

