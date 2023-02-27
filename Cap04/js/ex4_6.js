/*
Em um determinado momento do dia, apenas notas de 10, 50 e 100 estão disponiveis em um terminal de caixa Eletrônico. Elaborar um programa que leia o valor de saque de um cliente, verifique sua validade(ou seja, se pode ser sacado com as notas que estão disponiveis) e informe o número mínimo de notas de 100, 50  e 10 necessárias para pagar esse saque.
 */

// Criar referência ao form e elementos de resposta
const frm = document.querySelector("form");
const resposta1 = document.getElementById("resposta1");
const resposta2 = document.getElementById("resposta2");
const resposta3 = document.getElementById("resposta3");

// Evento submit do form
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    const saque = Number(frm.inValor.value); // obtem o valor do campo
    
    if(saque % 10 != 0) {  // se o saque não multiplo de 10
        alert("Valor Inválido para notas disponiveis (R$ 10, 50, 100");
        frm.inValor.focus();
        return;
    }

    const notasDeCem = Math.floor(saque / 100); // calcula as notas de 100
    let resto = saque % 100;                  // quanto sobra para pagar
    const notasDeCinquenta = Math.floor(resto / 50); //calcula as notas de Cinquenta
    resto = resto % 50;                               //quanto ainda sobra
    const notasDeDez = Math.floor(resto / 10);        //calcula as notas de 10

    // Exibe as Notas se ouver
    if(notasDeCem > 0) {
        resposta1.innerText = `Notas de R$ 100: ${notasDeCem}`
    }
    if(notasDeCinquenta > 0) {
        resposta2.innerText = `Notas de R$ 50: ${notasDeCinquenta}`
    }
    if(notasDeDez > 0) {
        resposta3.innerText = `Notas de R$ 10: ${notasDeDez}`
    }

})