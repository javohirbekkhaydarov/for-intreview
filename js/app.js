function sum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}
console.log(sum(5));

const solution = (str) => str.split("").reverse().join("");
console.log(solution("udar"));

const reverseList = (list) => {
  return list.reverse();
};
console.log(reverseList([1, 2, 3, 4]));

const sfera = (l, w) => l * w;
console.log(sfera(6, 3));

// this is example setAlarm when tom was go to the camp he put alarm

const setAlarm = (employed, vacation) => employed > vacation;

console.log(setAlarm());
//next example

// tosh qaychi kagaz

const rps = (p1, p2) => {
  if (p1 === p2) return "draw";

  if (p1 === "rock" && p2 === "scissors") return "you are won!!!";
  if (p2 === "scissors" && p2 === "paper") return "you are won!!!";
  if (p1 === "paper" && p2 === "rock") return "you are won!!!";

  return " i won";
};

console.log(rps("paper", "rock"));

// next questions

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
console.log(countSheeps([1]));

// repeat string
function repeatStr(numberS, stringN) {
  return stringN.repeat(numberS);
}

console.log(repeatStr(2, "repeat "));

//! repeat javascript

/*
 ! Data Types
 *have a 2 types
 *first one primitiv secondth reference
 * number
 * string
 * boolean 
 * undefined => no value is given but  memory is taken
 * null => no value is given and no memory is taken
 * Reference error -> In JavaScript, a reference error is thrown when a code attempts to reference a non-existing variable.
*/

//!assigiment operators = o'zlashtirish operatorlari

/* 

!Comparison Operators (Taqqoslash operatorlari)
  * -> - katta
  * -< kichik
  *  <= kichik yoki teng
  *  >= katta yoki teng
  * == tenglik -  onlny check value
  *  != not equal
  * === strict equal so type so value check

*/

/* 
! Logical operators
* && -> And
* || -> Or
* ! -> Not


*/

/* 
     if else statiment
    *false value =>  0 , null , undefined , false 
*/
let age = 30;

if (age > 18) {
  console.log("welcome");
} else {
  console.log("tree");
}

// let colorOne = "red";
// let colorTwo = "green";

// let extra = colorOne;
// colorOne = colorTwo;
// colorTwo = extra;
// console.log(colorOne);
// console.log(colorTwo);

let a = 7;
let b = 19;
a = a + b; // 26 a = 7 + 19
b = a - b; // 7 b = 26 - 19
a = a - b; // 19 a = 26 -7

console.log(a);
console.log(b);
function num(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
console.log(num(10));

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
