let aberto = false;
let nome = "você";

window.onload = function () {
  const nomeDigitado = prompt("Qual o seu nome?");
  if (nomeDigitado) {
    nome = nomeDigitado;
    document.getElementById("nome").textContent = nome;
    document.getElementById("nome-interno").textContent = nome;
  }
};

function abrirEnvelope(el) {
  el.classList.toggle('open');
  aberto = !aberto;
}

function mostrarCarta(el) {
  if (aberto) {
    el.classList.toggle('slide');
  }
}
