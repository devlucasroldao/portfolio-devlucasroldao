import { testimonials } from './testimonials.js';

const ITEM_COUNT = testimonials.length;
const AUTO_ADVANCE_MS = 8000;

const PREV_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>';
const NEXT_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>';

function renderCard(item) {
  // Depoimento real (com foto) x card de estatística de case (sem foto,
  // layout simples de sempre) — só os 4 depoimentos ganham o layout com foto.
  if (item.placeholder) {
    return `
      <blockquote class="testimonial-card testimonial-card--placeholder testimonial-card--profile">
        <div class="testimonial-card__photo" aria-hidden="true">[ foto real aqui — substituir ]</div>
        <div class="testimonial-card__body">
          <p class="testimonial-card__quote">${item.quote}</p>
          <cite class="testimonial-card__author">${item.author}</cite>
        </div>
      </blockquote>
    `;
  }
  return `
    <blockquote class="testimonial-card testimonial-card--stat">
      <p class="testimonial-card__quote">${item.quote}</p>
      <cite class="testimonial-card__author">${item.author}</cite>
    </blockquote>
  `;
}

function carousel(startIndex, { secondary = false } = {}) {
  const cards = testimonials
    .map((item, i) => `<div class="carousel__card-wrap" data-index="${i}">${renderCard(item)}</div>`)
    .join('');

  return `
    <div class="carousel${secondary ? ' carousel--secondary' : ''}" data-start="${startIndex}">
      <div class="carousel__stage">${cards}</div>
      <div class="carousel__controls">
        <button class="carousel__arrow carousel__arrow--prev" type="button" aria-label="Depoimento anterior">${PREV_ICON}</button>
        <button class="carousel__arrow carousel__arrow--next" type="button" aria-label="Próximo depoimento">${NEXT_ICON}</button>
      </div>
    </div>
  `;
}

export function depoimentosTemplate() {
  return `
    <section class="depoimentos" id="depoimentos">
      <div class="depoimentos__header">
        <span class="depoimentos__eyebrow">Depoimentos</span>
        <h2 class="depoimentos__heading">O que dizem sobre mim</h2>
        <p class="depoimentos__subtitle">Depoimento de quem trabalhou comigo e números reais dos cases — sem nota 5 forçada.</p>
      </div>
      <div class="depoimentos__grid">
        ${carousel(0)}
        ${carousel(3, { secondary: true })}
      </div>
    </section>
  `;
}

function initCarouselInstance(root, reducedMotion) {
  const wraps = [...root.querySelectorAll('.carousel__card-wrap')];
  const stage = root.querySelector('.carousel__stage');
  const prevBtn = root.querySelector('.carousel__arrow--prev');
  const nextBtn = root.querySelector('.carousel__arrow--next');

  let current = Number(root.dataset.start || 0);
  let timer = null;

  function applyClasses() {
    wraps.forEach((wrap, i) => {
      const delta = (i - current + ITEM_COUNT) % ITEM_COUNT;
      wrap.classList.remove('is-active', 'is-back-1', 'is-back-2', 'is-hidden');
      if (delta === 0) wrap.classList.add('is-active');
      else if (delta === 1) wrap.classList.add('is-back-1');
      else if (delta === 2) wrap.classList.add('is-back-2');
      else wrap.classList.add('is-hidden');
    });
  }

  // Cada card tem texto de tamanho diferente — mede a altura natural de
  // todos e fixa a maior no stage, pra trocar de card sem "pular" o layout.
  function measureHeight() {
    let max = 0;
    wraps.forEach((wrap) => {
      wrap.style.position = 'static';
      wrap.style.visibility = 'hidden';
      max = Math.max(max, wrap.getBoundingClientRect().height);
      wrap.style.position = '';
      wrap.style.visibility = '';
    });
    stage.style.height = `${Math.ceil(max)}px`;
  }

  function next() {
    current = (current + 1) % ITEM_COUNT;
    applyClasses();
  }

  function prev() {
    current = (current - 1 + ITEM_COUNT) % ITEM_COUNT;
    applyClasses();
  }

  function restartTimer() {
    if (reducedMotion) return;
    if (timer) clearInterval(timer);
    timer = setInterval(next, AUTO_ADVANCE_MS);
  }

  prevBtn.addEventListener('click', () => {
    prev();
    restartTimer();
  });
  nextBtn.addEventListener('click', () => {
    next();
    restartTimer();
  });

  root.addEventListener('mouseenter', () => {
    if (timer) clearInterval(timer);
    timer = null;
  });
  root.addEventListener('mouseleave', () => {
    restartTimer();
  });

  window.addEventListener('resize', measureHeight);

  // Swipe de toque — mesmo efeito das setas, só que arrastando o dedo.
  // Só decide se é gesto horizontal (troca de card) ou vertical (rolagem
  // normal da página) depois de ver pra que lado o dedo andou mais —
  // rolar a página verticalmente sobre o card continua funcionando.
  const SWIPE_THRESHOLD_PX = 40;
  let touchStartX = 0;
  let touchStartY = 0;
  let touchDeltaX = 0;
  let isHorizontalSwipe = null;

  stage.addEventListener(
    'touchstart',
    (e) => {
      const touch = e.touches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      touchDeltaX = 0;
      isHorizontalSwipe = null;
      if (timer) clearInterval(timer);
      timer = null;
    },
    { passive: true }
  );

  stage.addEventListener(
    'touchmove',
    (e) => {
      const touch = e.touches[0];
      touchDeltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;

      if (isHorizontalSwipe === null && (Math.abs(touchDeltaX) > 8 || Math.abs(deltaY) > 8)) {
        isHorizontalSwipe = Math.abs(touchDeltaX) > Math.abs(deltaY);
      }

      // Só bloqueia o scroll vertical da página quando já ficou claro que
      // o gesto é horizontal — senão o usuário fica preso sem conseguir
      // rolar a página ao tocar em cima do card.
      if (isHorizontalSwipe) e.preventDefault();
    },
    { passive: false }
  );

  stage.addEventListener('touchend', () => {
    if (isHorizontalSwipe && Math.abs(touchDeltaX) >= SWIPE_THRESHOLD_PX) {
      if (touchDeltaX < 0) next();
      else prev();
    }
    isHorizontalSwipe = null;
    restartTimer();
  });

  applyClasses();
  measureHeight();
  restartTimer();
}

export function initCarousels() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.carousel').forEach((root) => initCarouselInstance(root, reducedMotion));
}
