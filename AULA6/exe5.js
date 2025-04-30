Disco = []

function adicionarDisco() {
  let titulo = String(prompt("Insira o nome do Disco: "));
  let artista = String(prompt("Insira o nome do artista: "));
  let ano = parseInt(prompt("Insira o ano de lançamento: "));
  let preco = parseFloat(prompt("Insira o valor do Disco: "));
    Disco.push({titulo, artista, ano, preco})
  alert("Disco adicionado com sucesso!");
}

function listaDisco() {
  if (Disco.length > 0) {
    let mensagem = "Lista de Disco na loja:\n";
    Disco.forEach((disco) => {
      mensagem += `Título: ${disco.titulo}, Autor: ${disco.artista}, Ano: ${disco.ano}, Preço: ${disco.preco}\n`;
    });
    alert(mensagem);
  } else {
    alert("A loja está vazia.");
  }
}

adicionarDisco();
listaDisco();