function capitalizeFirstLetter(str) {
  return str.replace(/[a-zA-Z]/, (e) => e.toUpperCase());
}
console.log(capitalizeFirstLetter("string"));
