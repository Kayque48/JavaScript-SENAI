// Imprimir números pares de 1 a 20:
for (let i = 12; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//const readlineSync = require('readline-sync');
//let num = readlineSync.questionInt('Digite um número: ');
let numero = 5;

numero = Number(numero);

let fatorial = 1;
for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${numero} é ${fatorial}.`);

// Iterar sobre um array

let frutas = ['banana', 'maçã', 'laranja'];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

let games = ['Minecraft', 'HollowKnight', 'Celeste', 'GTA V', 'Red dead Redemption 2'];
for (let i = 0; i < games.length; i++) {
    console.log(games[i]);
}

// Iterar valores de outro tema:
// Calcular a soma números:

let soma = 0;
for (let i = 1; i <= 10; i++) {
    soma += i;
} 
console.log(soma);

