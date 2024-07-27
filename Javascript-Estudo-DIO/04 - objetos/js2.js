/**
  1) Crie uma classe para representar carros. 
  Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
  Crie um método que, dado a quantidade de quilômetros e o preço do combustível, nos dê o valor 
  gasto em reais para realizar este percurso.
 */

// Definição da classe Carro
class Carro {
  // Propriedades da classe
  marca;
  cor;
  gastoMedioCombustivelPorKM;

  // Construtor da classe
  constructor(marca, cor, gastoMedioCombustivelPorKM) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioCombustivelPorKM = gastoMedioCombustivelPorKM;
  }

  // Método para calcular o gasto de percurso
  calcularGastoPercurso(distanciaKM, precoCombustivel) {
    // Calcula o gasto com base na distância, no gasto médio e no preço do combustível
    return distanciaKM * this.gastoMedioCombustivelPorKM * precoCombustivel;
  }
}

// Criação de uma instância da classe Carro
const uno = new Carro('Fiat', 'Prata', 1 / 12);
console.log(`Gasto para percorrer 70 km: R$ ${uno.calcularGastoPercurso(70, 4).toFixed(2)}`);

const lancer = new Carro('Lancer Evo X', 'Preto', 1/8);
console.log(`Gasto para percorrer 70 km: R$ ${lancer.calcularGastoPercurso(70,4).toFixed(2)}`);