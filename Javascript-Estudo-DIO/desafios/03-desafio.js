/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function calcularPagamento(precoEtiqueta, condicaoPagamento) {
  let valorFinal;

 
  switch (condicaoPagamento) {
      case 'debito':
          valorFinal = precoEtiqueta * 0.9; // 10% de desconto
          break;
      case 'dinheiro':
      case 'pix':
          valorFinal = precoEtiqueta * 0.85; // 15% de desconto
          break;
      case 'duas_vezes':
          valorFinal = precoEtiqueta; // Sem desconto e sem juros
          break;
      case 'acima_de_duas_vezes':
          valorFinal = precoEtiqueta * 1.1; // 10% de juros
          break;
      default:
          console.log('Condição de pagamento inválida');
          return;
  }

  console.log(`Valor a ser pago: R$ ${valorFinal.toFixed(2)}`);
}


calcularPagamento(100, 'debito');
calcularPagamento(100, 'dinheiro');
calcularPagamento(100, 'duas_vezes');
calcularPagamento(100, 'acima_de_duas_vezes');
