const repeatString = function (str, number) {
  let returnStr = '';
  if (number < 0) return 'ERROR';
  for (let i = 0; i < number; i++) {
    returnStr += str;
  }
  return returnStr;
};

// Do not edit below this line
module.exports = repeatString;

console.log(repeatString('hey', 4));
