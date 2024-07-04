/*TODO: comunicar estado calculadora DOM con  el estado de Calculadora. 
Añadir estados en Calculadora
Reorganizar el codigo por documentos
Revisar nombres variables y funciones
Intentar pasar por parametros mas globales(??)
*/

const calculator = new Calculator() 
const MAX_LENGTH_DISPLAY = 9 
const display = new Display(MAX_LENGTH_DISPLAY) 

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

intializeCalculator()

function intializeCalculator(){
  addEventListeners()
 // resetCalculatorStatus()
}

function addEventListeners(){
  addNumericButtonEventListeners() 
  addOperatorButtonEventListeners() 
  addDecimalButtonEventListeners() 
  addClearButtonEventListeners() 
  addEqualButtonEventListeners()
  addPlusMinusEventListeners()
}

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

function addDecimalButtonEventListeners() {
  decimalButton.addEventListener("click", (event) => {
        calculator.addValueToCurrentNumber(event.target.getAttribute("value"))
        activatedDecimalButton=false
        activatedOperatorsButtons=false
        updateDOM() 
  }) 
}

function addClearButtonEventListeners() {
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
<<<<<<< HEAD
  display.setContent(calculator.getCurrentNumber())
  console.log(calculator.getCurrentNumber())
=======
  let displayDOM = document.getElementById("display");
  let displayValue = calculator.getCurrentNumber()
 /* if(valueArray[1] && !commaIsClicked){
    displayValue+='.'
    commaIsClicked = true;
    console.log("entra if")
  }*/
  displayDOM.textContent=displayValue;
>>>>>>> dev-anna
}

function resetCalculatorStatus() {
  intializedCalculator = true 
  //activatedOperatorsButtons = false 
  activatedNumericButtons = true 
  //activatedPlusMinusButton = false 
  activatedDecimalButton = true 
  //activatedEqualButton = false 
  calculator.resetCalculator() 
  updateDOM() 
}