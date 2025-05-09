let biblioteca = [];
let livroParaAlterar = null;

function mostrarSecao(secao) {
    // Escode todas as seções
    document.getElementById("cadastro").classList.add("hidden");
    document.getElementById("consulta").classList.add("hidden");
    document.getElementById("alterar").classList.add("hidden");

    // Mostra seção de selecionada
    document.getElementById(secao).classList.remove("hidden");
}

function adicionarLivro() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const ano = parseInt(document.getElementById("ano").value);

    if (titulo && autor && ano) {
        biblioteca.push({titulo, autor, ano});
        document.getElementById("titulo").value = "";
        document.getElementById("autor").value = "";
        document.getElementById("ano").value = "";
        atualizarLista();
        alert("Livro adicionado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function buscarLivro() {
    const busca = document.getElementById("busca").value.toLowerCase();
    const resultados = biblioteca.filter((livro) => livro.titulo.toLowerCase().includes(busca));        
    atualizarLista(resultados);
}

function atualizarLista(lista = biblioteca) {
    const tabela = document.getElementById("lista-livros");
    tabela.innerHTML = "";

    lista.forEach((livro) => {
        const linha = document.createElement("tr");
        linha.innerHTML = ` 
        <td>${livro.titulo}</td>
        <td>${livro.autor}</td>
        <td>${livro.ano}</td>
        `;
        tabela.appendChild(linha);
    });
}

let emprestimos = [];

function realizarEmprestimo() {
    const titulo = document.getElementById("emprestimo-titulo").value;
    const nomeUsuario = document.getElementById("emprestimo-nome").value;
       
    if (titulo && nomeUsuario) {
        const livro = biblioteca.find(
            (livro) => livro.titulo.toLowerCase() === titulo.toLowerCase()
        );

        if(livro) {
            emprestimos.push({titulo: livro.titulo, usuario: nomeUsuario}); 
            atualizarListaEmprestimos();
            alert("Emprestimo realizado com sucesso!");
            document.getElementById("emprestimo-titulo").value = "";
            document.getElementById("emprestimo-nome").value = "";
        } else {
            alert("Livro não encontrado na biblioteca.");
        }
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function atualizarListaEmprestimos() {
    const listaEmprestimos = document.getElementById("li");

    emprestimos.forEach((emprestimo) => {
        const item = document.createElement("li");
        item.textContent = `Livro: ${emprestimo.titulo} - Usuário: ${emprestimo.usuario}`;
        listaEmprestimos.appendChild(item);
    });
}

// --- Registro de Vendas ---
let vendas = []; // Array para armazenar as vendas

function registrarVenda() {
    const titulo = document.getElementById("venda-titulo").value;
    const preco = document.getElementById("venda-preco").value;
    const comprador = document.getElementById("venda-comprador").value;

    if (titulo && preco && comprador) {
        const listaVendas = document.getElementById("lista-vendas");
        const item = document.createElement("li");
        item.textContent = `Título: ${titulo}, Preço: R$${preco}, Comprador: ${comprador}`;
        listaVendas.appendChild(item);

        // Adicionar venda ao array de vendas
        vendas.push({ titulo, preco, comprador });

        // Limpar os campos
        document.getElementById("venda-titulo").value = "";
        document.getElementById("venda-preco").value = "";
        document.getElementById("venda-comprador").value = "";
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}

function gerarRelatorioVendas() {
    const tabelaRelatorio = document.getElementById("tabela-relatorio-vendas");
    tabelaRelatorio.innerHTML = ""; // Limpar tabela

    if (vendas.length === 0) {
        alert("Nenhuma venda registrada.");
        return;
    }

    vendas.forEach((venda) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${venda.titulo}</td>
            <td>R$${venda.preco}</td>
            <td>${venda.comprador}</td>
        `;
        tabelaRelatorio.appendChild(linha);
    });
}