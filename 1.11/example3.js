function removeDuplicates(arr) {
    // Створюємо новий масив для унікальних значень
    const uniqueArray = [];
  
    // Перебираємо вхідний масив
    for (let i = 0; i < arr.length; i++) {
      // Перевіряємо, чи поточний елемент є унікальним
      if (uniqueArray.indexOf(arr[i]) === -1) {
        // Якщо елемент ще не міститься у новому масиві, додаємо його
        uniqueArray.push(arr[i]);
      }
    }
  
    return uniqueArray;
  }
  
  // Приклад виклику функції з вхідним масивом
  const inputArray = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
  const resultArray = removeDuplicates(inputArray);
  console.log(resultArray); // Результат: [1, 2, 4, 5, 7, 8, 3, 6]