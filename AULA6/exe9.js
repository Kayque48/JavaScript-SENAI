function adicionarPlaca() {
  let modelo = String(prompt("Insira o modelo da plca de vídeo: "));
  alert("modelo adicionado com sucesso!");
}

function listaMovel() {
  if (movel.length > 0) {
    let mensagem = "Lista de Móveis:\n";
    movel.forEach((moveis) => {
      mensagem += `Tipo: ${moveis.tipo}, Mateiral: ${moveis.material}, Cor: ${moveis.cor}, Preço: ${moveis.preco}\n`;
    });
    alert(mensagem);
  } else {
    alert("Não a móveis no momento.");
  }
}

function novoMovel() {
  adicionarMovel();
  listaMovel();
}

adicionarMovel();
listaMovel();
let opcao = String(prompt("Deseja adicionar um novo móvel: "));
if (opcao == "sim") {
  novoMovel();
}
