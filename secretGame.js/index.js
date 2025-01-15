let guessNumber;
function createRandomNumber(min, max, number) {
  if (guessNumber === undefined) {
    guessNumber = Math.floor(min + Math.random() * (max + 1 - min));
  }
  console.log("okey");
}

createRandomNumber(1, 100);
