const notasAlunos = [] // Inicializa um array vazio para armazenar as notas dos alunos

// Adiciona notas ao array
notasAlunos.push(8) 
notasAlunos.push(6)
notasAlunos.push(10)
notasAlunos.push(5)
notasAlunos.push(8)

// Calcula a soma das notas
const soma = notasAlunos[0] + notasAlunos[1] + notasAlunos[2] + notasAlunos[3] + notasAlunos[4]

// Calcula e imprime a média das notas
console.log(soma / notasAlunos.length)
