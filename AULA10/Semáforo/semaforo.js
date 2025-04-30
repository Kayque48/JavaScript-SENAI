let estado = 0;

function mudarLuz() {
    const luzVermelha = document.getElementById("vermelha")
    const luzLaranja = document.getElementById("laranja")
    const luzAmarela = document.getElementById("amarela")
    const luzVerde = document.getElementById("verde")
    const luzRoxa = document.getElementById("roxa")

    luzVermelha.classList.remove("vermelha");
    luzLaranja.classList.remove("laranja");
    luzAmarela.classList.remove("amarela");
    luzVerde.classList.remove("verde");
    luzRoxa.classList.remove("roxa");

    if (estado === 0 ) {
        luzVermelha.classList.add("vermelha");
        estado = 1;
    } else if (estado === 1) {
        luzLaranja.classList.add("laranja");
        estado = 2;
    } else if (estado === 2) {
        luzAmarela.classList.add("amarela");
        estado = 3;
    } else if (estado === 3) {
      luzVerde.classList.add("verde");
      estado = 4;
    } else {
        luzRoxa.classList.add("roxa");
        estado = 0;
    }
}