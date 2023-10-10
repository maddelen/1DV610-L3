const textareaTemplate = document.createElement('template')
textareaTemplate.innerHTML = `
<style>
#textarea {
  margin: 10px;
}

#input-text {
border: 2px solid #ccc;
border-radius: 5px;
padding: 10px;
font-size: 16px;
resize: vertical;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: border-color 0.3s ease-in-out;
}

#input-text:hover {
  border-color: #66afe9;
}

#input-text:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 5px #3498db;
}
</style>

<div id=textarea>
  <textarea id="input-text" rows="10" cols="50" placeholder="Enter your text here..."></textarea>
</div>
`

class MyTextarea extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(textareaTemplate.content.cloneNode(true))
    this.textarea = this.shadowRoot.getElementById('input-text')
  }

  get value() {
    return this.textarea.value
  }

  connectedCallback() {
    this.textarea.addEventListener('input', () => {
      const text = this.textarea.value
      const wordCounterEvent = new CustomEvent('wordCounterUpdate', {
        detail: { text },
        bubbles: true,
        composed: true
      })
      this.dispatchEvent(wordCounterEvent)
    })
  }
}

customElements.define('my-textarea', MyTextarea)
