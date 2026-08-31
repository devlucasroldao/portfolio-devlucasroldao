// Dados da galeria de Marketing & Redes Sociais — mesma lógica de
// testimonials.js (array simples, cada item é um objeto). Pra trocar um
// placeholder por conteúdo real: troca o valor de `image` (ou
// `beforeImage`/`afterImage` nos itens do tipo 'antes-depois') pelo
// caminho do arquivo real dentro de public/images/marketing/, e ajusta
// `caption` se quiser. Pra adicionar um item novo, copia um bloco
// existente do mesmo `type` e edita.
//
// type: 'post' | 'arte' | 'antes-depois'
// client: 'conecte' | 'lu-perfumes'

export const marketingItems = [
  {
    id: 'placeholder-1',
    client: 'conecte',
    type: 'post',
    image: '/images/marketing/PLACEHOLDER.jpg',
    caption: 'Post pro Instagram da Conecte Telecom — [substituir pela legenda real]',
  },
  {
    id: 'placeholder-2',
    client: 'conecte',
    type: 'arte',
    image: '/images/marketing/PLACEHOLDER.jpg',
    caption: 'Arte de divulgação — [substituir pela legenda real]',
  },
  {
    id: 'placeholder-3',
    client: 'conecte',
    type: 'antes-depois',
    beforeImage: '/images/marketing/PLACEHOLDER.jpg',
    afterImage: '/images/marketing/PLACEHOLDER.jpg',
    caption: 'Perfil do Instagram — [substituir pela legenda real]',
  },
  {
    id: 'placeholder-4',
    client: 'lu-perfumes',
    type: 'post',
    image: '/images/marketing/PLACEHOLDER.jpg',
    caption: 'Post pro Instagram da Lu Perfumes & Presentes — [substituir pela legenda real]',
  },
  {
    id: 'placeholder-5',
    client: 'lu-perfumes',
    type: 'arte',
    image: '/images/marketing/PLACEHOLDER.jpg',
    caption: 'Arte de catálogo — [substituir pela legenda real]',
  },
  {
    id: 'placeholder-6',
    client: 'lu-perfumes',
    type: 'antes-depois',
    beforeImage: '/images/marketing/PLACEHOLDER.jpg',
    afterImage: '/images/marketing/PLACEHOLDER.jpg',
    caption: 'Identidade visual do perfil — [substituir pela legenda real]',
  },
];

export const CLIENT_LABELS = {
  conecte: 'Conecte Telecom',
  'lu-perfumes': 'Lu Perfumes & Presentes',
};

export const TYPE_LABELS = {
  post: 'Post',
  arte: 'Arte',
  'antes-depois': 'Antes x Depois',
};
