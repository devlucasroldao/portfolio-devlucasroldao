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
