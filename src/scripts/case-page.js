import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/buttons.css';
import '../styles/cases.css';
import '../styles/code-editor.css';
import '../styles/case-page.css';
import '../styles/footer.css';
import { renderNavbar, initNavbar } from './navbar.js';
import { renderCaseFull, initCodeEditors } from './cases.js';
import { renderFooter, initFooterEmail } from './footer.js';

export function mountCasePage(caseId) {
  document.querySelector('#app').innerHTML = `
    ${renderNavbar({ base: 'index.html' })}
    <div class="case-page">
      <a href="index.html#cases" class="case-page__back">&larr; voltar pros cases</a>
      ${renderCaseFull(caseId)}
    </div>
    ${renderFooter({ base: 'index.html' })}
  `;

  initNavbar();
  initCodeEditors();
  initFooterEmail();
}
