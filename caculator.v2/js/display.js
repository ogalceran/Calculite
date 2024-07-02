class Display {
  #content
  #maxLength
  #displayDOM

  constructor (maxLength) {
    this.#content = ''
    this.#maxLength = maxLength
    this.#displayDOM = document.getElementById('display')
  }

  setContent (newContent) {
    if (newContent === Infinity || newContent === isNaN || newContent === undefined || newContent == null) {
      this.#content = '#ERROR'
    } else if (newContent.length > this.#maxLength) {
      this.#content = 'ERROR LGT'
    } else {
      this.#content = newContent
    }

    this.#displayDOM.textContent = this.#content
  }
}
