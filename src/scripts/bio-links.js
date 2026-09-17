// Único arquivo de conteúdo da página de bio (mesmo princípio do resto do
// site: marketing-items.js, testimonials.js — dado separado de código).
// Pra trocar um link, texto ou reordenar, mexe só aqui.

import { whatsappHref } from './contact.js';

// Palavras que giram no título (mesmo efeito do Hero da home, via
// rotator.js). "Desenvolvedor" primeiro de propósito — é a primeira
// palavra visível antes do JS começar a rodar, mesma decisão já tomada
// no Hero principal.
export const BIO_ROTATOR_WORDS = [
  'Desenvolvedor',
  'Estrategista',
  'Comunicador',
  'Designer',
  '"Kinhooo"',
];

export const bioIntro =
  'Estudante de ADS que aprende fazendo. Construo produto de verdade — com cliente real, problema real e resultado medido.';

// Tags de habilidade (referência: pills do unaivan). Só o que realmente
// uso nos projetos que estão no ar, nada de encher lista.
export const bioSkills = [
  'JavaScript',
  'TypeScript',
  'Next.js',
  'React',
  'Tailwind',
  'Supabase',
  'Git',
  'Figma',
];

// CTAs principais — dois, mesmo peso visual, lado a lado (referência 2).
export const bioCtas = [
  {
    id: 'whatsapp',
    label: 'Falar comigo',
    href: whatsappHref,
    variant: 'primary',
    external: true,
  },
  {
    id: 'portfolio',
    label: 'Ver portfólio',
    href: '/',
    variant: 'secondary',
    external: false,
  },
];

// Cards de destaque com título + descrição (referência 2) — leva pras
// páginas internas que já existem, em vez de só listar link solto.
export const bioCards = [
  {
    title: 'Cases',
    description: 'Dois projetos reais, do problema bruto ao resultado — Conecte Telecom e Lu Perfumes.',
    href: '/#cases',
  },
  {
    title: 'Marketing & Redes',
    description: 'Artes e posts que produzo pras marcas que cuido — a parte fora do código.',
    href: '/marketing',
  },
];

// Ícones sociais em dock (referência 3) — fileira única, não botão
// empilhado. `icon` casa com a chave em BIO_SOCIAL_ICONS (bio-page.js).
export const bioSocials = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/devlucasroldao',
  },
  {
    id: 'github',
    name: 'GitHub',
    href: 'https://github.com/devlucasroldao',
  },
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
  {
    id: 'email',
    name: 'Email',
    href: 'mailto:lucasroldao2802@gmail.com',
  },
];

// Galeria de fotos do topo (referência 1 — leque de fotos horizontais,
// pra humanizar a página). Cada item: caminho + alt.
// TODO: trocar os placeholders pelas fotos reais assim que o Lucas
// enviar. A quantidade não é fixa em 5 — o CSS/JS distribui o leque
// conforme o número de itens aqui.
export const bioPhotos = [
  { src: '/images/bio/PLACEHOLDER-1.jpg', alt: 'Foto de Lucas Roldão' },
  { src: '/images/bio/PLACEHOLDER-2.jpg', alt: 'Foto de Lucas Roldão' },
  { src: '/images/bio/PLACEHOLDER-3.jpg', alt: 'Foto de Lucas Roldão' },
  { src: '/images/bio/PLACEHOLDER-4.jpg', alt: 'Foto de Lucas Roldão' },
  { src: '/images/bio/PLACEHOLDER-5.jpg', alt: 'Foto de Lucas Roldão' },
];
