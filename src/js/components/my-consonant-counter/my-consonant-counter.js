import { MyTextAnalysisModule } from '../../../../my-text-analysis-module/my-text-analysis-module.js'

// Define the HTML template as a template element
const template = document.createElement('template')
template.innerHTML = `
<style>
  #my-consonant-counter-container {
  }
</style>
<div id="my-consonant-counter-container">
  <p>Consonant Count: <span id="consonant-counter">0</span></p>
</div>
`

/**
 * MyConsonantCounter component.
 */
class MyConsonantCounter extends HTMLElement {
  /**
   * Constructor for MyConsonantCounter.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })

    // Clone the content from the template and append it to the shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.consonantCounterElement = this.shadowRoot.getElementById('consonant-counter')
    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  /**
   * Updates the consonant count.
   *
   * @param {string} text - The text to be analyzed.
   */
  updateConsonantCounter (text) {
    const consonantCounter = this.textAnalysisModule.countConsonants(text)
    this.consonantCounterElement.textContent = consonantCounter
  }
}

customElements.define('my-consonant-counter', MyConsonantCounter)
