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
    const nome = document.getElementById("name").Value;
    const tipo = document.getElementById("type").Value;
    const tamanho = document.getElementById("size").Value;
    const descricao = document.getElementById("description").Value;
    const preco = parseFloat(document.getElementById("price").Value);

    //operação para vereficar se todos os campos estão preenchidos
    if (nome != "" || tipo != "" || tamanho != "" || descricao != "" || preco != "") {
        //empurrar as constantes dentro do array Pizzaria
        pizzaria.push({nome, tipo, tamanho, preco})
        document.getElementById("result").innerHTML = `Pizza  adicionada com sucesso!!!`

        //limpar os termos
        document.getElementById("name").Value = "";
        document.getElementById("type").Value = "";
        document.getElementById("size").Value = "";
        document.getElementById("description").Value = "";
        document.getElementById("price").Value = "";
        atualizarLista()
    } else {
        document.getElementById("result").innerHTML = "Falha em adicionar pizza! Preencha todos os campos antes."
    }
}

function buscarPizza() {
    const busca = document.getElementById("busca").Value;
    const resultados = biblioteca.filter((pizza) => pizza.nome.includes(busca));
    (resultados);
}

function atualizarLista(lista = pizzaria) {
    // define tabela e insere os dados
    const tabela = document.getElementById("lista-pizza");
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