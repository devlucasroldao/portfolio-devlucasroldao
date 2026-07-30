const WORDS = ['Lucas Roldão', 'Desenvolvedor', 'Criador de conteúdo', 'Estrategista', '"Kinhooo"'];

const WORD_MS = 2800;
const CYCLE_PAUSE_MS = 1200;
const TRANSITION_MS = 480;

// Efeito "rolagem": duas camadas (a palavra atual e a próxima) animam ao
// mesmo tempo em direções opostas — a atual sobe e some, a próxima entra
// subindo de baixo — em vez de esmaecer uma pra depois trocar o texto e
// esmaecer a outra.
export function initHeroRotator() {
  const container = document.querySelector('.hero__rotator');
  if (!container) return;

  const [elA, elB] = container.querySelectorAll('.hero__rotator-word');
  if (!elA || !elB) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let current = elA;
  let waiting = elB;
  let index = 0;

  // prepara a segunda camada, parada e invisível logo abaixo, pronta pra entrar
  waiting.classList.add('pos-next');
  waiting.textContent = WORDS[(index + 1) % WORDS.length];

  function rotate() {
    // dispara as duas animações no mesmo instante, em direções opostas
    current.classList.remove('pos-current');
    current.classList.add('pos-prev');

    waiting.classList.remove('pos-next');
    waiting.classList.add('pos-current');

    setTimeout(() => {
      // troca os papéis: quem entrou vira a atual, quem saiu vira a próxima em espera
      const justFinished = current;
      current = waiting;
      waiting = justFinished;

      index = (index + 1) % WORDS.length;
      const nextIndex = (index + 1) % WORDS.length;

      // reposiciona a que acabou de sair pra baixo, sem transição, e já
      // carrega o texto da palavra seguinte pro próximo ciclo
      waiting.classList.add('no-transition');
      waiting.classList.remove('pos-prev');
      waiting.classList.add('pos-next');
      waiting.textContent = WORDS[nextIndex];
      void waiting.offsetWidth; // força reflow antes de reativar a transição
      waiting.classList.remove('no-transition');

      const completedCycle = index === 0;
      setTimeout(rotate, completedCycle ? WORD_MS + CYCLE_PAUSE_MS : WORD_MS);
    }, TRANSITION_MS);
  }

  setTimeout(rotate, WORD_MS);
}
