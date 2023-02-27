/**
 Elaborar um programa que leia um número-que deve ser uma centena. Calcule e exiba a centena invertida. Caso o número não seja uma centena, exiba uma mensagem.
 */
const prompt = require("prompt-sync")(); // adiciona o pacote ao programa

const numero = Number(prompt("Digite um número: ")); // lê o número

if(numero < 100 || numero >= 1000) {      // exibir mensagem se o número não for uma centena
    console.log("Erro... deve ser uma Centena");
    return;
}

const num1 = Math.floor(numero / 100); // obtem o 1° número
const sobra = numero % 100 ;           // obtem a sobra
const num2 = Math.floor(sobra / 10);   // obtem 0 2° número
const num3 = sobra % 10;               // obtem o 3° número do que sobrou
const invertida = `${num3}${num2}${num1}`;

if(Number(invertida) === numero) { // verifica se o numero e igual ao invertido para não exibir o msm valor(n°:111 invertido:111)
    console.log("O Número invertido tem o mesmo valor.")
} else {
    console.log(`Invertido: ${invertida}`) // Centena invertida
}


