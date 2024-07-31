// Continução do js2.js

const notasAlunos = [] // Inicializa um array vazio para armazenar as notas dos alunos

// Adiciona notas ao array
notasAlunos.push(8)
notasAlunos.push(6)
notasAlunos.push(10)
notasAlunos.push(10)
notasAlunos.push(8)

let soma = 0 // Inicializa uma variável para armazenar a soma das notas

// Itera sobre o array de notas, somando cada nota à variável `soma`
for(let i = 0; i < notasAlunos.length; i++){
  const notas = notasAlunos[i]; // Obtém a nota atual
  soma = soma + notas // Adiciona a nota atual à soma total
}

const media = soma / notasAlunos.length // Calcula a média das notas
console.log(media) // Imprime a média das notas
