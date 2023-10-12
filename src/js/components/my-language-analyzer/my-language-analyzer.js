import { MyTextAnalysisModule } from '../../../../my-text-analysis-module/my-text-analysis-module.js'

// Define the HTML template as a template element
const template = document.createElement('template')
template.innerHTML = `
<style>
  #my-language-analyzer-container {
  }
</style>
<div id="my-language-analyzer-container">
  <p>Analyzed Language: <span id="analyzed-language"></span></p>
</div>
`

/**
 * MyLanguageAnalyzer component.
 */
class MyLanguageAnalyzer extends HTMLElement {
  /**
   * Constructor for MyLanguageAnalyzer.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })

    // Clone the content from the template and append it to the shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.analyzedLanguageElement = this.shadowRoot.getElementById('analyzed-language')
    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  /**
   * Analyzes the language.
   *
   * @param {string} text - The text to be analyzed.
   */
  analyzeLanguage (text) {
    const analyzedLanguage = this.textAnalysisModule.analyzeLanguage(text)
    this.analyzedLanguageElement.textContent = analyzedLanguage
  }
}

customElements.define('my-language-analyzer', MyLanguageAnalyzer)
