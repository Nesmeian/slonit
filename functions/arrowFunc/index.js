const myFilter = (arr, cb) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};
const numbers = [444, 4222, 455, 1, 2, 3];
const filteredNumbers = myFilter(numbers, (num) => num > 2);
console.log(filteredNumbers);
