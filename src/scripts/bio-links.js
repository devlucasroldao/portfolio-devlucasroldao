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
    href: 'index.html',
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

// 3 depoimentos reais (de testimonials.js), encurtados pra caber num
// resumo rápido — texto vem direto da fonte original, só cortado, nunca
// reescrito/inventado.
export const bioTestimonials = [
  {
    quote: 'Esse garoto é fera... ficou excelente, ficou top mesmo.',
    name: 'Anderson',
    role: 'Dev do sistema, Conecte Telecom',
  },
  {
    quote: 'Um excelente profissional: inteligente, prestativo, proativo, de aprendizado muito rápido.',
    name: 'Bernard Becker',
    role: 'Dono da Conecte Telecom',
  },
  {
    quote: 'Nunca faz as coisas pela metade — sempre entrega mais do que o esperado.',
    name: 'Giulia Teixeira',
    role: 'Sócia na Rabisco',
  },
];
