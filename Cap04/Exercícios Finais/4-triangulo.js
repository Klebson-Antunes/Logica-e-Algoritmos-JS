/**
 Elaborar um programa que leia três lados e verifique se eles pode formar ou não um triângulo. Para Formar um triângulo um dos lados não pode ser maior que a soma dos dois. Caso possa formar um triângulo, exiba também qual o tipo do triângulo: Equilátero (3 lados iguais), Isósceles(2 lados iguais) e Escaleno (3 lados diferentes).
*/

// Criar referência ao form e elementos de resposta
const frm = document.querySelector("form");
const resposta1 = document.querySelector("#resposta1");
const resposta2 = document.querySelector("#resposta2");

//Cria ouvinte de evento
frm.addEventListener("submit", (e) =>{
    e.preventDefault(); // Evita o envio do form

    //obtem os dados dos campos
    const ladoA = Number(frm.inLadoA.value);
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);

    // para saber se forma um triângulo a soma de 2 lados deve ser maior que o terceiro
    // Condição para formar um triângulo
    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        let tipo; // variável para armazenar o tipo de Triângulo, dadas as condições abaixo
        if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
            tipo = "Equilátero"
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            tipo = "Isósceles"
        } else {
            tipo = "Escaleno"
        }
        //exibe a resposta
        resposta1.innerText = `Lados Podem Formar um Triângulo`;
        resposta2.innerText = `Tipo: ${tipo}`;
    } else {
        alert("Os Lados fornecidos Não Formam um Triângulo...");
    }
})

