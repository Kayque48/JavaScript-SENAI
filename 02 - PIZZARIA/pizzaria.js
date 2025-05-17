pizzaria = []

// função para selecionar a operação deseja pelo usuário
function mostrarSecao(secao) {

    //Esconde todas as seções
    document.getElementById("cadastroPizza").classList.add("hidden");
    document.getElementById("cardapio").classList.add("hidden");

    //Exibi apenas a seção que foi selecionada
    document.getElementById(secao).classList.remove("hidden")
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
    if (nome != "" && tipo != "" && tamanho != "" && descricao != "" && !isNaN(preco)) {
        //empurrar as constantes dentro do array Pizzaria
        pizzaria.push({nome, tipo, tamanho, descricao, preco})
        document.getElementById("result").innerHTML = `Pizza adicionada com sucesso!!!`

        //limpar os termos
        document.getElementById("name").value = "";
        document.getElementById("type").value = "";
        document.getElementById("size").value = "";
        document.getElementById("description").value = "";
        document.getElementById("price").value = "";
        atualizarLista()
    } else {
        document.getElementById("result").innerHTML = "Falha em adicionar pizza! Preencha todos os campos antes."
    }
}

function buscarPizza() {
    const busca = document.getElementById("busca").value.toLowerCase();
    const resultados = pizzaria.filter((pizza) => pizza.nome.toLowerCase().includes(busca.toLowerCase()));
    atualizarLista(resultados);
}

function atualizarLista(lista = pizzaria) {
    // define tabela e insere os dados
    const tabela = document.getElementById("lista-pizzas");
    tabela.innerHTML = "";

    lista.forEach((pizza) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
        <td>${pizza.nome}</td>
        <td>${pizza.tipo}</td>
        <td>${pizza.tamanho}</td>
        <td>${pizza.descricao}</td>
        <td>${pizza.preco}</td>
        `;
        tabela.appendChild(linha);
    });
}