pizzaria = [];
PizzaParaAlterar = null;
pedidos = [];
clientes = []; 
compras = [];

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


function finalizarCompra(pizza) {
  const tabela = document.getElementById("relatorios");
  tabela.innerHTML = ""

  relatorio.forEach((clientes, index) => {
    linha = document.createElement("tr");
    linha.innerHTML = `
    <td>${clientes.nome}</td>
    <td>${clientes.pizza}</td>
    <td>${clientes.preco}</td>
    `;
    tabela.appendChild(linha)
  });
}
 
// function cadastroCliente(){

//   const user = document.getElementById("userClient").value;
//   const email = document.getElementById("emailClient").value;
//   const telefone = document.getElementById("phoneClient").value;
//   const senha = document.getElementById("passwordClient").value;

//   if (user != "" && email != "" && telefone != "" && senha != "") {
//     clientes.push({ user, email, telefone, senha });
//     document.getElementById("resultCadastro").innerHTML = `<p style="color: green; font-weight: bold;">Cadastro realizado com sucesso!</p>`;
//   } else {
//     document.getElementById("resultCadastro").innerHTML = `<p style="color: red; font-weight: bold;">Falha no cadastro! Preencha todos os campos.</p>`;
//   }
// }

// function cadastrarUsuario(novoUsuario, novaSenha) {
//   let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
//   // Verifica se já existe
//   if (usuarios.some((u) => u.usuario === novoUsuario)) {
//     exibirMensagem("Usuário já existe!", "erro");
//     return false;
//   }
//   usuarios.push({ usuario: novoUsuario, senha: novaSenha });
//   localStorage.setItem("usuarios", JSON.stringify(usuarios));
//   exibirMensagem("Usuário cadastrado com sucesso!", "sucesso");
//   return true;
// }

// // Busca usuário no localStorage
// function buscarUsuario(usuario, senha) {
//   let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
//   return usuarios.find((u) => u.usuario === usuario && u.senha === senha);
// }

// // Busca usuário apenas pelo nome
// function buscarUsuarioPorNome(usuario) {
//   let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
//   return usuarios.find((u) => u.usuario === usuario);
// }

function exibirMensagem(texto, tipo) {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = texto;
  // Adiciona a classe de estilo (sucesso ou erro)
  mensagem.className = `mensagem ${tipo}`;
  mensagem.classList.remove("hidden");

  // Remove a mensagem após 3 segundos
  setTimeout(() => {
    mensagem.classList.add("hidden");
  }, 3000);
}

function validarLogin() {
  const usuario = document.getElementById("usuario").value;
  const cliente = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;


  if (buscarUsuario(usuario, senha)) {
    exibirMensagem("Login realizado com sucesso!", "sucesso");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
    if (buscarUsuario(cliente, senha)) {
      exibirMensagem("Login realizado com sucesso!", "sucesso");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    }
  } else {
    exibirMensagem("Usuário ou senha incorretos.", "erro");
  }
}

// function esqueceuSenha() {
//   const usuario = prompt("Digite seu usuário:");
//   const user = buscarUsuarioPorNome(usuario);
//   if (user) {
//     exibirMensagem(`Sua senha é: ${user.senha}`, "sucesso");
//   } else {
//     exibirMensagem("Usuário não encontrado.", `erro`);
//   }
// }

// function abrirCadastroUsuario() {
//   const novoUsuario = prompt("Digite o novo usuário:");
//   if (!novoUsuario) return;
//   const novaSenha = prompt("Digite a nova senha:");
//   if (!novaSenha) return;
//   cadastrarUsuario(novoUsuario, novaSenha);
// }

// function mostrarCadastroUsuario() {
//   document.getElementById("login").classList.add("hidden");
//   document.getElementById("cadastro-usuario").classList.remove("hidden");
// }

// function voltarLogin() {
//   document.getElementById("cadastro-usuario").classList.add("hidden");
//   document.getElementById("login").classList.remove("hidden");
// }

// function enviarCadastroUsuario() {
//   const novoUsuario = document.getElementById("novo-usuario").value.trim();
//   const novaSenha = document.getElementById("nova-senha").value.trim();
//   if (!novoUsuario || !novaSenha) {
//     exibirMensagem("Preencha todos os campos!", "erro");
//     return;
//   }
//   if (cadastrarUsuario(novoUsuario, novaSenha)) {
//     document.getElementById("novo-usuario").value = "";
//     document.getElementById("nova-senha").value = "";
//     voltarLogin();
//   }
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
