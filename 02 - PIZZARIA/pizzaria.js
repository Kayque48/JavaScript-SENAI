pizzaria = [];
PizzaParaAlterar = null;
pedidos = [];
clientes = []; 
compras = [];

// Adicione um array para armazenar os pedidos finalizados
let relatorio = [];

// função para selecionar a operação deseja pelo usuário
function mostrarSecao(secao) {
  // Esconde todas as seções principais
  document.getElementById("cadastroPizza").classList.add("hidden");
  document.getElementById("cardapio").classList.add("hidden");
  document.getElementById("loginAdm").classList.add("hidden");
  document.getElementById("alterar").classList.add("hidden");
  document.getElementById("compra").classList.add("hidden");
  document.getElementById("relatorioVendas").classList.add("hidden");
  
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
      document.getElementById("resultadoAlteacao").innerHTML = `<p>Pizza alterada com sucesso!</p>`;
      document.getElementById("form-alterar").classList.add("hidden");
    } else {
      document.getElementById("resultadoAlteacao").innerHTML = `<p style="color:red;">Por favor, preencha todos os campos.</p>`;
    }
  }
}

function exibirMensagem(texto, tipo) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = texto;
    // Adiciona a classe de estilo (sucesso ou erro)
    mensagem.className = `mensagem mensagem-${tipo}`;
    mensagem.classList.remove("hidden");

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
        mensagem.classList.add("hidden")
    }, 3000);
}

if (localStorage.getItem("clientes")) {
  clientes = JSON.parse(localStorage.getItem("clientes"));
}

function salvarClientes() {
  localStorage.setItem("clientes", JSON.stringify(clientes));
}

function validarCadastro() {
  const nome = document.getElementById("cadastroUsuario").value;
  const email = document.getElementById("cadastroEmail").value;
  const telefone = document.getElementById("cadastroTelefone").value;
  const senha = document.getElementById("cadastroSenha").value;

  if (nome && email && telefone && senha) {
    clientes.push({ nome, email, telefone, senha });
    salvarClientes();
    exibirMensagem("Cadastro realizado com sucesso!", "sucesso");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);
  } else {
    exibirMensagem("Preencha todos os campos corretamente.", "erro");
  }
}

// Valida o login do usuário conferindo no array clientes
function validarlogin() {
 if (localStorage.getItem("clientes")) {
  clientes = JSON.parse(localStorage.getItem("clientes"));
 }

 const usuario = document.getElementById("usuario").value;
 const senha = document.getElementById("senha").value;

  const clienteEncontrado = clientes.find(
    (c) => c.nome === usuario && c.senha === senha
  );

  if (clienteEncontrado) {
    exibirMensagem("Login realizado com sucesso!", "sucesso");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  } else {
    exibirMensagem("Usuário ou senha incorretos", "erro");
  }
}


function adicionarCompra(pizza) {
  compras.push({ ...pizza });
  document.getElementById("resultadoCompra").innerHTML = "Pizza adicionada ao carrinho!";
  atualizarCarrinho();
}

function atualizarCarrinho(){
  const tabela = document.getElementById("exibir-compra");
  tabela.innerHTML = "";

  let total = 0;
  compras.forEach((compra, index) => {
    if (compra && compra.nome) {
      const linha = document.createElement("tr");
      linha.innerHTML = `
      <td>${compra.nome}</td>
      <td>${compra.tipo}</td>
      <td>${compra.tamanho}</td>
      <td>${compra.descricao}</td>
      <td>${compra.preco}</td>
      <td><button onclick="removerCompra(${index})">-</button></td>
      `;
      tabela.appendChild(linha);
      total += compra.preco;
      }
  });

  // Exibe o total da compra
  const totalLinha = document.createElement("tr");
  totalLinha.innerHTML = `
    <td></td>
    <td colspan="4" style="text-align:right;"><strong>Total:</strong></td>
    <td><strong>${total.toFixed(2)}</strong></td>
  `;
  tabela.appendChild(totalLinha);

  document.getElementById("checkout").innerHTML = "<button onclick='finalizarCompra()'>Finalizar Compra</button>";
}

function removerCompra(index) {
  compras.splice(index, 1);
  atualizarCarrinho();
}


function finalizarCompra() {
  if (compras.length === 0) {
    document.getElementById("resultadoCarrinho").innerHTML= `<p>O carrinho está vazio!</p>`;
    return;
  }

  // Pega o último cliente cadastrado (ou logado)
  let clienteAtual = clientes.length > 0 ? clientes[clientes.length - 1] : { nome: "Cliente Anônimo" };

  // Para cada pizza no carrinho, adiciona um pedido ao array pedidos
  compras.forEach((pizza) => {
    pedidos.push({
      cliente: {
        nome: clienteAtual.nome,
        email: clienteAtual.email,
        telefone: clienteAtual.telefone
      },
      pizza: {
        nome: pizza.nome,
        tipo: pizza.tipo,
        tamanho: pizza.tamanho,
        descricao: pizza.descricao,
        preco: pizza.preco
      }
    });
  });



  // Limpa o carrinho e atualiza a tela
  compras = [];
  atualizarCarrinho();
  document.getElementById("resultadoFinalizarCompra").innerHTML = `<p>Compra finalizada com sucesso!</p>`;
  atualizarRelatorio();
}

// Função para atualizar o relatório na tela
function atualizarRelatorio() {
  const tabela = document.getElementById("relatorio");
  if (!tabela) return;
  tabela.innerHTML = "";
  pedidos.forEach((pedido, index) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${pedido.cliente.nome}</td>
      <td>${pedido.pizza.nome} (${pedido.pizza.tamanho}, ${pedido.pizza.tipo})</td>
      <td>R$ ${pedido.pizza.preco.toFixed(2)}</td>
    `;
    tabela.appendChild(linha);
  });
}

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