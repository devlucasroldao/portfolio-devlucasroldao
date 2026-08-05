import { whatsappHref } from './contact.js';
import { CHAT_ICON, EXTERNAL_LINK_ICON } from './ui-icons.js';

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
      <a href="${base}#inicio" class="navbar__brand">
        <img
          src="/images/brand/mark-dark@2x.png"
          srcset="/images/brand/mark-dark@2x.png 2x, /images/brand/mark-dark@3x.png 3x"
          alt=""
          class="navbar__brand-icon"
          width="24"
          height="24"
        />
        <span>@devlucasroldao</span>
      </a>

      <div class="navbar__links">
        ${links('')}
      </div>

      <div class="navbar__actions">
        <button class="navbar__theme-toggle" type="button" aria-label="Ativar modo claro" aria-pressed="false">
          <span class="navbar__theme-track">
            <span class="navbar__theme-thumb">
              ${MOON_ICON}
              ${SUN_ICON}
            </span>
          </span>
        </button>

        <a href="${whatsappHref}" target="_blank" rel="noopener noreferrer" class="navbar__cta" aria-label="Falar comigo no WhatsApp">
          <span class="navbar__cta-text">Falar comigo${EXTERNAL_LINK_ICON}</span>
          <span class="navbar__cta-icon">${CHAT_ICON}</span>
        </a>

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

const THEME_STORAGE_KEY = 'theme';

function setStoredTheme(value) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, value);
  } catch (e) {
    // localStorage indisponível (modo privado, cookies bloqueados etc.) —
    // o toggle ainda funciona pra sessão atual, só não persiste.
  }
}

function syncThemeToggleVisual(themeToggle, isLight) {
  themeToggle.classList.toggle('is-light', isLight);
  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.setAttribute('aria-label', isLight ? 'Ativar modo escuro' : 'Ativar modo claro');
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

  // O <html data-theme="light"> já foi aplicado (ou não) pelo script
  // síncrono no <head>, antes de qualquer render — aqui só sincroniza o
  // visual do switch com esse estado já decidido.
  syncThemeToggleVisual(themeToggle, document.documentElement.getAttribute('data-theme') === 'light');

  themeToggle.addEventListener('click', () => {
    const nextIsLight = document.documentElement.getAttribute('data-theme') !== 'light';
    if (nextIsLight) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    setStoredTheme(nextIsLight ? 'light' : 'dark');
    syncThemeToggleVisual(themeToggle, nextIsLight);
  });
}
