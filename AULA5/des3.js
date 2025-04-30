//Calcular média de notas com base em duas notas, sendo a primeira 6 e a segunda 10 e mais 4 para trabalhos

function CalcularMedia(numeros) {
    let soma = 0
    for (let i = 0; i < numeros; i++) {
        soma += numeros[i]
    }
}

numeros [6,10,4]
let media = CalcularMedia(numeros)
alert(`Primeira nota: 6\nSegunda nota:10\nNotas do trabalhos: 4\nmédia do aluno: ${media}`)

// Lava rápido do João - 3 serviços
// 1 - Lavagem simples - R$20,00
// 2 - Lavagem Completa - R$ 30,00
// 3 - Enceramento - R$ 50,00
// Apresentar o valor total da compra ou serviço escolhido e valor final e o nome do cliente e placa de veiculo