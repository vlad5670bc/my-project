"use strict"
let numb = 10000;
let result;
let counter = 0;

while (numb >= 50) {
    numb /= 2;
    counter++;
}

result = numb;

console.log("Результат: " + result);
console.log("Количество итераций: " + counter);