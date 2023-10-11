import { MyTextAnalysisModule } from '../my-text-analysis-module/my-text-analysis-module.js'

/**
 * MyWhitespaceCounter component.
 */
class MyWhitespaceCounter extends HTMLElement {
  /**
   * Constructor for MyWhitespaceCounter.
   */
  constructor () {
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

  /**
   * Updates the whitespace count.
   *
   * @param {string} text - The text to be analyzed.
   */
  updateWhitespaceCounter (text) {
    const whitespaceCounter = this.textAnalysisModule.countWhitespace(text)
    this.whitespaceCounterElement.textContent = whitespaceCounter
  }
}

customElements.define('my-whitespace-counter', MyWhitespaceCounter)
