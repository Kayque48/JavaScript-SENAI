
// função para selecionar a operação deseja pelo usuário
function mostrarSecao() {

    //Esconde todas as seções
    document.getElementById("cadastroPizza").classList.add("hidden");
    document.getElementById("cardapio").classList.add("hidden");
    document.getElementById("atualizarCardapio").classList.add("hidden");
    document.getElementById("adicionarPedido").classList.add("hidden");
    document.getElementById("pedidosAbertos").classList.add("hidden");

    //Exibi apenas a seção que foi selecionada
    document.getElementById("mostrarSecao").classList.remove("hidden")
}

//Função para adicionar uma nova pizza ao cardápio
function cadastroPizza() {
    
}