pizzaria = [];
PizzaParaAlterar = null;
pedidos = [];
clientes = []; 
compras = [];

let usuarioLogado = null;

function atualizarUserActions() {
  const userDiv = document.getElementById("user");
  if (usuarioLogado) {
    userDiv.innerHTML = `
      <span style="color:#d7263d;font-weight:bold;font-size:1.1rem;">Olá, ${usuarioLogado}!</span>
      <button onclick="logoutUsuario()"><i class='fa-solid fa-right-from-bracket'></i> Sair</button>
    `;
  } else {
    userDiv.innerHTML = `
      <button id="registerClient" onclick="mostrarSecao('cadastroCliente')">
        <i class="fa-solid fa-user-plus"></i> Cadastrar
      </button>
      <button id="loginClient" onclick="mostrarSecao('loginCliente')">
        <i class="fa-solid fa-right-to-bracket"></i> Login
      </button>
    `;
  }
}

function logoutUsuario() {
  usuarioLogado = null;
  atualizarUserActions();
  mostrarSecao('container');
}

// função para selecionar a operação deseja pelo usuário
function mostrarSecao(secao) {
  // Esconde todas as seções principais
  document.getElementById("cadastroPizza").classList.add("hidden");
  document.getElementById("cardapio").classList.add("hidden");
  document.getElementById("loginAdm").classList.add("hidden");
  document.getElementById("alterar").classList.add("hidden");
  document.getElementById("compra").classList.add("hidden");
  document.getElementById("cadastroCliente").classList.add("hidden");
  document.getElementById("loginCliente").classList.add("hidden");
  document.getElementById("relatorioPedidos").classList.add("hidden")
  

  const menu = document.getElementById("menu");
  if (secao === "cadastroCliente" || secao === "loginCliente") {
    menu.classList.add("hidden");
    document.getElementById("container").classList.add("hidden");
    document.getElementById("registerClient").classList.add("hidden");
    document.getElementById("loginClient").classList.add("hidden");

  } else {
    menu.classList.remove("hidden");
    document.getElementById("container").classList.remove("hidden");
    document.getElementById("registerClient").classList.remove("hidden");
    document.getElementById("loginClient").classList.remove("hidden");
  }

  // Exibe apenas a seção que foi selecionada
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


function adicionarCompra(pizza) {
  compras.push({ ...pizza });
  alert("Pizza adicionada ao carrinho!");
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


function finalizarCompra(pizza) {
  
}
 
function cadastroCliente(){

  const user = document.getElementById("userClient").value;
  const email = document.getElementById("emailClient").value;
  const telefone = document.getElementById("phoneClient").value;
  const senha = document.getElementById("passwordClient").value;

  if (user != "" && email != "" && telefone != "" && senha != "") {
    clientes.push({ user, email, telefone, senha });
    document.getElementById("resultCadastro").innerHTML = `<p style="color: green; font-weight: bold;">Cadastro realizado com sucesso!</p>`;
  } else {
    document.getElementById("resultCadastro").innerHTML = `<p style="color: red; font-weight: bold;">Falha no cadastro! Preencha todos os campos.</p>`;
  }
}

function atualizarUserActions() {
  const userActions = document.getElementById("user");
  const registerBtn = document.getElementById("registerClient");
  const loginBtn = document.getElementById("loginClient");
  let userNameSpan = document.getElementById("userName");
  let logoutBtn = document.getElementById("logoutBtn");

  if (usuarioLogado) {
    // Esconde botões
    if (registerBtn) registerBtn.style.display = "none";
    if (loginBtn) loginBtn.style.display = "none";
    // Cria span do nome se não existir
    if (!userNameSpan) {
      userNameSpan = document.createElement("span");
      userNameSpan.id = "userName";
      userNameSpan.style.fontWeight = "bold";
      userNameSpan.style.color = "#d7263d";
      userNameSpan.style.fontSize = "1.1rem";
      userActions.appendChild(userNameSpan);
    }
    userNameSpan.textContent = `👤 ${usuarioLogado}`;
    // Cria botão logout se não existir
    if (!logoutBtn) {
      logoutBtn = document.createElement("button");
      logoutBtn.id = "logoutBtn";
      logoutBtn.innerHTML = '<i class="fa-solid fa-arrow-right-from-bracket"></i> Sair';
      logoutBtn.onclick = logoutUsuario;
      logoutBtn.className = "user-actions-close";
      userActions.appendChild(logoutBtn);
    }
    userNameSpan.style.display = "inline-block";
    logoutBtn.style.display = "inline-block";
  } else {
    // Mostra botões
    if (registerBtn) registerBtn.style.display = "inline-block";
    if (loginBtn) loginBtn.style.display = "inline-block";
    // Esconde nome e logout
    if (userNameSpan) userNameSpan.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "none";
  }
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
