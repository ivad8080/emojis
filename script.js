const emojis = ['🤪', '🤔', '🤑', '😫', '😫', '😫', '😫']
const emojiEl = document.querySelector('.emoji-el')
const inputEl = document.querySelector('.input-el')
const unshiftButtonEl = document.querySelector('.unshift-button')
const pushButtonEl = document.querySelector('.push-button')
const shiftButtonEl = document.querySelector('.shift-button')
const popButtonEl = document.querySelector('.pop-button')

function renderEmojis() {
  emojiEl.textContent = ''
  for (i=0; i<emojis.length; i++) {
    let span = document.createElement('span')
    span.textContent = emojis[i]
    emojiEl.append(span)
  }
}

renderEmojis()

function addToBeginning() {
  let inputValue = inputEl.value
  if (inputValue.length === 2) {
    if (inputEl.value) {
      emojis.unshift(inputEl.value)
      inputEl.value = ''
      renderEmojis()
    } 
  } else {
    inputEl.value = ''
    inputEl.placeholder = 'only emojis, one at time 🎉'
  }
}

function addToEnd() {
  let inputValue = inputEl.value
  if (inputValue.length === 2) {
    if (inputValue) {
      emojis.push(inputEl.value)
      inputEl.value = ''
      renderEmojis()
    }
  } else {
    inputEl.value = ''
    inputEl.placeholder = 'only emojis, one at time 🎉'
  }
}

function removeFromBeginning() {
  emojis.shift()
  renderEmojis()
}

function removeFromEnd() {
  emojis.pop()
  renderEmojis()
}

unshiftButtonEl.addEventListener('click', addToBeginning)
pushButtonEl.addEventListener('click', addToEnd)
shiftButtonEl.addEventListener('click', removeFromBeginning)
popButtonEl.addEventListener('click', removeFromEnd)

