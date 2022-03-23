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

// if (personalMovieDB.count < 10) {
//     alert("Просмотрено мало фильмов");
// } else if (personalMovieDB.count >= 10 && numberOfFilms <= 30) {
//     alert("Вы классический зритель");
// } else if (personalMovieDB.count > 30) {
//     alert("Вы киноман");
// } else {
//     alert("Произошла ошибка");
// };

let message = (personalMovieDB.count) < 10 ? "Просмотрено мало фильмов":
(personalMovieDB.count >= 10 && numberOfFilms <= 30) ? "Вы классический зритель":
(personalMovieDB.count > 30) ? "Вы киноман":
"Произошла ошибка";
alert(message);

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt(" На сколько оцеените его?", ""),
//     c = prompt("Один из последних просмотренных фильмов?", ""),
//     d = prompt(" На сколько оцеените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt(" На сколько оцеените его?", "");


    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
}
console.log(personalMovieDB);