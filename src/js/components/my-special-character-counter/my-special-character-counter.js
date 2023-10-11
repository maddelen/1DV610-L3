import { MyTextAnalysisModule } from '../my-text-analysis-module/my-text-analysis-module.js'

class MySpecialCharacterCounter extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        #my-special-character-counter-container {
        }
      </style>
      <div id="my-special-character-counter-container">
        <p>Special Character Count: <span id="special-character-counter">0</span></p>
      </div>
    `
    this.specialCharacterCounterElement = this.shadowRoot.getElementById('special-character-counter')

    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  updateSpecialCharacterCounter(text) {
    const specialCharacterCounter = this.textAnalysisModule.countSpecialCharacters(text)
    this.specialCharacterCounterElement.textContent = specialCharacterCounter
  }
}

customElements.define('my-special-character-counter', MySpecialCharacterCounter)
