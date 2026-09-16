import '../styles/main.css';
import '../styles/buttons.css';
import '../styles/bio.css';
import { bioLinks, bioTestimonials } from './bio-links.js';
import { LINKEDIN_ICON, INSTAGRAM_ICON, TIKTOK_ICON, EXTERNAL_LINK_ICON, CHAT_ICON } from './ui-icons.js';
import { getIconSvg } from './icons.js';

// Ícone por id de link — só os que precisam de um; "portfolio" usa uma
// setinha simples em vez de logo, os outros usam o logo real da marca.
const LINK_ICONS = {
  whatsapp: CHAT_ICON,
  linkedin: LINKEDIN_ICON,
  github: getIconSvg('github'),
  instagram: INSTAGRAM_ICON,
  tiktok: TIKTOK_ICON,
};

function renderLinkButton(link) {
  const icon = LINK_ICONS[link.id] || '';
  const externalAttrs = link.external ? 'target="_blank" rel="noopener noreferrer"' : '';
  const externalIcon = link.external ? EXTERNAL_LINK_ICON : '';

  return `
    <a href="${link.href}" ${externalAttrs} class="bio-link bio-link--${link.variant}">
      <span class="bio-link__icon">${icon}</span>
      <span class="bio-link__label">${link.label}</span>
      <span class="bio-link__external">${externalIcon}</span>
    </a>
  `;
}

function renderTestimonial(t) {
  return `
    <figure class="bio-testimonial">
      <blockquote>&ldquo;${t.quote}&rdquo;</blockquote>
      <figcaption><strong>${t.name}</strong> — ${t.role}</figcaption>
    </figure>
  `;
}

function bioTemplate() {
  const primaryLinks = bioLinks.filter((l) => l.variant === 'primary').map(renderLinkButton).join('');
  // "Portfólio completo" é o próximo botão depois do CTA — é onde a tira
  // de depoimentos entra (prova social logo após a prova de valor, mesma
  // lógica do playbook de bio-link: CTA → prova de valor → prova social
  // → canais secundários).
  const portfolioLink = bioLinks.find((l) => l.id === 'portfolio');
  const secondaryLinks = bioLinks.filter((l) => l.variant === 'secondary' && l.id !== 'portfolio').map(renderLinkButton).join('');
  const testimonials = bioTestimonials.map(renderTestimonial).join('');

  return `
    <main class="bio-page">
      <div class="bio-page__inner">
        <div class="bio-header">
          <div class="bio-header__mark">L<span class="bio-header__mark-dot">.</span>R</div>
          <h1 class="bio-header__name">Lucas Roldão</h1>
          <p class="bio-header__tagline">Dev que pensa como <span class="bio-header__accent">estrategista</span> e constrói em público.</p>
          <p class="bio-header__location">Arroio do Sal, RS</p>
        </div>

        <div class="bio-links">
          ${primaryLinks}
          ${renderLinkButton(portfolioLink)}
        </div>

        <div class="bio-testimonials">
          ${testimonials}
        </div>

        <div class="bio-links">
          ${secondaryLinks}
        </div>

        <p class="bio-footer">
          <a href="index.html">devlucasroldao.vercel.app</a> · © ${new Date().getFullYear()}
        </p>
      </div>
    </main>
  `;
}

export function mountBioPage() {
  document.querySelector('#app').innerHTML = bioTemplate();
}
