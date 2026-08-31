// Dados da galeria de Marketing & Redes Sociais — mesma lógica de
// testimonials.js (array simples, cada item é um objeto). Pra trocar um
// placeholder por conteúdo real: troca o valor de `image` pelo caminho
// do arquivo real dentro de public/images/marketing/, e ajusta
// `caption` se quiser. Pra adicionar um item novo, copia um bloco
// existente e edita.
//
// client: 'conecte' | 'lu-perfumes'
//
// (O tipo "antes-depois" existiu numa versão anterior — removido a
// pedido, simplificando a galeria só pra imagens únicas.)

export const marketingItems = [
  {
    id: 'placeholder-1',
    client: 'conecte',
    image: '/images/marketing/PLACEHOLDER.jpg',
    caption: 'Post pro Instagram da Conecte Telecom — [substituir pela legenda real]',
  },
  {
    id: 'placeholder-2',
    client: 'conecte',
    image: '/images/marketing/PLACEHOLDER.jpg',
    caption: 'Arte de divulgação — [substituir pela legenda real]',
  },
  {
    id: 'placeholder-3',
    client: 'conecte',
    image: '/images/marketing/PLACEHOLDER.jpg',
    caption: 'Post pro Instagram da Conecte Telecom — [substituir pela legenda real]',
  },
  {
    id: 'placeholder-4',
    client: 'lu-perfumes',
    image: '/images/marketing/PLACEHOLDER.jpg',
    caption: 'Post pro Instagram da Lu Perfumes & Presentes — [substituir pela legenda real]',
  },
  {
    id: 'placeholder-5',
    client: 'lu-perfumes',
    image: '/images/marketing/PLACEHOLDER.jpg',
    caption: 'Arte de catálogo — [substituir pela legenda real]',
  },
  {
    id: 'placeholder-6',
    client: 'lu-perfumes',
    image: '/images/marketing/PLACEHOLDER.jpg',
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
