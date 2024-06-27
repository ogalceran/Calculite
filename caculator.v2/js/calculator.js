class Calculator{
    #result
    #num1
    #num2 
    #operator
    #validOperators
    #ValidOperation
    #num1Complete
    #currentNumberDecimal
    #currentNumberCountDecimal

    constructor(){
        this.#result = 0;
        this.#num1 = 0;
        this.#num2 = 0;
        this.#operator = '';
        this.#validOperators = ['+', '-', '/', 'x'];
        this.#ValidOperation = false;
        this.#num1Complete = false;
        this.#currentNumberDecimal = false;
        this.#currentNumberCountDecimal = 0;
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
        this.#result=0;
        this.#num1=0;
        this.#num2=0;
        this.#operator='';
        this.#ValidOperation = false;
        this.#num1Complete = false;
        this.#currentNumberDecimal = false;
        this.#currentNumberCountDecimal = 0;
    }

    getResult(){
        switch(this.#operator){
            case '+': 
               this.#result = this.plus()
                break;
            case '-':
                this.#result = this.minus()
                break;
            case '/':
                this.#result = this.divide()
                break;
            case 'x':
                this.#result = this.multiply()
               break;
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
        if(newValueClick == '.'){ // incorporar error doble .
            this.#currentNumberDecimal = true

        }
        if (!this.#currentNumberDecimal){
            addDecimal(newValueClick)
        }
        else{
            this.addDigit(newValueClick)
        }

    }
    addDigit(unit){
        if (!this.#num1Complete){
            this.#num1 = this.#num1 * 10 + unit
        }
        else{
            this.#num2 = this.#num2 * 10 + unit
        }
    }
    
    addDecimal(unit){
        this.#currentNumberCountDecimal += 1
        this.#num1 = this.#num1 + unit * this.#currentNumberCountDecimal / 10
    }

    // operators() --> añadir reset del contador de decimales
 
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