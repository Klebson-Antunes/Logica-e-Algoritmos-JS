// Criar referência ao fomr e elemento de resposta
const frm = document.querySelector("form");
const resposta = document.querySelector("h3");

// Criar ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio do form

    const nome = frm.inNome.value; // obtem os dados dos campos de entrada
    const masculino = frm.inMasculino.checked;
    const altura = Number(frm.inAltura.value);

    //processar os dados (Calculos)
   const peso = masculino ? 22 * (altura ** 2) : 21 * (altura ** 2);

    // exibe a resposta (saida)
    resposta.innerText = `${nome} Seu peso ideal é ${peso.toFixed(3)} kg.`
});

// Reset
frm.addEventListener("reset", () => {
    resposta.innerText = "";
});