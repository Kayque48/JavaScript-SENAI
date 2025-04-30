//Exercício 1 algoritmo deve imprimir 11 vezes "Olá, mundo!".
//Exercício 2 Imprimir resultado de uma tabuada.
//Exercício 3 Imprimir a soma dos números impares de 1 a 100.
//Exercício 4 Imprimir em sequência os números de 10 a 1 e escrever "Feliz Ano Novo!!!".

let i = 0;
while (i < 11) {
    console.log("Olá, mundo!");
    i++;
}

let tabuada = 9
for(let i =0; i <= 10; i++) {
    console.log(`${tabuada} x ${i} = ${tabuada*i}`)
}

let soma = 0
for(let i = 0; i <= 100; i++) {
    if(i % 2 !== 0) {
        impares = i;
        console.log(impares)
        soma += impares
    }
}
console.log(`Soma dos valores é: ${soma}`)

    for(let i = 10; i >=1; i--) {
        console.log(i)
        if(i == 1) {
            console.log("Feliz ano novo!")
            break;
        }
    }