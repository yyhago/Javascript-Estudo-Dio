const entradas = [10];
let pointer = 0

function gets(){
    const valor = entradas[pointer];
    pointer++;
    return valor;
}

function print(texto){
  console.log(texto)
}


module.exports = { gets, print };