const buildMap = (str) => {
  str = str.toLowerCase().replace(/[\^w]/g, "");
  const charObj = {};
  for (let char of str) {
    charObj[char] ? charObj[char] + 1 : 1;
  }
};

const anagramsOne = (strOne, strTwo) => {
  if (strOne.length !== strTwo.length) return false;

  const strMapOne = buildMap(strOne);
  const strMapTwo = buildMap(strTwo);

  for (let key in strMapOne) {
    if (strMapOne[key] !== strMapTwo[key]) return false;
  }

  return true;
};

const anagramsTwo = (strOne, strTwo) => cleanStr(strOne) === cleanStr(strTwo);

const cleanStr = (str) =>
  str
    .toLowerCase()
    .replace(/[\^/w]/g, "")
    .split("");
