import { site } from '../data/site.js';
import { esc } from './parts.js';

// <head> de cada página: título, descrição, canonical e Open Graph próprios.
export function head({ title, description, path, image = '/og-image.jpg', type = 'website', noindex = false, jsonLd = null }) {
  const url = site.url + path;
  return `
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    ${noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${url}" />`}
    <meta property="og:type" content="${type}" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="${site.name}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:image" content="${site.url}${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="preload" href="/fonts/geist.woff2" as="font" type="font/woff2" crossorigin />
    <script>
      // Tema salvo, aplicado antes da primeira pintura. Sem nada salvo, segue o sistema.
      try { var t = localStorage.getItem('theme'); if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t; } catch (e) {}
    </script>
    ${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''}
  `;
}

// base = '' na home (âncora na própria página) e '/' nas outras.
export function nav(base = '') {
  return `
    <a class="skip" href="#conteudo">Pular pro conteúdo</a>
    <nav class="nav wrap" aria-label="Principal">
      <a class="nav-name label" href="${base || '#topo'}">lucasroldao</a>
      <ul>
        <li><a href="${base}#cases">Cases</a></li>
        <li><a href="${base}#sobre">Sobre</a></li>
        <li><a href="${base}#marketing">Marketing</a></li>
        <li><a href="${base}#contato">Contato</a></li>
      </ul>
      <button type="button" class="theme-toggle label" data-theme-toggle hidden aria-label="Trocar entre tema claro e escuro">tema</button>
    </nav>
  `;
}

export function footer(base = '') {
  return `
    <footer class="footer">
      <div class="wrap footer-inner">
        <p class="footer-id"><strong>${site.name}</strong><br />${site.role}, ${site.base}</p>
        <ul class="footer-links">
          <li><a href="${site.linkedin}" rel="noopener">LinkedIn</a></li>
          <li><a href="${site.github}" rel="noopener">GitHub</a></li>
          <li><a href="mailto:${site.email}">E-mail</a></li>
          <li><a href="${site.cv}">Currículo (PDF)</a></li>
          <li><a href="${base}#cases">Cases</a></li>
        </ul>
        <p class="footer-sign">"Esse site quase virou mais um clichê de dev com cara de IA. Não virou porque cada decisão aqui foi questionada antes de entrar no ar — inclusive essa frase, revisada por um assistente de IA. Sim, eu percebi a ironia."</p>
        <p class="footer-rights label">© 2026 Lucas Roldão</p>
      </div>
    </footer>
  `;
}
