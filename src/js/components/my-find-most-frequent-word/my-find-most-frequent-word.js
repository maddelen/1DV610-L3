import { MyTextAnalysisModule } from '../../../../my-text-analysis-module/my-text-analysis-module.js'

// Define the HTML template as a template element
const template = document.createElement('template')
template.innerHTML = `
<style>
  #my-find-most-frequent-word-container {
  }
</style>
<div id="my-find-most-frequent-word-container">
  <p>Most Frequent Word: <span id="most-frequent-word"></span></p>
</div>
`

/**
 * MyFindMostFrequentWord component.
 */
class MyFindMostFrequentWord extends HTMLElement {
  /**
   * Constructor for MyFindMostFrequentWord.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })

    // Clone the content from the template and append it to the shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.mostFrequentWordElement = this.shadowRoot.getElementById('most-frequent-word')
    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  /**
   * Finds the most frequent word.
   *
   * @param {string} text - The text to be analyzed.
   */
  updateMostFrequentWord (text) {
    const mostFrequentWord = this.textAnalysisModule.findMostFrequentWord(text)
    this.mostFrequentWordElement.textContent = mostFrequentWord
  }
}

customElements.define('my-find-most-frequent-word', MyFindMostFrequentWord)
