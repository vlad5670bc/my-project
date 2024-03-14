"use struct"
function reverseAndSquare(arr) {
    // Перевертаємо масив
    const reversedArr = arr.reverse();
  
    // Перебираємо масив і підносимо до квадрату числові значення
    for (let i = 0; i < reversedArr.length; i++) {
      if (typeof reversedArr[i] === 'number') {
        reversedArr[i] = Math.pow(reversedArr[i], 2);
      }
    }
  
    return reversedArr;
  }
  
  // Приклад виклику функції з параметром - масивом
  const inputArray = [1, 2, 'a', 4, 'b', 6];
  const resultArray = reverseAndSquare(inputArray);
  console.log(resultArray); // Результат: [36, 'b', 16, 'a', 2, 1]