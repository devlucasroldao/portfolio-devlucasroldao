export function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__identity">
          <span class="footer__name">Lucas Roldão</span>
          <span class="footer__role">Dev &amp; Estrategista Digital</span>
          <span class="footer__location">Arroio do Sal, RS</span>
        </div>
        <nav class="footer__links">
          <a href="https://linkedin.com/in/devlucasroldao" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/devlucasroldao" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" data-email-link>Email</a>
        </nav>
      </div>
      <p class="footer__signature">
        "Esse site quase virou mais um clichê de dev com cara de IA. Não virou porque cada decisão aqui foi
        questionada antes de entrar no ar — inclusive essa frase, revisada por um assistente de IA. Sim, eu
        percebi a ironia."
      </p>
    </footer>
  `;
}

// Monta o endereço em runtime em vez de deixar o texto cru no HTML — dificulta
// scraping simples de bot que varre a página estática atrás de "mailto:".
export function initFooterEmail() {
  const link = document.querySelector('[data-email-link]');
  if (!link) return;

  const user = 'lucasroldao2802';
  const domain = 'gmail.com';
  const email = `${user}@${domain}`;

  link.href = `mailto:${email}`;
  link.setAttribute('aria-label', `Email: ${email}`);
}
