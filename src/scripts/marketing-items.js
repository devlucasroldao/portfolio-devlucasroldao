// Dados da galeria de Marketing & Redes Sociais — mesma lógica de
// testimonials.js (array simples, cada item é um objeto). Pra trocar um
// placeholder por conteúdo real: troca `image` pelo caminho do arquivo
// real dentro de public/images/marketing/, e `width`/`height` pelas
// dimensões reais desse arquivo (importante: sem isso o layout "pula"
// enquanto a imagem carrega — ver comentário em marketing-page.js).
//
// client: 'conecte' | 'lu-perfumes'
//
// A galeria é masonry (cada item na proporção real dele) — não precisa
// mais ser tudo quadrado. Post de feed normal costuma ser 1080x1080,
// capa de Reels/Stories costuma ser 1080x1920 — mas qualquer proporção
// real funciona, é só preencher width/height corretos.

export const marketingItems = [
  {
    id: 'placeholder-1',
    client: 'conecte',
    image: '/images/marketing/PLACEHOLDER-square.jpg',
    width: 1080,
    height: 1080,
    caption: 'Post pro Instagram da Conecte Telecom — [substituir pela legenda real]',
  },
  {
    id: 'placeholder-2',
    client: 'conecte',
    image: '/images/marketing/PLACEHOLDER-vertical.jpg',
    width: 1080,
    height: 1920,
    caption: 'Capa de Reels da Conecte Telecom — [substituir pela legenda real]',
  },
  {
    id: 'placeholder-3',
    client: 'conecte',
    image: '/images/marketing/PLACEHOLDER-square.jpg',
    width: 1080,
    height: 1080,
    caption: 'Post pro Instagram da Conecte Telecom — [substituir pela legenda real]',
  },
  {
    id: 'placeholder-4',
    client: 'lu-perfumes',
    image: '/images/marketing/PLACEHOLDER-square.jpg',
    width: 1080,
    height: 1080,
    caption: 'Post pro Instagram da Lu Perfumes & Presentes — [substituir pela legenda real]',
  },
  {
    id: 'placeholder-5',
    client: 'lu-perfumes',
    image: '/images/marketing/PLACEHOLDER-vertical.jpg',
    width: 1080,
    height: 1920,
    caption: 'Capa de Reels da Lu Perfumes & Presentes — [substituir pela legenda real]',
  },
  {
    id: 'placeholder-6',
    client: 'lu-perfumes',
    image: '/images/marketing/PLACEHOLDER-square.jpg',
    width: 1080,
    height: 1080,
    caption: 'Post pro Instagram da Lu Perfumes & Presentes — [substituir pela legenda real]',
  },
];

export const CLIENT_LABELS = {
  conecte: 'Conecte Telecom',
  'lu-perfumes': 'Lu Perfumes & Presentes',
};

export const CLIENT_INSTAGRAM = {
  conecte: 'https://www.instagram.com/seconecte2021/',
  'lu-perfumes': 'https://www.instagram.com/lu_roldaoperfumes/',
};
