const calculator = new Calculator();
const maxLength = 9;
const display = new Display(maxLength);
const operatorsButtons = document.getElementsByClassName("operator");
const numbersButtons = document.getElementsByClassName("number");
const modifiersButtons = document.getElementsByClassName("modifier");
const decimalButton = document.getElementById("decimal");
const equalButton = document.getElementById("equal");
const plusminusButton = document.getElementById("plusminus");

let intializedCalculator = true;
let activatedOperatorsButtons = false;
let activatedNumericButtons = true;
let activatedPlusMinusButton = false;
let activatedDecimalButton = true;
let activatedEqualButton = false;
let displayDOMContent = '';


addNumericButtonEventListeners();
addOperatorButtonEventListeners();
addDecimalButtonEventListeners();
addDeleteButtonEventListeners();
addEqualButtonEventListeners();
resetCalculatorStatus();

function addNumericButtonEventListeners() {
  for (const numberButton of numbersButtons) {
    numberButton.addEventListener("click", (event) => {
        //add action here
        calculator.modifyNumbers(event.target.getAttribute("value"))
        updateDOM();
        
    })
  }
}

function addOperatorButtonEventListeners() {
  for (const operatorButton of operatorsButtons) {
    operatorButton.addEventListener("click", () => {
    //add action here
      updateDOM();
    });
  }
}

/*Function addNumeric(selectedNumber){
    console.log(selectedNumber)
}
*/
function addDecimalButtonEventListeners() {
  decimalButton.addEventListener("click", () => {
        //add action here
        calculator.modifyNumbers()
        updateDOM();
  });
}

function addDeleteButtonEventListeners() {
  let deleteButton = document.getElementById("AC");
  deleteButton.addEventListener("click", resetCalculatorStatus);
}

function addEqualButtonEventListeners() {
  equalButton.addEventListener("click", () => {
        //add action here
        updateDOM();
  });
}

function updateDOM() {
  toggleStateButtonsDOM(activatedOperatorsButtons, operatorsButtons);
  toggleStateButtonsDOM(activatedNumericButtons, numbersButtons);
  toggleStateButtonsDOM(activatedDecimalButton, [decimalButton]);
  toggleStateButtonsDOM(activatedEqualButton, [equalButton]);
  toggleStateButtonsDOM(activatedPlusMinusButton, [plusminusButton]);
  modifyDisplayDOM();
}
function toggleStateButtonsDOM(state, buttons) {
  for (var i = 0; i < buttons.length; i++) {
    if (state) {
      buttons[i].classList.remove("disabled");
      buttons[i].disabled = false;
    } 
    else {
      buttons[i].classList.add("disabled");
      buttons[i].disabled = true;
    }
  }
}

function modifyDisplayDOM() {
  let displayDOM = document.getElementById("display");
  let valueArray = calculator.getCurrentNumber()
  console.log(valueArray[0])
  let displayValue = valueArray[0]
  if(valueArray[1]){
    displayValue+='.'
  }
  displayDOM.textContent=displayValue;
}

function resetCalculatorStatus() {
  intializedCalculator = true;
  activatedOperatorsButtons = false;
  activatedNumericButtons = true;
  activatedPlusMinusButton = false;
  activatedDecimalButton = true;
  activatedEqualButton = false;
  calculator.resetCalculator();
  updateDOM();
}