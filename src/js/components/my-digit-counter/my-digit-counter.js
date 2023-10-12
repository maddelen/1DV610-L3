import { MyTextAnalysisModule } from '../../../../my-text-analysis-module/my-text-analysis-module.js'

// Define the HTML template as a template element
const template = document.createElement('template')
template.innerHTML = `
<style>
  #my-digit-counter-container {
  }
</style>
<div id="my-digit-counter-container">
  <p>Digit Count: <span id="digit-counter">0</span></p>
</div>
`

/**
 * MyDigitCounter component.
 */
class MyDigitCounter extends HTMLElement {
  /**
   * Constructor for MyDigitCounter.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })

    // Clone the content from the template and append it to the shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.digitCounterElement = this.shadowRoot.getElementById('digit-counter')
    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  /**
   * Updates the digit count.
   *
   * @param {string} text - The text to be analyzed.
   */
  updateDigitCounter (text) {
    const digitCounter = this.textAnalysisModule.countDigits(text)
    this.digitCounterElement.textContent = digitCounter
  }
}

customElements.define('my-digit-counter', MyDigitCounter)
