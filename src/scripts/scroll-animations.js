const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function createRevealObserver() {
  return new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );
}

// Fade-in + slide-up ao entrar na viewport, uma vez só por elemento (para
// de observar depois do primeiro disparo — não repete ao rolar de volta).
// `sections`: seletores que revelam como bloco único.
// `staggerGroups`: pares [seletor do container, seletor dos filhos] — cada
// filho ganha um atraso incremental (~90ms) pra formar a cascata, em vez
// de todos aparecerem exatamente ao mesmo tempo.
export function initScrollReveal({ sections = [], staggerGroups = [] } = {}) {
  if (prefersReducedMotion() || !('IntersectionObserver' in window)) return;

  const observer = createRevealObserver();

  sections.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  });

  staggerGroups.forEach(([containerSelector, itemSelector]) => {
    document.querySelectorAll(containerSelector).forEach((container) => {
      container.querySelectorAll(itemSelector).forEach((item, i) => {
        item.classList.add('reveal');
        item.style.transitionDelay = `${i * 90}ms`;
        observer.observe(item);
      });
    });
  });
}

function typeText(el, speed) {
  const text = el.dataset.typeText || '';
  el.classList.add('typing-cursor');
  let i = 0;

  function step() {
    el.textContent = text.slice(0, i);
    if (i < text.length) {
      i++;
      setTimeout(step, speed);
    } else {
      el.classList.remove('typing-cursor');
    }
  }

  step();
}

// Digitação caractere por caractere ao entrar na viewport, uma vez só —
// usa o próprio texto já renderizado como fonte (sem duplicar conteúdo no
// template), esvazia o elemento até a interseção disparar.
export function initTypewriter(selector, { speed = 100 } = {}) {
  if (prefersReducedMotion() || !('IntersectionObserver' in window)) return;

  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        obs.unobserve(entry.target);
        typeText(entry.target, speed);
      });
    },
    { threshold: 0.4 }
  );

  elements.forEach((el) => {
    el.dataset.typeText = el.textContent.trim();
    el.textContent = '';
    observer.observe(el);
  });
}
