const reverseInt = (num) => {
  if (num == 0) return 0;

  let reversedInt = parseInt(num.toString().split("").reverse().join(""));

  return reversedInt * Math.sign(num);
  //   if (num < 0) return -reversedInt;
  //   else return reversedInt;
};

console.log(reverseInt(123));
console.log(reverseInt(-123));
