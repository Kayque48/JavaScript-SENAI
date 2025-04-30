function corSemaforo() {
    let cor = parseInt(document.getElementById("corSemaforo").value);
    let ress = document.getElementById("resultado");
    if (cor === 1) {
        ress.innerHTML = `<p style="color: red">Vermelho</p>`;
    } else if (cor === 2) {
        ress.innerHTML = `<p style="color: green">Verde</p>`;
    } else if (cor === 3) {
        ress.innerHTML = `<p style="color: orange">Laranja</p>`; 
    } else {
        ress.innerHTML = `<p>Selecione apenas as opções mostradas.</p>`;
    }
}