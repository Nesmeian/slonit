const arr = [1, 2, 3, 4, 5];
function mySlice(arr, start, end) {
  const result = [];
  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = arr.length;
  }
  if (start < 0) {
    start = Math.max(arr.length + start, 0);
  }
  if (end < 0) {
    end = Math.max(arr.length + end, 0);
  }
  for (let i = start; i < end && i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}

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
