/**
 Uma Farmácia esta com uma promoção -  Na compra de 2 unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total. Elaborar um programa que leia a descrição e preço de um medicamento. Informe o valor do produto na promoção.
 */

// Criar referência ao form e elementos de resposta
const frm = document.querySelector('form');

const resposta1 = document.querySelector('h3');
const resposta2 = document.querySelector('h4');

// Cria um ouvinte de evento ao clicar no botao submit
frm.addEventListener("submit", (e) => {
    // Evita o envio do form
    e.preventDefault();

    // Entrada de dados dos campos
    const medicamento = frm.inMedicamento.value;
    const preco = Number(frm.inPreco.value);
    
    // Processamento dos dados
    const promocao = Math.floor(preco) * 2;
    
    // Saida dos dados (resposta)
    resposta1.innerText = `Promoção de ${medicamento}`;
    resposta2.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`;

});