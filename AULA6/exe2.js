function confirmarAcesso(nome, senha) {
    if(nome == "Kayque_Silva" && senha == "Chainsaw Man") {
        alert(`Acesso liberado.`)
    } else {
        alert("Usuário ou senha incorreta.\n Acesso negado")
    }
}

let nome = String(prompt("Digite o nome do usuário: "))
let senha = String(prompt("Digite a senha: "))
confirmarAcesso(nome, senha)