import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/buttons.css';
import '../styles/footer.css';
import '../styles/marketing.css';
import { renderNavbar, initNavbar } from './navbar.js';
import { renderFooter, initFooterEmail } from './footer.js';
import { initScrollReveal } from './scroll-animations.js';
import { marketingItems, CLIENT_LABELS, TYPE_LABELS } from './marketing-items.js';
import { INSTAGRAM_ICON } from './ui-icons.js';

function renderGalleryItem(item) {
  const clientLabel = CLIENT_LABELS[item.client];
  const typeLabel = TYPE_LABELS[item.type];

  const media =
    item.type === 'antes-depois'
      ? `
        <div class="marketing-card__compare">
          <div class="marketing-card__compare-half">
            <img src="${item.beforeImage}" alt="Antes — ${item.caption}" loading="lazy" />
            <span class="marketing-card__compare-tag">Antes</span>
          </div>
          <div class="marketing-card__compare-half">
            <img src="${item.afterImage}" alt="Depois — ${item.caption}" loading="lazy" />
            <span class="marketing-card__compare-tag">Depois</span>
          </div>
        </div>
      `
      : `<img src="${item.image}" alt="${item.caption}" loading="lazy" />`;

  return `
    <figure class="marketing-card" data-client="${item.client}" data-type="${item.type}">
      <div class="marketing-card__media">
        ${media}
      </div>
      <figcaption class="marketing-card__caption">
        <span class="marketing-card__client">${clientLabel}</span>
        <span class="marketing-card__type">${typeLabel}</span>
      </figcaption>
    </figure>
  `;
}

function marketingTemplate() {
  const clientFilters = Object.entries(CLIENT_LABELS)
    .map(([value, label]) => `<button class="marketing-filter" data-filter-client="${value}">${label}</button>`)
    .join('');

  const typeFilters = Object.entries(TYPE_LABELS)
    .map(([value, label]) => `<button class="marketing-filter" data-filter-type="${value}">${label}</button>`)
    .join('');

  const cards = marketingItems.map(renderGalleryItem).join('');

  return `
    <section class="marketing-hero">
      <div class="marketing-hero__inner">
        <span class="marketing-hero__eyebrow">Fora do código</span>
        <h1 class="marketing-hero__heading">Marketing & Redes Sociais</h1>
        <p class="marketing-hero__subtitle">
          Além de desenvolver, cuido da presença digital da
          <strong>Conecte Telecom</strong> e da <strong>Lu Perfumes & Presentes</strong> —
          identidade de marca, posts e o antes x depois de cada perfil. Aqui embaixo, uma
          amostra do que já produzi.
        </p>
        <div class="marketing-hero__stat">
          ${INSTAGRAM_ICON}
          <span><strong>~5x</strong> de crescimento no engajamento dos posts da Conecte Telecom desde que assumi as redes.</span>
        </div>
      </div>
    </section>

    <section class="marketing-gallery">
      <div class="marketing-gallery__inner">
        <div class="marketing-filters">
          <div class="marketing-filters__group">
            <span class="marketing-filters__label">Cliente</span>
            <button class="marketing-filter is-active" data-filter-client="all">Todos</button>
            ${clientFilters}
          </div>
          <div class="marketing-filters__group">
            <span class="marketing-filters__label">Tipo</span>
            <button class="marketing-filter is-active" data-filter-type="all">Todos</button>
            ${typeFilters}
          </div>
        </div>

        <div class="marketing-grid">
          ${cards}
        </div>
      </div>
    </section>

    <div class="marketing-lightbox" id="marketing-lightbox" aria-hidden="true">
      <button class="marketing-lightbox__close" type="button" aria-label="Fechar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
      <img class="marketing-lightbox__image" src="" alt="" />
    </div>
  `;
}

function initFilters(root) {
  const clientButtons = [...root.querySelectorAll('[data-filter-client]')];
  const typeButtons = [...root.querySelectorAll('[data-filter-type]')];
  const cards = [...root.querySelectorAll('.marketing-card')];

  let activeClient = 'all';
  let activeType = 'all';

  function applyFilters() {
    cards.forEach((card) => {
      const matchesClient = activeClient === 'all' || card.dataset.client === activeClient;
      const matchesType = activeType === 'all' || card.dataset.type === activeType;
      card.classList.toggle('is-hidden', !(matchesClient && matchesType));
    });
  }

  clientButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeClient = btn.dataset.filterClient;
      clientButtons.forEach((b) => b.classList.toggle('is-active', b === btn));
      applyFilters();
    });
  });

  typeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeType = btn.dataset.filterType;
      typeButtons.forEach((b) => b.classList.toggle('is-active', b === btn));
      applyFilters();
    });
  });
}

function initLightbox(root) {
  const lightbox = root.querySelector('#marketing-lightbox');
  const lightboxImage = lightbox.querySelector('.marketing-lightbox__image');
  const closeBtn = lightbox.querySelector('.marketing-lightbox__close');

  function open(src, alt) {
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  root.querySelectorAll('.marketing-card__media img').forEach((img) => {
    img.addEventListener('click', () => open(img.src, img.alt));
  });

  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) close();
  });
}

export function mountMarketingPage() {
  document.querySelector('#app').innerHTML = `
    ${renderNavbar({ base: 'index.html' })}
    <main>
      ${marketingTemplate()}
    </main>
    ${renderFooter({ base: 'index.html' })}
  `;

  initNavbar();
  initFooterEmail();
  initFilters(document);
  initLightbox(document);
  initScrollReveal({ sections: ['.marketing-card'] });
}
