// Desafio - Crie um programa que mostre apenas números pares

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

for(let i = 0; i < numeros.length; i++){
  const numero = numeros[i]
  if(numero % 2 === 0){
    console.log(`Números Pares: ${numero}`)
  }
}