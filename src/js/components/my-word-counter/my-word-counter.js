import { MyTextAnalysisModule } from '../my-text-analysis-module/my-text-analysis-module.js'

class MyWordCounter extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        #my-word-counter-container {
        }
      </style>

      <div id="my-word-counter-container">
      <p>Word Count: <span id="word-counter">0</span></p>
      </div>
    `
    this.wordCounterElement = this.shadowRoot.getElementById('word-counter')

    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  updateWordCounter(text) {
    const wordCounter = this.textAnalysisModule.wordCount(text)
    this.wordCounterElement.textContent = wordCounter
  }
}

customElements.define('my-word-counter', MyWordCounter)
