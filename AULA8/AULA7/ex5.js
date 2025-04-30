function desconto() {
let preco = Number(window.prompt('Insira o preço do produto: '))
let porc = Number(window.prompt('Insira o valor do desconto: '))
let valor = (preco * porc) / 100
let total = preco - valor
let res = document.getElementById('result')

res.innerHTML = `<p>O produto custa R$${preco.toFixed(2)}.</p>`
res.innerHTML += `<p>Um desconto de ${porc}% sobre ele será de R$${valor.toFixed(2)}.</p>`
res.innerHTML += `<p>O valor final a ser pago será de <strong><a style="background-color: navy;">R$${total.toFixed(2)}</strong>.</p>`
}