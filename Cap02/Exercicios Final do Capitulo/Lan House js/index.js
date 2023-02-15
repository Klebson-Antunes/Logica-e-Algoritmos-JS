/*

 Elaborar um programa para uma lan house de um aeroporto - 
  O programa deve ler o valor de cada 15 minutos de uso do computador e o tempo de uso por um cliente em minutos. Informe o valor a ser pago pelo cliente, sabendo que frações extra de 15 minutos devem ser cobrados de forma integral.

*/

// Criar referência ao form e elemento de resposta
const frm = document.querySelector('form');
const resposta = document.querySelector('h3');

// Cria um ouvinte de evento quanto o botão submit for clicado
frm.addEventListener("submit", (e) => {
    // Evita o envio do form
    e.preventDefault();

    // Entrada de dados(campos de entrada)
    const valorMinutos = Number(frm.inValor.value);
    const tempoDeUso = Number(frm.inTempo.value);

    // Processar os dados
    const valorAPagar = Math.ceil(tempoDeUso / 15) * valorMinutos;
    
    // Saida(Exibir resposta)

    resposta.innerText = `Valor a Pagar R$: ${valorAPagar.toFixed(2)}`;
})