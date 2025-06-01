pizzaria = [];
PizzaParaAlterar = null;
pedidos = [];

// função para selecionar a operação deseja pelo usuário
function mostrarSecao(secao) {
  //Esconde todas as seções
  document.getElementById("cadastroPizza").classList.add("hidden");
  document.getElementById("cardapio").classList.add("hidden");
  document.getElementById("login").classList.add("hidden");
  document.getElementById("alterar").classList.add("hidden");
  document.getElementById("compra").classList.add("hidden");

  //Exibi apenas a seção que foi selecionada
  document.getElementById(secao).classList.remove("hidden");
}

//Função para adicionar uma nova pizza ao cardápio
function cadastrarPizza() {
  //Buscar Valores definidos pelo usuário
  const nome = document.getElementById("name").value;
  const tipo = document.getElementById("type").value;
  const tamanho = document.getElementById("size").value;
  const descricao = document.getElementById("description").value;
  const preco = parseFloat(document.getElementById("price").value);

  //operação para vereficar se todos os campos estão preenchidos
  if (
    nome != "" &&
    tipo != "" &&
    tamanho != "" &&
    descricao != "" &&
    !isNaN(preco)
  ) {
    //empurrar as constantes dentro do array Pizzaria
    pizzaria.push({ nome, tipo, tamanho, descricao, preco });
    document.getElementById(
      "result"
    ).innerHTML = `Pizza adicionada com sucesso!!!`;

    //limpar os termos
    document.getElementById("name").value = "";
    document.getElementById("type").value = "";
    document.getElementById("size").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    atualizarLista();
  } else {
    document.getElementById("result").innerHTML =
      "Falha em adicionar pizza! Preencha todos os campos antes.";
  }
}


// função para buscar pizza
function buscarPizza() {
  const busca = document.getElementById("busca").value.toLowerCase();
  const resultados = pizzaria.filter((pizza) =>
    pizza.nome.toLowerCase().includes(busca.toLowerCase())
  );
  atualizarLista(resultados);
}

function buscarPizzaAlteracao() {
  const buscar = document.getElementById("busca-alterar").value.toLowerCase();

  pizzaParaAlterar = pizzaria.find((pizza) =>
    pizza.nome.toLowerCase().includes(buscar)
  );

  if (pizzaParaAlterar) {
    document.getElementById("form-alterar").classList.remove("hidden");
    document.getElementById("new-name").value = pizzaParaAlterar.nome;
    document.getElementById("new-type").value = pizzaParaAlterar.tipo;
    document.getElementById("new-size").value = pizzaParaAlterar.tamanho;
    document.getElementById("new-description").value =
      pizzaParaAlterar.descricao;
    document.getElementById("new-price").value = pizzaParaAlterar.preco;
  } else {
    alert("Pizza não encontrada.");
  }
}

function alterarPizza() {
  if (pizzaParaAlterar) {
    const novoNome = document.getElementById("new-name").value;
    const novoTipo = document.getElementById("new-type").value;
    const novoTamanho = document.getElementById("new-size").value;
    const novaDescricao = document.getElementById("new-description").value;
    const novoPreco = parseFloat(document.getElementById("new-price").value);

    if (novoNome && novoTipo && novoTamanho && novaDescricao && novoPreco) {
      pizzaParaAlterar.nome = novoNome;
      pizzaParaAlterar.tipo = novoTipo;
      pizzaParaAlterar.tamanho = novoTamanho;
      pizzaParaAlterar.descricao = novaDescricao;
      pizzaParaAlterar.preco = novoPreco;

      atualizarLista();
      alert("Pizza alterado com sucesso!");
      document.getElementById("form-alterar").classList.add("hidden");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
}

// função para logar usuário(ADM)
function logar() {
  //Buscar valores definidos pelo usuário
  const user = document.getElementById("user").value;
  const pass = document.getElementById("password").value;

  //Conferir se todos os campos foram preenchidos
  if (user != "" && pass != "") {
    //Conferir se o usuário e a senha está correto
    if (user == "KayqueAdm" && pass == "1234") {
      document.getElementById(
        "resultadoLogin"
      ).innerHTML = `<p style="color: green;">Login realizado com <strong>sucesso!</strong><br>
            Bem vindo ${user}</p>`;
    } else {
      document.getElementById(
        "resultadoLogin"
      ).innerHTML = `<p style="color: red;">Usuário ou senha <strong>incorreta!</strong><p>`;
    }
  } else {
    document.getElementById(
      "resultadoLogin"
    ).innerHTML = `<p>Preencha todos os campos!!<p>`;
  }
}

compras = [];
function adicionarCompra(pizza) {
  compras.push({ ...pizza });
  alert("Pizza adicionada ao carrinho!");

  const tabela = document.getElementById("exibir-compra");
  tabela.innerHTML = "";

  let total = 0;
  compras.forEach((compra) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
     <td>${compra.nome}</td>
     <td>${compra.tipo}</td>
     <td>${compra.tamanho}</td>
     <td>${compra.descricao}</td>
     <td>${compra.preco}</td>
     `;
    tabela.appendChild(linha);
    total += compra.preco;
  });

  // Exibe o total da compra
  const totalLinha = document.createElement("tr");
  totalLinha.innerHTML = `
    <td colspan="4" style="text-align:right;"><strong>Total:</strong></td>
    <td><strong>${total.toFixed(2)}</strong></td>
  `;
  tabela.appendChild(totalLinha);

  document.getElementById("checkout").innerHTML = "<button onclick='finalizarCompra()'>Finalizar Compra</button>";
}

function finalizarCompra(pizza) {
  
}
 
// function pedidosAbertos () {
//     const nome = document.getElementById('name').value;
//     const tipo = document.getElementById('type').value;
//     const tamanho = document.getElementById('size').value;
//     const descricao =document.getElementById('description').value;
//     const preco = parseFloat(document.getElementById('price').value);
// }

function atualizarLista(lista = pizzaria) {
  const tabela = document.getElementById("lista-pizzas");
  tabela.innerHTML = "";

  lista.forEach((pizza, index) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
        <td>${pizza.nome}</td>
        <td>${pizza.tipo}</td>
        <td>${pizza.tamanho}</td>
        <td>${pizza.descricao}</td>
        <td>${pizza.preco}</td>
        <td><button onclick="adicionarCompra(pizzaria[${index}])">+</button></td>
        `;
    tabela.appendChild(linha);
  });
}
