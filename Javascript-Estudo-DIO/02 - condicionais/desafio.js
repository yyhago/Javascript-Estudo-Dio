/**
  Faça um programa para calcular o valor de uma viagem.

  Você terá 5 variáveis. Sendo elas:
   1 - Preço do etanol;
   2 - Preço do gasolina;
   3 - O tipo de combustível que está no seu carro;
   4 - Gasto médio de combustível do carro por KM;
   5 - Distância em KM da viagem;

  Imprima no console o valor que será gasto para realizar esta viagem.
 */

  const precoEtanol = 5.79; // Preço do etanol por litro
  const precoGasolina = 6.66; // Preço da gasolina por litro
  const kmPorLitros = 10; // Consumo médio do carro em KM/L
  const distanciaEmKm = 100; // Distância da viagem em KM
  const tipoCombustivel = 'Gasolina'; // Tipo de combustível utilizado pelo carro
  
  // Cálculo dos litros de combustível consumidos na viagem
  const litrosConsumidos = distanciaEmKm / kmPorLitros;
  
  // Condicional para calcular o valor gasto dependendo do tipo de combustível
  if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(`O valor gasto com etanol será: R$ ${valorGasto.toFixed(2)}`);
  } else if (tipoCombustivel === 'Gasolina') {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(`O valor gasto com gasolina será: R$ ${valorGasto.toFixed(2)}`);
  } else {
    console.log('Tipo de combustível não reconhecido.');
  }
  
  // Exemplo adicional: Condicional ternária para verificar se a viagem é longa ou curta
  const viagemLonga = distanciaEmKm > 300 ? 'Viagem longa' : 'Viagem curta';
  console.log(`Esta é uma ${viagemLonga}.`);
