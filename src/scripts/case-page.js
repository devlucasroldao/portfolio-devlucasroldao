import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/buttons.css';
import '../styles/cases.css';
import '../styles/case-page.css';
import '../styles/footer.css';
import { renderNavbar, initNavbar } from './navbar.js';
import { renderCaseFull, initStackTooltips } from './cases.js';
import { renderFooter, initFooterEmail } from './footer.js';
import { initScrollReveal, initTypewriter } from './scroll-animations.js';

export function mountCasePage(caseId) {
  document.querySelector('#app').innerHTML = `
    ${renderNavbar({ base: 'index.html' })}
    <main>
      <div class="case-page__top">
        <a href="index.html#cases" class="case-page__back">&larr; voltar pros cases</a>
      </div>
      ${renderCaseFull(caseId)}
    </main>
    ${renderFooter({ base: 'index.html' })}
  `;

  initNavbar();
  initFooterEmail();
  initStackTooltips();

  initScrollReveal({ sections: ['.case__block', '.case__learning', '.case-next'] });
  initTypewriter('.case__eyebrow, .case-next__eyebrow');
}
