// Definição da classe Pessoa
class Pessoa {
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  // Método para realização do cálculo do IMC
  calcularIMC() {
    return this.peso / (this.altura * this.altura);
  }

  // Método para classificação dos IMC's
  classificarImc() {
    const imc = this.calcularIMC();
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
}

// Instancia do José com a saída dos valores e apresentação do IMC
const jose = new Pessoa('José', 70, 1.75);
const imc = jose.calcularIMC().toFixed(2);
const classificacao = jose.classificarImc();
console.log(`O IMC de José é: ${imc} (${classificacao})`);