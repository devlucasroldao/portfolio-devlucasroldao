import { NAV_ITEMS } from './navbar.js';
import { EXTERNAL_LINK_ICON, ENVELOPE_ICON, LINKEDIN_ICON, asFooterBrandIcon } from './ui-icons.js';
import { getIconSvg } from './icons.js';

// base = '' quando renderizado na própria home (âncora rola na página atual)
// base = 'index.html' quando renderizado numa página de case (navega de volta pra home e âncora)
export function renderFooter({ base = '' } = {}) {
  const navLinks = NAV_ITEMS.map(([hash, label]) => `<a href="${base}${hash}">${label}</a>`).join('\n');

  return `
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__identity">
          <span class="footer__name">Lucas Roldão</span>
          <span class="footer__meta">Dev &amp; Estrategista Digital · Arroio do Sal, RS</span>
        </div>
        <div class="footer__link-groups">
          <nav class="footer__links">
            <a href="https://linkedin.com/in/devlucasroldao" target="_blank" rel="noopener noreferrer">${LINKEDIN_ICON}<span>LinkedIn</span>${EXTERNAL_LINK_ICON}</a>
            <a href="https://github.com/devlucasroldao" target="_blank" rel="noopener noreferrer">${asFooterBrandIcon(getIconSvg('github'))}<span>GitHub</span>${EXTERNAL_LINK_ICON}</a>
            <a href="#" data-email-link>${ENVELOPE_ICON}<span>Email</span></a>
          </nav>
          <nav class="footer__nav">
            ${navLinks}
          </nav>
        </div>
      </div>
      <p class="footer__signature">
        "Esse site quase virou mais um clichê de dev com cara de IA. Não virou porque cada decisão aqui foi
        questionada antes de entrar no ar — inclusive essa frase, revisada por um assistente de IA. Sim, eu
        percebi a ironia."
      </p>
      <p class="footer__rights">© 2026 Lucas Roldão. Todos os direitos reservados.</p>
    </footer>
  `;
}

// Monta o endereço em runtime em vez de deixar o texto cru no HTML — dificulta
// scraping simples de bot que varre a página estática atrás de "mailto:".
//
// mailto: sozinho é pouco confiável na prática: em qualquer máquina sem
// cliente de email padrão configurado (comum pra quem usa só webmail), o
// clique não abre nada visível — parece "quebrado" mesmo com o href certo.
// Mantém o mailto: (funciona de verdade pra quem tem cliente configurado) e
// soma um fallback de copiar o endereço pra área de transferência, com
// feedback visual no próprio texto do link — clique sempre produz um
// resultado útil, independente de o navegador abrir um cliente ou não.
export function initFooterEmail() {
  const link = document.querySelector('[data-email-link]');
  if (!link) return;

  const user = 'lucasroldao2802';
  const domain = 'gmail.com';
  const email = `${user}@${domain}`;

  link.href = `mailto:${email}`;
  link.setAttribute('aria-label', `Email: ${email}`);

  const label = link.querySelector('span');
  const originalText = label ? label.textContent : null;

  link.addEventListener('click', () => {
    if (!label || !navigator.clipboard?.writeText) return;

    navigator.clipboard
      .writeText(email)
      .then(() => {
        label.textContent = 'Copiado!';
        setTimeout(() => {
          label.textContent = originalText;
        }, 2000);
      })
      .catch(() => {
        // Clipboard indisponível (permissão negada, contexto não seguro) —
        // o mailto: já disparou normalmente por conta própria, sem isso.
      });
  });
}
