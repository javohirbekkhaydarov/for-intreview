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



function showStars(rows) {
  for(let row = 1; row <= rows; row++) {
    let pattern = "";
    for(let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}
showStars(100)


const user = {
  fName: "lola",
  age:19
}
delete user.age
console.log(user)
