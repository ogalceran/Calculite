class Calculator{
    #result
    #num1
    #num2 
    #operator
    #validOperators
    #ValidOperation
    #num1Complete
    #num2Complete
    #currentNumberHasComma
    #currentNumberCountDecimal
    #zeroCountDecimal
    #decimalHasBeenAdded 

    constructor(){
        this.#result = 0 
        this.#num1 = 0 
        this.#num2 = 0 
        this.#operator = '' 
        this.#validOperators = ['+', '-', '/', 'x'] 
        this.#ValidOperation = false 
        this.#num1Complete = false 
        this.#num2Complete = false 
        this.#currentNumberHasComma = false 
        this.#currentNumberCountDecimal = 0 
        this.#decimalHasBeenAdded = false 
        this.#zeroCountDecimal = 0 
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
        this.#currentNumberCountDecimal = 0 
        this.#decimalHasBeenAdded = false 
        this.#zeroCountDecimal = 0 
    }

    getResult(){
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
        return this.#result
    }
    /*
    checkOperation(num1, num2, operator){
        let operatorOk = false
        let numOk = false
        this.#validOperators.forEach(validOperator => {
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
    modifyNumbers(newValueClick){
        
        if (newValueClick != '.') {
            let newValueClicktoFloat = parseFloat(newValueClick)
            if (this.#currentNumberHasComma) {
                this.addDecimal(newValueClicktoFloat)
                this.#decimalHasBeenAdded = true
            } else {
                this.addDigit(newValueClicktoFloat)
            }
        } 
        else {
            this.#currentNumberHasComma = true
        }
       
    }


    addDigit(unit){
        if (!this.#num1Complete){
            this.#num1 = this.#num1 * 10 + parseFloat(unit)
        }
        else{
            this.#num2 = this.#num2 * 10 + parseFloat(unit)
        }
    }
    
    addDecimal(unit){
        // Forma matematica
        console.log(typeof unit)
        this.#currentNumberCountDecimal += 1
        let exponencial 
        exponencial = Math.pow(10, this.#currentNumberCountDecimal) 
        let decimal 
        decimal = unit / exponencial 
        this.#num1 = Math.round((this.#num1 + decimal) * exponencial) / exponencial 

        if (unit == 0){
           this.#zeroCountDecimal ++
        }
        else{
            this.#zeroCountDecimal = 0
        }
       
            /*
       // Forma concatenada
       if (this.#currentNumberCountDecimal === 0) {
            this.#num1 += '.' 
       }

       this.#currentNumberCountDecimal += 1 
       this.#num1 += unit  */
    } 
    setOperators(operator){
        if(this.#validOperators.includes(operator)){
            this.#operator=operator
        }
    }

    getCurrentNumber(){
        let currentNumber = this.#num1.toString()
        if (this.#num1Complete){
           currentNumber = this.#num2.toString()
        }
        if (this.#currentNumberHasComma && !this.#decimalHasBeenAdded /*&& !currentNumber.includes(".")*/){
            currentNumber += '.'
        }
        if(this.#zeroCountDecimal > 0){
          for (let i = 0; i < this.#zeroCountDecimal; i++) {
            currentNumber += '0'
          }
        }
        return currentNumber       
        
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