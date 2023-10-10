/**
 * The my-page web component.
 *
 * @author Maddelen Hedenström <mh222vu@student.lnu.se>
 * @version 1.0.0
 */

import '../my-text-analysis-info'
import '../my-textarea'
import '../my-word-count'

const IMG_URL = (new URL('images/bg.jpg', import.meta.url)).href

const template = document.createElement('template')
template.innerHTML = `
<style>
  * {
    margin: 0;
    padding: 0;
  }

  #my-page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: url("${IMG_URL}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    flex-direction: column;
  }

  #components-container {
    display: flex;
    width: 600px;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.5);
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(10px);
  }
</style>
<div id="my-page-container">
  <my-text-analysis-info></my-text-analysis-info>
  <div id="components-container">
    <my-textarea></my-textarea>
    <my-word-count></my-word-count>
  </div>
</div>
`

class MyPage extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    const wordCountComponent = this.shadowRoot.querySelector('my-word-count')
    const textareaComponent = this.shadowRoot.querySelector('my-textarea')

    textareaComponent.addEventListener('wordCountUpdate', (event) => {
      const text = event.detail.text;
      wordCountComponent.updateWordCount(text)
    })
  }
}

customElements.define('my-page', MyPage)

