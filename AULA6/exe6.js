movel = [];

function adicionarMovel() {
  let tipo = String(prompt("Insira o tipo de móvel: "));
  let material = String(prompt("Insira o material do móvel: "));
  let cor = String(prompt("Insira a cor do móvel: "));
  let preco = parseFloat(prompt("Insira o valor do móvel: "));
  movel.push({ tipo, material, cor, preco });
  alert("Disco adicionado com sucesso!");
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
let opcao = String(prompt("Deseja adicionar um novo móvel: "))
if (opcao == "sim") {
    novoMovel();
} 