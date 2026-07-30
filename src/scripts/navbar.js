const NAV_ITEMS = [
  ['#cases', 'Cases'],
  ['#sobre', 'Sobre'],
  ['#depoimentos', 'Depoimentos'],
  ['#contato', 'Contato'],
];

// base = '' quando renderizado na própria home (âncora rola na página atual)
// base = 'index.html' quando renderizado numa página de case (navega de volta pra home e âncora)
export function renderNavbar({ base = '' } = {}) {
  const links = (className) =>
    NAV_ITEMS.map(([hash, label]) => `<a class="${className}" href="${base}${hash}">${label}</a>`).join('\n');

  return `
    <nav class="navbar">
      <a href="${base || '#'}" class="navbar__brand">@devlucasroldao</a>

      <div class="navbar__links">
        ${links('')}
      </div>

      <button class="navbar__toggle" type="button" aria-label="Abrir menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
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
}
