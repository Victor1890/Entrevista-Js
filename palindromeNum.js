const palindromeNum = (num) => {
  if (num < 0) return false;

  const reverseInt = parseInt(num.toString().split("").reverse().join(""));

  return num == reverseInt;
};

console.log(palindromeNum(787));
