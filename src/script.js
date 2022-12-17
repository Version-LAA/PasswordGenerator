const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?"];

let randomNum = Math.round(Math.random() * 26);
const defaultCharLen = document.getElementById("exampleRadios1").checked;
const twelveCharLen = document.getElementById("exampleRadios2").checked;
const fifteenCharLen = document.getElementById("exampleRadios3").checked;
let passwordOutput = document.querySelector(".password-output");

console.log(randomNum);

// function to generate length of string
let generateLength = function (num) {
  const stringPosition = [];
  for (i = 0; i < num; i++) {
    stringPosition.push(Math.round(Math.random() * 26));
  }
  return stringPosition;
};

//select password length
function lengthCheck() {
  let pass = "";
  if (defaultCharLen) {
    let stringLocation = generateLength(15);
    for (i = 0; i < stringLocation.length; i++) {
      console.log(pass);
      pass += alphabet[stringLocation[i]];
    }
    let len = pass.length;
    return `${pass}, ${len}`;
  }
}

passwordOutput.innerHTML = lengthCheck();
