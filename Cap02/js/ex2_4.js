/**
  Elaborar um programa para um restaurante que leia o preço por kg e o consumo (em gramas) de um cliente. Exiba o valor a ser pago.
 */

// Cria referência ao form e ao elemento de resposta
const frm = document.querySelector('form');
const resposta = document.querySelector('h3');

// criar um ouvinte de evento, acionado quando o submit for clicado.
frm.addEventListener("submit", (e) => {
    // Evita o envio do form
    e.preventDefault();

    // Entrada de dados dos campos
    const precoQuilo = Number(frm.inPreco.value);
    const consumoCliente = Number(frm.inConsumo.value);

    // Processamento dos dados
    const valorApagar = (precoQuilo / 1000) * consumoCliente;

    // Saida de dados (Exibir o resultado)
    resposta.innerText = `Valor a pagar R$: ${valorApagar.toFixed(2)}`
});