import { MyTextAnalysisModule } from '../my-text-analysis-module/my-text-analysis-module.js'

class MyLanguageAnalyzer extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        #my-language-analyzer-container {
        }
      </style>
      <div id="my-language-analyzer-container">
        <p>Analyzed Language: <span id="analyzed-language"></span></p>
      </div>
    `
    this.analyzedLanguageElement = this.shadowRoot.getElementById('analyzed-language')

    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  analyzeLanguage(text) {
    const analyzedLanguage = this.textAnalysisModule.analyzeLanguage(text)
    this.analyzedLanguageElement.textContent = analyzedLanguage
  }
}

customElements.define('my-language-analyzer', MyLanguageAnalyzer)
