/**
 Elaborar um programa para simular um parquimetro, o qual leia o valor de moedas depositado em um terminal de estacionamento rotativo.  O programa deve informar o Tempo de perman~encia do véiculo no local e o troco(se existir). Se o valor  for inferior ao tempo minimo, exiba a mensagem: "Valor Insuficiente".
 */
 // Cria referêncian ao form e elementos de resposta
 const frm = document.querySelector("form");
 const resposta1 = document.querySelector("#resposta1");
 const resposta2 = document.querySelector("#resposta2");

 //Cria ouvinte de evento
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    const valor = Number(frm.inValor.value); // Obtem o valor do campo
    
    if (valor < 1) {  // verifica se saldo nao suficiente exibir mensagem
        alert("Valor Insuficiente!")
        frm.inValor.focus()
        return
    } 
    //declara variaveis
    let tempo;
    let troco;

    // Condição para verificar Valor e determinar o tempo e troco se ouver
    if (valor >= 3.00) {
        tempo = 120;
        troco = valor - 3.00;
    } else if(valor >= 1.75) {
        tempo = 60;
        troco = valor - 1.75
    } else{
        tempo = 30;
        troco = valor - 1.00;
    }
    
     // Exibe a resposta
    resposta1.innerText = `Tempo: ${tempo} Minutos`;
    resposta2.innerText = `Troco R$: ${troco.toFixed(2)}`;
})

