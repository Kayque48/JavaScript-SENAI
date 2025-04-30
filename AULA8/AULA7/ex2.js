function media() {
    let nome = window.prompt(`Qual é o nome do aluno?`);
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`));
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`));
    med = (n1 + n2)/2

    let res = document.getElementById("situacao");
    res.innerHTML = `<p>Calcular a  média final de <mark>${nome}</mark>.<p>`;
    res.innerHTML = `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.<p>`;
    res.innerHTML = `<p>A média final será<mark>${med}</mark>.<p>`;
    let msg // cria uma variável e deixa ela vazia
    if (med >= 6) {//Se por acaso a média foi 6.0 ou mais...
        msg = `Meus parabéns!`
        res.innerHTML = `<p>A mensagem que temos é: <strong style='color:green;'>${msg}</string></p>`;
    } else {// se não...
            msg = `Estude um pouco mais!`
            res.innerHTML = `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</string></p>`;
        }
}