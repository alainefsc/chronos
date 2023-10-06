
let tempo = 0; // Tempo em segundos
let intervalo; // Referência para o intervalo

const tempoElement = document.getElementById("tempo");
const iniciarButton = document.getElementById("iniciar");
const pararButton = document.getElementById("parar");
const zerarButton = document.getElementById("zerar");

iniciarButton.addEventListener("click", iniciarCronometro);
pararButton.addEventListener("click", pararCronometro);
zerarButton.addEventListener("click", zerarCronometro);

function iniciarCronometro() {
  // Evita iniciar o cronômetro se já estiver em andamento
  if (!intervalo) {
    intervalo = setInterval(atualizarTempo, 1000); // Atualiza a cada segundo
    iniciarButton.disabled = true;
    pararButton.disabled = false;
  }
}

function pararCronometro() {
  clearInterval(intervalo);
  intervalo = null;
  iniciarButton.disabled = false;
  pararButton.disabled = true;
}

function zerarCronometro() {
  pararCronometro();
  tempo = 0;
  atualizarTempo();
}

function atualizarTempo() {
  tempo++;
  tempoElement.textContent = tempo;
}

// Não chama zerarCronometro() aqui para que o cronômetro inicie com tempo 0

