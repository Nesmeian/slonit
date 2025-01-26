# Task: Write polymorph method filter

## Description: Implement the function "myFilter" which will be called for every element in arr and return true if the element should stay in the result array, or false if it should not.

## Example

`const numbers = [1, 2, 3, 4, 5];

// Используем myFilter для фильтрации четных чисел
const evenNumbers = myFilter(numbers, function(num) { // Не стрелочная функция, для примера
return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

// Фильтруем числа больше 3
const greaterThanThree = myFilter(numbers, function(num) { // Не стрелочная функция, для примера
return num > 3;
});
console.log(greaterThanThree); // [4, 5]
`
