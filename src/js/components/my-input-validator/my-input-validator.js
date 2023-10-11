import { MyTextAnalysisModule } from '../my-text-analysis-module/my-text-analysis-module.js'

/**
 * MyInputValidator component.
 */
class MyInputValidator extends HTMLElement {
  /**
   * Constructor for MyInputValidator.
   */
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = `
      <style>
        #my-input-validator-container {
          display: none /* Initially hide the component */
        }
        #validation-error-message {
          color: red;
        }
      </style>
      <div id="my-input-validator-container">
        <p>Sorry buddy! <span id="validation-error-message"></span></p>
      </div>
    `
    this.validationErrorElement = this.shadowRoot.getElementById('validation-error-message')

    this.textAnalysisModule = new MyTextAnalysisModule()
  }

  /**
   * Validates user input. If there's an error, show the component.
   *
   * @param {string} text - The text to be analyzed.
   */
  validateUserInput (text) {
    const validationError = this.textAnalysisModule.validateUserInput(text)
    if (validationError.errorMessage) {
      // Show the component if there's a validation error
      this.shadowRoot.querySelector('#my-input-validator-container').style.display = 'block'
      this.validationErrorElement.textContent = validationError.errorMessage
    } else {
      // Hide the component if there's no validation error
      this.shadowRoot.querySelector('#my-input-validator-container').style.display = 'none'
    }
  }
}

customElements.define('my-input-validator', MyInputValidator)
