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
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "?",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?"];

let randomNum = Math.round(Math.random() * 48);
const defaultCharLen = document.getElementById("exampleRadios1");
const twelveCharLen = document.getElementById("exampleRadios2");
const fifteenCharLen = document.getElementById("exampleRadios3");
const otherLen = document.getElementById("exampleRadios4");
const otherInput = document.getElementById("other-input");
let passwordOutput = document.querySelector(".password-output");
let numOfUpperCase = Math.round(Math.random() * 3);
let numOfSymbols = Math.round(Math.random() * 3);
let numbers = Math.round(Math.random() * 2);
let passWordButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");

// function to generate length of string
let generateLength = function (num) {
  let totalChar = num;
  let upperCase = numOfUpperCase;
  let symbols = numOfSymbols;
  totalChar -= upperCase + symbols;

  // console.log(totalChar);
  // console.log(upperCase);
  // console.log(symbols);
  // console.log(totalChar);

  let stringPosition = [];
  let x;
  for (i = 0; i < num; i++) {
    x = Math.round(Math.random() * 47);
    stringPosition.push(x);
    // console.log(randomNum);
    // stringPosition.push(randomNum);
  }
  console.log(stringPosition);
  return stringPosition;
};

// check if other value is valid

let checkValue = (value) => {
  value = otherInput.value;
  if (value > 0 && value <= 20) {
    return true;
  } else {
    return false;
  }
};

//select password length
function generatePassword() {
  copyButton.innerHTML = "Copy to Clipboard";
  let pass = "";
  let stringLocation;
  if (defaultCharLen.checked) {
    stringLocation = generateLength(10);
    for (i = 0; i < stringLocation.length; i++) {
      pass += alphabet[stringLocation[i]];
    }
  } else if (twelveCharLen.checked) {
    stringLocation = generateLength(12);
    for (i = 0; i < stringLocation.length; i++) {
      pass += alphabet[stringLocation[i]];
    }

    // let len = pass.length;
    // return `${pass}, ${len}`;
  } else if (fifteenCharLen.checked) {
    stringLocation = generateLength(15);
    for (i = 0; i < stringLocation.length; i++) {
      pass += alphabet[stringLocation[i]];
    }
  } else if (otherLen.checked) {
    otherInput.removeAttribute("disabled");
    stringLocation = generateLength(otherInput.value);
    for (i = 0; i < stringLocation.length; i++) {
      pass += alphabet[stringLocation[i]];
    }
  } else {
    console.log("not valid");
  }

  return pass;
}

let passGen = () => {
  let copyStatus = false;
  let password = generatePassword();
  console.log(password);
  passwordOutput.innerText = password;

  copyButton.onclick = function () {
    copyStatus = true;
    if (copyStatus === true) {
      copyButton.innerHTML = "COPIED";
      navigator.clipboard.writeText(password);
    }
  };

  return password;
};

passWordButton.addEventListener("click", passGen);
// copyButton.addEventListener("click", copyPas);

// passwordOutput.innerHTML = generatePassword();
// console.log(randomNum);

// console.log(generateLength(10));
