/**
 Elaborar um programa que verifica a velocidade permitida em uma via e a velocidade de um condutor. Se a Velocidade for igual ou menor á permitida, exiba "Sem Multa".  Se a velocidade for de até 20% maior que a permitida, exiba "Multa Leve". E, se a velocidade for superior a 20% da velocidade permitida, exiba "Multa Grave".
 */
// Cria refer~encia ao form e elemento de resposta
const frm = document.querySelector("form");
const resposta = document.querySelector("h3");

// Cria ouvinte de evento
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //  Evita o envio do form

    const velocidadePermitida = Number(frm.inVelocidadeVia.value); // Obtem os dados dos Campos
    const velocidadeCondutor = Number(frm.inVelocidadeCondutor.value);
    
    let multa;
    if (velocidadeCondutor <= velocidadePermitida) {
        multa = "Sem Multa";
    } else {
        const maisVinte = velocidadePermitida * 1.2;
        if (velocidadeCondutor <= maisVinte){
            multa = "Multa Leve";
        } else {
            multa = "Multa Grave";
        }
    }
    resposta.innerText = `Situação: ${multa}`;
})