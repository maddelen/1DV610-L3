import { MyTextAnalysisModule } from '../my-text-analysis-module/my-text-analysis-module.js'

class MyFindMostFrequentWord extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        #my-find-most-frequent-word-container {
        }
      </style>
      <div id="my-find-most-frequent-word-container">
        <p>Most Frequent Word: <span id="most-frequent-word"></span></p>
      </div>
    `
    this.mostFrequentWordElement = this.shadowRoot.getElementById('most-frequent-word')

    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  updateMostFrequentWord(text) {
    const mostFrequentWord = this.textAnalysisModule.findMostFrequentWord(text)
    this.mostFrequentWordElement.textContent = mostFrequentWord
  }
}

customElements.define('my-find-most-frequent-word', MyFindMostFrequentWord)
