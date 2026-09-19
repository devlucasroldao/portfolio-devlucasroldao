// Único arquivo de conteúdo da página de bio (mesmo princípio do resto do
// site: marketing-items.js, testimonials.js — dado separado de código).
// Pra trocar um link, texto ou reordenar, mexe só aqui.

import { whatsappHref } from './contact.js';

// Palavras que giram na linha de cargo, abaixo do nome (mesmo efeito do
// Hero da home, via rotator.js). "Desenvolvedor" primeiro de propósito —
// é a primeira palavra visível antes do JS começar a rodar.
export const BIO_ROTATOR_WORDS = [
  'Desenvolvedor',
  'Estrategista',
  'Comunicador',
  'Designer',
  '"Kinhooo"',
];

export const bioIntro =
  'Estudante de ADS que aprende fazendo. Construo produto de verdade — com cliente real, problema real e resultado medido.';

export const bioLocation = 'Arroio do Sal, RS';

// CTAs principais — lista vertical, cada um com título + subtítulo curto
// (referência: cards da Pono/Hannah Lee, mais informativo que só rótulo).
export const bioCtas = [
  {
    id: 'whatsapp',
    icon: 'whatsapp',
    label: 'Falar comigo',
    description: 'Resposta direta, sem robô',
    href: whatsappHref,
    variant: 'primary',
    external: true,
  },
  {
    id: 'portfolio',
    icon: 'portfolio',
    label: 'Ver meu portfólio',
    description: 'Cases reais, do problema ao resultado',
    href: '/',
    variant: 'secondary',
    external: false,
  },
  {
    id: 'marketing',
    icon: 'marketing',
    label: 'Marketing & Redes',
    description: 'As artes que produzo pras marcas que cuido',
    href: '/marketing',
    variant: 'secondary',
    external: false,
  },
];

// Ícones sociais em dock — fileira única sobreposta entre a foto e o
// corpo (referência: Hannah Lee). `id` casa com a chave em
// BIO_SOCIAL_ICONS (bio-page.js). Sem email aqui — ele já aparece como
// contato natural, não precisa competir com as redes no dock.
export const bioSocials = [
  { id: 'linkedin', name: 'LinkedIn', href: 'https://linkedin.com/in/devlucasroldao' },
  { id: 'github', name: 'GitHub', href: 'https://github.com/devlucasroldao' },
  {
    id: 'instagram',
    // TODO: trocar "#" pelo Instagram pessoal real assim que o Lucas
    // confirmar o @ — ele pediu pra incluir mas não passou o link ainda.
    name: 'Instagram',
    href: '#',
  },
  {
    id: 'tiktok',
    // TODO: mesma coisa do Instagram — aguardando o @ do TikTok real.
    name: 'TikTok',
    href: '#',
  },
];

// Galeria de fotos do corpo (leque horizontal, pra humanizar a página).
// TODO: trocar os placeholders pelas fotos reais assim que o Lucas
// enviar. A quantidade não é fixa em 5 — o JS distribui o leque
// conforme o número de itens aqui.
export const bioPhotos = [
  { src: '/images/bio/PLACEHOLDER-1.jpg', alt: 'Foto de Lucas Roldão' },
  { src: '/images/bio/PLACEHOLDER-2.jpg', alt: 'Foto de Lucas Roldão' },
  { src: '/images/bio/PLACEHOLDER-3.jpg', alt: 'Foto de Lucas Roldão' },
  { src: '/images/bio/PLACEHOLDER-4.jpg', alt: 'Foto de Lucas Roldão' },
  { src: '/images/bio/PLACEHOLDER-5.jpg', alt: 'Foto de Lucas Roldão' },
];
