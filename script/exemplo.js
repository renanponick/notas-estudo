const rodape = document.getElementById("rodape")
// rodape.style.color = "red"
const novoTitulo = document.createElement("h2")
novoTitulo.textContent = "Um novo Título"
// console.log(novoTitulo)
rodape.appendChild(novoTitulo)

// getElementByID = puxa um elemento do HTML
const header = document.getElementById("exemplo")
header.appendChild(novoTitulo)

header.addEventListener("click", () => {
    alert("batata")
})