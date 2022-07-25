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

// showPrime(20)

// function showPrime(limit) {
//   for(let j = 2; j <= limit; j++) {
//     if(isPrime(j)) {
//       console.log(j);
//     }
//   }
// }

// function isPrime(number) {
//   for(let i = 2; i < number; i++) {
//     if(number % i === 0) {
//       return false
//     }
//   }
//   return true
// }

function infom(fName, lName, age) {
  const user = {
    fName,
    lName,
    age,
    create(profession) {
      console.log(` he is ${profession} `);
    },
  };
  return user;
}

const newPerson = infom("engineer", "Thompson", 20);

newPerson.create(newPerson.fName);

function MyBox(fName, height, width) {
  this.fName,
    this.height,
    this.width,
    (this.create = function (fName) {
      console.log(`your wife ${fName} `);
    });
}
const ourBox = new MyBox("Unknown", 170, 60);
console.log(ourBox);

//! when there is in an action  , it is a method

// const entries = Object.entries(user)
// console.log(entries)

//doing objects

//#4 clone objects
// clonlash bu copy qilish in js

const user = {
  fName: "Javohirbek",
  lName: "Khaydarov",
  age: 19,
  create() {
    console.log("create an object");
  },
};

// let user2 = {};
// for (let key in user) {
//   user2[key] = user[key];
// }

let user2 = Object.assign({}, user);
user2.fName = "lie";
console.log(user2);
console.log(user);

// object spread operators clone

console.log(user2);

// that is spread operators
let user2 = { ...user };

user2.address = { ...user.address };

//lesson  8
// task review

const address = {
  street: "huh",
  city: "oho",
  zipcode: 01,
};

function showAddres(address) {
  for (let key in address) console.log(`${key} : ${address[key]}`);
}
showAddres(address);

function old35(n) {
  if (!(n % 15)) return false;
  if (!(n % 3) || !(n % 5)) return true;
  return false;
}

console.log(old35(50));

