console.log("JavaScript carregado!");

// Transformar o texto em áudio

const imagens = document.querySelectorAll('.img-audio');
let audioAtual = null; // guarda o áudio que está tocando

imagens.forEach(imagem => {
  imagem.addEventListener('click', () => {
    const srcAudio = imagem.getAttribute('data-audio');

    // Se já existe áudio tocando
    if (audioAtual && !audioAtual.paused) {
      audioAtual.pause(); // pausa
      audioAtual.currentTime = 0; // opcional: reinicia do início
      audioAtual = null;
    } else {
      // Cria e toca o novo áudio
      audioAtual = new Audio(srcAudio);
      audioAtual.play();
    }
  });
});
