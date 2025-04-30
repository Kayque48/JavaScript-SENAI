let biblioteca = [];

function adicionarLivro() {
    let titulo = prompt("Digite o título do livro:");
    let autor = prompt("Digite o autor do livro:");
    let ano = parseInt(prompt("Digite o ano de publicação do livro:"));
    biblioteca.push({titulo, autor, ano});
    alert("Livro adicionado com sucesso!");

    
}

function exibirMenu() {
    return prompt(
        "Menu:\n" +
        "1. Adicionar Livro\n"+
        "2. Buscar Livro\n"+
        "3. Listar Livro\n"+
        "4. Empréstimo de Livros\n"+
        "5. Sair\n"+
        "Escolher uma opção:"
    )
}

function listarLivro() {
    if(biblioteca.length > 0) {
        let mensagem = "Lista de livros na biblioteca:\n"
        biblioteca.forEach((livro) => {
            mensagem += `Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}\n`
        });
        alert(mensagem);
    } else {
        alert("A biblioteca está vazia.")
    }
}

function EmprestimoLivro() {
    let livroemprestimo = prompt("Digite o título do livro: ");
    let autormprestimo = prompt("Digite o autor do livro: ");

    // Verifica se o livro existe na biblioteca
    let livroIndex = biblioteca.findIndex(
        (livro) => livro.titulo === livroemprestimo && livro.autor === autormprestimo
    );

    if (livroIndex !== -1) {
        // Remove o livro da biblioteca
        let livro = biblioteca.splice(livroIndex, 1)[0];
        alert(
            `Empréstimo de livro realizado com sucesso!\n` +
            `Título: ${livro.titulo}\n` +
            `Autor: ${livro.autor}\n`
        );
    } else {
        alert("Livro não encontrado na biblioteca.");
    }
}

exibirMenu();
adicionarLivro();
listarLivro();
EmprestimoLivro();

