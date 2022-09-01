import { N } from './namhai'
import './style.css'
import { stringLetterToDoubleSpan } from './utilsText'

let button = N.get('button')

let text = N.get('#text')
let span = N.get('#span')
let result = N.get('#result')

button.addEventListener('click', () => {
  const d = N.Cr('div')
  d.innerHTML = text.value
  let classname = span.value || 'tooltip__span'
  stringLetterToDoubleSpan(d, span.value)
  result.innerText = d.innerHTML

})