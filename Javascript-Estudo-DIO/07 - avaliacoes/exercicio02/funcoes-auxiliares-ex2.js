const quantidadeNumeros = [5, 3, 4, 3, 10, 8]
let pointer = 0

function gets(){
  const numeroSorteado = quantidadeNumeros[pointer];
  pointer++;
  return numeroSorteado;
}

function print(texto){
  console.log(texto)
}


module.exports = { gets, print }