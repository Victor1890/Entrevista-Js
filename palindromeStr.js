const palindromeOne = (str) => {
  str = str.toLowerCase().replace(/[^\w]/g, "");

  for (i = 0; i <= str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
};

const palindromeTwo = (str) => {
  str = str.toLowerCase().replace(/[^\w]/g, "");
  const tmpStr = str.split("").reverse().join("");

  return str === tmpStr;
};

console.log(palindromeTwo("Javascript"));
