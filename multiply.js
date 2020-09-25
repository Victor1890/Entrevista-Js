//Multiply two number without using the sign multiply

const multiply = (a, b) => {
  let result = 0;
  const positive = Math.abs(b) === b;
  for (i = 0; i < Math.abs(b); i++) {
    result = positive ? result + a : result - a;
  }

  return result;
};
const a = multiply(50, 50);
console.log(a);
