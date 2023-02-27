/**
 A Entrada para um clube de pesca custa R$ 20,00 por pessoa e cada pessoa tem direito a levar um peixe. Peixes extras custam R$ 12,00. Elabore um Programa que leia o número de pessoas de uma família que foram ao clube e o número de peixes obtidos na pescaria. Informe o Valor a pagar
 */
const prompt = require("prompt-sync")() // adiciona o pacote Prompt

const pessoas = Number(prompt("N° de Pessoas: "));// lê os dados de entrada
const peixes = Number(prompt("N° de Peixes: "));

let pagar; //declara a variavel pagar

if(peixes <= pessoas) {
    pagar = pessoas * 20;
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12);
}
console.log(`Pagar R$: ${pagar.toFixed(2)}`);