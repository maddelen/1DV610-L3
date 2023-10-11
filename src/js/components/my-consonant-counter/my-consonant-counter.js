import { MyTextAnalysisModule } from '../my-text-analysis-module/my-text-analysis-module.js'

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
    this.shadowRoot.innerHTML = `
      <style>
        #my-consonant-counter-container {
        }
      </style>
      <div id="my-consonant-counter-container">
        <p>Consonant Count: <span id="consonant-counter">0</span></p>
      </div>
    `
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
