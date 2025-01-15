const arr = [1, 2, 3, 4, 5];
function myIndexOf(arr, item, from) {
  const searchPoint = from ? Number(from) : 0;
  if (searchPoint >= arr.length || searchPoint < 0) {
    return -1;
  }
  for (let i = searchPoint; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}
function myIncludes(arr, item, from) {
  let searchPoint = from ? Number(from) : 0;
  if (searchPoint >= arr.length) {
    return false;
  }
  if (searchPoint < 0) {
    searchPoint = 0;
  }
  for (let i = searchPoint; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}
