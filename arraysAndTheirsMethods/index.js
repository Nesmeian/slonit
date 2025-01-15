const arr = [1, 2, 3, 4, 5];
function myIndexOf(arr, item, from) {
  const searchPoint = from ? from - 1 : arr.length;
  for (let i = 0; i < searchPoint; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}
console.log(myIndexOf(arr, 4, 5));
