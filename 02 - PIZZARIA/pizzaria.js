// =======================
// VARIÁVEIS GLOBAIS
// =======================
// Arrays para armazenar dados principais do sistema

// Pizzas cadastradas (alguns exemplos já prontos)
let pizzaria = [
  {
    nome: "Pepperoni",
    tipo: "salgada",
    tamanho: "G",
    descricao: "Molho de tomate, queijo mussarela e fatias de pepperoni.",
    preco: 69.99
  },
  {
    nome: "Margherita",
    tipo: "vegetariana",
    tamanho: "M",
    descricao: "Molho de tomate, queijo mussarela, tomate e manjericão fresco.",
    preco: 59.99
  },
  {
    nome: "Quatro Queijos",
    tipo: "salgada",
    tamanho: "G",
    descricao: "Mussarela, provolone, parmesão e gorgonzola.",
    preco: 74.99
  },
  {
    nome: "Chocolate com Morango",
    tipo: "doce",
    tamanho: "P",
    descricao: "Chocolate ao leite derretido e morangos frescos.",
    preco: 39.99
  }
];

let pizzaParaAlterar = null; // Pizza selecionada para alteração
let pedidos = [];            // Pedidos realizados
let clientes = [];           // Clientes cadastrados
let compras = [];            // Carrinho de compras do cliente
let relatorio = [];          // (Não utilizado, pode remover se quiser)

// =======================
// FUNÇÕES DE NAVEGAÇÃO ENTRE SEÇÕES
// =======================
/**
 * Mostra a seção desejada e esconde as demais
 */
function mostrarSecao(secao) {
  document.getElementById("cadastroPizza").classList.add("hidden");
  document.getElementById("cardapio").classList.add("hidden");
  document.getElementById("alterar").classList.add("hidden");
  document.getElementById("compra").classList.add("hidden");
  document.getElementById("relatorioVendas").classList.add("hidden");
  document.getElementById(secao).classList.remove("hidden");
}

// =======================
// CADASTRO DE PIZZA
// =======================
/**
 * Cadastra uma nova pizza no sistema
 */
function cadastrarPizza() {
  // Busca valores do formulário
  const nome = document.getElementById("name").value;
  const tipo = document.getElementById("type").value;
  const tamanho = document.getElementById("size").value;
  const descricao = document.getElementById("description").value;
  const preco = parseFloat(document.getElementById("price").value);

  // Verifica se todos os campos estão preenchidos
  if (nome && tipo && tamanho && descricao && !isNaN(preco)) {
    pizzaria.push({ nome, tipo, tamanho, descricao, preco });
    document.getElementById("result").innerHTML = `<p style="color: green; font-weight: bold; margin-top: 10px;">Pizza adicionada com sucesso!</p>`;
    setTimeout(() => {
      document.getElementById("result").innerHTML = "";
    }, 3000);
    // Limpa os campos do formulário
    document.getElementById("name").value = "";
    document.getElementById("type").value = "";
    document.getElementById("size").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    atualizarLista();
  } else {
    document.getElementById("result").innerHTML =
      `<p style="color: red; font-weight: bold; margin-top: 10px;">Falha ao adicionar pizza! Preencha todos os campos antes de continuar.</p>`;
    setTimeout(() => {
      document.getElementById("result").innerHTML = "";
    }, 3000);
  }
}

// =======================
// BUSCA DE PIZZA NO CARDÁPIO
// =======================
/**
 * Busca pizzas pelo nome no cardápio
 */
function buscarPizza() {
  const busca = document.getElementById("busca").value.toLowerCase();
  const resultados = pizzaria.filter((pizza) =>
    pizza.nome.toLowerCase().includes(busca)
  );
  atualizarLista(resultados);
}

// =======================
// BUSCA E ALTERAÇÃO DE PIZZA
// =======================
/**
 * Busca pizza para alteração pelo nome
 */
function buscarPizzaAlteracao() {
  const buscar = document.getElementById("busca-alterar").value.toLowerCase();
  pizzaParaAlterar = pizzaria.find((pizza) =>
    pizza.nome.toLowerCase().includes(buscar)
  );

  if (pizzaParaAlterar) {
    // Preenche o formulário de alteração com os dados da pizza encontrada
    document.getElementById("form-alterar").classList.remove("hidden");
    document.getElementById("new-name").value = pizzaParaAlterar.nome;
    document.getElementById("new-type").value = pizzaParaAlterar.tipo;
    document.getElementById("new-size").value = pizzaParaAlterar.tamanho;
    document.getElementById("new-description").value = pizzaParaAlterar.descricao;
    document.getElementById("new-price").value = pizzaParaAlterar.preco;
    document.getElementById("resultadoPizzaAlterar").innerHTML = `<p style="color: green; font-weight: bold; margin-top: 10px;">A pizza foi encontrada! Você pode alterá-la abaixo.</p>`;
    setTimeout(() => {
      document.getElementById("resultadoPizzaAlterar").innerHTML = "";
    }, 3000);
  } else {
    document.getElementById("resultadoPizzaAlterar").innerHTML = `<p style="color: red; font-weight: bold; margin-top: 10px;">Pizza não encontrada! Verifique o nome digitado.</p>`;
    document.getElementById("form-alterar").classList.add("hidden");
    setTimeout(() => {
      document.getElementById("resultadoPizzaAlterar").innerHTML = "";
    }, 3000);
  }
}

/**
 * Altera os dados da pizza selecionada
 */
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
      document.getElementById("resultadoAlteracao").innerHTML = `<p style="color: green; font-weight: bold; margin-top: 10px;">Pizza alterada com sucesso!</p>`;
      setTimeout(() => {
        document.getElementById("resultadoAlteracao").innerHTML = "";
      }, 3000);
      document.getElementById("form-alterar").classList.add("hidden");
    } else {
      document.getElementById("resultadoAlteracao").innerHTML = `<p style="color: red; font-weight: bold; margin-top: 10px;">Por favor, preencha todos os campos antes de continuar.</p>`;
      setTimeout(() => {
        document.getElementById("resultadoAlteracao").innerHTML = "";
      }, 3000);
    }
  }
}

// =======================
// EXIBE MENSAGENS DE SUCESSO/ERRO
// =======================
/**
 * Exibe mensagens de sucesso ou erro na tela
 */
function exibirMensagem(texto, tipo) {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = texto;
  mensagem.className = `mensagem mensagem-${tipo}`;
  mensagem.classList.remove("hidden");
  setTimeout(() => {
    mensagem.classList.add("hidden");
  }, 3000);
}

// =======================
// CLIENTES - CADASTRO E LOGIN
// =======================

// Carrega clientes do localStorage ao iniciar
if (localStorage.getItem("clientes")) {
  clientes = JSON.parse(localStorage.getItem("clientes"));
}

/**
 * Redireciona para a tela de cadastro de cliente
 */
function novoCadastro() {
  window.location.href = "cadastro.html"
}

/**
 * Salva clientes no localStorage
 */
function salvarClientes() {
  localStorage.setItem("clientes", JSON.stringify(clientes));
}

/**
 * Valida e cadastra novo cliente
 */
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
    // Não precisa atualizar "Bem-vindo" aqui, pois o cadastro redireciona para login
  } else {
    exibirMensagem("Preencha todos os campos corretamente.", "erro");
  }
}

/**
 * Redireciona para a tela de login do cliente
 */
function logarCliente() {
  window.location.href = "login.html"
}

/**
 * Valida login do cliente
 */
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
    // O "Bem-vindo" será atualizado na index.html, não aqui
  } else {
    exibirMensagem("Usuário ou senha incorretos", "erro");
  }
}

// =======================
// LOGIN DO ADMINISTRADOR
// =======================
/**
 * Redireciona para a tela de login do administrador
 */
function logarAdmin() {
  window.location.href = "loginAdmin.html"
}

/**
 * Valida login do administrador
 */
function validarLoginAdm() {
  const usuario = document.getElementById("usuarioAdm").value;
  const senha = document.getElementById("senhaAdm").value;

  if (usuario === "admin" && senha === "1234") {
    exibirMensagem("Login de administrador realizado com sucesso!", "sucesso");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  } else {
    exibirMensagem("Usuário ou senha de administrador incorretos.", "erro");
  }
}

// =======================
// CARRINHO DE COMPRAS
// =======================
/**
 * Adiciona uma pizza ao carrinho de compras
 */
function adicionarCompra(pizza) {
  compras.push({ ...pizza });
  document.getElementById("resultadoCompra").innerHTML = `<p style="color: green; font-weight: bold; margin-top: 10px;">Pizza adicionada ao carrinho!</p>`;
  setTimeout(() => {
    document.getElementById("resultadoCompra").innerHTML = "";
  }, 3000);
  atualizarCarrinho();
}

/**
 * Atualiza a tabela do carrinho na tela
 */
function atualizarCarrinho() {
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

/**
 * Remove uma pizza do carrinho
 */
function removerCompra(index) {
  compras.splice(index, 1);
  atualizarCarrinho();
}

// =======================
// FINALIZAR COMPRA E RELATÓRIO DE PEDIDOS
// =======================
/**
 * Finaliza a compra, registra o pedido e atualiza o relatório
 */
function finalizarCompra() {
  if (compras.length === 0) {
    document.getElementById("resultadoCarrinho").innerHTML = `<p style="color: red; font-weight: bold; margin-top: 10px;">O carrinho está vazio!</p>`;
    setTimeout(() => {
      document.getElementById("resultadoCarrinho").innerHTML = "";
    }, 3000);
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
  document.getElementById("resultadoFinalizarCompra").innerHTML = `<p style="color: green; font-weight: bold; margin-top: 10px;">Compra finalizada com sucesso!</p>`;
  setTimeout(() => {
    document.getElementById("resultadoFinalizarCompra").innerHTML = "";
  }, 3000);
  atualizarRelatorio();
}

/**
 * Atualiza o relatório de pedidos na tela, agrupando por nome e tamanho
 */
function atualizarRelatorio() {
  const tabela = document.getElementById("relatorio");
  if (!tabela) return;
  tabela.innerHTML = "";

  // Agrupa os pedidos por nome e tamanho
  const agrupados = {};

  pedidos.forEach((pedido) => {
    const chave = `${pedido.pizza.nome}__${pedido.pizza.tamanho}`;
    if (!agrupados[chave]) {
      agrupados[chave] = {
        nome: pedido.pizza.nome,
        tamanho: pedido.pizza.tamanho,
        tipo: pedido.pizza.tipo,
        quantidade: 0,
        total: 0
      };
    }
    agrupados[chave].quantidade += 1;
    agrupados[chave].total += pedido.pizza.preco;
  });

  // Exibe o relatório agrupado
  Object.values(agrupados).forEach((item) => {
    const linha = document.createElement("tr");
    // Obtém o nome do cliente do primeiro pedido deste agrupamento
    const clienteNome = pedidos.find(
      (pedido) => pedido.pizza.nome === item.nome && pedido.pizza.tamanho === item.tamanho
    )?.cliente?.nome || "Desconhecido";

    // Calcula o preço unitário
    const precoUnitario = item.quantidade > 0 ? (item.total / item.quantidade) : 0;

    linha.innerHTML = `
      <td>${clienteNome}</td>
      <td>${item.nome} (${item.tamanho}, ${item.tipo})</td>
      <td>${item.quantidade}</td>
      <td>R$ ${precoUnitario.toFixed(2)}</td>
      <td>R$ ${item.total.toFixed(2)}</td>
    `;
    tabela.appendChild(linha);
  });
}

// =======================
// BOTÃO FECHAR
// =======================
/**
 * Fecha a página ou redireciona para a index
 */
function fecharWeb() {
  window.location.href = "index.html";
}

// =======================
// ATUALIZA LISTA DE PIZZAS NO CARDÁPIO
// =======================
/**
 * Atualiza a lista de pizzas exibidas no cardápio
 */
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