const TRANSITION_MS = 480;

// Efeito "rolagem": duas camadas (a palavra/frase atual e a próxima) animam
// ao mesmo tempo em direções opostas — a atual sobe e some, a próxima entra
// subindo de baixo — em vez de esmaecer uma pra depois trocar o texto e
// esmaecer a outra. Motor genérico: usado no Hero (palavra do título) e no
// botão do CTA final (frase do botão), cada um com sua própria classe BEM
// pra não vazar estilo de um pro outro.
export function initRotator(container, words, { wordSelector = '.rotator-word', wordMs = 2800, cyclePauseMs = 1200 } = {}) {
  if (!container) return;

  const [elA, elB] = container.querySelectorAll(wordSelector);
  if (!elA || !elB) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let current = elA;
  let waiting = elB;
  let index = 0;

  waiting.classList.add('pos-next');
  waiting.textContent = words[(index + 1) % words.length];

  function rotate() {
    current.classList.remove('pos-current');
    current.classList.add('pos-prev');

    waiting.classList.remove('pos-next');
    waiting.classList.add('pos-current');

    setTimeout(() => {
      const justFinished = current;
      current = waiting;
      waiting = justFinished;

      index = (index + 1) % words.length;
      const nextIndex = (index + 1) % words.length;

      waiting.classList.add('no-transition');
      waiting.classList.remove('pos-prev');
      waiting.classList.add('pos-next');
      waiting.textContent = words[nextIndex];
      void waiting.offsetWidth; // força reflow antes de reativar a transição
      waiting.classList.remove('no-transition');

      const completedCycle = index === 0;
      setTimeout(rotate, completedCycle ? wordMs + cyclePauseMs : wordMs);
    }, TRANSITION_MS);
  }

  setTimeout(rotate, wordMs);
}
