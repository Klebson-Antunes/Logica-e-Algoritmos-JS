/**
 Elaborar um programa que leia um número e calcule sua raiz quadrada. caso a raiz seja exata(quadrados perfeiros), informá-la, caso contrário, infome: 'Não a raiz quadrada exata para ...'
 */

 // cria referência ao form e elementos de resposta
 const frm = document.querySelector("form");
 const resposta = document.querySelector("h3");

 //cria ouvinte de evento acionado quando o botão submit for clicado
 frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do form

    // obtem o dado do campo
    const numero = Number(frm.inNumero.value);
    // realiza o calculo 
    const raiz = Math.sqrt(numero);
    // verificar se e um Inteiro
    if(Number.isInteger(raiz)) {
        resposta.innerText = `Raiz: ${raiz}`;
    } else {
        resposta.innerText = `Não a raiz quadrada exata para: ${numero}`;
    }
 })