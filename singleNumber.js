const singleNumber = (arr) => {
  let countNumber = {};
  for (number of arr) {
    countNumber[number] = countNumber[number] + 1 || 1;
  }
  for (numberKey in countNumber) {
    if (countNumber[numberKey] == 1) {
      return numberKey;
    }
  }
};

console.log(singleNumber([1, 3, 5, 3, 1]));
