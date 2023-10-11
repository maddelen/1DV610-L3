import { MyTextAnalysisModule } from '../my-text-analysis-module/my-text-analysis-module.js'

/**
 * MyCharacterCounter component.
 */
class MyCharacterCounter extends HTMLElement {
  /**
   * Constructor for MyCharacterCounter.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        #my-character-counter-container {
        }
      </style>

      <div id="my-character-counter-container">
        <p>Character Count: <span id="character-counter">0</span></p>
      </div>
    `
    this.characterCounterElement = this.shadowRoot.getElementById('character-counter')

    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  /**
   * Updates the character count.
   *
   * @param {string}text - The text to be analyzed.
   */
  updateCharacterCounter (text) {
    const characterCounter = this.textAnalysisModule.countCharacters(text)
    this.characterCounterElement.textContent = characterCounter
  }
}

customElements.define('my-character-counter', MyCharacterCounter)
