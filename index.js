// document.getElementById("count-el").innerText = 5;

// let firstBatch = 5;
// let secondBatch = 10;
// let count = firstBatch + secondBatch;

// console.log(count);

// let myAge = 35;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// let count = 5;
// count = 3;
// count = count + 2;
// console.log(count);

// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// function countdown() {
//   console.log(5);
//   console.log(4);
//   console.log(3);
//   console.log(2);
//   console.log(1);
// }
// countdown();
// countdown();

// function practice() {
//   console.log(42);
// }

// practice();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function addlap() {
//   console.log(lap1 + lap2 + lap3);
// }

// addlap();

// function logLapTime() {
//   let totalTime = lap1 + lap2 + lap3;
//   console.log(totalTime);
// }

// logLapTime();

// function increment() {
//   console.log("The button is clicked");
// }

// let lapscompleted = 0;
// function add() {
//   lapscompleted = lapscompleted + 1;
// }

// add();
// add();
// add();

// console.log(lapscompleted);

// let countEl = document.getElementById("count-el");
// console.log(countEl);
// let count = 0;
// function increment() {
//   count = count + 1;
//   countEl.innerText = count;
//   console.log(count);
// }

// let username = "per";
// console.log(username);

// let username = "per";
// let message = "You have three new notifications";

// let messageToUser = message + ", " + username + "!";

// console.log(messageToUser);

// let name = "Luqman Khan";
// let greeting = "Hi, my name is ";

// let myGreeting = greeting + name;

// console.log(myGreeting);

// let welcomeEl = document.getElementById("welcome-el");

// let name = "Luqman Khan";
// let greeting = "Welcome Back";

// welcomeEl.innerText = greeting + " " + name;

// welcomeEl.innerText += "👋";

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
