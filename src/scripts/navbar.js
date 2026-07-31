import { whatsappHref } from './contact.js';
import { EXTERNAL_LINK_ICON } from './ui-icons.js';

export const NAV_ITEMS = [
  ['#inicio', 'Início'],
  ['#cases', 'Cases'],
  ['#sobre', 'Sobre mim'],
  ['#depoimentos', 'Depoimentos'],
];

const SUN_ICON =
  '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';
const MOON_ICON =
  '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/></svg>';

// base = '' quando renderizado na própria home (âncora rola na página atual)
// base = 'index.html' quando renderizado numa página de case (navega de volta pra home e âncora)
export function renderNavbar({ base = '' } = {}) {
  const links = (className) =>
    NAV_ITEMS.map(([hash, label]) => `<a class="${className}" href="${base}${hash}">${label}</a>`).join('\n');

  return `
    <nav class="navbar">
      <a href="${base}#inicio" class="navbar__brand">@devlucasroldao</a>

      <div class="navbar__links">
        ${links('')}
      </div>

      <div class="navbar__actions">
        <button class="navbar__theme-toggle" type="button" aria-label="Alternar tema (em breve)">
          <span class="navbar__theme-track">
            <span class="navbar__theme-thumb">
              ${MOON_ICON}
              ${SUN_ICON}
            </span>
          </span>
        </button>

        <a href="${whatsappHref}" target="_blank" rel="noopener noreferrer" class="navbar__cta">Falar comigo${EXTERNAL_LINK_ICON}</a>

        <button class="navbar__toggle" type="button" aria-label="Abrir menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>

    <div class="navbar__panel">
      ${links('')}
    </div>
  `;
}

export function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.navbar__toggle');
  const panel = document.querySelector('.navbar__panel');
  const themeToggle = document.querySelector('.navbar__theme-toggle');

  const onScroll = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  toggle.addEventListener('click', () => {
    panel.classList.toggle('is-open');
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => panel.classList.remove('is-open'));
  });

  // Só alterna o próprio ícone (sol/lua) — sem trocar tema de verdade ainda.
  themeToggle.addEventListener('click', () => {
    themeToggle.classList.toggle('is-light');
  });
}
