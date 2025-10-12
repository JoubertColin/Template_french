/*
    ### Convert Text to Audio ###
                                    */

const imagens = document.querySelectorAll('.img-audio');
let audioAtual = null; // Saves the audio that is playing.

imagens.forEach(imagem => {
  imagem.addEventListener('click', () => {
    const srcAudio = imagem.getAttribute('data-audio');

    // If there is already audio playing...
    if (audioAtual && !audioAtual.paused) {
      audioAtual.pause(); // pause
      audioAtual.currentTime = 0; // Optional: restart from the beginning.
      audioAtual = null;
    } else {
      // Create and play new audio
      audioAtual = new Audio(srcAudio);
      audioAtual.play();
    }
  });
});



/*
    ### Questionnaire with Answer Combination. ###
                                                    */

function checkAnswer(idInput) {
  const input = document.getElementById(idInput);
  const right = input.dataset.correct.trim().toLowerCase();
  const answer = input.value.trim().toLowerCase();
  const feedback = document.getElementById("fb" + idInput.replace("resp", ""));

  if (answer === right && answer !== "") {
    feedback.textContent = "✔";
    feedback.className = "feedback right";
  } else {
    feedback.textContent = "✘";
    feedback.className = "feedback wrong";
  }
}


