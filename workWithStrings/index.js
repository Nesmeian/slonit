function capitalizeFirstLetter(str) {
  return str.replace(/[a-zA-Z]/, (e) => e.toUpperCase());
}
function stringSlicer(str) {
  return str.replace(/^(.{40})(.*?)([\s,.!?:;].*)?$/, (_, p1, p2, p3) =>
    p3 ? p1 + p2 + "..." : str
  );
}
