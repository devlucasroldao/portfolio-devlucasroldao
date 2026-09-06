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

  // ---------- Lu Perfumes & Presentes (8 peças reais, selecionadas de
  // um lote de 10 — cortadas 2 redundantes, mesma lógica da Conecte) ----------
  {
    id: 'lu-premio-diamante',
    client: 'lu-perfumes',
    image: '/images/marketing/lu-premio-diamante.jpg',
    width: 759,
    height: 1350,
    caption: 'Prêmio de revendedora Diamante 2025 — conquista real, reconhecimento da marca de perfumes.',
  },
  {
    id: 'lu-feedback-clientes',
    client: 'lu-perfumes',
    image: '/images/marketing/lu-feedback-clientes.jpg',
    width: 759,
    height: 1350,
    caption: 'Compilado de avaliações reais de clientes — prova social direta.',
  },
  {
    id: 'lu-avaliacao-individual',
    client: 'lu-perfumes',
    image: '/images/marketing/lu-avaliacao-individual.jpg',
    width: 759,
    height: 1350,
    caption: 'Avaliação individual detalhada de um cliente — atendimento e produto elogiados ponto a ponto.',
  },
  {
    id: 'lu-ajudinha',
    client: 'lu-perfumes',
    image: '/images/marketing/lu-ajudinha.jpg',
    width: 759,
    height: 1350,
    caption: 'Convite direto pro atendimento personalizado — "chama a Lu que ela te ajuda".',
  },
  {
    id: 'lu-kit-personalizado',
    client: 'lu-perfumes',
    image: '/images/marketing/lu-kit-personalizado.jpg',
    width: 759,
    height: 1350,
    caption: 'Oferta de kit personalizado, montado sob medida pra ocasião do cliente.',
  },
  {
    id: 'lu-pronta-entrega',
    client: 'lu-perfumes',
    image: '/images/marketing/lu-pronta-entrega.jpg',
    width: 759,
    height: 1350,
    caption: '"Escolheu → chamou → levou" — reforçando a conveniência da pronta entrega.',
  },
  {
    id: 'lu-erros-gravacao',
    client: 'lu-perfumes',
    image: '/images/marketing/lu-erros-gravacao.jpg',
    width: 759,
    height: 1350,
    caption: 'Bastidor bem-humorado de gravação — mostra a personalidade real por trás da marca.',
  },
  {
    id: 'lu-sorteio-dia-dos-pais',
    client: 'lu-perfumes',
    image: '/images/marketing/lu-sorteio-dia-dos-pais.jpg',
    width: 759,
    height: 1350,
    caption: 'Campanha de sorteio de Dia dos Pais — ação de engajamento com a comunidade de clientes.',
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
