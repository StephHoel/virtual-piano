const pianoKeys = document.querySelectorAll(".piano-keys .key")

let mappedKeys = []

let audio = new Audio('src/tunes/a.wav')

function playTune(key) {
  audio.src = `src/tunes/${key}.wav`
  audio.play()

  const clickedKey = document.querySelector(`[data-key="${key}"]`)
  clickedKey.classList.add('active')
  setTimeout(() => {
    clickedKey.classList.remove('active')
  }, 150);
}

pianoKeys.forEach((key) => {
  // console.log(key.dataset.key)
  key.addEventListener("click", () => { playTune(key.dataset.key) })
  
  mappedKeys.push(key.dataset.key)
})

document.addEventListener('keydown', (e) => {
  if(mappedKeys.includes(e.key))
    playTune(e.key)
})