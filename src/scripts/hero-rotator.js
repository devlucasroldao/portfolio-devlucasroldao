const WORDS = ['Lucas Roldão', 'Desenvolvedor', 'Criador de conteúdo', 'Estrategista', '"Kinhooo"'];

const WORD_MS = 2800;
const CYCLE_PAUSE_MS = 1200;
const TRANSITION_MS = 380;

export function initHeroRotator() {
  const el = document.querySelector('.hero__rotator-word');
  if (!el) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let index = 0;

  function swap() {
    // saída: a palavra atual desliza pra cima e some
    el.classList.add('is-leaving');

    setTimeout(() => {
      index = (index + 1) % WORDS.length;
      el.textContent = WORDS[index];

      // posiciona a próxima embaixo, sem transição, antes de entrar
      el.classList.add('is-below');
      el.classList.remove('is-leaving');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.classList.remove('is-below');
        });
      });

      const completedCycle = index === 0;
      setTimeout(swap, completedCycle ? WORD_MS + CYCLE_PAUSE_MS : WORD_MS);
    }, TRANSITION_MS);
  }

  setTimeout(swap, WORD_MS);
}
