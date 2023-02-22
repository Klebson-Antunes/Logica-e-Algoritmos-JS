/**
 Elaborar um programa para uma veterinária, que leia o peso de uma ração em kg e o quanto um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração em gramas.
 */

const prompt = require('prompt-sync')(); // Adiciona o pacote ao programa

const kiloRacao = Number(prompt("KG da Ração: ")); // lê os dados de entrada
const consumoDiaGato = Number(prompt("Consumo(gramas): "));

const gramasTotal = kiloRacao * 1000; // kilos para gramas
const duracao = Math.floor(gramasTotal / consumoDiaGato); // calcular dias de consumo
const sobra = gramasTotal % consumoDiaGato; // Calcula a sobra

console.log(`Duração: ${duracao} Dias`) // Exibe as Respostas
console.log(`Sobra: ${sobra} gr`)