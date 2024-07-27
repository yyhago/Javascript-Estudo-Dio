/**
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
 */

// Declaração das variáveis com os valores correspondentes
const precoCombustivel = 5.20; // Preço do combustível por litro
const gastoMedio = 11; // Consumo médio do carro em KM/L
const distanciaKM = 200; // Distância da viagem em KM

// Cálculo dos litros de combustível que serão consumidos na viagem
const litrosConsumidos = distanciaKM / gastoMedio;

// Cálculo do valor gasto com combustível para realizar a viagem
const valorGasto = litrosConsumidos * precoCombustivel;

// Impressão do valor gasto no console, formatado com duas casas decimais
console.log(`O valor gasto na viagem será: R$ ${valorGasto.toFixed(2)}`);