/**
  Um Super Mercado esta com uma promoção - Para almentar suas vendas no setor de higiene, cada etiqueta de produto deve exibir uma mensagem anuciando 50% de desconto(para um item) na compra de tres unidades do produto. Após, apresente as mensagens indicando a promoção.
 */

  // Cria referência ao form e elementos de resposta
  const frm = document.querySelector('form');
  const resposta1 = document.querySelector('h3');
  const resposta2 = document.querySelector('h4');

  // Cria um ouvinte de evento ao click do submit
  frm.addEventListener("submit", (e) => {
    // Evita o envio do form
    e.preventDefault();

    // Entrada - Obtem os dados dos campos
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    // Processar os dados
    const descontoProduto = preco * 0.50;
    const promocao = (preco * 3) - descontoProduto;
    
    // Saida - Exibir os dados processados
    resposta1.innerText = `${produto.toUpperCase()} - Promoção: Leve 3 por R$: ${promocao.toFixed(2)}`;
    resposta2.innerText = `O 3° produto custa apenas R$: ${descontoProduto.toFixed(2)}`;
  })