/**
 Elaborar um programa para uma revenda de veículos. O programa deve ler o modelo e o preço do veículo. Apresentar como rsposta o valor de entrada como (50%) e 0 saldo em 12x
 */

 // Criar referencia ao form e aos elementos de respostas
 const frm = document.querySelector('form');

 const resposta1 = document.querySelector('h2');
 const resposta2 = document.querySelector('h3');
 const resposta3 = document.querySelector('h4');

frm.addEventListener("submit", (e) => {
    // Evita o envio do form
    e.preventDefault(); 

    // pegando os dados dos campos
    const veiculo = frm.inVeiculo.value;
    const preco = Number(frm.inPreco.value);

    console.log(veiculo)
    console.log(preco)

    // processar os dados
    const entrada = preco * 0.50; 
    const parcelas = entrada / 12;

    console.log(entrada)
    console.log(parcelas)

    // Saida dos dados processados

    resposta1.innerText = `Promoção: ${veiculo}`;
    resposta2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
    resposta3.innerText = `+12x de R$ ${parcelas.toFixed(2)}`;

})