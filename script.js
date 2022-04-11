// let numberOfFilms = prompt('Сколько филмов вы уже посмотрели?', 100);
// alert(`${100} фильмов`)
// let isBoss = confirm("Ты здесь главный?");

// alert( isBoss ); // true, если нажата OK


// function start() {
//     // numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
// }


// let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошиllбка");
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                b = prompt(" На сколько оцените его?", "");

            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("done");
            } else {
                console.log("error");
                i--;
            }
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == null || genre === "") {
                console.log("Вы ввели некорректные данные или не ввели их ");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

};

personalMovieDB.start();

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.genres.forEach(function (item, i) {
console.log(`Любимый жанр ${i+1} - это ${item}`);
});
// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         alert("Просмотрено мало фильмов");
//     } else if (personalMovieDB.count >= 10 && numberOfFilms <= 30) {
//         alert("Вы классический зритель");
//     } else if (personalMovieDB.count > 30) {
//         alert("Вы киноман");
//     } else {
//         alert("Произошла ошибка");
//     };
// };

// detectPersonalLevel();

// let message = (personalMovieDB.count) < 10 ? "Просмотрено мало фильмов" :
//     (personalMovieDB.count >= 10 && numberOfFilms <= 30) ? "Вы классический зритель" :
//     (personalMovieDB.count > 30) ? "Вы киноман" :
//     "Произошла ошибка";
// alert(message);

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = prompt(" На сколько оцеените его?", ""),
//     c = prompt("Один из последних просмотренных фильмов?", ""),
//     d = prompt(" На сколько оцеените его?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);



// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Один из последних просмотренных фильмов?", ""),
//             b = prompt(" На сколько оцеените его?", "");


//         if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log("done");
//         } else {
//             console.log("error");
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// let i = 0;
// while (i < 2) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = +prompt(" На сколько оцеените его?", "");
//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--;
//     }
//     i++;
// };

// console.log(personalMovieDB);

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// } 
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         // const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }
// writeYourGenres();