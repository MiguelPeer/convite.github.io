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

  // 🔊 Toca música ao abrir o envelope
  const audio = document.getElementById("bg-music");
  if (audio && audio.paused) {
    audio.currentTime = 0;
    audio.play().catch((e) => {
      console.log("Autoplay bloqueado, aguardando interação do usuário.");
    });
  }
}

function mostrarCarta(el) {
  if (aberto) {
    el.classList.toggle('slide');

    // 🎉 Solta confete automaticamente
    setTimeout(() => {
      let params = {
        particleCount: 500,
        spread: 90,
        startVelocity: 70,
        origin: { x: 0, y: 0.5 },
        angle: 45,
      };

      // Lado esquerdo
      confetti(params);

      // Lado direito
      params.origin.x = 1;
      params.angle = 135;
      confetti(params);
    }, 300); // pequeno delay para coincidir com o abrir da carta
  }
}
// Força o reinício da música do início quando a página recarrega
window.addEventListener("load", () => {
  const audio = document.getElementById("bg-music");

  if (audio) {
    // Alguns navegadores bloqueiam autoplay, então tentamos iniciar manualmente
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        audio.currentTime = 0; // volta para o início
        audio.play();
      }).catch((error) => {
        console.log("Autoplay bloqueado, esperando interação.");
      });
    }
  }
});
