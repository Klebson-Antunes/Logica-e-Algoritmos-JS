// Programa Tabuada Usando For

// Cria referência ao form e elemento de resposta
const frm = document.querySelector('form');
const resp = document.querySelector('pre');

// Cria ouvinte de evento quando botao submit for clicado
frm.addEventListener("submit", (e) => {
    //evita o envio do form
    e.preventDefault();

    // entrada de dados do campo
    const numero = Number(frm.inNumero.value);

    // cria taboada com for
    let resposta = "";   // variavel para concatenar a resposta

    for( let i = 1; i <= 10; i++) {
        resposta = `${resposta}${numero} x ${i} = ${numero * i} \n`;
    }

    // exibe a resposta
    resp.innerText = resposta;
})