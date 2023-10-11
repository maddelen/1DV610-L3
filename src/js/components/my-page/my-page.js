/**
 * The my-page web component.
 *
 * @author Maddelen Hedenström <mh222vu@student.lnu.se>
 * @version 1.0.0
 */

import '../my-text-analysis-info'
import '../my-textarea'
import '../my-word-counter'
import '../my-character-counter'
import '../my-sentence-counter'
import '../my-find-longest-word'
import '../my-find-most-frequent-word'
import '../my-vowel-counter'
import '../my-consonant-counter'
import '../my-uppercase-counter'
import '../my-lowercase-counter'
import '../my-digit-counter'
import '../my-whitespace-counter'
import '../my-special-character-counter'
import '../my-language-analyzer'
import '../my-input-validator'

const IMG_URL = (new URL('images/bg.jpg', import.meta.url)).href

const template = document.createElement('template')
template.innerHTML = `
<style>
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
    width: 600px;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.5);
    align-items: center;
    backdrop-filter: blur(10px);
  }

  #container-one {
    background-color: white;
    margin: 10px;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  #container-two {
    background-color: white;
    margin: 10px;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  #container-three {
    background-color: white;
    margin: 10px;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  #language-container {
    background-color: white;
    margin: 10px;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  #containers-wrapper {
    display: flex; /* Display container-one and container-two next to each other */
  }
</style>
<div id="my-page-container">
  <my-text-analysis-info></my-text-analysis-info>
  <my-input-validator></my-input-validator>
  <div id="components-container">
    <my-textarea></my-textarea>
    <div id="containers-wrapper">
        <div id="container-one">
            <my-word-counter></my-word-counter>
            <my-character-counter></my-character-counter>
            <my-sentence-counter></my-sentence-counter>
            <my-find-longest-word></my-find-longest-word>
        </div>
        <div id="container-two">
            <my-find-most-frequent-word></my-find-most-frequent-word>
            <my-vowel-counter></my-vowel-counter>
            <my-consonant-counter></my-consonant-counter>
            <my-uppercase-counter></my-uppercase-counter>
        </div>
        <div id="container-three">
            <my-lowercase-counter></my-lowercase-counter>
            <my-digit-counter></my-digit-counter>
            <my-whitespace-counter></my-whitespace-counter>
            <my-special-character-counter></my-special-character-counter>
        </div>
        <div id="language-container">
          <my-language-analyzer></my-language-analyzer>
        </div>
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
    const wordCounterComponent = this.shadowRoot.querySelector('my-word-counter')
    const textareaComponent = this.shadowRoot.querySelector('my-textarea')
    const characterCountComponent = this.shadowRoot.querySelector('my-character-counter')
    const sentenceCountComponent = this.shadowRoot.querySelector('my-sentence-counter')
    const longestWordComponent = this.shadowRoot.querySelector('my-find-longest-word')
    const mostFrequentWordComponent = this.shadowRoot.querySelector('my-find-most-frequent-word')
    const vowelCounterComponent = this.shadowRoot.querySelector('my-vowel-counter')
    const consonantCounterComponent = this.shadowRoot.querySelector('my-consonant-counter')
    const uppercaseCounterComponent = this.shadowRoot.querySelector('my-uppercase-counter')
    const lowercaseCounterComponent = this.shadowRoot.querySelector('my-lowercase-counter')
    const digitCounterComponent = this.shadowRoot.querySelector('my-digit-counter')
    const whitespaceCounterComponent = this.shadowRoot.querySelector('my-whitespace-counter')
    const specialCharacterCounterComponent = this.shadowRoot.querySelector('my-special-character-counter')
    const languageAnalyzerComponent = this.shadowRoot.querySelector('my-language-analyzer')
    const inputValidatorComponent = this.shadowRoot.querySelector('my-input-validator')


    textareaComponent.addEventListener('wordCounterUpdate', (event) => {
      const text = event.detail.text
      wordCounterComponent.updateWordCounter(text)
      characterCountComponent.updateCharacterCounter(text)
      sentenceCountComponent.updateSentenceCounter(text)
      longestWordComponent.updateLongestWord(text)
      mostFrequentWordComponent.updateMostFrequentWord(text)
      vowelCounterComponent.updateVowelCounter(text)
      consonantCounterComponent.updateConsonantCounter(text)
      uppercaseCounterComponent.updateUppercaseCounter(text)
      lowercaseCounterComponent.updateLowercaseCounter(text)
      digitCounterComponent.updateDigitCounter(text)
      whitespaceCounterComponent.updateWhitespaceCounter(text)
      specialCharacterCounterComponent.updateSpecialCharacterCounter(text)
      languageAnalyzerComponent.analyzeLanguage(text)
      inputValidatorComponent.validateUserInput(text)
    })
  }
}

customElements.define('my-page', MyPage)

