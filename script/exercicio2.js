function exercicio2() {
    const valorHora = Number(prompt("Digite o valor da hora:"))
    const horasTrabalhadas = Number(prompt("Digite as horas trabalhadas:"))
    const resultado = valorHora*horasTrabalhadas
    alert("Seu salario é: " + resultado)
}
const buttonExercicio2 = document.getElementById("exercicio2")
buttonExercicio2.addEventListener('click', () => { exercicio2() })
// o carinha de escuta - addEventListner