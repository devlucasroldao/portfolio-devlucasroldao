import instagramRaw from 'simple-icons/icons/instagram.svg?raw';
import tiktokRaw from 'simple-icons/icons/tiktok.svg?raw';

// Ícones de interface hand-drawn (não são logo de marca) — mesmo tratamento
// flat/stroke-only do hambúrguer e sol/lua da navbar e dos badges de case.
export const EXTERNAL_LINK_ICON =
  '<svg class="icon-external" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>';

export const ENVELOPE_ICON =
  '<svg class="icon-envelope" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>';

// Balão de conversa — usado só como versão ícone-só do CTA "Falar comigo"
// da navbar abaixo de ~420px, quando o texto não cabe mais ao lado do
// hambúrguer (ver .navbar__cta-icon em navbar.css).
export const CHAT_ICON =
  '<svg class="icon-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>';

// simple-icons não tem mais o logo do LinkedIn (removido do pacote por
// pedido legal da própria LinkedIn/Microsoft) — desenhado à mão aqui,
// seguindo o mesmo tratamento flat/monocromático do resto dos ícones de
// interface do site, não o pacote de marcas.
export const LINKEDIN_ICON =
  '<svg class="icon-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4"/><line x1="7.5" y1="10.5" x2="7.5" y2="16.5"/><circle cx="7.5" cy="6.7" r="0.6" fill="currentColor" stroke="none"/><line x1="11.5" y1="10.5" x2="11.5" y2="16.5"/><path d="M11.5 13a2 2 0 0 1 4 0v3.5"/></svg>';

// Injeta sizing (.icon-brand) + aria-hidden num SVG de terceiro (simple-icons)
// que não nasce com essas propriedades — usado pro logo do GitHub no footer.
export function asFooterBrandIcon(svg) {
  return svg.replace('<svg ', '<svg class="icon-brand" aria-hidden="true" ');
}

// Logo real do Instagram (simple-icons — diferente do LinkedIn, esse
// continua disponível no pacote). fill:currentColor força a paleta fechada
// do site (nada de cor de marca solta) — usado no link discreto de
// Instagram de cada case.
export const INSTAGRAM_ICON = asFooterBrandIcon(instagramRaw.replace('<svg ', '<svg fill="currentColor" '));

// Mesmo tratamento do Instagram — usado na página de bio.
export const TIKTOK_ICON = asFooterBrandIcon(tiktokRaw.replace('<svg ', '<svg fill="currentColor" '));

// Dois ícones hand-drawn novos, mesmo tratamento stroke-only dos outros —
// usados nos cards de estatística da página de marketing pra diferenciar
// visualmente "engajamento" (gráfico subindo) de "vendas" (sacola),
// em vez dos dois reusarem o mesmo ícone do Instagram sem necessidade.
export const TRENDING_UP_ICON =
  '<svg class="icon-trending-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>';

export const SHOPPING_BAG_ICON =
  '<svg class="icon-shopping-bag" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8h12l-1 12H7z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>';

// Ícones dos CTAs da página de bio — stroke-only, mesmo estilo dos de
// cima. WhatsApp (balão), portfólio (grid de projetos), marketing
// (megafone).
export const WHATSAPP_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>';

export const GRID_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>';

export const MEGAPHONE_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V7L6 11H4a1 1 0 0 0-1 0z"/><path d="M15 8a4 4 0 0 1 0 8"/><path d="M10 7l8-4v18l-8-4"/></svg>';
