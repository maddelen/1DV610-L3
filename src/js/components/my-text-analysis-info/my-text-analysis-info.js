/**
 * The my-page web component module.
 *
 * @author Maddelen Hedenström <mh222vu@student.lnu.se>
 * @version 1.0.0
 */

const template = document.createElement('template')
template.innerHTML = `
<style>
  * {
    margin: 0;
    padding: 0;
  }

  #my-text-analysis-info-container {
    background-color: white;
    margin: 10px;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
  }

</style>
<div id="my-text-analysis-info-container">
  <h1>Welcome to the text analysis app.</h1>
  <p>Here you can analyze your text and get information about it.</p>
  </div>
</div>
`

customElements.define('my-text-analysis-info',
  /**
   * Represents a page.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
  }
)