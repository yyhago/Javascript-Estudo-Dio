/**
  2) Crie uma classe para representar pessoas.
  Para cada pessoa teremos os atributos nome, peso e altura.
  As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
  Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
  do seu IMC;
 */

// Definição da classe Pessoas.
class Pessoas{
  nome;
  peso;
  altura

  // Constructor da classe
  constructor(nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  // Método para realização do cálculo do IMC
  calcularIMC(peso,altura){
    return this.peso / (this.altura * this.altura);
  }

}

// Instancia do josé com a saida dos valores e aprensentação do IMC
const jose = new Pessoas('José', 70, 1.75)
console.log(`O IMC de José é: ${jose.calcularIMC(70, 1.75).toFixed(2)}`)