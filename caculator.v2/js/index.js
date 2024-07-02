/* TODO: comunicar estado calculadora DOM con  el estado de Calculadora.
Añadir estados en Calculadora
Reorganizar el codigo por documentos
Revisar nombres variables y funciones
Intentar pasar por parametros mas globales(??)
*/

const CALCULATOR = new Calculator()
const MAX_LENGTH_DISPLAY = 9
const DISPLAY = new Display(MAX_LENGTH_DISPLAY)

// BUTTONS
let operatorsButtons = document.getElementsByClassName('operator')
let numbersButtons = document.getElementsByClassName('number')
let modifiersButtons = document.getElementsByClassName('modifier')
let decimalButton = document.getElementById('decimal')
let equalButton = document.getElementById('equal')
let plusminusButton = document.getElementById('plusminus')

// ACTIVATED - NON ACTIVATED STATUS
let activatedOperatorsButtons = true // At the beggining it should be off (false), overwrited to make the calculator functional for now.
let activatedNumericButtons = true
let activatedPlusMinusButton = true // At the beggining it should be off (false), overwrited to make the calculator functional for now.
let activatedDecimalButton = true
let activatedEqualButton = true // At the beggining it should be off (false), overwrited to make the calculator functional for now.

intializeCalculator()

function intializeCalculator () {
  addEventListeners()
  // resetCalculatorStatus()  It should be activated but it's not functional
}

function addEventListeners () {
  addNumericButtonEventListeners()
  addOperatorButtonEventListeners()
  addDecimalButtonEventListeners()
  addClearButtonEventListeners()
  addEqualButtonEventListeners()
  addPlusMinusEventListeners()
}

function addNumericButtonEventListeners () {
  for (const numberButton of numbersButtons) {
    numberButton.addEventListener('click', (event) => {
      CALCULATOR.addValueToCurrentNumber(event.target.getAttribute('value'))
      updateDOM()
    })
  }
}

function addOperatorButtonEventListeners () {
  for (const operatorButton of operatorsButtons) {
    operatorButton.addEventListener('click', (event) => {
      CALCULATOR.setOperator(event.target.getAttribute('value'))
      updateDOM()
    })
  }
}

function addDecimalButtonEventListeners () {
  decimalButton.addEventListener('click', (event) => {
    CALCULATOR.addValueToCurrentNumber(event.target.getAttribute('value'))
    updateDOM()
  })
}

function addClearButtonEventListeners () {
  const deleteButton = document.getElementById('AC')
  deleteButton.addEventListener('click', resetCalculatorStatus)
}

function addEqualButtonEventListeners () {
  equalButton.addEventListener('click', () => {
    CALCULATOR.getResult()
    updateDOM()
  })
}

function addPlusMinusEventListeners () {
  plusminusButton.addEventListener('click', () => {
    CALCULATOR.setPlusMinus()
    updateDOM()
  })
}

function updateDOM () {
  toggleStateButtonsDOM(activatedOperatorsButtons, operatorsButtons)
  toggleStateButtonsDOM(activatedNumericButtons, numbersButtons)
  toggleStateButtonsDOM(activatedDecimalButton, [decimalButton])
  toggleStateButtonsDOM(activatedEqualButton, [equalButton])
  toggleStateButtonsDOM(activatedPlusMinusButton, [plusminusButton])
  modifyDisplayDOM()
}

function toggleStateButtonsDOM (state, buttons) {
  for (let i = 0; i < buttons.length; i++) {
    if (state) {
      buttons[i].classList.remove('disabled')
      buttons[i].disabled = false
    } else {
      buttons[i].classList.add('disabled')
      buttons[i].disabled = true
    }
  }
}

function modifyDisplayDOM () {
  DISPLAY.setContent(CALCULATOR.getCurrentNumber())
}

function resetCalculatorStatus () {
  activatedOperatorsButtons = true // At the beggining it should be off (false), overwrited to make the calculator functional for now.
  activatedNumericButtons = true
  activatedPlusMinusButton = true // At the beggining it should be off (false), overwrited to make the calculator functional for now.
  activatedDecimalButton = true
  activatedEqualButton = true // At the beggining it should be off (false), overwrited to make the calculator functional for now.
  CALCULATOR.resetCalculator()
  updateDOM()
}
