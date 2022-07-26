

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}
showStars(100);

let anObj = { left: 1, right: 2 };
delete anObj.left;

console.log("right" in anObj);

//! factory function obyekt yaratuvchi funksiyalar

function createBox(fName, h, w) {
  const tempBox = {
    fName: fName,
    h: h,
    w: w,
    create(fName) {
      console.log(`${fName} creating`);
    },
  };
  return tempBox;
}

const ourBox = createBox("John", 180, 45);
ourBox.create(ourBox.fName);

showPrime(20);
function showPrime(limit) {
  for (let j = 2; j <= limit; j++) {
    if (isPrime(j)) {
      console.log(j);
    }
  }
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

// next example

function sum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}
console.log(sum(5));


let numbers = [1,2,3,4,5];

// numbers.forEach(function(number) {
//   //! high order funcitons
//   //? funksiya ichida yana bir funksiya parametr bolib number kelishi 2 function return bo`lib yana bir function chaqirishi
//   console.log(number)

// })

numbers.forEach(number);

function number(number) {
  console.log(number)
}
