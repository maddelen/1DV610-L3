import { MyTextAnalysisModule } from '../../../../my-text-analysis-module/my-text-analysis-module.js'

// Define the HTML template as a template element
const template = document.createElement('template')
template.innerHTML = `
<style>
  #my-character-counter-container {
  }
</style>

<div id="my-character-counter-container">
  <p>Character Count: <span id="character-counter">0</span></p>
</div>
`

/**
 * MyCharacterCounter component.
 */
class MyCharacterCounter extends HTMLElement {
  /**
   * Constructor for MyCharacterCounter.
   */
  constructor () {
    super()
    this.textAnalysisModule = new MyTextAnalysisModule()
    this.attachShadow({ mode: 'open' })

    // Clone the content from the template and append it to the shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.characterCounterElement = this.shadowRoot.getElementById('character-counter')
    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  /**
   * Updates the character count.
   *
   * @param {string} text - The text to be analyzed.
   */
  updateCharacterCounter (text) {
    const characterCounter = this.textAnalysisModule.countCharacters(text)
    this.characterCounterElement.textContent = characterCounter
  }
}

customElements.define('my-character-counter', MyCharacterCounter)
