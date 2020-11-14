/*
    Write a function with reverse an string
*/

const reverseStrOne = (str) => {
  let reversed = "";
  for (let char of str) {
    reverset = char + reversed;
  }
  return reversed;
};

const reverseStrTwo = (str) => str.split("").reverse().join("");
