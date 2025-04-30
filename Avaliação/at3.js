produtos = ["Carrinho", "Boneca", "Quebra-cabeça", "Lego", "Urso de pelúcia", "Jogo de tabuleiro", "Bola", "Patinete", "Pipa", "Dominó"];


console.log("Lista de produtos disponíveis:");
produtos.forEach((produto, index) => {
    console.log(`${index + 1}. ${produto}`);
});
 
comprar = String(prompt("Escolha um produto da lista:\n" + produtos.join("\n")));
valor= parseFloat
if (comprar == produtos[0]) {
    valor = 9.99;
} else if (comprar == produtos[1]) {
    valor = 14.99;
} else if (comprar == produtos[2]) {
    valor = 19.99;
} else if (comprar == produtos[3]) {
    valor = 29.99;
} else if (comprar == produtos[4]) {
    valor = 24.99;
} else if (comprar == produtos[5]) {
    valor = 34.99;
} else if (comprar == produtos[6]) {
    valor = 12.99;
} else if (comprar == produtos[7]) {
    valor = 49.99;
} else if (comprar == produtos[8]) {
    valor = 7.99;
} else if (comprar == produtos[9]) {
    valor = 15.99;
} else {
    console.log("Produto não encontrado.");
    valor = 0;
}

if (comprar == produtos[9] || comprar == produtos[0]) {
    valor += valor * 0.10;
     alert(`Você escolheu: ${comprar} (com desconto de 10%). O valor é R$${valor.toFixed(2)}.`);
} else {
    alert(`Você escolheu: ${comprar}. O valor é R$${valor.toFixed(2)}.`);
}





