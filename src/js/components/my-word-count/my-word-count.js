import { MyTextAnalysisModule } from '../my-text-analysis-module/my-text-analysis-module.js'

class MyWordCount extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <p>Word Count: <span id="word-count">0</span></p>
    `
    this.wordCountElement = this.shadowRoot.getElementById('word-count')

    // Create an instance of MyTextAnalysisModule
    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  updateWordCount(text) {
    const wordCount = this.textAnalysisModule.wordCount(text)
    this.wordCountElement.textContent = wordCount
  }
}

customElements.define('my-word-count', MyWordCount)
