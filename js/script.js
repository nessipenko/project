'use strict';


let numberOfFilms;


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;




function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log ('error');
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    }else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log (personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++){
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();






// let num = 5;
// while (num <=10){
//     console.log (num);
//     num++;
// }

// for (let i=20; i>=10; i--){
//     if (i === 13){
//         break;
//     }
//     console.log (i);
// }

// for (let i=2; i<=10; i++){
//     if (i % 2 == 0){
//         console.log (i);
// }
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while (i <= 16){
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// const arrayOfNumbers = [];
//     for (let i = 5; i<=10; i++){
//         arrayOfNumbers[i - 5] =i;
//     }
// console.log(arrayOfNumbers);

    
//     // Не трогаем
//     return arrayOfNumbers;


    // const arr = [3, 5, 8, 16, 20, 23, 50];
    // const result = [];
    // for (let i = 0; i < arr.length; i++){
    //     result[i] = arr[i];
    // }
    // console.log(result);
    // return result;


    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];
    // for (let i = 0; i < data.length; i++){
    //         if (typeof(data[i]) === 'number') {
    //             data[i] = data[i] * 2;
    //         } else if (typeof(data[i]) === 'string') {
    //             data[i] = `${data[i]} - done`;
    //     }
    // }
    // console.log(data);

    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];

    // for (let i = 1; i <= data.length; i++) {
    //     result [i - 1] = data[data.length - i];
    // }
    // console.log(result);

    // const lines = 5;
    // let result = '';

    // for (let i = 0; i <= lines; i++){
    //     for(let j = 0; j < lines - i; j++) {
    //         result += " ";
    //     }
    //     for (let j = 0; j < 2 * i + 1; j++){
    //         result += "*";
    //     }

    //     result += '\n';
    // }
    // console.log(result);


    // function sayHello(name) {
    //     return `Привет, ${name}!`;
    // }
    
    // sayHello('Alex');


    // function returnNeighboringNumbers(num) {
    //     return [num -1, num,num +1];
    // }
    // returnNeighboringNumbers(5);


    // function getMathResult (num, times) {
    //     if (typeof(times) !=='number' || times <=0){
    //         return num;
    //     }

    //     let str ='';

    //     for (let i = 1; i <= times; i++){
    //         if (i === times) {
    //             str += `${num * i}`;
    //         } else {
    //             str += `${num * i}---`;
    //         }
            
    //     }
    //     return str;
    // }
    // getMathResult (10, 5);


