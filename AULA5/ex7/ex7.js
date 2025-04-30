function calcularMedia(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma / numeros.length;
}

let numeros = [];
let quantidade = parseFloat(prompt("Quantos números você deseja inserir?"));

for (let i = 0; i < quantidade; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
    numeros.push(numero);
}

let media = calcularMedia(numeros);
alert(`A média é: ${media}`);