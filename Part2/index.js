console.log("hello world")

const cardInput = document.getElementById('card')
const colorInput = document.getElementById('color')

function setCard() {
  const card = document.getElementById(cardInput)
  card.style.color = colorInput.value

}

