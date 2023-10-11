import { MyTextAnalysisModule } from '../my-text-analysis-module/my-text-analysis-module.js'

/**
 * MySentenceCounter component.
 */
class MySentenceCounter extends HTMLElement {
  /**
   * Constructor for MySentenceCounter.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        #my-sentence-counter-container {
        }
      </style>

      <div id="my-sentence-counter-container">
        <p>Sentence Count: <span id="sentence-counter">0</span></p>
      </div>
    `
    this.sentenceCounterElement = this.shadowRoot.getElementById('sentence-counter')

    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  /**
   * Updates the sentence count.
   *
   * @param {string} text - The text to be analyzed.
   */
  updateSentenceCounter (text) {
    const sentenceCounter = this.textAnalysisModule.countSentences(text)
    this.sentenceCounterElement.textContent = sentenceCounter
  }
}

customElements.define('my-sentence-counter', MySentenceCounter)
