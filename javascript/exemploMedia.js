// Entrada - Variáveis
// Média aritmética de 3 notas, e menor 3 horrive
// menor que 7 da pra miora, maior 7 gênio
const nota1 = prompt("Digite a 1ª nota")
const nota2 = prompt("Digite a 2ª nota")
const nota3 = Number(prompt("Digite a 3ª nota"))

// Processamento
const soma = Number(nota1) + Number(nota2) + nota3
const media = soma / 3

if(media < 3) {
    alert("Média é insuficiente: " + media + " - Horrivi")
} else if (media < 7) {
    alert("Média é insuficiente: " + media + " - Da pra miora")
} else {
    alert("Média é suficiente: " + media + " - PARABÂINS")
}