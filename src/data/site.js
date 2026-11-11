// Dados do site que aparecem em mais de um lugar. Trocar aqui troca em tudo.
export const site = {
  url: 'https://devlucasroldao.vercel.app',
  name: 'Lucas Roldão',
  role: 'Desenvolvedor Front-end',
  stack: 'React · Next.js · TypeScript · Supabase',
  availability: 'Disponível para estágio e júnior, remoto',
  base: 'Arroio do Sal, RS',
  email: 'lucasroldao2802@gmail.com',
  linkedin: 'https://linkedin.com/in/devlucasroldao',
  github: 'https://github.com/devlucasroldao',
  // Nomes estáveis: atualizar o PDF não quebra nenhum link.
  cv: '/curriculo-lucas-roldao.pdf',
  cvGrowth: '/curriculo-lucas-roldao-web-growth.pdf',
  rabiscoInstagram: 'https://www.instagram.com/rabisco.agencia/',
  // Foto do topo: uma chave só (gerada por scripts/images.mjs).
  heroPhoto: 'lucas-retrato',
  heroPhotoAlt: 'Lucas Roldão sorrindo, de óculos e camiseta preta',
};

export const testimonials = [
  {
    photo: 'depoimento7',
    quote:
      'Lucas é um excelente profissional: inteligente, prestativo, proativo, de aprendizado muito rápido — tem facilidade pra se moldar a qualquer situação. Além de profissional, é uma pessoa de coração imenso e essência pura. Um menino de ouro!',
    name: 'Bernard Becker',
    role: 'Dono da Conecte Telecom',
  },
  {
    photo: 'depoimento5',
    quote: 'Lucas dedicado no trabalho. Esse garoto é fera... ficou excelente, ficou top mesmo. Continue assim.',
    name: 'Anderson',
    role: 'Dev do sistema, Conecte Telecom',
  },
  {
    photo: 'depoimento4',
    quote:
      'Trabalhei com ele por 2 anos — sempre com um sorriso no rosto e pensando pra frente, mesmo nos dias difíceis. Foi um baita colega de trabalho, e virou um baita amigo.',
    name: 'Ricardo Germann',
    role: 'Ex-colega, gerente na Agrocenter',
  },
];

// Bloco "Também faço marketing": no máximo 4 peças, todas já publicadas pelas marcas.
export const marketingPieces = [
  { key: 'mkt-conecte-dinossauro', alt: 'Arte da Conecte Telecom com referência ao jogo do dinossauro que aparece quando falta internet' },
  { key: 'mkt-conecte-tabela-planos', alt: 'Infográfico da Conecte Telecom com os planos de internet' },
  { key: 'mkt-lu-kit-personalizado', alt: 'Arte da Lu Perfumes & Presentes oferecendo kit personalizado' },
  { key: 'mkt-lu-pronta-entrega', alt: 'Arte da Lu Perfumes & Presentes sobre pronta entrega' },
];
