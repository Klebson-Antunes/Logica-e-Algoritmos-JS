/**
 Sabendo que o fuso horário da França em relação ao Brasil e de + 5 horas(No horário de verão na França), elaborar um programa que leia a hora no Brasil e informe a hora na França .
 */
// criar referência ao form e elemento de resposta
const frm = document.querySelector("form");
const resposta = document.querySelector("h3");

//cria ouvinte de evento acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form
    
    const horaBrasil = Number(frm.inHora.value); // obtem o dado do campo

    let horaFranca = horaBrasil + 5;    // calcula o horario
    if(horaFranca > 24){                // se passar de 24 horas na França
        horaFranca = horaFranca - 24;   // ... subtrai 24
    }

    //exibe a resposta
    resposta.innerText = `Hora na França: ${horaFranca.toFixed(2)}`;

    
})

