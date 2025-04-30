// --- Exercícios de fixação ---
// Checar idade com habilidade para dirigir
function dirigir(idade, habilidade){
    return idade >= 18 && habilidade;
}

console.log(dirigir(17, true)); //falso
console.log(dirigir(30, true)); //verdadeiro

// --- Exercício de fixação ---
console.log("\n")
let a = true;
let b = true;

console.log(a || b);//verdadeiro
console.log(b || false);//verdadeiro

// --- Exercícios de fixação ---
function fimdesemana(dia) {
    return dia == 'sabado' || dia == 'domingo';
}

console.log(fimdesemana('sabado'))
console.log(fimdesemana("domingo"));

// --- Exercícios de fixação ---
function naoAdulto(idade) {
    return !(idade >= 18)
}

console.log(naoAdulto(20));
console.log(naoAdulto(16));