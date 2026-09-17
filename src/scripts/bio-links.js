// Único arquivo de conteúdo da página de bio (mesmo princípio do resto do
// site: marketing-items.js, testimonials.js — dado separado de código).
// Pra trocar um link ou reordenar, mexe só aqui.

import { whatsappHref } from './contact.js';

// Ordem = ordem de prioridade de conversão (decidida em conversa):
// WhatsApp (CTA direto) → Portfólio (prova de valor) → LinkedIn → GitHub
// → Instagram → TikTok (canais secundários).
export const bioLinks = [
  {
    id: 'whatsapp',
    label: 'Falar comigo no WhatsApp',
    href: whatsappHref,
    variant: 'primary',
    external: true,
  },
  {
    id: 'portfolio',
    label: 'Ver portfólio completo',
    href: '/',
    variant: 'secondary',
    external: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/devlucasroldao',
    variant: 'secondary',
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/devlucasroldao',
    variant: 'secondary',
    external: true,
  },
  {
    id: 'instagram',
    // TODO: trocar "#" pelo Instagram pessoal real assim que o Lucas
    // confirmar o @ — ele pediu explicitamente pra incluir mas não
    // passou o link ainda.
    label: 'Instagram',
    href: '#',
    variant: 'secondary',
    external: true,
  },
  {
    id: 'tiktok',
    // TODO: mesma coisa do Instagram — aguardando o @ do TikTok real.
    label: 'TikTok',
    href: '#',
    variant: 'secondary',
    external: true,
  },
];
