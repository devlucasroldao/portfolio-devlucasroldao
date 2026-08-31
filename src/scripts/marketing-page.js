import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/buttons.css';
import '../styles/footer.css';
import '../styles/marketing.css';
import { renderNavbar, initNavbar } from './navbar.js';
import { renderFooter, initFooterEmail } from './footer.js';
import { initScrollReveal, initTypewriter } from './scroll-animations.js';
import { marketingItems, CLIENT_LABELS, CLIENT_INSTAGRAM } from './marketing-items.js';
import { INSTAGRAM_ICON, EXTERNAL_LINK_ICON } from './ui-icons.js';
import { whatsappHref } from './contact.js';

function renderGalleryItem(item) {
  const clientLabel = CLIENT_LABELS[item.client];

  return `
    <figure class="marketing-card" data-client="${item.client}">
      <div class="marketing-card__media">
        <img src="${item.image}" alt="${item.caption}" loading="lazy" />
      </div>
      <figcaption class="marketing-card__caption">
        <span class="marketing-card__client">${clientLabel}</span>
      </figcaption>
    </figure>
  `;
}

function marketingTemplate() {
  const clientFilters = Object.entries(CLIENT_LABELS)
    .map(([value, label]) => `<button class="marketing-filter" data-filter-client="${value}">${label}</button>`)
    .join('');

  // Botão de seguir no Instagram por cliente — junto do filtro
  // correspondente, não misturado no meio da galeria. Some quando
  // "Todos" está selecionado (não faz sentido mostrar os dois de uma
  // vez ali) e aparece só o do cliente ativo.
  const instagramLinks = Object.entries(CLIENT_INSTAGRAM)
    .map(
      ([value, url]) => `
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="marketing-instagram-link" data-instagram-for="${value}">
          ${INSTAGRAM_ICON}Seguir no Instagram${EXTERNAL_LINK_ICON}
        </a>
      `
    )
    .join('');

  const cards = marketingItems.map(renderGalleryItem).join('');

  return `
    <section class="marketing-hero">
      <div class="marketing-hero__inner">
        <div class="marketing-hero__main">
          <span class="marketing-hero__eyebrow">Fora do código</span>
          <h1 class="marketing-hero__heading">Marketing & <span class="marketing-hero__heading-accent">Redes Sociais</span></h1>
          <p class="marketing-hero__subtitle">
            Além de desenvolver, também construo identidade de marca e presença digital — do post
            ao resultado. Os exemplos abaixo são reais: <strong>Conecte Telecom</strong> e
            <strong>Lu Perfumes & Presentes</strong>.
          </p>
          <div class="marketing-hero__stats">
            <div class="marketing-hero__stat">
              ${INSTAGRAM_ICON}
              <div class="marketing-hero__stat-text">
                <strong>~5x</strong>
                <span>mais interações por post na Conecte Telecom desde que assumi as redes</span>
              </div>
            </div>
            <div class="marketing-hero__stat">
              ${INSTAGRAM_ICON}
              <div class="marketing-hero__stat-text">
                <!-- Sem número aqui de propósito — não é dado concreto ainda
                     (confirmado com o Lucas). Assim que tiver um valor real
                     medido, troca por número + rótulo igual o card da
                     Conecte, no mesmo formato. -->
                <span class="marketing-hero__stat-qualitative">Vendas em alta desde a reformulação do perfil da Lu Perfumes & Presentes</span>
              </div>
            </div>
          </div>
        </div>
        <div class="marketing-hero__photo">
          <!-- TODO: trocar pela foto real do Lucas assim que ele enviar —
               placeholder só marca o espaço/proporção (retrato, ~5:6). -->
          <img src="/images/marketing/PLACEHOLDER-foto.jpg" alt="Foto de Lucas Roldão" width="900" height="1080" loading="eager" />
        </div>
      </div>
    </section>

    <section class="marketing-gallery">
      <div class="marketing-gallery__inner">
        <div class="marketing-filters">
          <span class="marketing-filters__label">Filtrar por cliente</span>
          <div class="marketing-filters__group">
            <button class="marketing-filter is-active" data-filter-client="all">Todos</button>
            ${clientFilters}
          </div>
          ${instagramLinks}
        </div>

        <div class="marketing-grid">
          ${cards}
        </div>

        <div class="marketing-cta">
          <p class="marketing-cta__text">Precisa de algo parecido pro seu negócio?</p>
          <a href="${whatsappHref}" target="_blank" rel="noopener noreferrer" class="btn">Fale comigo${EXTERNAL_LINK_ICON}</a>
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
  const cards = [...root.querySelectorAll('.marketing-card')];
  const grid = root.querySelector('.marketing-grid');
  const instagramLinks = [...root.querySelectorAll('[data-instagram-for]')];

  function applyFilters(activeClient) {
    cards.forEach((card) => {
      const matches = activeClient === 'all' || card.dataset.client === activeClient;
      card.classList.toggle('is-hidden', !matches);
    });
    // Nome do cliente na legenda só faz sentido quando dá pra ver os dois
    // misturados ("Todos") — filtrando por um cliente só, toda legenda
    // repetiria o mesmo nome, informação redundante à toa.
    grid.classList.toggle('is-single-client', activeClient !== 'all');
    // Botão de Instagram: só mostra o do cliente ativo (nenhum aparece
    // em "Todos" — não faz sentido empurrar as duas contas ao mesmo tempo).
    instagramLinks.forEach((link) => {
      link.classList.toggle('is-visible', link.dataset.instagramFor === activeClient);
    });
  }

  clientButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      clientButtons.forEach((b) => b.classList.toggle('is-active', b === btn));
      applyFilters(btn.dataset.filterClient);
    });
  });

  // Chegando de um link "Trabalho de marketing" numa página de case
  // (?cliente=conecte, por exemplo) — já abre filtrado nesse cliente,
  // sem a pessoa precisar clicar de novo no que ela já tinha escolhido.
  const params = new URLSearchParams(window.location.search);
  const initialClient = params.get('cliente');
  const initialBtn = clientButtons.find((b) => b.dataset.filterClient === initialClient);
  if (initialBtn) {
    clientButtons.forEach((b) => b.classList.toggle('is-active', b === initialBtn));
    applyFilters(initialClient);
  } else {
    applyFilters('all');
  }
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
  initScrollReveal({ sections: ['.marketing-hero', '.marketing-card'] });
  initTypewriter('.marketing-hero__eyebrow');
}
