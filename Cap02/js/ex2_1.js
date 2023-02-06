// exiba seu nome

//Cria refencia ao form e ao elemento que exibirá a resposta
const frm = document.querySelector('form');
const resposta = document.querySelector('h3');

frm.addEventListener('submit', (e) => {
    //evita o envio do form
    e.preventDefault();

    const nome = frm.inNome.value; //obtem o nome digitado
    resposta.innerText = `Olá ${nome}`; // exibe a resposta
})
