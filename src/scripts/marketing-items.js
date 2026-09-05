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
  // ---------- Conecte Telecom (10 peças reais, selecionadas de um lote
  // de 33 — ver conversa: priorizado resultado real, identidade visual,
  // raciocínio estratégico e variedade, evitando repetir a mesma
  // campanha várias vezes) ----------
  {
    id: 'conecte-paz',
    client: 'conecte',
    image: '/images/marketing/conecte-paz.jpg',
    width: 1080,
    height: 1350,
    caption: 'Post de humor pra vender instalação — mascote Gasturinha "encontrando a paz" com o Wi-Fi funcionando.',
  },
  {
    id: 'conecte-dinossauro',
    client: 'conecte',
    image: '/images/marketing/conecte-dinossauro.jpg',
    width: 1080,
    height: 1350,
    caption: 'Referência ao jogo do dinossauro do Chrome (aquele que aparece sem internet) — gancho que todo mundo reconhece na hora.',
  },
  {
    id: 'conecte-5-anos',
    client: 'conecte',
    image: '/images/marketing/conecte-5-anos.jpg',
    width: 759,
    height: 1350,
    caption: 'Post de aniversário da empresa — 5 anos e +1.000 clientes, prova social real.',
  },
  {
    id: 'conecte-apresentacao',
    client: 'conecte',
    image: '/images/marketing/conecte-apresentacao.jpg',
    width: 759,
    height: 1350,
    caption: 'Apresentação da marca com foto real da equipe — atendimento humano como diferencial.',
  },
  {
    id: 'conecte-gente-de-verdade',
    client: 'conecte',
    image: '/images/marketing/conecte-gente-de-verdade.jpg',
    width: 759,
    height: 1350,
    caption: 'Mesma mensagem de atendimento humano, reforçada em outro momento da campanha.',
  },
  {
    id: 'conecte-carrossel-wifi',
    client: 'conecte',
    image: '/images/marketing/conecte-carrossel-wifi.jpg',
    width: 1350,
    height: 562,
    caption: 'Carrossel educativo explicando a diferença entre Wi-Fi e internet pro cliente leigo.',
  },
  {
    id: 'conecte-tabela-planos',
    client: 'conecte',
    image: '/images/marketing/conecte-tabela-planos.jpg',
    width: 1080,
    height: 1350,
    caption: 'Infográfico com todos os planos e preços — parte de uma campanha completa de conversão.',
  },
  {
    id: 'conecte-temporada',
    client: 'conecte',
    image: '/images/marketing/conecte-temporada.jpg',
    width: 759,
    height: 1350,
    caption: 'Post sazonal pra quem tem casa de temporada em Arroio do Sal, puxando o gancho de turismo de praia.',
  },
  {
    id: 'conecte-ligacao-mascote',
    client: 'conecte',
    image: '/images/marketing/conecte-ligacao-mascote.jpg',
    width: 759,
    height: 1350,
    caption: 'Mockup de tela de celular simulando uma ligação do mascote — formato diferente pra variar o feed.',
  },
  {
    id: 'conecte-dia-gaucho',
    client: 'conecte',
    image: '/images/marketing/conecte-dia-gaucho.jpg',
    width: 759,
    height: 1350,
    caption: 'Data comemorativa regional (Revolução Farroupilha) — conteúdo pensado pro público local.',
  },

  // ---------- Lu Perfumes & Presentes (ainda placeholder, aguardando
  // material — mesmo processo: manda as artes que eu processo e troco) ----------
  {
    id: 'placeholder-lu-1',
    client: 'lu-perfumes',
    image: '/images/marketing/PLACEHOLDER-square.jpg',
    width: 1080,
    height: 1080,
    caption: 'Post pro Instagram da Lu Perfumes & Presentes — [substituir pela legenda real]',
  },
  {
    id: 'placeholder-lu-2',
    client: 'lu-perfumes',
    image: '/images/marketing/PLACEHOLDER-vertical.jpg',
    width: 1080,
    height: 1920,
    caption: 'Capa de Reels da Lu Perfumes & Presentes — [substituir pela legenda real]',
  },
  {
    id: 'placeholder-lu-3',
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
