import { testimonials } from './testimonials.js';

function renderCard(item) {
  const modifier = item.placeholder ? ' testimonial-card--placeholder' : ' testimonial-card--stat';
  return `
    <blockquote class="testimonial-card${modifier}">
      <p class="testimonial-card__quote">${item.quote}</p>
      <cite class="testimonial-card__author">${item.author}</cite>
    </blockquote>
  `;
}

export function marqueeTemplate() {
  const cards = testimonials.map(renderCard).join('');

  return `
    <section class="depoimentos" id="depoimentos">
      <h2 class="depoimentos__heading">O que dizem sobre mim</h2>
      <div class="marquee">
        <div class="marquee__track">
          <div class="marquee__group">${cards}</div>
          <div class="marquee__group" aria-hidden="true">${cards}</div>
        </div>
      </div>
    </section>
  `;
}

const BASE_LOOP_SECONDS = 50; // uma volta completa em ~50s (dentro dos 40-60s do briefing)
const HOVER_SPEED_FACTOR = 1 / 5; // ~5x mais devagar no hover, não parado
const EASE_PER_SECOND = 6; // velocidade de transição entre "normal" e "devagar"

export function initMarquee() {
  const marquee = document.querySelector('.marquee');
  if (!marquee) return;

  // Acessibilidade: prefers-reduced-motion pausa de vez, sem exceção — não é o
  // mesmo comportamento do hover, que só desacelera.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const track = marquee.querySelector('.marquee__track');
  const group = marquee.querySelector('.marquee__group');

  let groupWidth = group.getBoundingClientRect().width;
  window.addEventListener('resize', () => {
    groupWidth = group.getBoundingClientRect().width;
  });

  let position = 0;
  let speedMultiplier = 1;
  let targetMultiplier = 1;
  let lastTime = performance.now();

  marquee.addEventListener('mouseenter', () => {
    targetMultiplier = HOVER_SPEED_FACTOR;
  });
  marquee.addEventListener('mouseleave', () => {
    targetMultiplier = 1;
  });

  function frame(now) {
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;

    // aproxima o multiplicador atual do alvo suavemente, em vez de trocar de uma vez
    speedMultiplier += (targetMultiplier - speedMultiplier) * Math.min(EASE_PER_SECOND * dt, 1);

    const pxPerSecond = groupWidth / BASE_LOOP_SECONDS;
    position -= pxPerSecond * speedMultiplier * dt;

    if (groupWidth > 0 && position <= -groupWidth) {
      position += groupWidth;
    }

    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}
