function calculator(num1, num2, operation) {
  return operation(num1, num2);
}
const operartions = {
  addition: function (num1, num2) {
    return num1 + num2;
  },
  substraction: function (num1, num2) {
    return num1 - num2;
  },
  multiple: function (num1, num2) {
    return num1 * num2;
  },
  division: function (num1, num2) {
    return num1 / num2;
  },
};

console.log(calculator(1, 2, operartions.addition));
console.log(calculator(1, 2, operartions.substraction));
console.log(calculator(1, 2, operartions.multiple));
console.log(calculator(1, 2, operartions.division));
