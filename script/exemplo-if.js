const nota1 = Number(prompt("Digite a primeira nota"))
const nota2 = Number(prompt("Digite a segunda nota"))
const nota3 = Number(prompt("Digite a terceira nota"))

const media = (nota1 + nota2 + nota3) / 3
console.log(media)

if (media < 3) {
    alert("Horrivel")
} else if (media <= 6) {
    alert("Da pra melhora")
} else if (media <= 10) {
    alert("Excelente")
} else {
    alert("essa nota nao existe")
}   