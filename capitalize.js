const capitalize = (string) => {
  if (string.length < 1) {
    throw new Error('Error: Empty String')
  } else if (typeof string !== "string") {
    throw new Error('Error: Not a String')
  } else {
    const arr = [...string];
    const capital = arr[0].toUpperCase();
    arr.splice(0, 1, capital);
    const capitalized = arr.join('');
    return capitalized;
  }
};
module.exports = capitalize;