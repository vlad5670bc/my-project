"use strict"
function perimeter(side, count) {
    if (side <= 0 || count <= 2) {
      // Перевірка на правильність вхідних даних
      return 'Неприпустимі значення для обчислення периметра';
    }
  
    const perimeterValue = side * count;
    return perimeterValue;
  }
  
  // Приклад виклику функції з параметрами
  const sideLength = 5; // Довжина сторони
  const sideCount = 6; // Кількість сторін багатокутника
  
  const resultPerimeter = perimeter(sideLength, sideCount);
  if (typeof resultPerimeter === 'number') {
    console.log(`Периметр багатокутника: ${resultPerimeter}`);
  } else {
    console.log(resultPerimeter); // Виведе повідомлення про помилку
  }