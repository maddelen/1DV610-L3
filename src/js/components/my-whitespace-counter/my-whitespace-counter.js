import { MyTextAnalysisModule } from '../my-text-analysis-module/my-text-analysis-module.js'

class MyWhitespaceCounter extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        #my-whitespace-counter-container {
        }
      </style>
      <div id="my-whitespace-counter-container">
        <p>Whitespace Count: <span id="whitespace-counter">0</span></p>
      </div>
    `
    this.whitespaceCounterElement = this.shadowRoot.getElementById('whitespace-counter')

    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  updateWhitespaceCounter(text) {
    const whitespaceCounter = this.textAnalysisModule.countWhitespace(text)
    this.whitespaceCounterElement.textContent = whitespaceCounter
  }
}

customElements.define('my-whitespace-counter', MyWhitespaceCounter)
