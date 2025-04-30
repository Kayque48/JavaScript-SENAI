// condicionais com if, else if e else

let nota = 85;
if( nota >= 80) {
    console.log('Parabéns, você foi aprovado(a)! ');
} else if ( nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera');
} else {
    console.log('Você foi reprovado(a)');
}

//vacina
let vacina = 60
if(vacina >= 60){
    console.log('Precisa vacinar');
} 
else if (vacina >= 15 && vacina < 60) {
    console.log('Lista de espera');
}
else {
    console.log('Precisa ser vacinado(a)');
}

//notas
let nota1 = 20
if (nota1 >= 90) {
    console.log('Excelente');
}
else if (nota1 >= 80) {
    console.log('muito Bom');
}
else if (nota1 >= 70) {
    console.log('bom');
}
else if (nota1 >= 60) {
    console.log('aceitavel');
}
else if (nota1 >= 50) {
    console.log('foi quase');
}
else if ( nota1 >= 30) {
    console.log('Foi reprovado');
}
else {
    console.log('Perdeu');
}