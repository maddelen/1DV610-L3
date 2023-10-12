import { MyTextAnalysisModule } from '../../../../my-text-analysis-module/my-text-analysis-module.js'

// Define the HTML template as a template element
const template = document.createElement('template')
template.innerHTML = `
<style>
  #my-vowel-counter-container {
  }
</style>
<div id="my-vowel-counter-container">
  <p>Vowel Count: <span id="vowel-counter">0</span></p>
</div>
`

/**
 * MyVowelCounter component.
 */
class MyVowelCounter extends HTMLElement {
  /**
   * Constructor for MyVowelCounter.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })

    // Clone the content from the template and append it to the shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.vowelCounterElement = this.shadowRoot.getElementById('vowel-counter')
    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  /**
   * Updates the vowel count.
   *
   * @param {string} text - The text to be analyzed.
   */
  updateVowelCounter (text) {
    const vowelCounter = this.textAnalysisModule.countVowels(text)
    this.vowelCounterElement.textContent = vowelCounter
  }
}

customElements.define('my-vowel-counter', MyVowelCounter)
