// Rotate the characters in a string by a given input and have the overflow appear at the beginning, e.g. “MyString” rotated by 2 is “ngMyStri”.

const string = 'MyString';
const rotate = 2;

function rotateStr(str, rotate) {
  let newString = [];
  rotateIndex = 0;
  for (i = str.length - rotate; i <= str.length -1; i++) {
    newString.push(str[i]);
  };
  for (i = 0; i < str.length - rotate; i++) {
    newString.push(str[i]);
  };
  console.log(newString.join(''));
};

rotateStr(string, rotate);