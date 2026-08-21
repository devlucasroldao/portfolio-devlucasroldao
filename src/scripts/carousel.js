import { testimonials } from './testimonials.js';

const ITEM_COUNT = testimonials.length;

const PREV_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>';
const NEXT_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>';

function renderCard(item) {
  return `
    <blockquote class="testimonial-card testimonial-card--profile">
      <img class="testimonial-card__photo" src="${item.photo}" alt="Foto de ${item.name}" width="700" height="933" loading="lazy" />
      <div class="testimonial-card__body">
        <p class="testimonial-card__quote">${item.quote}</p>
        <cite class="testimonial-card__author">${item.name} — ${item.role}</cite>
      </div>
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
        <p class="depoimentos__subtitle">Recados de gente que cruzou meu caminho — faculdade, trabalho, parceria, amizade. Não é sobre validar projeto, é sobre quem eu sou pros dois lados.</p>
      </div>
      <div class="depoimentos__grid">
        ${carousel(0)}
        ${carousel(3, { secondary: true })}
      </div>
    </section>
  `;
}

function initCarouselInstance(root) {
  const wraps = [...root.querySelectorAll('.carousel__card-wrap')];
  const stage = root.querySelector('.carousel__stage');
  const prevBtn = root.querySelector('.carousel__arrow--prev');
  const nextBtn = root.querySelector('.carousel__arrow--next');

  let current = Number(root.dataset.start || 0);

  function applyClasses() {
    wraps.forEach((wrap, i) => {
      const delta = (i - current + ITEM_COUNT) % ITEM_COUNT;
      wrap.classList.remove('is-active', 'is-back-1', 'is-back-2', 'is-hidden');
      if (delta === 0) wrap.classList.add('is-active');
      else if (delta === 1) wrap.classList.add('is-back-1');
      else if (delta === 2) wrap.classList.add('is-back-2');
      else wrap.classList.add('is-hidden');
    });
    measureHeight();
  }

  // Cada card tem texto de tamanho diferente. Antes isso media a altura
  // natural de TODOS os cards e travava o stage na maior — pensado pra
  // não "pular" o layout ao trocar de card, mas o efeito colateral era
  // pior: com 7 depoimentos de tamanhos bem diferentes, a caixa toda
  // ficava travada no tamanho do MAIOR (Giulia, o mais longo) o tempo
  // todo — inclusive quando o depoimento ativo era um curto (tipo o da
  // Lu Roldão), sobrando uma área vazia enorme abaixo do texto/foto.
  // Agora mede só o card ATIVO a cada troca — o stage já tinha
  // `transition: height` pronto no CSS (carousel.css) esperando por
  // isso, só a lógica antiga nunca aproveitava, sempre setava um valor
  // fixo só uma vez. Troca de card agora anima a altura suavemente pro
  // tamanho real daquele depoimento específico, em vez de reservar
  // sempre o pior caso.
  function measureHeight() {
    const activeWrap = wraps[current];
    if (!activeWrap) return;
    const prevPosition = activeWrap.style.position;
    const prevVisibility = activeWrap.style.visibility;
    // Truque necessário mesmo pro card ativo: .carousel__card-wrap é
    // position:absolute + inset:0, então sua altura renderizada já
    // segue a altura do PAI (stage) — para medir a altura natural de
    // verdade (baseada no conteúdo), precisa tirar do absolute
    // temporariamente. visibility:hidden (não display:none) evita
    // qualquer flash visual durante a medição.
    activeWrap.style.position = 'static';
    activeWrap.style.visibility = 'hidden';
    const height = activeWrap.getBoundingClientRect().height;
    activeWrap.style.position = prevPosition;
    activeWrap.style.visibility = prevVisibility;
    stage.style.height = `${Math.ceil(height)}px`;
  }

  function next() {
    current = (current + 1) % ITEM_COUNT;
    applyClasses();
  }

  function prev() {
    current = (current - 1 + ITEM_COUNT) % ITEM_COUNT;
    applyClasses();
  }

  // Sem troca automática de propósito — só troca no clique da seta ou no
  // swipe. Cada depoimento fica no ar até a pessoa decidir ver o próximo.
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

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
  });

  applyClasses();
}

export function initCarousels() {
  document.querySelectorAll('.carousel').forEach((root) => initCarouselInstance(root));
}
