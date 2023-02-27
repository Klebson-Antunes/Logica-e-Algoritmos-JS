/**
 Elaborar um programa que leia um número. Informe se ele é par ou ímpar. Faça com o if..else.. tradicional e , após, tente criar a condição com o operador ternário. 
 */
// Criar referência ao form e elemento de resposta
const frm = document.querySelector("form");
const resposta = document.querySelector("h3");

// Cria ouvinte de evento
frm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita o envio do form

    const numero = Number(frm.inNumero.value); // obtem o numero do campo

    // verificar numero e exibir a resposta de acordo
    const imparOuPar = numero % 2 === 0 ? "é Par" : "é Ímpar";
    resposta.innerText = `${numero} ${imparOuPar}`;
})