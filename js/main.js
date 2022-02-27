// let total = 0

// document.querySelector('#pumpkin').addEventListener('click', makeZero)


// function makeZero() {
//   total = 0
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function jumanji() {
//   total = total + 3
//   document.querySelector('#placeToPutResult').innerText = total
// }

// 1. collect statement and display each character and operator as its being typed out
// 2. when = is hit it should calculate that statement
// 3. when C is hit it should display 0

let statement = "";
let evaluatedNum;

document.querySelector('#one').addEventListener('click', numOne)
document.querySelector('#two').addEventListener('click', numTwo)
document.querySelector('#three').addEventListener('click', numThree)
document.querySelector('#four').addEventListener('click', numFour)
document.querySelector('#five').addEventListener('click', numFive)
document.querySelector('#six').addEventListener('click', numSix)
document.querySelector('#seven').addEventListener('click', numSeven)
document.querySelector('#eight').addEventListener('click', numEight)
document.querySelector('#nine').addEventListener('click', numNine)
document.querySelector('#zero').addEventListener('click', numZero)
document.querySelector('#multiply').addEventListener('click', opMult)
document.querySelector('#subtract').addEventListener('click', opSub)
document.querySelector('#add').addEventListener('click', opAdd)
document.querySelector('#divide').addEventListener('click', opDiv)
document.querySelector('#cancel').addEventListener('click', cancel)
document.querySelector('#equals').addEventListener('click', evaluate)

function cancel() {

  statement = "";

  document.querySelector('#numbersHere').innerText = statement;
}

function numOne() {

  statement = statement.concat("1");

  document.querySelector('#numbersHere').innerText = statement;

}

function numTwo() {

  statement = statement.concat("2");

  document.querySelector('#numbersHere').innerText = statement;

}

function numThree() {

  statement = statement.concat("3");

  document.querySelector('#numbersHere').innerText = statement;

}

function numFour() {

  statement = statement.concat("4");

  document.querySelector('#numbersHere').innerText = statement;

}

function numFive() {

  statement = statement.concat("5");

  document.querySelector('#numbersHere').innerText = statement;

}

function numSix() {

  statement = statement.concat("6");

  document.querySelector('#numbersHere').innerText = statement;

}

function numSeven() {

  statement = statement.concat("7");

  document.querySelector('#numbersHere').innerText = statement;

}

function numEight() {

  statement = statement.concat("8");

  document.querySelector('#numbersHere').innerText = statement;

}

function numNine() {

  statement = statement.concat("9");

  document.querySelector('#numbersHere').innerText = statement;

}

function numZero() {

  statement = statement.concat("0");

  document.querySelector('#numbersHere').innerText = statement;

}

function opMult() {

  statement = statement.concat("*");

  document.querySelector('#numbersHere').innerText = statement;

}

function opSub() {

  statement = statement.concat("-");

  document.querySelector('#numbersHere').innerText = statement;

}

function opAdd() {

  statement = statement.concat("+");

  document.querySelector('#numbersHere').innerText = statement;

}

function opDiv() {

  statement = statement.concat("/");

  document.querySelector('#numbersHere').innerText = statement;

}

function evaluate() {

  evaluatedNum = eval(statement);
  statement = evaluatedNum.toString();

  document.querySelector('#numbersHere').innerText = statement;
}