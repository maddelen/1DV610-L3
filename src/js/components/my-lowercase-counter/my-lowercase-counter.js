import { MyTextAnalysisModule } from '../../../../my-text-analysis-module/my-text-analysis-module.js'

// Define the HTML template as a template element
const template = document.createElement('template')
template.innerHTML = `
<style>
  #my-lowercase-counter-container {
  }
</style>
<div id="my-lowercase-counter-container">
  <p>Lowercase Count: <span id="lowercase-counter">0</span></p>
</div>
`

/**
 * MyLowercaseCounter component.
 */
class MyLowercaseCounter extends HTMLElement {
  /**
   * Constructor for MyLowercaseCounter.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })

    // Clone the content from the template and append it to the shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.lowercaseCounterElement = this.shadowRoot.getElementById('lowercase-counter')
    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  /**
   * Updates the lowercase count.
   *
   * @param {string} text - The text to be analyzed.
   */
  updateLowercaseCounter (text) {
    const lowercaseCounter = this.textAnalysisModule.countLowercase(text)
    this.lowercaseCounterElement.textContent = lowercaseCounter
  }
}

customElements.define('my-lowercase-counter', MyLowercaseCounter)
