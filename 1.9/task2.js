"use strict"
let number = 0;

do {
    if (number === 0) {
        console.log(number + " – це нуль");
    } else if (number % 2 === 0) {
        console.log(number + " – парне число");
    } else {
        console.log(number + " – непарне число");
    }
    number++;
} while (number <= 10);