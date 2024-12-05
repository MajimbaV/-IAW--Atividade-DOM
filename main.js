const container = document.getElementById("container-paragrafos")
const formulario = document.getElementById("form-paragrafos")
const input = document.getElementById("input-paragrafos")
const button = document.getElementById("button-contagem")

let paragrafos = []

if(window.localStorage){
    if(localStorage.getItem('paragrafos')){
        paragrafos = JSON.parse(localStorage.getItem('paragrafos'))
    }
}

quantLinhas = paragrafos.length
let dialog = document.createElement("DIALOG")
dialog.innerText = `${quantLinhas} linhas foram criadas!`
dialog.open = false
container.appendChild(dialog)

window.addEventListener('load', () => {
    paragrafos.forEach((paragrafoText) => {
        criaLinha(paragrafoText)
    })
})

formulario.addEventListener('submit', () => {
    let paragrafoText = input.value
    paragrafos.push(paragrafoText)
    localStorage.setItem("paragrafos", JSON.stringify(paragrafos))
})

button.addEventListener('click', () => {
    dialog.open = !dialog.open
})


function criaLinha(textContent){
    let paragrafo = document.createElement('p')
    paragrafo.textContent = textContent
    container.appendChild(paragrafo)
}