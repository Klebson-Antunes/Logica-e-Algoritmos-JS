/**
 Elaborar um programa para uma empresa que leia o salário e o tempo que o funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadriênio) o funcionário recebe 1 % de acrescimo no salário, calcule e informe o numero de quadriênio a que o funcionário tem direito e o salário final.
 */

const prompt = require('prompt-sync')(); //adiciona o pacote ao programa

const tempo = Number(prompt("Tempo (Anos na empresa): ")); // Lê os dados de entrada
const salario = Number(prompt("Salário R$: "));

const quadrienios = Math.floor(tempo / 4); // Calcula os  quadrigenios
const acrescimo = salario * quadrienios  / 100; // ... o acressimo
const salarioFinal = salario + acrescimo; // ... e o salário final

console.log(`Quadrigênios: ${quadrienios}`); // Exibe as Respostas
console.log(`Salário Final R$: ${salarioFinal.toFixed(2)}`);