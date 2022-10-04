const stringLength = (string) => {
  if (string.length < 1){
    throw new Error('Error: Empty String');
  } else if (string.length > 10) {
    throw new Error('Error: String Too Long');
  } else {
    return string.length
  }
};

module.exports = stringLength