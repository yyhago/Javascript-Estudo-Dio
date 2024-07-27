// Função para calcular o IMC (Índice de Massa Corporal)
function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

// Função para classificar o IMC
function classificarImc(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    return 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
    return 'Acima do peso';
  } else if (imc >= 30 && imc < 40) {
    return 'Obeso';
  } else {
    return 'Obesidade Grave';
  }
}

// Função anônima auto-invocada para calcular e classificar o IMC
(function () {
  const peso = 75;
  const altura = 1.75;

  const imc = calcularImc(peso, altura);
  console.log(`IMC: ${imc.toFixed(2)} - ${classificarImc(imc)}`);
})();

// Função de seta (arrow function) para calcular a área de um círculo
const calcularAreaCirculo = (raio) => Math.PI * Math.pow(raio, 2);

const raio = 5;
console.log(`Área do círculo: ${calcularAreaCirculo(raio).toFixed(2)}`);

// Função com valores padrão para calcular a soma de dois números
function somar(a = 0, b = 0) {
  return a + b;
}

console.log(`Soma de 5 e 3: ${somar(5, 3)}`);
console.log(`Soma sem argumentos: ${somar()}`);

// Função recursiva para calcular o fatorial de um número
function fatorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * fatorial(n - 1);
}

const numero = 5;
console.log(`Fatorial de ${numero}: ${fatorial(numero)}`);

// Função para verificar se um número é par ou ímpar
function verificarParidade(num) {
  return num % 2 === 0 ? 'Par' : 'Ímpar';
}

console.log(`O número 4 é ${verificarParidade(4)}`);
console.log(`O número 7 é ${verificarParidade(7)}`);
