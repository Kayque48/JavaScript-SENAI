console.log("\nOperador logico E (&&) com valores booleanos");

let a = true;
let b = false;
let c = true;
let d = false;

console.log("Resultado de c && d é igual a " + (a && b)); //falso
console.log('a && true'); // verdadeiro
console.log('Resultado de b && d é igual a ' + a && c); // verdadeiro


console.log("\nOperador logico OU (||) com valores booleanos");
let e = true;
let f = false;
let g = true;
let h = false;

console.log('Resulatdo de e || f: ' + (e || f));// verdadeiro
console.log('Resulatdo de e || g: ' + (e || g));// verdadeiro
console.log('Resulatdo de f || h: ' + (f || h));// falso
console.log('Resulatdo de h || g: ' + (h || g));// verdadeiro


console.log("\nOperador logico ! com valores booleanos");

let i = true;
let j = false;
let k = true;
let l = false;

console.log('Resulatdo de !i: ' + !i);// falso
console.log('Resulatdo de !j: ' + !j);// verdadeiro
console.log('Resulatdo de f || h: ' + !(k && l));// verdadeira
console.log("Resultado de !(i && j): " + !(i || k)); // falso


console.log("Expressoes");

let ab = true;
let bc = false;


console.log("\nOperador E(&&)");
let eResultado = ab && bc;
console.log('Resultado de ab && bc: ' + eResultado);//false


console.log("\nOperador OU(||)");
let ouResultado = ab || bc;
console.log('Resultado de ab || bc: ' + ouResultado);//verdadeiro


console.log("\nOperador NÃO (!)");
let naoResultado = !ab;
console.log('Reultado de !ab: ' + naoResultado);//falso


console.log("\nCombinação de operadores lógicos");
let combinados = (ab && !bc) || (!ab && bc);
console.log("Resultado de (ab && !bc) || (!ab && bc): " + combinados);//verdadeiro


console.log("\nExemplos de operadores lógicos com valores numéricos");
let x = 10;
let y = 5;
let z = 0;


console.log("\nOperador E (&&) com valores númericos");
let ResultadoE = (x > y) && (y > z);
console.log('Resultado de (x > y) && (y > z): ' + ResultadoE);//verdadeiro
console.log("Resultado de (z > y) && (x > z): " + (z > y) && (x > z));//verdadeiro


console.log('Operador OU(||) com valores númericos')
let ResultadoOU = (x < y) || (y > z);
console.log('Resultado de (x < y) || (y > z): ' + ResultadoOU);//verdadeiro

console.log('\nOperador NÃO(!) com valores numéricos')
let ResulatdoN = !(x < y);
console.log('Resultado de !(x < y): ' + ResulatdoN);//verdadeiro

console.log('Combinação de operadores lógicos com valores númericos');
let ResultadoC = ((x > y) && (y > z)) || ((x < y) && (z > y));
console.log("Resultado de ((x > y) && (y > z)) || ((x < y) && (z > y)): " + ResultadoC);//verdadeiro