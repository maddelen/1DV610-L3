import { MyTextAnalysisModule } from '../my-text-analysis-module/my-text-analysis-module.js'

class MyUppercaseCounter extends HTMLElement {
  constructor() {
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

  updateUppercaseCounter(text) {
    const uppercaseCounter = this.textAnalysisModule.countUppercase(text)
    this.uppercaseCounterElement.textContent = uppercaseCounter
  }
}

customElements.define('my-uppercase-counter', MyUppercaseCounter)
