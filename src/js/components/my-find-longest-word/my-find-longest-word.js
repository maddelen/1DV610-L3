import { MyTextAnalysisModule } from '../my-text-analysis-module/my-text-analysis-module.js'

class MyFindLongestWord extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        #my-find-longest-word-container {
        }
      </style>
      <div id="my-find-longest-word-container">
        <p>Longest Word: <span id="longest-word"></span></p>
      </div>
    `
    this.longestWordElement = this.shadowRoot.getElementById('longest-word')

    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  updateLongestWord(text) {
    const longestWord = this.textAnalysisModule.findLongestWord(text)
    this.longestWordElement.textContent = longestWord
  }
}

customElements.define('my-find-longest-word', MyFindLongestWord)
