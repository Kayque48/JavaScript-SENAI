function Verificar(pessoa, idade, habilitacao) {
  if (idade >= 18 && habilitacao == "sim") {
    return alert(`${pessoa}, é maior de idade e tem habilitação`);
  } else if (idade >= 18 && habilitacao != "sim") {
    return alert(`${pessoa}, é maior de idade e não tem habilitação`);
  } else {
    return alert(`${pessoa}, é menor de idade e não tem habilitação`);
  }
}

let pessoa = String(prompt("Digite o seu nome: "));
let idade = parseInt(prompt("Digite a sua idade: "));
let CNH = prompt("Você tem Carteira de motorista?: ");
Verificar(pessoa, idade, CNH)
