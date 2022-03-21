// let numberOfFilms = prompt('Сколько филмов вы уже посмотрели?', 100);
// alert(`${100} фильмов`)
// let isBoss = confirm("Ты здесь главный?");

// alert( isBoss ); // true, если нажата OK
const numberOfFilms = +prompt("Сколько филмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt(" На сколько оцеените его?", ""),
    c = prompt("Один из последних просмотренных фильмов?", ""),
    d = prompt(" На сколько оцеените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);