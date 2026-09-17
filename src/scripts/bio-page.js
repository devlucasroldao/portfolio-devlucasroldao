import '../styles/main.css';
import '../styles/bio.css';
import { initRotator } from './rotator.js';
import {
  BIO_ROTATOR_WORDS,
  bioIntro,
  bioLocation,
  bioCtas,
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
  return `
    <a href="${cta.href}" ${externalAttrs} class="bio-cta bio-cta--${cta.variant}">
      <span class="bio-cta__text">
        <span class="bio-cta__label">${cta.label}</span>
        <span class="bio-cta__description">${cta.description}</span>
      </span>
      <span class="bio-cta__arrow">${EXTERNAL_LINK_ICON}</span>
    </a>
  `;
}

// Dock de ícones: o item sob o cursor cresce e os vizinhos crescem em
// degrau, criando a "onda". Feito em CSS puro (:hover + :has) — a
// referência original em React usava framer-motion pra isso.
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

// Leque de fotos: cada uma já nasce com posição/rotação final via
// variável inline calculada aqui, e o "abrir" acontece como transição
// quando a seção entra na tela (.is-spread). Sem biblioteca.
function renderPhoto(photo, index, total) {
  const middle = (total - 1) / 2;
  const offset = index - middle;
  const x = offset * 142;
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
  const socials = bioSocials.map(renderSocial).join('');
  const photos = bioPhotos.map((p, i) => renderPhoto(p, i, bioPhotos.length)).join('');

  return `
    <div class="bio-page">
      <!-- FAIXA 1 — header: foto grande ocupando o topo inteiro, com um
           degradê por cima pra amarrar com a faixa de baixo. -->
      <header class="bio-header">
        <div class="bio-header__photo">
          <!-- TODO: trocar pela foto real do Lucas quando ele enviar. -->
          <img src="/images/bio/PLACEHOLDER-avatar.jpg" alt="Foto de Lucas Roldão" />
        </div>
        <div class="bio-header__scrim" aria-hidden="true"></div>
      </header>

      <!-- FAIXA 2 — corpo: fundo mais claro que o header, conteúdo
           principal. O dock de ícones fica sobreposto na divisa entre as
           duas faixas (margin-top negativo), igual à referência. -->
      <main class="bio-main">
        <nav class="bio-dock" aria-label="Redes sociais e contato">
          <ul class="bio-dock__list">${socials}</ul>
        </nav>

        <div class="bio-identity">
          <h1 class="bio-identity__name">Lucas Roldão</h1>
          <p class="bio-identity__role">
            <span class="bio-identity__rotator">
              <span class="bio-identity__rotator-word pos-current">${BIO_ROTATOR_WORDS[0]}</span>
              <span class="bio-identity__rotator-word"></span>
            </span>
          </p>
          <p class="bio-identity__location">${bioLocation}</p>
          <p class="bio-identity__intro">${bioIntro}</p>
        </div>

        <div class="bio-ctas">${ctas}</div>

        <section class="bio-gallery" aria-label="Fotos">
          <div class="bio-gallery__stage">${photos}</div>
        </section>
      </main>

      <!-- FAIXA 3 — footer: o tom mais escuro da paleta, fechando. -->
      <footer class="bio-footer">
        <a href="/" class="bio-footer__link">
          <span class="bio-footer__mark">L<span class="bio-footer__mark-dot">.</span>R</span>
          <span class="bio-footer__handle">@devlucasroldao</span>
        </a>
      </footer>
    </div>
  `;
}

// Dispara o "abrir" do leque quando a galeria entra na tela — mesmo
// mecanismo (IntersectionObserver) que o resto do site já usa pro reveal.
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

  initRotator(document.querySelector('.bio-identity__rotator'), BIO_ROTATOR_WORDS, {
    wordSelector: '.bio-identity__rotator-word',
  });
  initGallerySpread();
}
