let entrada = String(prompt("Insira qual tipo de entrada.\n 1. inteira\n 2. metade: "))
let preco = 0
if (entra == "inteira" || entra == "Inteira") {
  preco = 30;
} else if (entrada == "metade" || entrada == "Metade") {
  preco = 25;
} else {
    alert("Digite apenas um das opções!")
}

alert(`você escolheu a opçao ${entrada}, o valor pago é R$${preco}`)