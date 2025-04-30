// Desafio 1
//Criar um algoritmo para separa separar valores impares dos pares

//Desafio 2
// Criar um algoritmo para clacular valores com as expressões somar, subtrair, multiplicar e dividir

let num1 = 10
let num2 = 20

let resultado = num1 + num2;
console.log('Resultado ' + resultado);

//desafio 1
let a = 4;
let b = 4;
if (a % 2 == 0 && b % 2 == 0) {
  console.log("O número  " + a + " e " + b + " são pares");
} else if (b % 2 == 0) {
  console.log("O número " + b + " é par.");
} else if (a % 2 == 0) {
  console.log("O número  " + a + " é par");
} else if (a % 2 !== 0 && b % 2 !== 0) {
  console.log("O número  " + a + " e " + b + " são impares");
} else if (b % 2 !== 0) {
  console.log("O número " + b + " é par.");
} else {
  console.log("O número  " + a + " é par");
}

let n1 = 10;
let n2 = 20;

let operacao = 'soma';

if( operacao == 'soma'){
    console.log(`${n1} + ${n2} = ${n1+n2}`);
} else if ( operacao == 'subtrair'){
    console.log(`${n1} - ${n2} = ${n1 - n2}`);
} else if ( operacao == 'divisao'){
    console.log(`${n1} / ${n2} = ${n1 / n2}`);
}else if ( operacao == 'multiplicar'){
    console.log(`${n1} x ${n2} = ${n1 * n2}`);
}

//Douglas
let edu1 = 10;
let edu2 = 20;
let soma = edu1 + edu2;

let equacao = 'soma';
if(equacao == 'soma') 
    console.log('A soma foi' + soma);

//Hayron
let a1 = 10;
let b1 = 5;

let haysoma = a1 + b1;
let haysub = a1 - b1;
let haymul = a1 * b1;
let haydiv = a1 / b1;