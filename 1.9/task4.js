"use strict"
let dayNumber = parseInt(prompt("Введите число от 1 до 7", ""));

let dayName;

switch(dayNumber) {
    case 1:
        dayName = "Воскресенье";
        break;
    case 2:
        dayName = "Понедельник";
        break;
    case 3:
        dayName = "Вторник";
        break;
    case 4:
        dayName = "Среда";
        break;
    case 5:
        dayName = "Четверг";
        break;
    case 6:
        dayName = "Пятница";
        break;
    case 7:
        dayName = "Суббота";
        break;
    default:
        dayName = "Некорректный ввод";
}

alert("День недели для введенного числа: " + dayName);