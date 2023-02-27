/**
 Em uma farmácia necessita de um programa que leia o total de uma compra. Exiba como resposta o n° de vezes que o cliente pode parcelar essa compra e o valor de cada parcela. Considere as seguintes condições: a)-  Cada parcela deve ser de, no minimo R$ 20,00. b)- o Número maximo de parcelas permitido é de 6.
 */
const prompt = require("prompt-sync")(); // adiciona o pacote ao programa

const valorTotal = Number(prompt("Valor da Compra: ")); // lê o valor da compra
const aux = Math.floor(valorTotal / 20);                // n° de parcelas
const parcelas = aux == 0? 1 : aux > 6? 6 : aux;
const valorDaParcela = valorTotal / parcelas; //calcula o valor de cada parcela
console.log(`Pode Pagar em ${parcelas}x de R$: ${valorDaParcela.toFixed(2)}`);
/*
let parcelas;
if(aux == 0){
parcelas = 1
} else if(aux > 6){
    parcelas = 6
} else {
    parcelas = aux
}*/
