// Print the number of integers in an array that are above the given input and the number that are below, e.g. for the array [1, 5, 2, 1, 10] with input 6, print “above: 1, below: 4”.

const array = [1, 5, 2, 1, 10];
const input = 6;

function arrCheck(arr, inp) {
  inputAbove = 0;
  inputBelow = 0;
   for (i = 0; i < arr.length; i++) {
     if (inp > arr[i]) {
       inputAbove++;
     };
     if (inp < arr[i]) {
       inputBelow++;
     };
   };
  console.log('Above: ' + inputAbove, 'Below: ' + inputBelow);
};

arrCheck(array, input);