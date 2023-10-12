import { MyTextAnalysisModule } from '../../../../my-text-analysis-module/my-text-analysis-module.js'

// Define the HTML template as a template element
const template = document.createElement('template')
template.innerHTML = `
<style>
  #my-word-counter-container {
  }
</style>
<div id="my-word-counter-container">
  <p>Word Count: <span id="word-counter">0</span></p>
</div>
`

/**
 * MyWordCounter component.
 */
class MyWordCounter extends HTMLElement {
  /**
   * Constructor for MyWordCounter.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })

    // Clone the content from the template and append it to the shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.wordCounterElement = this.shadowRoot.getElementById('word-counter')
    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  /**
   * Updates the word count.
   *
   * @param {string} text - The text to be analyzed.
   */
  updateWordCounter (text) {
    const wordCounter = this.textAnalysisModule.wordCount(text)
    this.wordCounterElement.textContent = wordCounter
  }
}

customElements.define('my-word-counter', MyWordCounter)
