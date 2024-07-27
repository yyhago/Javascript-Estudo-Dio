// Verificação se o número é par ou ímpar
const numero = 5;
const ehNumeroPar = (numero % 2) === 0;

if (ehNumeroPar) {
    console.log('O número é par');
} else {
    console.log('O número é ímpar');
}

// Verificação de idade para votar
const idade = 18;

if (idade < 16) {
    console.log('Não pode votar');
} else if (idade >= 16 && idade < 18) {
    console.log('Voto opcional');
} else {
    console.log('Voto obrigatório');
}

// Verificação do estado civil
const estadoCivil = 'solteiro';

if (estadoCivil === 'solteiro') {
    console.log('Você é solteiro');
} else if (estadoCivil === 'casado') {
    console.log('Você é casado');
} else {
    console.log('Estado civil não reconhecido');
}

// Operador ternário para verificar se o usuário é maior de idade
const maioridade = 18;
const idadeUsuario = 20;

const podeDirigir = idadeUsuario >= maioridade ? 'Pode dirigir' : 'Não pode dirigir';
console.log(podeDirigir);

// Switch para verificar o dia da semana
const diaSemana = 3;
let diaNome;

switch (diaSemana) {
    case 1:
        diaNome = 'Domingo';
        break;
    case 2:
        diaNome = 'Segunda-feira';
        break;
    case 3:
        diaNome = 'Terça-feira';
        break;
    case 4:
        diaNome = 'Quarta-feira';
        break;
    case 5:
        diaNome = 'Quinta-feira';
        break;
    case 6:
        diaNome = 'Sexta-feira';
        break;
    case 7:
        diaNome = 'Sábado';
        break;
    default:
        diaNome = 'Dia inválido';
        break;
}

console.log(`Hoje é: ${diaNome}`);

// Verificação de múltiplas condições
const saldo = 100;
const valorSaque = 50;
const possuiCartao = true;

if (saldo >= valorSaque && possuiCartao) {
    console.log('Saque permitido');
} else if (saldo < valorSaque) {
    console.log('Saldo insuficiente');
} else {
    console.log('Cartão não disponível');
}
