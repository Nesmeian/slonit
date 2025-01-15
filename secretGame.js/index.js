function computer1(min, max) {
  const guessNumber = Math.floor(min + Math.random() * (max + 1 - min));
  const searchArr = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  const guessObj = {
    min: min,
    max: max,
    searchArr: searchArr,
  };
  let guess;

  do {
    guess = computer2(guessObj);
    if (guess === guessNumber) {
      return `Computer 1: Hooray! Found the number: ${guessNumber}`;
    } else if (guess > guessNumber) {
      guessObj.max = guess - 1;
      console.log("Computer 1: Less");
    } else {
      console.log("Computer:2 More");
      guessObj.min = guess + 1;
    }
  } while (guessObj.min <= guessObj.max);
  return "Number not found.";
}

function computer2({ searchArr, min, max }) {
  let left = min;
  let right = max;
  const mid = Math.floor((left + right) / 2);
  console.log(`Computer 2:Try Number ${searchArr[mid]}`);
  return searchArr[mid];
}

// Example of use
console.log(computer1(1, 100));
