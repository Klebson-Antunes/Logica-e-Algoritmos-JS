
/**
 Elaborar um programa para calcular media de aluno, solicitar nome, notas, calcular media, exibir o resultado dadas as condições, se a meida >= a 7 exibir Aluno aprovado(a) use style com a cor verde,  se for menor que 7 e >= 4 aluno esta em exame use o style de cor amarela, se < 7 e <4 exiba aluno reprovado com cor vermelho.
 */
// Criar referência ao form e aos elementos de respostas
const frm = document.querySelector('form');
const resposta1 = document.querySelector('h3');
const resposta2 = document.querySelector('h4');

// Criar um ouvinte de evento quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do form

    const nomeAluno = frm.inNome.value; // Obtem os dados dos campos
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);

    const media = (nota1 + nota2) / 2; // Calcula a media das Notas

    // Condições para saida dos dados
    resposta1.innerText = `Mèdia das Notas ${media.toFixed(2)}`;
    if(media >= 7){
        resposta2.innerText = `Parabéns ${nomeAluno}! Você foi Aprovado(a).`
        resposta2.style.color = "green"
    } else if(media >= 4){
        resposta2.innerText = `${nomeAluno}! Você está em exame.`
        resposta2.style.color = "yellow"
    } else {
        resposta2.innerText = ` ${nomeAluno} Você foi Reprovado(a).`
        resposta2.style.color = "red"
    }
    
})