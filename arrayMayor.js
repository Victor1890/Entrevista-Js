//Alter an element array with just altering the element one time

const arrayMayor = (arr) => arr.reduce((arr, el) => (arr > el ? arr : el));
console.log(arrayMayor([50, 10000, -658415, 8484, 0]));

//Clean an element and delete the undefined, false, 0 of array
const clean = (arr) =>
  arr.reduce((acc, el) => {
    if (el) {
      acc.push(el);
    }
    return acc;
  }, []);

console.log(clean([undefined, false, 0, 1, 2, 3]));
