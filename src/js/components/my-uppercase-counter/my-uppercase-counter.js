import { MyTextAnalysisModule } from '../my-text-analysis-module/my-text-analysis-module.js'

/**
 * MyUppercaseCounter component.
 */
class MyUppercaseCounter extends HTMLElement {
  /**
   * Constructor for MyUppercaseCounter.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        #my-uppercase-counter-container {
        }
      </style>
      <div id="my-uppercase-counter-container">
        <p>Uppercase Count: <span id="uppercase-counter">0</span></p>
      </div>
    `
    this.uppercaseCounterElement = this.shadowRoot.getElementById('uppercase-counter')

    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  /**
   * Updates the uppercase count.
   *
   * @param {string} text - The text to be analyzed.
   */
  updateUppercaseCounter (text) {
    const uppercaseCounter = this.textAnalysisModule.countUppercase(text)
    this.uppercaseCounterElement.textContent = uppercaseCounter
  }
}

customElements.define('my-uppercase-counter', MyUppercaseCounter)
