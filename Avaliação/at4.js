const Mese = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

console.log("Meses do ano:");
Mese.forEach((mes, index) => {
  console.log(`${index + 1}. ${mes}`);
});