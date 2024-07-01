class Calculator{
    #result
    #num1
    #num2 
    #operator
    #acceptedOperators
    #ValidOperation
    #num1Complete
    #num2Complete
    #currentNumberHasComma
    #currentNumberCountDecimals
    #zeroCountDecimal
    #decimalHasBeenAdded 
    #counterAddedDigitsToNum

    constructor(){
        this.#result = 0 
        this.#num1 = 0 
        this.#num2 = 0 
        this.#operator = '' 
        this.#acceptedOperators = ['+', '-', '/', 'x'] 
        this.#ValidOperation = false 
        this.#num1Complete = false 
        this.#num2Complete = false 
        this.#currentNumberHasComma = false 
        this.#currentNumberCountDecimals = 0 
        this.#decimalHasBeenAdded = false 
        this.#zeroCountDecimal = 0 
        this.#counterAddedDigitsToNum =0
    }
    /*
    setOperation(num1, num2, operator){
        this.checkOperation(num1, num2, operator)
        if (this.#ValidOperation){
            this.#num1=num1
            this.#num2=num2
            this.#operator=operator
        }
    }
    */
    resetCalculator(){
        this.#result=0 
        this.#num1=0 
        this.#num2=0 
        this.#operator='' 
        this.#ValidOperation = false 
        this.#num1Complete = false 
        this.#num2Complete = false 
        this.#currentNumberHasComma = false 
        this.#currentNumberCountDecimals = 0 
        this.#decimalHasBeenAdded = false 
        this.#zeroCountDecimal = 0 
        this.#counterAddedDigitsToNum =0

    }

    getResult(){
        if(this.checkCurrentNumberOK()){
            this.#num2Complete=true
             switch(this.#operator){
            case '+': 
               this.#result = this.plus()
                break 
            case '-':
                this.#result = this.minus()
                break 
            case '/':
                this.#result = this.divide()
                break 
            case 'x':
                this.#result = this.multiply()
               break 
        }
            this.#num1=this.#result
            return this.#result
        }
       
    }
    /*
    checkOperation(num1, num2, operator){
        let operatorOk = false
        let numOk = false
        this.#acceptedOperators.forEach(validOperator => {
            if(operator == validOperator){
                operatorOk = true
            }
        })
        if (typeof num1 == number && typeof num2 == number){
            numOk = true
        }

        if (operatorOk && numOk){
            this.#ValidOperation = true

        }
        else{
            this.#ValidOperation = false
        }
    }
    */
    addValueToCurrentNumber(newValueClick){
        this.#counterAddedDigitsToNum++
        console.log(this.#counterAddedDigitsToNum)
        if (newValueClick != '.') {
            let newValueClicktoFloat = parseFloat(newValueClick)
            if (this.#currentNumberHasComma) {
                this.addDecimalToCurrentNumber(newValueClicktoFloat)
                this.#decimalHasBeenAdded = true
                console.log("entra 1r if")
            } else {
                this.addDigitToCurrentNumber(newValueClicktoFloat)
                console.log("entra else")
            }
        } 
        else {
            this.#currentNumberHasComma = true
        }
        console.log("Num 1:" +this.#num1 +" num 2: " + this.#num2)
    }

    addDigitToCurrentNumber(unit){
        if (!this.#num1Complete){
            this.#num1 = this.#num1 * 10 + parseFloat(unit)
        }
        else{
            this.#num2 = this.#num2 * 10 + parseFloat(unit)
        }
    }
    
    addDecimalToCurrentNumber(unit){
        this.#currentNumberCountDecimals += 1
        let exponencial 
        exponencial = Math.pow(10, this.#currentNumberCountDecimals) 
        let decimal 
        decimal = unit / exponencial
        
        if(!this.#num1Complete){
            this.#num1 = Math.round((this.#num1 + decimal) * exponencial) / exponencial 
        }else{
            this.#num2 = Math.round((this.#num2 + decimal) * exponencial) / exponencial 
        }

        if (unit == 0){
           this.#zeroCountDecimal ++
        }
        else{
            this.#zeroCountDecimal = 0
        }
    } 

    setOperator(operator){
        if(this.#acceptedOperators.includes(operator) && this.checkCurrentNumberOK()){
            this.resetNumberStatus()
            this.#operator=operator
           
        }
    
    }

    resetNumberStatus(){
        this.#num1Complete=true
        this.#currentNumberCountDecimals=0
        this.#decimalHasBeenAdded=false
        this.#currentNumberHasComma=false
        this.#counterAddedDigitsToNum =0
    }

    checkCurrentNumberOK(){
        let currentNumberOK = false
        if(this.#decimalHasBeenAdded || !this.#currentNumberHasComma){//cambiar condicion aqui para validar mas el num de parametro
            currentNumberOK = true
        }
        return currentNumberOK
    }

    getCurrentNumber(){
        let currentNumber = this.#num1.toString()
        if(!this.#num2Complete) {
            if (this.#num1Complete){
                currentNumber = this.#num2.toString()
            }
            if (this.#currentNumberHasComma && !this.#decimalHasBeenAdded){
                currentNumber += '.'
            }
            if(this.#zeroCountDecimal > 0){
                for (let i = 0; i < this.#zeroCountDecimal; i++) {
                    currentNumber += '0'
                }

            }
        } else {
            currentNumber = this.#result
        }
        return currentNumber
    }

    setPlusMinus(){
        if(!this.#num1Complete){
            this.#num1=this.#num1*(-1)
        }else{
            this.#num2=this.#num2*(-1)
        }
    }
 
    plus(){
        return (this.#num1) + (this.#num2)
    }
    minus(){
        return (this.#num1) - (this.#num2)
    }
    divide(){
        return (this.#num1) / (this.#num2)
    }
    multiply(){
        return (this.#num1) * (this.#num2)    
    }
}