import { MyTextAnalysisModule } from '../my-text-analysis-module/my-text-analysis-module.js'

class MyLowercaseCounter extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        #my-lowercase-counter-container {
        }
      </style>
      <div id="my-lowercase-counter-container">
        <p>Lowercase Count: <span id="lowercase-counter">0</span></p>
      </div>
    `
    this.lowercaseCounterElement = this.shadowRoot.getElementById('lowercase-counter')

    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  updateLowercaseCounter(text) {
    const lowercaseCounter = this.textAnalysisModule.countLowercase(text)
    this.lowercaseCounterElement.textContent = lowercaseCounter
  }
}

customElements.define('my-lowercase-counter', MyLowercaseCounter)
