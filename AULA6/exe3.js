function podeVotar(pessoa, idade, nacionalidade) {
    if (idade >= 18 && nacionalidade == "brasileira") {
      alert(`${pessoa} está liberada a votar.`);
    } else if (idade < 18 && nacionalidade == "brasileira") {
      alert(`${pessoa} não está liberada a votar.`);
    } else if (idade >= 16 && nacionalidade == "estadunidense") {
      alert(`${pessoa} está liberada a votar.`);
    } else if (idade < 16 && nacionalidade == "estadunidense") {
      alert(`${pessoa} não está liberada a votar.`);
    } else if (idade >= 20 && nacionalidade == "japonesa") {
      alert(`${pessoa} está liberada a votar.`);
    } else {
        alert(`${pessoa} não está liberada a votar.`);
    }
}

let pessoa = String(prompt("Insira seu nome: "))
let idade = parseInt(prompt("Insira sua idade: "))
let nacionalidade = String(prompt("Insira sua nacionalidade: "))
podeVotar(pessoa, idade, nacionalidade)