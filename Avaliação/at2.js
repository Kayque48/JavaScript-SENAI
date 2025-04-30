let estoque = Number(prompt("Quantas unidades há no estoque?"))
if (estoque > 30 ) {
    alert(`Estoque Baixo\n${estoque}`)
} else {
    alert(`Estoque Normal\n${estoque}`);
}
if(estoque < 100) {
    alert(`Estoque Bom\n${estoque}`);
}