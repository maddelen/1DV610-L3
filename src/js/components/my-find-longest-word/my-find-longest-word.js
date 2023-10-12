import { MyTextAnalysisModule } from '../../../../my-text-analysis-module/my-text-analysis-module.js'

// Define the HTML template as a template element
const template = document.createElement('template')
template.innerHTML = `
<style>
  #my-find-longest-word-container {
  }
</style>
<div id="my-find-longest-word-container">
  <p>Longest Word: <span id="longest-word"></span></p>
</div>
`

/**
 * MyFindLongestWord component.
 */
class MyFindLongestWord extends HTMLElement {
  /**
   * Constructor for MyFindLongestWord.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })

    // Clone the content from the template and append it to the shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.longestWordElement = this.shadowRoot.getElementById('longest-word')
    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  /**
   * Finds the longest word.
   *
   * @param {string} text - The text to be analyzed.
   */
  updateLongestWord (text) {
    const longestWord = this.textAnalysisModule.findLongestWord(text)
    this.longestWordElement.textContent = longestWord
  }
}

customElements.define('my-find-longest-word', MyFindLongestWord)
