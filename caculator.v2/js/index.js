const calculator = new Calculator() 
const maxLength = 9 
const display = new Display(maxLength) 
const operatorsButtons = document.getElementsByClassName("operator") 
const numbersButtons = document.getElementsByClassName("number") 
const modifiersButtons = document.getElementsByClassName("modifier") 
const decimalButton = document.getElementById("decimal") 
const equalButton = document.getElementById("equal") 
const plusminusButton = document.getElementById("plusminus") 

let intializedCalculator = true 
let activatedOperatorsButtons = true //false 
let activatedNumericButtons = true 
let activatedPlusMinusButton = true //false 
let activatedDecimalButton = true 
let activatedEqualButton = true //false 
let displayDOMContent = '' 
let commaIsClicked = true //false 

addNumericButtonEventListeners() 
addOperatorButtonEventListeners() 
addDecimalButtonEventListeners() 
addDeleteButtonEventListeners() 
addEqualButtonEventListeners()
addPlusMinusEventListeners()
//resetCalculatorStatus() 

function addNumericButtonEventListeners() {
  for (const numberButton of numbersButtons) {
    numberButton.addEventListener("click", (event) => {
        calculator.addValueToCurrentNumber(event.target.getAttribute("value"))
        //activatedDecimalButton=true
        //activatedOperatorsButtons=true
        updateDOM() 
        
    })
  }
}

function addOperatorButtonEventListeners() {
  for (const operatorButton of operatorsButtons) {
    operatorButton.addEventListener("click", (event) => {
      calculator.setOperator(event.target.getAttribute("value"))
      updateDOM() 
    }) 
  }
}
/*Function addNumeric(selectedNumber){
    console.log(selectedNumber)
}
*/
function addDecimalButtonEventListeners() {
  decimalButton.addEventListener("click", (event) => {
        calculator.addValueToCurrentNumber(event.target.getAttribute("value"))
        //activatedDecimalButton=false
        //activatedOperatorsButtons=false
        updateDOM() 
  }) 
}

function addDeleteButtonEventListeners() {
  let deleteButton = document.getElementById("AC") 
  deleteButton.addEventListener("click", resetCalculatorStatus) 
}

function addEqualButtonEventListeners() {
  equalButton.addEventListener("click", () => {
        calculator.getResult()
        updateDOM() 
  }) 
}

function addPlusMinusEventListeners(){
  plusminusButton.addEventListener("click", () => {
    calculator.setPlusMinus()
    console.log("plusminus")
    updateDOM() 
}) 
}

function updateDOM() {
  toggleStateButtonsDOM(activatedOperatorsButtons, operatorsButtons) 
  toggleStateButtonsDOM(activatedNumericButtons, numbersButtons) 
  toggleStateButtonsDOM(activatedDecimalButton, [decimalButton]) 
  toggleStateButtonsDOM(activatedEqualButton, [equalButton]) 
  toggleStateButtonsDOM(activatedPlusMinusButton, [plusminusButton]) 
  modifyDisplayDOM() 
}

function toggleStateButtonsDOM(state, buttons) {
  for (var i = 0; i < buttons.length; i++) {
    if (state) {
      buttons[i].classList.remove("disabled") 
      buttons[i].disabled = false 
    } 
    else {
      buttons[i].classList.add("disabled") 
      buttons[i].disabled = true 
    }
  }
}

function modifyDisplayDOM() {
  let displayDOM = document.getElementById("display") 
  let displayValue = calculator.getCurrentNumber()
  console.log("modifico DOM")
 /* if(valueArray[1] && !commaIsClicked){
    displayValue+='.'
    commaIsClicked = true 
    console.log("entra if")
  }*/
  displayDOM.textContent=displayValue 
}

function resetCalculatorStatus() {
  intializedCalculator = true 
  activatedOperatorsButtons = false 
  activatedNumericButtons = true 
  activatedPlusMinusButton = false 
  activatedDecimalButton = true 
  activatedEqualButton = false 
  calculator.resetCalculator() 
  updateDOM() 
}