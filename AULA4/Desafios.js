//Escreva um programa que classifique a idade de uma pessoa em categorias
//(criança, adolescente, adulto, idoso) e imprima uma mensagem apropriada.

//Ex 1
let idade = 80;
if (idade < 12) {
    console.log("Menor de 13: criança.")
} else if (idade < 18) {
    console.log("Menor que 18: adolescente.")
} else if (idade >= 18) {
    console.log("Maior que 18 menor que 60: adulto.")
} else {
    console.log("Maior que 59: Idoso.")
}

//Ex 2
let nota = 8.6
if (nota === 100) {
    console.log("Nota perfeita!!!")
} else if (nota >= 60) {
    console.log("Acima da média, continue assim!")
} else if (nota >= 50) {
    console.log("Na média")
} else if (nota >= 40) {
    console.log("Abaixo da média, vai de exame.")
} else if(nota >= 30) {
    console.log("Muito ruim.")
} else {
    console.log("Reprovado direto.")
}

//Ex 3
var dia = "segunda"
if (dia == "domingo") {
  console.log("Dia de descansar");
} else if (dia == "segunda") {
  console.log("Dia de trabalho");
} else if (dia == "terça") {
  console.log("Dia de trabalho 2x");
} else if (dia == "quarta") {
  console.log("Dia de trabalho 3x");
} else if (dia == "quinta") {
  console.log("Dia de trabalho 4x");
} else if (dia == "sexta") {
  console.log("SEXTOOOUUU!!!!!!!");
} else {
  console.log("Dia de passear");
}

//Ex 4
var hora = 12
if (hora < 12) {
    console.log("Bom dia!");
} 
else if (hora < 18) {
    console.log("Boa tarde!");
} 
else {
    console.log("Boa noite!");
}

//Ex 5
var altura = 1.81
var peso = 58
IMC = peso/(altura * altura)
if (IMC > 18.5) {
    console.log("abaixo do peso");
}
else if (IMC < 18.6 && IMC > 24.9) {
    console.log("Peso ideal");
}
else if (IMC < 25 && IMC > 29) {
    console.log("Levemente acima do peso");
} else if (IMC < 30 && IMC > 34.9) {
    console.log("Obesidade grau I");
} else if (IMC < 35 && IMC > 39.9) {
    console.log("Obesidade grau II");
} else {
    console.log("Obesidade III");
}

//Ex 6
let numero = 2;
if(numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0) {
    console.log(`o número ${numero} não é primo.`)
}
else {
    console.log(`o número ${numero} é primo.`)
}

//Ex 7
let ano = 2023
if(ano % 4 == 0) {
    console.log(`${ano} Ano Bissexto.`)
} 
else {
    console.log(`${ano} não é Bissexto`)
}

// Ex 8
let nota1 = 100
if (nota === 100) {
    console.log(`Nota do Aluno: ${nota1}`)
} else if (nota >= 60) {
    console.log(`Nota do Aluno: ${nota1}`)
} else if (nota >= 50) {
    console.log("Na média")
} else if (nota >= 40) {
    console.log(`Nota do Aluno: ${nota1}`)
} else if(nota >= 30) {
    console.log(`Nota do Aluno: ${nota1}`)
} else {
    console.log(`Nota do Aluno: ${nota1}`)
}

let temperatura = 23.6
if (temperatura >= 30) {
    console.log("Muito Calor!")
}
else if (temperatura >= 25) {
    console.log("Calor!")
}
else if (temperatura >= 15) {
    console.log("Ideal!")
} else if (temperatura >= 5) {
    console.log("Frio!")
}
else {
    console.log("Muito Frio!")
}

let vendas = 1000
if(vendas >= 1000) {
    console.log("Bom!")
}
else if (vendas >= 100) {
    console.log("mediana")
} 
else {
    console.log("Baixa!")
} 



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