function calcularSoma(numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma
}

let numeros = [];
let quantidade = parseFloat(prompt("Digite a quantidade de itens comprados:"));

for (let i = 0; i < quantidade; i++) {
  let numero = parseInt(prompt(`Digite o valor do item ${i + 1}:`));
  numeros.push(numero);
}

let soma = calcularSoma(numeros);
alert(`Valor total : R$${soma}`);
