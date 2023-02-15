// Soma 2 numeros

// adiciona pacote para entrada de dados
const prompt = require("prompt-sync")();

//le os numeros
const num1 = Number(prompt("1° Numero: "));
const num2 = Number(prompt("2° Numero: "));

//calcula a soma
const soma = num1 + num2;

// exibe o resultado
console.log(`Soma é: ${soma}`)