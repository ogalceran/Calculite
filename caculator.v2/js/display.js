class Display{
    #content
    #maxLength

    constructor(maxLength){
        this.#content = ''
        this.#maxLength = maxLength
    }
    
    setContent(newContent){
        if (newContent == 'ERROR'){
            this.#content = newContent
        }
        else if (newContent.length > this.#maxLength){
            this.#content = 'ERROR LGT'
        }
    }
}