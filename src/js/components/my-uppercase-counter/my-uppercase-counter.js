import { MyTextAnalysisModule } from '../../../../my-text-analysis-module/my-text-analysis-module.js'

// Define the HTML template as a template element
const template = document.createElement('template')
template.innerHTML = `
<style>
  #my-uppercase-counter-container {
  }
</style>
<div id="my-uppercase-counter-container">
  <p>Uppercase Count: <span id="uppercase-counter">0</span></p>
</div>
`

/**
 * MyUppercaseCounter component.
 */
class MyUppercaseCounter extends HTMLElement {
  /**
   * Constructor for MyUppercaseCounter.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })

    // Clone the content from the template and append it to the shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.uppercaseCounterElement = this.shadowRoot.getElementById('uppercase-counter')
    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  /**
   * Updates the uppercase count.
   *
   * @param {string} text - The text to be analyzed.
   */
  updateUppercaseCounter (text) {
    const uppercaseCounter = this.textAnalysisModule.countUppercase(text)
    this.uppercaseCounterElement.textContent = uppercaseCounter
  }
}

customElements.define('my-uppercase-counter', MyUppercaseCounter)
