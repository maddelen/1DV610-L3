import { MyTextAnalysisModule } from '../my-text-analysis-module/my-text-analysis-module.js'

class MyDigitCounter extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        #my-digit-counter-container {
        }
      </style>
      <div id="my-digit-counter-container">
        <p>Digit Count: <span id="digit-counter">0</span></p>
      </div>
    `
    this.digitCounterElement = this.shadowRoot.getElementById('digit-counter')

    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  updateDigitCounter(text) {
    const digitCounter = this.textAnalysisModule.countDigits(text)
    this.digitCounterElement.textContent = digitCounter
  }
}

customElements.define('my-digit-counter', MyDigitCounter)
