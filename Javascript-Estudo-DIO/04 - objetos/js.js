// Definição da classe Jogador
class Jogador {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoNascimento = 2024 - idade;
  }

  // Método para exibir a biografia do jogador
  bio() {
    console.log(`Minha descrição: Meu nome é ${this.nome}, tenho ${this.idade} anos, e nasci em ${this.anoNascimento}.`);
  }
}

// Criação de instâncias da classe Jogador
const yhago = new Jogador('Yhago', 28);
const felipe = new Jogador('Felipe', 28);

// Exibindo as instâncias
console.log(yhago);
console.log(felipe);

// Função para comparar as idades de duas pessoas
function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} têm a mesma idade!`);
  }
}

// Comparação das idades de Yhago e Felipe
compararPessoas(yhago, felipe);