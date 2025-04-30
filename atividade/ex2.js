function trocaOleo() {
    let nome = document.getElementById("nome").value; // Adicionado .value para capturar o valor do input
    let ress = document.getElementById("resultado"); // Corrigido para getElementById

    ress.innerHTML = `<p>Serviço: Troca de óleo</p>
    <p>Cliente: ${nome}</p>`; // Exibe o nome do cliente corretamente
}

function alinhamento() {
    let nome = document.getElementById("nome").value;
    let ress = document.getElementById("resultado");

    ress.innerHTML = `<p>Serviço: Alinhamento e balanceamento</p>
    <p>Cliente: ${nome}</p>`;
}

function revisao() {
    let nome = document.getElementById("nome").value;
    let ress = document.getElementById("resultado");

    ress.innerHTML = `<p>Serviço: Revisão completa</p>
    <p>Cliente: ${nome}</p>`;
}