/**
  Elabrar um programa para um cinema, que leia o titulo e a duração de um filme em minutos. exiba o titulo e converta a duração para horas e minutos.
 */

// Cria referência ao form e ao elementos de resposta(h3,h4)

const frm = document.querySelector('form');
const resp1 = document.querySelector('h3');
const resp2 = document.querySelector('h4');

// Cria um ouvinte (evento) quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    // Evita o envio do form
    e.preventDefault();

    // Obtem o conteudo dos campos(Entrada de dados)
    const titulo = frm.inTitulo.value;
    const duracao = Number(frm.inDuracao.value);

    // Processar os dados
    const hora = Math.floor(duracao / 60);
    const minutos = duracao % 60;

    // Resposta (Saida)
    resp1.innerText = titulo.toUpperCase();
    resp2.innerText = `${hora} hora(s) e ${minutos} minuto(s)`
    
})