import '../styles/main.css';
import '../styles/buttons.css';
import '../styles/bio.css';
import { initRotator } from './rotator.js';
import { initScrollReveal } from './scroll-animations.js';
import {
  BIO_ROTATOR_WORDS,
  bioIntro,
  bioSkills,
  bioCtas,
  bioCards,
  bioSocials,
  bioPhotos,
} from './bio-links.js';
import {
  LINKEDIN_ICON,
  INSTAGRAM_ICON,
  TIKTOK_ICON,
  ENVELOPE_ICON,
  EXTERNAL_LINK_ICON,
} from './ui-icons.js';
import { getIconSvg } from './icons.js';

const BIO_SOCIAL_ICONS = {
  linkedin: LINKEDIN_ICON,
  github: getIconSvg('github'),
  instagram: INSTAGRAM_ICON,
  tiktok: TIKTOK_ICON,
  email: ENVELOPE_ICON,
};

function renderCta(cta) {
  const externalAttrs = cta.external ? 'target="_blank" rel="noopener noreferrer"' : '';
  const icon = cta.external ? EXTERNAL_LINK_ICON : '';
  return `<a href="${cta.href}" ${externalAttrs} class="btn ${cta.variant === 'secondary' ? 'btn--secondary' : ''} bio-cta">${cta.label}${icon}</a>`;
}

function renderCard(card) {
  return `
    <a href="${card.href}" class="bio-card">
      <span class="bio-card__title">${card.title}${EXTERNAL_LINK_ICON}</span>
      <span class="bio-card__description">${card.description}</span>
    </a>
  `;
}

// Dock de ícones (referência 3, adaptada): o original em React usa
// seletores CSS `:has(+ .icon:hover)` pra fazer o vizinho crescer junto.
// Isso funciona em CSS puro, sem JS nenhum — reproduzido aqui direto no
// bio.css, sem framer-motion nem shadcn.
function renderSocial(social) {
  const icon = BIO_SOCIAL_ICONS[social.id] || '';
  const isMail = social.href.startsWith('mailto:');
  const externalAttrs = isMail || social.href === '#' ? '' : 'target="_blank" rel="noopener noreferrer"';
  return `
    <li class="bio-dock__item">
      <a href="${social.href}" ${externalAttrs} class="bio-dock__link" aria-label="${social.name}">
        <span class="bio-dock__tooltip" aria-hidden="true">${social.name}</span>
        ${icon}
      </a>
    </li>
  `;
}

// Leque de fotos (referência 1, adaptada): o original usa framer-motion
// pra animar posição/rotação e permitir arrastar. Aqui é CSS pronto —
// cada foto já nasce na posição/rotação final via `transform`, e o
// "espalhar" acontece como transição de entrada quando a seção fica
// visível (classe .is-spread, via IntersectionObserver). Sem biblioteca,
// sem drag (que não faria sentido em toque de celular mesmo).
function renderPhoto(photo, index, total) {
  const middle = (total - 1) / 2;
  const offset = index - middle;
  const x = offset * 148;
  const y = Math.abs(offset) * 10;
  const rotate = offset * 4;
  const zIndex = total - Math.abs(offset);

  return `
    <div
      class="bio-photo"
      style="--x:${x}px; --y:${y}px; --rotate:${rotate}deg; z-index:${zIndex}; --delay:${Math.abs(offset) * 90}ms;"
    >
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy" />
    </div>
  `;
}

function bioTemplate() {
  const ctas = bioCtas.map(renderCta).join('');
  const cards = bioCards.map(renderCard).join('');
  const socials = bioSocials.map(renderSocial).join('');
  const skills = bioSkills.map((s) => `<li class="bio-skill">${s}</li>`).join('');
  const photos = bioPhotos.map((p, i) => renderPhoto(p, i, bioPhotos.length)).join('');

  return `
    <main class="bio-page">
      <div class="bio-page__inner">
        <header class="bio-hero">
          <div class="bio-hero__avatar">
            <!-- TODO: trocar pela foto real do Lucas quando ele enviar. -->
            <img src="/images/bio/PLACEHOLDER-avatar.jpg" alt="Foto de Lucas Roldão" />
          </div>

          <h1 class="bio-hero__heading">
            <span class="bio-hero__heading-line">Bah, eu sou o</span>
            <span class="bio-hero__rotator">
              <span class="bio-hero__rotator-word pos-current">${BIO_ROTATOR_WORDS[0]}</span>
              <span class="bio-hero__rotator-word"></span>
            </span>
          </h1>

          <p class="bio-hero__intro">${bioIntro}</p>

          <ul class="bio-skills">${skills}</ul>

          <div class="bio-ctas">${ctas}</div>
        </header>

        <nav class="bio-dock" aria-label="Redes sociais e contato">
          <ul class="bio-dock__list">${socials}</ul>
        </nav>

        <section class="bio-cards">${cards}</section>

        <section class="bio-gallery" aria-label="Fotos">
          <div class="bio-gallery__stage">${photos}</div>
        </section>

        <a href="/" class="bio-footer">
          <span class="bio-footer__mark">L<span class="bio-footer__mark-dot">.</span>R</span>
          <span>@devlucasroldao</span>
        </a>
      </div>
    </main>
  `;
}

// Dispara o "espalhar" do leque quando a galeria entra na tela — mesmo
// mecanismo (IntersectionObserver) que o resto do site já usa pro
// reveal, em vez de um setTimeout fixo como o componente original.
function initGallerySpread() {
  const stage = document.querySelector('.bio-gallery__stage');
  if (!stage) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    stage.classList.add('is-spread');
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-spread');
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );
  observer.observe(stage);
}

export function mountBioPage() {
  document.querySelector('#app').innerHTML = bioTemplate();

  initRotator(document.querySelector('.bio-hero__rotator'), BIO_ROTATOR_WORDS, {
    wordSelector: '.bio-hero__rotator-word',
  });
  initGallerySpread();
  initScrollReveal({ sections: ['.bio-cards', '.bio-dock'] });
}
