// Conteúdo dos cases. Fonte única: a home (cards) e as páginas de case leem daqui.
// A ordem do array é a ordem do site: Aval, Conecte, Lu Perfumes, Helena Lima.
import { img, video, subBlock as renderSubBlock, EXTERNAL_LINK_ICON } from '../templates/parts.js';

// Imagem dentro do texto do case. Aceita o caminho antigo ('/images/cases/x.jpg')
// e usa a versão WebP gerada por scripts/images.mjs.
function renderImage(path, alt) {
  const key = path.split('/').pop().replace(/\.\w+$/, '');
  return `<figure class="shot">${img(key, alt, { sizes: '(min-width: 800px) 720px, 100vw' })}</figure>`;
}

const DEMO = 'https://app.meuaval.com.br';

export const casesData = [
  {
    id: 'case-aval',
    href: '/case-aval',
    featured: true,
    title: 'Aval',
    result: 'No ar, em uso pela Rabisco e em piloto com outras agências.',
    resultNote: 'Ainda sem número de uso pra mostrar.',
    tags: ['Next.js 16', 'TypeScript', 'Supabase', 'RLS'],
    stackText: 'Next.js 16 (App Router), TypeScript, Tailwind CSS, Supabase (PostgreSQL, RLS, Auth, Storage), Vercel',
    meta: [
      ['Produto', 'SaaS de aprovação de conteúdo para agências'],
      ['Período', 'Out 2026 até hoje'],
      ['Papel', 'Concepção, desenvolvimento e lançamento, sozinho'],
    ],
    teaserImage: '/images/cases/aval-painel.webp',
    teaserImageAlt: 'Painel do Aval com as prévias da semana e os pedidos de ajuste de cada cliente',
    bannerImage: '/images/cases/aval-painel.webp',
    bannerImageAlt: 'Painel do Aval: prévias recentes de cada cliente, com os pedidos de ajuste em destaque',
    liveUrl: 'https://meuaval.com.br',
    teaserHeadline: 'Aprovação de conteúdo com a marca da agência',
    teaserProblem:
      'O cliente da agência abre um link no WhatsApp, vê os posts como vão ficar no perfil e aprova ou pede ajuste em cada um. Concebi, desenvolvi e lancei sozinho.',
    demoUrl: `${DEMO}/p/demo`,
    proofIntro: 'Quatro demos públicas, com marcas fictícias. Abrem sem login.',
    proof: [
      { label: 'Prévia do feed', href: `${DEMO}/p/demo`, note: 'o que o cliente aprova' },
      { label: 'Calendário do mês', href: `${DEMO}/c/demo`, note: 'o que sai em cada dia' },
      { label: 'Peças', href: `${DEMO}/m/demo`, note: 'outdoor, fachada, cartão' },
      { label: 'Relatório', href: `${DEMO}/r/demo`, note: 'o fechamento do mês' },
    ],
    proofFooter:
      'O código do Aval é privado. A origem dele, a Rabisco Prévia, é <a href="https://github.com/devlucasroldao/rabisco-previa" rel="noopener">código aberto</a>.',
    blocks: [
      [
        'Como começou',
        `<p>O Aval começou como <span class="case__highlight">Rabisco Prévia</span>, uma ferramenta interna da agência Rabisco. Lá, o conteúdo da semana ia pro cliente numa pasta zipada pelo WhatsApp. Arte solta não mostra como o post fica no feed, a legenda chegava separada, e o retorno vinha vago: "muda aquele azul" não diz de qual post o cliente está falando.</p>
        <p>A Prévia trocou o .zip por <span class="case__highlight">um link por semana</span>. O cliente abre no celular e vê um perfil com cara de Instagram, com os próximos posts numerados. O painel com identidade foi ao ar em dois dias (13 e 14/10/2026), nos planos gratuitos do Supabase e da Vercel.</p>
        ${video(
          '/videos/previa-demo.mp4',
          'previa-video-poster',
          'Vídeo de 25 segundos: antes, o conteúdo ia num .zip pelo WhatsApp; agora, um link mostra o grid numerado'
        )}
        <div class="case__sub-blocks">
          ${renderSubBlock(
            'A decisão que eu desfiz',
            `<p>A primeira versão tinha uma regra escrita: <span class="case__highlight">só visualização, de propósito</span>. Sem login, sem comentário, sem aprovação dentro do app. A ideia era o cliente olhar a arte no link, tirar um print do que queria mudar e me responder no WhatsApp, citando o número do post.</p>
            <p>Em 02/11/2026 isso mudou. Hoje cada post e cada story tem dois botões, <span class="case__highlight">Aprovar</span> e <span class="case__highlight">Pedir ajuste</span>. Quem pede ajuste escreve o nome e o que quer mudar, ali mesmo. Ninguém precisa mais mandar print nem mensagem solta, e essas respostas são o que monta o relatório do fim do mês, com as artes aprovadas.</p>`
          )}
          ${renderImage(
            '/images/cases/previa-cliente.jpg',
            'Tela do cliente no celular: carrossel com contador, Reels com controles e story da semana'
          )}
          ${renderSubBlock(
            'O que veio do uso real',
            '<p>O calendário mensal (23/10) nasceu do pedido de um cliente: a v1 foi pro ar, ele mandou 6 prints com feedback em áudio, e a v2 saiu em menos de 24 horas. O Dividir imagem (31/10) tirou do fluxo um site de terceiros: o corte do carrossel roda inteiro no navegador, e a arte do cliente não sobe pra servidor nenhum. E o vídeo do iPhone é comprimido no navegador de quem monta a semana, com ffmpeg.wasm: um arquivo real de 43 s caiu de <span class="case__highlight">57,4 MB para 6,7 MB</span>.</p>'
          )}
          ${renderSubBlock(
            'Código aberto',
            `<p>A Prévia segue no ar pra Rabisco, e o repositório é público. O Aval começou com todo esse histórico: o primeiro commit é de 13/10/2026.</p>
            <a href="https://github.com/devlucasroldao/rabisco-previa" target="_blank" rel="noopener noreferrer" class="case__inline-link">Ver o código da Rabisco Prévia no GitHub${EXTERNAL_LINK_ICON}</a>
            <a href="https://rabisco-previa.vercel.app/p/demo" target="_blank" rel="noopener noreferrer" class="case__inline-link">Abrir a demo da Prévia${EXTERNAL_LINK_ICON}</a>`
          )}
        </div>`,
      ],
      [
        'Problema',
        '<p>A Prévia resolvia o problema de uma agência. Pra servir outras, faltavam duas coisas que ferramenta interna não precisa ter. A primeira: <span class="case__highlight">a marca na frente do cliente tem que ser a da agência</span>, não a minha nem a da Rabisco. A segunda: os dados de uma agência não podem aparecer pra outra, em nenhuma tela, por nenhum caminho.</p>',
      ],
      [
        'Decisão',
        `<p>A decisão de produto foi fazer o Aval <span class="case__highlight">sumir</span>. O "v" de aval é um visto, e é a única parte da marca que não muda. Logo, cor e fonte são da agência que usa. O cliente final continua sem login e sem app: abre o link e resolve.</p>
        <p>A decisão técnica foi tratar isolamento como parte do produto, não como acabamento. Cada agência é isolada por <span class="case__highlight">Row Level Security no PostgreSQL</span>, e os testes de isolamento são validados com mutation testing: versões quebradas de propósito precisam fazer o teste falhar. Teste que passa com a política errada não está testando nada.</p>`,
      ],
      [
        'Solução',
        `<div class="case__sub-blocks">
          ${renderSubBlock(
            'O link do cliente',
            `<p>Prévia da semana, do mês inteiro ou de um post avulso, com cara de feed. O cliente aprova ou pede ajuste em cada post e em cada story, e a agência vê o retorno no painel.</p>
            <a href="${DEMO}/p/demo" target="_blank" rel="noopener noreferrer" class="case__inline-link">Abrir a prévia de exemplo${EXTERNAL_LINK_ICON}</a>`
          )}
          <!-- IMAGEM: tela do cliente no celular, com os botões Aprovar e Pedir ajuste (captura de /p/demo) -->
          ${renderSubBlock(
            'Calendário do mês',
            `<p>Grade e lista, filtros, busca, arrastar item de um dia pro outro e marcar como feito.</p>
            <a href="${DEMO}/c/demo" target="_blank" rel="noopener noreferrer" class="case__inline-link">Abrir o calendário de exemplo${EXTERNAL_LINK_ICON}</a>`
          )}
          <!-- IMAGEM: calendário em grade (captura de /c/demo) -->
          ${renderSubBlock(
            'Peças impressas',
            `<p>Placa, outdoor, fachada, cartão, cardápio e folder são aprovados pelo mesmo link. "Na medida" mostra a peça em escala real. "No ambiente" aplica a arte em fotos de outdoor e fachada, em <span class="case__highlight">17 cenas</span>, com transformação de perspectiva feita em CSS (homografia com matrix3d).</p>
            <a href="${DEMO}/m/demo" target="_blank" rel="noopener noreferrer" class="case__inline-link">Abrir as peças de exemplo${EXTERNAL_LINK_ICON}</a>`
          )}
          <!-- IMAGEM: uma peça "No ambiente", arte aplicada num outdoor (captura de /m/demo) -->
          ${renderSubBlock(
            'Relatório e Pix',
            `<p>O relatório mensal mostra pro cliente as artes aprovadas no mês. A cobrança sai por Pix, de dentro do painel.</p>
            <a href="${DEMO}/r/demo" target="_blank" rel="noopener noreferrer" class="case__inline-link">Abrir o relatório de exemplo${EXTERNAL_LINK_ICON}</a>`
          )}
          ${renderSubBlock(
            'Marca, equipe e acervo',
            '<p>Cada agência configura logo, cor e fonte (são <span class="case__highlight">27 fontes</span> disponíveis), convida a equipe e baixa o acervo do mês num ZIP.</p>'
          )}
          ${renderSubBlock(
            'Ferramentas do dia a dia',
            '<p>Dividir imagem, pra cortar a arte única do carrossel em um arquivo por slide, e conversão de fotos HEIC do iPhone direto no navegador.</p>'
          )}
          ${renderSubBlock(
            'Entrada sem SQL',
            '<p>A agência pede acesso num formulário, eu aprovo em um clique e o convite vai por e-mail. Um painel da plataforma mostra a ativação de cada piloto em 5 marcos, pra eu ver onde cada um trava, e recebe as sugestões e os problemas que as agências mandam de dentro do painel delas. Tours guiados apresentam o painel, e o cliente final ganha um guia na primeira visita a uma prévia.</p>'
          )}
          ${renderImage(
            '/images/cases/aval-painel.webp',
            'Início do painel da agência: prévias com pedido de ajuste, atalhos pra criar prévia, calendário e peças'
          )}
          ${renderSubBlock(
            'Antes de abrir pra fora',
            '<p>Fiz uma auditoria de lançamento em 09 e 10/11/2026 e resolvi os três achados de severidade alta antes de receber agências de fora. Termos de uso e política de privacidade estão publicados. Falta a revisão de um advogado, que vem antes de cobrar.</p>'
          )}
        </div>`,
      ],
      [
        'O que decidi não construir',
        `<p>Essa lista diz mais sobre o produto do que a lista de funções.</p>
        <ul class="case__list">
          <li><strong>Agenda da equipe.</strong> O Notion já resolve.</li>
          <li><strong>Visões de semana e de dia no calendário.</strong> Fica só o mês.</li>
          <li><strong>"Entrar como agência" no painel da plataforma.</strong> Seria eu vendo os dados de qualquer agência. Não existe, por privacidade.</li>
          <li><strong>Fonte própria por upload.</strong> Adiada.</li>
          <li><strong>Mais polimento na landing.</strong> A regra é "landing pronta: parar de polir".</li>
          <li><strong>Mais de 4 agências piloto nesta fase.</strong> É o teto que defini pra esta fase.</li>
        </ul>`,
      ],
      [
        'Lições técnicas',
        `<ul class="case__list">
          <li>As telas do cliente rodam no servidor com a chave de serviço. Ao configurar um ambiente, o teste que vale é abrir um link real de cliente, não o painel.</li>
          <li>Tabela nova com a coluna da agência precisa das 3 políticas restritivas.</li>
          <li>Migration segue uma ordem: ambiente de teste, produção, merge.</li>
          <li>Uma consulta com join embutido numa tabela recém-criada falhou. A correção tira o join e faz a tela mostrar o motivo quando algo falha.</li>
        </ul>`,
      ],
      [
        'Resultado',
        `<p>O Aval está no ar em <a href="https://meuaval.com.br" target="_blank" rel="noopener noreferrer" class="case__text-link">meuaval.com.br</a>, com landing, cadastro, painel e quatro demos públicas. Está em uso pela Rabisco e em teste com agências piloto.</p>
        <p><span class="case__highlight">Ainda não tenho número de uso pra mostrar</span>, e prefiro dizer isso a inventar tração. Limites conhecidos: os termos ainda não passaram por advogado, a cobrança não começou e o código é privado. O que dá pra conferir hoje são as demos e o repositório da Prévia.</p>
        <!-- TODO: números de PRs, testes e migrations só depois de conferir no repositório do Aval (o clone local está atrás da origem). -->`,
      ],
    ],
    // RASCUNHO: escrito a partir das decisões do Lucas. Ele precisa aprovar ou reescrever.
    learning:
      '"Defendi \'só visualização\' por escrito e desfiz menos de três semanas depois. O critério não mudou: cortar o que cria coisa nova pra manter sem resolver um atrito real. O que mudou foi o atrito. Com a aprovação dentro do produto, o cliente não precisa de print, e a resposta dele já serve pro relatório do mês."',
  },
  {
    id: 'case-conecte',
    href: '/case-conecte',
    title: 'Conecte Telecom',
    result: 'Carregamento de 150–1000 ms para 2–20 ms e 39 achados de segurança corrigidos.',
    tags: ['Next.js 14', 'TypeScript', 'Supabase'],
    stackText: 'Next.js 14, TypeScript, Tailwind CSS, Supabase, Vercel',
    proof: [
      { label: 'Site no ar', href: 'https://seconecte.net/', note: 'seconecte.net, em produção' },
      { label: 'Instagram da Conecte', href: 'https://www.instagram.com/seconecte2021/', note: 'o conteúdo que eu produzo' },
    ],
    meta: [
      ['Empresa', 'Conecte Telecom'],
      ['Período', 'Jun–Jul 2026 (2 meses)'],
      ['Papel', 'Desenvolvedor Web e Responsável pelos Canais Digitais'],
    ],
    teaserImage: '/images/cases/conecte-teaser.jpg',
    teaserImageAlt: 'Página inicial do site da Conecte Telecom, com mascote e chamada para planos de internet',
    bannerImage: '/images/cases/conecte-banner.jpg',
    bannerImageAlt: 'Home do site da Conecte Telecom com menu, hero de conexão de internet e mascote Gasturinha',
    liveUrl: 'https://seconecte.net/',
    instagramUrl: 'https://www.instagram.com/seconecte2021/',
    marketingClient: 'conecte',
    teaserHeadline: 'De site solto a plataforma real',
    teaserProblem:
      'De landing page genérica a plataforma completa: admin sem depender de código, mobile redondo, analytics de verdade — e uma vulnerabilidade crítica corrigida no meio do caminho.',
    teaserTags: ['Plataforma completa', 'Contratação digital', 'Segurança auditada'],
    blocks: [
      [
        'Problema',
        `<p>Durante meses, eu sequer sabia que a Conecte tinha um site oficial — e eu trabalhava lá. Isso já dizia tudo: o site existia, mas era tão desatualizado e distante da identidade da empresa que passava despercebido até por quem trabalhava dentro dela. Os próprios gestores sabiam que aquilo não representava a marca. Recebi <span class="case__highlight">liberdade total</span> pra reconstruir a presença digital do zero.</p>
        <a href="https://www.linkedin.com/posts/devlucasroldao_reestrutura%C3%A7%C3%A3o-site-conecte-telecom-activity-7468042231271026688-U9Ty" target="_blank" rel="noopener noreferrer" class="case__inline-link">Fiz uma análise completa do site antigo e seus problemas neste post${EXTERNAL_LINK_ICON}</a>
        <a href="https://www.linkedin.com/posts/devlucasroldao_site-conecte-telecom-activity-7469007601846968320-Ooo-" target="_blank" rel="noopener noreferrer" class="case__inline-link">Contei sobre essa primeira versão aqui${EXTERNAL_LINK_ICON}</a>`,
      ],
      [
        'Decisão',
        '<p>A decisão que definiu o projeto não foi técnica, foi estratégica: pensei no cenário em que, no futuro, eu não estivesse mais na empresa. O sistema não podia depender de alguém mexendo em código toda vez que fosse preciso trocar uma imagem ou atualizar um plano — por isso o projeto virou uma plataforma com <span class="case__highlight">painel administrativo completo</span>, não só um site bonito. Essa mesma lógica se repetiu quando percebi que clientes queriam contratar mas não conseguiam assinar por estarem fora da cidade — decisão de construir <span class="case__highlight">contratação 100% digital</span>, o que por sua vez exigiu revisar toda a arquitetura de segurança da aplicação a fundo.</p>',
      ],
      [
        'Solução',
        `<div class="case__sub-blocks">
          ${renderSubBlock(
            'Plataforma & Admin',
            `<p>Painel administrativo completo — planos (com ou sem preço visível), textos, imagens, conteúdo do site, tudo gerenciável sem depender de código.</p>
            <a href="https://www.linkedin.com/posts/devlucasroldao_desenvolvimentoweb-nextjs-typescript-activity-7487976084202856449-SDsh" target="_blank" rel="noopener noreferrer" class="case__inline-link">Mostrei o painel em detalhe aqui${EXTERNAL_LINK_ICON}</a>`
          )}
          ${renderImage(
            '/images/cases/conecte-admin.jpg',
            'Painel administrativo do site da Conecte Telecom, com atalhos para planos, contratos, central de ajuda e analytics',
            'case__inline-image'
          )}
          ${renderSubBlock(
            'Contratação digital',
            '<p>Assinatura eletrônica com PDF real, versionamento de templates legais (cada contrato trava a versão exata do texto vigente no momento da assinatura), acesso protegido a documentos sensíveis.</p>'
          )}
          ${renderSubBlock(
            'Segurança',
            `<p>Durante o aprofundamento da arquitetura, uma auditoria revelou uma <span class="case__highlight">falha crítica</span> de controle de acesso, corrigida e validada em produção assim que confirmada. Foram tratados <span class="case__highlight">39 achados</span> no total (do crítico ao baixo), incluindo autenticação em duas etapas no admin e correção sistemática de um padrão de falha silenciosa em ~10 pontos do sistema.</p>
            <a href="https://www.linkedin.com/posts/devlucasroldao_cybersecurity-appsec-supabase-activity-7488657402028961793-i6oX" target="_blank" rel="noopener noreferrer" class="case__inline-link">Detalhei essa auditoria neste post${EXTERNAL_LINK_ICON}</a>`
          )}
          ${renderSubBlock(
            'Central de Ajuda',
            '<p>Base de conhecimento com <span class="case__highlight">mais de 40 artigos reais</span> cobrindo dúvidas de internet, equipamentos, instalação e contrato — com expansão futura planejada em vídeo.</p>'
          )}
          ${renderImage(
            '/images/cases/conecte-central-ajuda.jpg',
            'Central de Ajuda do site da Conecte Telecom, com busca de dúvidas e vídeo tutorial',
            'case__inline-image'
          )}
          ${renderSubBlock(
            'Analytics',
            '<p>Painel próprio de conversão (<span class="case__highlight">~35 pontos instrumentados</span>) + página de links (bio do Instagram) integrada ao Google Analytics.</p>'
          )}
          ${renderImage(
            '/images/cases/conecte-analytics.jpg',
            'Painel de Analytics da Conecte Telecom mostrando cliques de conversão e gráfico de acessos por dia',
            'case__inline-image'
          )}
          ${renderSubBlock(
            'Correção de canais',
            '<p><span class="case__highlight">7 números de WhatsApp</span> incorretos identificados e corrigidos, com validação no admin pra impedir recorrência.</p>'
          )}
          ${renderSubBlock('Stack', '<p>Next.js 14, TypeScript, Supabase, Tailwind, Vercel.</p>')}
          ${renderSubBlock(
            'Próximo passo',
            '<p>Com o admin pronto, o próximo módulo grande é um <span class="case__highlight">portal de autoatendimento</span> de verdade — não só emissão de boleto. Login seguro, dados do plano, segunda via, histórico de pagamento e protocolos, tudo puxado em tempo real do sistema que a empresa já usa (Aganet), sem duplicar dado nenhum. Desenvolvimento em parceria com o Anderson, responsável pelo sistema interno da Conecte, via integração de API. Mesma identidade visual do resto da plataforma, mobile incluído. Ideia central: o cliente resolver o que precisar sem depender de telefone ou WhatsApp.</p>'
          )}
        </div>`,
      ],
      [
        'Resultado',
        '<p>Performance: 150–1000ms → <span class="case__highlight">2–20ms</span> (medido). Tracking: de ~3 de 19 pontos corretos para <span class="case__highlight">35 de 35 confirmados</span>. Central de Ajuda: de 3 categorias vazias pra mais de 40 artigos publicados. <span class="case__highlight">Vulnerabilidade crítica corrigida assim que confirmada</span>. O site deixou de ser uma landing page esquecida e virou uma plataforma que integra marketing, gestão de conteúdo, contratos e suporte — pensada pra continuar funcionando mesmo sem depender de quem a construiu.</p>',
      ],
    ],
    learning:
      '"A decisão mais importante desse projeto não foi corrigir a falha de segurança — foi pensar em continuidade desde o início. Um sistema que só funciona enquanto uma pessoa específica está por perto não é uma solução, é uma dependência disfarçada. E quando a superfície do projeto cresce (de site pra plataforma), o rigor técnico precisa crescer junto: \'parece corrigido\' e \'está corrigido\' são coisas diferentes, e isso vale tanto pra uma falha crítica de segurança quanto pra um número de WhatsApp com um dígito errado."',
  },
  {
    id: 'case-lu-perfumes',
    href: '/case-lu-perfumes',
    title: 'Lu Perfumes & Presentes',
    result: 'Catálogo e painel prontos, e mais de 100 avaliações 5 estrelas no Google antes do lançamento.',
    tags: ['Next.js 14', 'JavaScript', 'Supabase'],
    stackText: 'Next.js 14, JavaScript, Supabase (PostgreSQL, Auth, Storage), Vercel',
    proof: [
      { label: 'Site de pré-lançamento', href: 'https://lu-perfumes-v2.vercel.app/', note: 'ainda sem domínio próprio' },
      { label: 'Instagram da loja', href: 'https://www.instagram.com/lu_roldaoperfumes/', note: '' },
    ],
    meta: [
      ['Empresa', 'Lu Perfumes & Presentes'],
      ['Período', '2025–2026 (em andamento)'],
      ['Papel', 'Desenvolvimento e estratégia digital'],
    ],
    teaserImage: '/images/cases/lu-teaser.jpg',
    teaserImageAlt: 'Página de catálogo da Lu Perfumes & Presentes, com produtos em destaque',
    bannerImage: '/images/cases/lu-banner.jpg',
    bannerImageAlt: 'Home do site da Lu Perfumes & Presentes, com foto da Lu e chamada para o catálogo',
    liveUrl: 'https://lu-perfumes-v2.vercel.app/',
    instagramUrl: 'https://www.instagram.com/lu_roldaoperfumes/',
    marketingClient: 'lu-perfumes',
    teaserHeadline: 'Catálogo & atendimento sem perder o humano',
    teaserProblem:
      '"O que você tem de perfume feminino aí?" — a Lu respondia isso, um por um, pra centenas de clientes, sem catálogo, sem histórico, sem parar.',
    teaserTags: ['Catálogo online', '35 de 500+ produtos no ar', 'Painel admin autônomo'],
    blocks: [
      [
        'Problema',
        `<p>"Quais perfumes masculinos você tem?" "Quanto custa esse?" — a dona da loja respondia isso, uma pessoa de cada vez, fotografando produto por produto pelo WhatsApp, todos os dias. Ela divide a rotina entre atendimento, compra, organização da loja e montagem de kits — e o tempo pra responder cliente por cliente ia ficando cada vez mais curto.</p>
        <a href="https://www.linkedin.com/posts/devlucasroldao_projeto-cat%C3%A1logo-online-lu-perfumes-activity-7449540705074528256-NFBR" target="_blank" rel="noopener noreferrer" class="case__inline-link">Contei sobre o início desse projeto aqui${EXTERNAL_LINK_ICON}</a>`,
      ],
      [
        'Decisão',
        '<p>A decisão mais importante foi <span class="case__highlight">não tentar substituir o atendimento humano</span> — o catálogo existe pra tornar esse atendimento mais eficiente, não pra eliminá-lo. Dentro disso, teve uma decisão que eu errei e corrigi no meio do caminho: comecei sem mostrar preço nenhum, achando que simplificaria a manutenção com centenas de produtos. Conversando com outras pessoas, percebi que preço é uma das primeiras coisas que o cliente procura — sem ele, muita gente perde interesse antes mesmo de chamar no WhatsApp. Reestruturei a plataforma inteira pra ter gerenciamento de preço via painel, o que aumentou bastante a complexidade — o catálogo final vai passar de <span class="case__highlight">500 produtos</span>; hoje já são cerca de <span class="case__highlight">350 fotografados</span>, com o cadastro (foto editada, marca, descrição, fragrância, categoria, preço) sendo feito manualmente, produto por produto — mas resolveu o problema de verdade.</p>',
      ],
      [
        'Solução',
        `<div class="case__sub-blocks">
          ${renderSubBlock(
            'Catálogo & Kits',
            '<p>Navegação por categoria/marca, com montagem de kit 100% personalizada — o cliente escolhe os produtos e monta o próprio presente. Não existem kits prontos: cada kit da loja é único, com embalagem e composição que mudam constantemente, então manter um catálogo de kits fixos exigiria atualização impossível de sustentar. Envio direto pro WhatsApp já com a seleção pronta.</p>'
          )}
          ${renderImage(
            '/images/cases/lu-catalogo.jpg',
            'Catálogo de produtos da Lu Perfumes & Presentes filtrado por categoria masculino',
            'case__inline-image'
          )}
          ${renderSubBlock(
            'Painel — Dashboard & Produtos',
            `<p>Dashboard reúne os indicadores da operação numa tela só: total de produtos, destaques, campanhas ativas, últimos cadastrados, mais favoritados. Gestão de produtos com CRUD completo, edição de preço individual ou em massa, categorias, destaques e imagens — tudo sem abrir uma linha de código. Uma importação de catálogo em lote (via planilha) está em fase de teste, pensada pra acelerar o cadastro das <span class="case__highlight">500+ peças planejadas</span>.</p>
            <a href="https://www.linkedin.com/posts/devlucasroldao_linkedinbrasil-desenvolvimentoweb-programaaexaeto-activity-7454594868678463489-AMJM" target="_blank" rel="noopener noreferrer" class="case__inline-link">Mostrei esse processo de cadastro aqui${EXTERNAL_LINK_ICON}</a>`
          )}
          ${renderImage(
            '/images/cases/lu-admin-produto.jpg',
            'Painel administrativo de produtos da Lu Perfumes & Presentes, com lista de destaques e mais vendidos',
            'case__inline-image'
          )}
          ${renderSubBlock(
            'Painel — Marca & Promoções',
            '<p>Controle total da identidade visual do site (banners, slides, imagens institucionais) direto pelo painel, além de um módulo de promoções com campanhas por período, seleção de produtos participantes e ativação/desativação com um clique.</p>'
          )}
          ${renderSubBlock(
            'Painel — Comunicação & Reputação',
            `<p>Módulo de comunicação (em teste) centraliza contatos de WhatsApp, mensagens prontas e envio de catálogo em PDF. Integração com Google Reviews sincroniza automaticamente as avaliações reais da loja pro site — mantendo a reputação sempre atualizada sem trabalho manual.</p>
            <a href="https://www.linkedin.com/posts/devlucasroldao_marketingdigital-marketinglocal-googlemeunegaejcio-activity-7486031539282231297-O9OF" target="_blank" rel="noopener noreferrer" class="case__inline-link">Contei sobre essa campanha de avaliações aqui${EXTERNAL_LINK_ICON}</a>`
          )}
          ${renderSubBlock(
            'Analytics & extras',
            '<p>Painel de Analytics próprio (produtos mais vistos, páginas mais acessadas, comportamento do visitante), gerenciador de pop-ups pra avisos temporários, e um bloco de anotações internas pra organizar a operação do dia a dia da loja. Tanto o site público quanto o painel foram construídos com suporte a modo claro e escuro desde a base.</p>'
          )}
          ${renderSubBlock(
            'Fotos reais',
            '<p>Fotos reais dos produtos, não banco de imagem nem geração por IA — decisão consciente pra manter o catálogo confiável e fiel ao que a cliente realmente vai receber. Estratégia de marketing começou antes do site: incentivo real a avaliações no Google, construindo uma base de <span class="case__highlight">mais de 100 avaliações com média 5 estrelas</span> antes mesmo do lançamento — pra quando o site entrar no ar, já ter reputação local forte pra SEO. Página de links dedicada pra bio do Instagram. <span class="case__highlight">Sem checkout, decisão deliberada</span> — venda fecha no WhatsApp, mantendo o atendimento humano no centro.</p>'
          )}
        </div>`,
      ],
      [
        'Resultado',
        '<p>Site funcional, catálogo em fase de cadastro: das <span class="case__highlight">mais de 500 peças planejadas</span>, <span class="case__highlight">~350 já foram fotografadas</span> e <span class="case__highlight">35 já estão cadastradas</span> — o cadastro é manual e segue em andamento, com meta de passar das 500. A base de reputação (<span class="case__highlight">100+ avaliações 5 estrelas</span>) já está pronta pro dia em que o domínio for ao ar.</p>',
      ],
    ],
    learning:
      '"A decisão errada mais valiosa desse projeto foi esconder o preço no início — corrigir isso me ensinou que simplificar o trabalho do desenvolvedor e simplificar a vida do cliente nem sempre são a mesma coisa, e às vezes é preciso escolher a segunda opção mesmo custando mais trabalho técnico."',
  },
  {
    id: 'case-helena-lima',
    href: '/case-helena-lima',
    title: 'Helena Lima',
    result: 'Do briefing ao site no ar em menos de 24 horas.',
    tags: ['React', 'TypeScript', 'Vite'],
    stackText: 'React, TypeScript, Vite, Tailwind CSS, Vercel',
    proof: [
      { label: 'Site no ar', href: 'https://helena-lima-landing.vercel.app/', note: 'landing page' },
      { label: 'Instagram', href: 'https://www.instagram.com/helenagestao/', note: '@helenagestao' },
    ],
    meta: [
      ['Cliente', 'Helena Lima — gestão administrativa para MEIs, autônomos e empresas'],
      ['Período', 'Set 2026 (menos de 24 horas)'],
      ['Papel', 'Estratégia, identidade visual, fotografia, templates, documentos e desenvolvimento'],
    ],
    teaserImage: '/images/cases/helena-teaser.jpg',
    teaserImageAlt: 'Hero do site Helena Lima — Gestão pra Negócios, com foto dela e chamada para contato',
    bannerImage: '/images/cases/helena-banner.jpg',
    bannerImageAlt: 'Hero do site Helena Lima com foto profissional e botões de contato no WhatsApp',
    liveUrl: 'https://helena-lima-landing.vercel.app/',
    instagramUrl: 'https://www.instagram.com/helenagestao/',
    teaserHeadline: 'Do zero ao ar em menos de 24 horas',
    teaserProblem:
      'Uma ideia que tinha esfriado: perfil criado, logo pronta, nenhum post. Posicionamento, identidade, fotos, documentos, templates e site — tudo do zero em um dia.',
    teaserTags: ['Marca pessoal', 'Landing page', 'Entregue em 24h'],
    blocks: [
      [
        'Problema',
        `<p>A Helena é minha amiga e foi minha colega durante um ano na Conecte Telecom. Lá, ela estruturou do zero um setor financeiro que não tinha organização nenhuma. Depois de sair, foi trabalhar como PJ e surgiu a vontade de prestar serviço pra outras empresas — mas a ideia ficou parada: tinha um perfil no Instagram chamado <span class="case__highlight">Flow Gestão</span>, com logo criada, e zero posts. A identidade não era dela, era de uma empresa genérica. E serviço administrativo é difícil de vender pra uma marca sem rosto.</p>
        <p>O maior ativo que ela tinha era ela mesma: a experiência, a história que começa aos 14 anos como secretária num salão, e um case real e forte — o financeiro da Conecte, estruturado por ela. O projeto precisava colocar isso na frente.</p>`,
      ],
      [
        'Decisão',
        `<p>A primeira decisão não foi visual, foi estratégica: <span class="case__highlight">sair da marca e colocar a Helena no centro</span>. O perfil deixaria de ser uma empresa genérica de gestão e passaria a ser a Helena Lima, com o rosto, a história e o jeito dela de falar. Daí saiu tudo o resto.</p>
        <p>A frase que guiou o projeto veio da própria Helena quando descreveu o trabalho dela: <em>"Eu sei organizar o seu negócio, mas antes de organizar, eu quero entender você."</em> Isso se tornou o posicionamento, o tom de voz e a estrutura de toda a página.</p>`,
      ],
      [
        'Solução',
        `<div class="case__sub-blocks">
          ${renderSubBlock(
            'Estratégia & identidade visual',
            '<p>Briefing estruturado no ChatGPT, diagnóstico e direções visuais desenvolvidas no Claude. Três direções de identidade, com a Helena escolhendo e refinando. Logo, monograma, paleta "papel" (off-white, bege, grafite e verde-musgo), tipografia e regras de uso — tudo documentado antes de qualquer tela ser gerada.</p>'
          )}
          ${renderSubBlock(
            'Fotografia',
            '<p>115 fotos produzidas na sessão, já com a paleta da marca em mente. A parede medida mostrou que a cor já estava muito perto do tom "papel" da identidade — isso eliminou o uso de IA pra trocar fundo, evitando o risco de distorção no rosto (crítico numa marca pessoal). As telas dos notebooks nas fotos de bastidor foram desfocadas antes de qualquer uso: a Helena promete confidencialidade em contrato, e publicar planilhas reais seria o pior tipo de exposição.</p>'
          )}
          ${renderImage(
            '/images/cases/helena-site.jpg',
            'Seção "Prazer, Helena Lima" — história e apresentação da profissional no site',
            'case__inline-image'
          )}
          ${renderSubBlock(
            'Landing page',
            `<p>Primeira versão gerada no <span class="case__highlight">Figma Make</span> com o prompt completo (copy, identidade e regra de não inventar nenhum dado). Migração pro VS Code com Claude Code: ícones, botões, animações, fotos reais, mobile e deploy na Vercel. Estrutura da página responde, em ordem, às perguntas que alguém faz antes de chamar um profissional — quem é ela, se isso tem a ver com o meu problema, como funciona, se ela já fez isso antes e como eu começo.</p>
            <a href="https://helena-lima-landing.vercel.app/" target="_blank" rel="noopener noreferrer" class="case__inline-link">Ver o site no ar${EXTERNAL_LINK_ICON}</a>`
          )}
          ${renderSubBlock(
            'Templates, documentos e IA',
            '<p>Primeiros templates no Canva com a paleta, fontes e regras da identidade — pra ela criar posts sem depender de ninguém. Proposta comercial e contrato base com identidade visual completa, em Word e PDF. IA configurada com um projeto próprio do perfil (posicionamento, tom de voz, o que evitar) — qualquer legenda ou ideia que ela pedir já sai na voz da marca.</p>'
          )}
        </div>`,
      ],
      [
        'Resultado',
        `<p>Do briefing ao site no ar em <span class="case__highlight">menos de 24 horas</span>. Entregas: posicionamento, tom de voz, identidade visual completa, logo e monograma, 115 fotos, perfil no Instagram (<a href="https://www.instagram.com/helenagestao/" target="_blank" rel="noopener noreferrer" class="case__text-link">@helenagestao</a>), templates no Canva, IA configurada com a documentação da marca, proposta comercial, contrato base e landing page no ar.</p>`,
      ],
    ],
    learning:
      '"Fazer rápido com IA não quer dizer que tudo funciona de primeira. O Figma Make disse que tinha corrigido as fontes — e não tinha. Escondeu um plugin que bloqueava toda a indexação no Google. A IA acelera, mas quem decide é quem conhece o projeto e sabe onde desconfiar."',
  },
];
