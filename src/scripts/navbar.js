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

  // Toggle de tema e CTA de WhatsApp existem em DOIS lugares no DOM: um
  // aqui embaixo (pill do desktop) e outro dentro do .navbar__panel (drawer
  // do mobile) — não dá pra "mover" o mesmo elemento entre dois containers
  // irmãos só com CSS quando os dois têm que poder estar em telas
  // diferentes. O JS trata as duas instâncias com querySelectorAll,
  // sincronizando o estado entre elas.
  //
  // O toggle de tema tem dois VISUAIS diferentes por contexto: switch
  // pequeno na pill (cabe pouco espaço ali), botão grande com ícone+texto
  // no rodapé do drawer (mesmo tamanho do CTA, pedido explícito — antes
  // era um switch pequeno perdido ao lado de um botão grande, sem
  // hierarquia visual nenhuma entre os dois).
  const themeToggle = (variant = 'pill') => {
    if (variant === 'big') {
      return `
    <button class="navbar__theme-toggle navbar__theme-toggle--big" type="button" aria-label="Ativar modo claro" aria-pressed="false">
      <span class="navbar__theme-toggle-icon">
        ${MOON_ICON}
        ${SUN_ICON}
      </span>
      <span class="navbar__theme-toggle-label-to-light">Modo claro</span>
      <span class="navbar__theme-toggle-label-to-dark">Modo escuro</span>
    </button>
  `;
    }
    return `
    <button class="navbar__theme-toggle" type="button" aria-label="Ativar modo claro" aria-pressed="false">
      <span class="navbar__theme-track">
        <span class="navbar__theme-thumb">
          ${MOON_ICON}
          ${SUN_ICON}
        </span>
      </span>
    </button>
  `;
  };

  const cta = `
    <a href="${whatsappHref}" target="_blank" rel="noopener noreferrer" class="navbar__cta" aria-label="Falar comigo no WhatsApp">
      <span class="navbar__cta-text">Falar comigo${EXTERNAL_LINK_ICON}</span>
      <span class="navbar__cta-icon">${CHAT_ICON}</span>
    </a>
  `;

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
        <span class="navbar__brand-text">@devlucasroldao</span>
      </a>

      <div class="navbar__links">
        ${links('')}
      </div>

      <div class="navbar__actions">
        ${themeToggle('pill')}
        ${cta}

        <button class="navbar__toggle" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="navbar-panel">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>

    <div class="navbar__scrim"></div>

    <aside class="navbar__panel" id="navbar-panel" aria-hidden="true">
      <div class="navbar__panel-header">
        <div>
          <span class="navbar__panel-eyebrow">Menu</span>
          <h2 class="navbar__panel-heading">Navegue pela página</h2>
        </div>
        <button class="navbar__panel-close" type="button" aria-label="Fechar menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>

      <nav class="navbar__panel-links">
        <div class="navbar__panel-group">
          <span class="navbar__panel-group-label">Seções</span>
          <a class="navbar__panel-link" href="${base}#inicio">Início</a>
          <a class="navbar__panel-link" href="${base}#sobre">Sobre mim</a>
          <a class="navbar__panel-link" href="${base}#depoimentos">Depoimentos</a>
        </div>

        <div class="navbar__panel-group">
          <span class="navbar__panel-group-label">Cases</span>
          <a class="navbar__panel-link" href="${base}#cases">Ver todos</a>
          <div class="navbar__panel-sublinks">
            <a href="case-conecte.html">Conecte Telecom</a>
            <a href="case-lu-perfumes.html">Lu Perfumes &amp; Presentes</a>
          </div>
        </div>
      </nav>

      <div class="navbar__panel-footer">
        ${themeToggle('big')}
        ${cta}
      </div>
    </aside>
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
  const panelClose = document.querySelector('.navbar__panel-close');
  const scrim = document.querySelector('.navbar__scrim');
  // Dois toggles no DOM (pill do desktop + drawer do mobile) — mesma
  // classe nos dois, tratados juntos aqui.
  const themeToggles = [...document.querySelectorAll('.navbar__theme-toggle')];

  const onScroll = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 24);

    // Bug real, achado testando de verdade (não só lendo CSS): a navbar é
    // position:fixed, sempre por cima (z-index:100) dos primeiros ~70px
    // da tela, em QUALQUER posição de scroll — inclusive o fim da página.
    // O CTA final (WhatsApp + LinkedIn) fica logo acima do footer, então
    // no scroll máximo ele acaba empurrado pra dentro dessa faixa e fica
    // parcial ou totalmente escondido atrás da navbar (medido: o botão
    // principal ficava 100% fora da viewport). Em vez de inflar o fim da
    // página com espaço vazio artificial só pra empurrar o CTA pra longe
    // da navbar (tentativa anterior, descartada — só piorava a conta),
    // a navbar em si some perto do fim: o footer já tem os mesmos links
    // de navegação duplicados, então não faz falta ela continuar visível
    // ali, e o CTA final fica livre pra aparecer por completo.
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const distanceFromBottom = maxScroll - window.scrollY;
    // Não esconde se o drawer estiver aberto — senão o botão de fechar (X)
    // continua funcionando (junto com Esc/clique no scrim), mas some o
    // jeito "natural" de fechar (o próprio hambúrguer) enquanto o usuário
    // ainda pode estar interagindo com o menu.
    const shouldHide = distanceFromBottom < 140 && !panel.classList.contains('is-open');
    navbar.classList.toggle('is-near-bottom', shouldHide);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  function openPanel() {
    panel.classList.add('is-open');
    scrim.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    // Trava o scroll da página por trás enquanto o drawer tá aberto —
    // senão dá pra rolar o conteúdo por baixo do overlay, o que quebra a
    // sensação de "camada modal" que o drawer devia ter.
    document.body.style.overflow = 'hidden';
  }

  function closePanel() {
    panel.classList.remove('is-open');
    scrim.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    onScroll();
  }

  toggle.addEventListener('click', () => {
    if (panel.classList.contains('is-open')) closePanel();
    else openPanel();
  });

  panelClose.addEventListener('click', closePanel);
  scrim.addEventListener('click', closePanel);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('is-open')) closePanel();
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closePanel);
  });

  // O <html data-theme="light"> já foi aplicado (ou não) pelo script
  // síncrono no <head>, antes de qualquer render — aqui só sincroniza o
  // visual do switch com esse estado já decidido.
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  themeToggles.forEach((el) => syncThemeToggleVisual(el, isLight));

  themeToggles.forEach((el) => {
    el.addEventListener('click', () => {
      const nextIsLight = document.documentElement.getAttribute('data-theme') !== 'light';
      if (nextIsLight) {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
      setStoredTheme(nextIsLight ? 'light' : 'dark');
      themeToggles.forEach((toggleEl) => syncThemeToggleVisual(toggleEl, nextIsLight));
    });
  });
}
