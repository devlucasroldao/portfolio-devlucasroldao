import { getIconSvg, iconTitles } from './icons.js';
import { BADGE_ICONS } from './badge-icons.js';
import { EXTERNAL_LINK_ICON, INSTAGRAM_ICON, asFooterBrandIcon } from './ui-icons.js';

const GITHUB_ICON = asFooterBrandIcon(getIconSvg('github'));

function renderStack(groups) {
  const icons = groups.flatMap((group) => group.icons);
  return `
    <div class="case__stack">
      ${icons
        .map(
          (key) => `
        <span class="stack-icon" tabindex="0" title="${iconTitles[key]}" data-tooltip="${iconTitles[key]}">${getIconSvg(key)}</span>
      `
        )
        .join('')}
    </div>
  `;
}

function renderBlock(label, html) {
  return `
    <div class="case__block">
      <span class="case__block-label">${label}</span>
      ${html}
    </div>
  `;
}

// Sub-divisões dentro de um bloco (só a Solução do Conecte usa, por ter
// muita coisa pra cobrir) — mesmo padrão tipográfico do label de bloco,
// só um nível menor.
function renderSubBlock(label, html) {
  return `
    <div class="case__sub-block">
      <span class="case__sub-label">${label}</span>
      ${html}
    </div>
  `;
}

export const casesData = [
  {
    id: 'case-conecte',
    href: '/case-conecte',
    reverse: false,
    eyebrow: 'Case 01 — Segurança & Performance',
    badgeIcon: 'shield',
    title: 'Conecte Telecom',
    meta: [
      ['Empresa', 'Conecte Telecom'],
      ['Período', 'Jun–Jul 2026 (2 meses)'],
      ['Papel', 'Desenvolvimento full-stack + Auditoria de segurança'],
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
    stack: [
      { label: 'Frontend', icons: ['nextdotjs', 'typescript', 'tailwindcss'] },
      { label: 'Banco/Infra', icons: ['supabase', 'vercel'] },
    ],
  },
  {
    id: 'case-lu-perfumes',
    href: '/case-lu-perfumes',
    reverse: true,
    eyebrow: 'Case 02 — Produto pré-lançamento',
    badgeIcon: 'tag',
    title: 'Lu Perfumes & Presentes',
    meta: [
      ['Empresa', 'Lu Perfumes & Presentes'],
      ['Período', '2025–2026 (em andamento)'],
      ['Papel', 'Desenvolvimento full-stack + Estratégia digital'],
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
    stack: [
      { label: 'Frontend', icons: ['nextdotjs', 'javascript'] },
      { label: 'Banco/Infra', icons: ['supabase', 'vercel'] },
    ],
  },
  {
    id: 'case-helena-lima',
    href: '/case-helena-lima',
    reverse: false,
    eyebrow: 'Case 03 — Marca pessoal + Landing page',
    badgeIcon: 'star',
    title: 'Helena Lima',
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
    stack: [
      { label: 'Frontend', icons: ['react', 'typescript', 'tailwindcss', 'vite'] },
      { label: 'Infra', icons: ['vercel'] },
    ],
  },
  {
    id: 'case-rabisco-previa',
    href: '/case-rabisco-previa',
    reverse: true,
    eyebrow: 'Case 04 — Produto próprio + Código aberto',
    badgeIcon: 'eye',
    title: 'Rabisco Prévia',
    meta: [
      ['Produto', 'Ferramenta interna da agência Rabisco'],
      ['Período', 'Out 2026 (2 dias até o painel no ar; hoje em uso real)'],
      ['Papel', 'Escopo de produto, desenvolvimento full-stack e testes'],
    ],
    teaserImage: '/images/cases/previa-teaser.jpg',
    teaserImageAlt: 'Três celulares mostrando a Rabisco Prévia: um carrossel aberto, o grid numerado dos próximos posts e um Reels com legenda',
    bannerImage: '/images/cases/previa-banner.jpg',
    bannerImageAlt: 'Painel da equipe montando a semana de um cliente ao lado do celular com o grid numerado que o cliente recebe',
    liveUrl: 'https://rabisco-previa.vercel.app/p/demo',
    liveLabel: 'Ver demo ao vivo',
    repoUrl: 'https://github.com/devlucasroldao/rabisco-previa',
    instagramUrl: 'https://www.instagram.com/rabisco.agencia/',
    teaserHeadline: 'Do .zip no WhatsApp a um link por semana',
    teaserProblem:
      'O conteúdo da semana ia pro cliente num .zip pelo WhatsApp, e ele aprovava sem ver como o feed ia ficar. Construí um link que abre no celular com cara de perfil do Instagram, com os posts numerados.',
    teaserTags: ['Produto em uso real', 'Código aberto', 'R$ 0 de infraestrutura'],
    blocks: [
      [
        'Problema',
        `<p>Na Rabisco, o conteúdo da semana ia pro cliente numa <span class="case__highlight">pasta zipada pelo WhatsApp</span>. Esse fluxo falhava em três pontos. Arte solta não mostra como o post fica no feed, ao lado dos outros. A legenda chegava separada da arte, e quem aprovava tinha que juntar as peças sozinho. E o retorno vinha vago: "muda aquele azul" não diz de qual post o cliente está falando.</p>
        <p>No fim, o cliente aprovava sem ver o feed, e a equipe perdia tempo interpretando mensagem solta.</p>
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7518291210910982144/" target="_blank" rel="noopener noreferrer" class="case__inline-link">Contei sobre a Prévia neste post${EXTERNAL_LINK_ICON}</a>`,
      ],
      [
        'Decisão',
        `<p>A decisão que definiu o projeto foi o que ele não faz: <span class="case__highlight">só visualização, de propósito</span>. Sem login pro cliente, sem comentários, sem aprovação dentro do app. O feedback continua no WhatsApp, por print, citando o número do post ("Post 3: trocar a foto"). O número resolve o "de qual post você está falando" sem criar sistema novo pra manter nem nada novo pro cliente aprender.</p>
        <p>O mesmo critério cortou upload em massa e duplicar apresentação: o volume semanal é baixo, e duplicar dobraria o armazenamento. Antes da primeira linha de código, o escopo foi fechado numa <span class="case__highlight">especificação escrita</span> (problema, usuários, o que entra, o que fica de fora, dados, stack e riscos), pra ferramenta interna não cair no erro clássico de crescer sem parar.</p>`,
      ],
      [
        'Solução',
        `<div class="case__sub-blocks">
          ${renderSubBlock(
            'O fluxo em 25 segundos',
            '<p>Um link por semana. A equipe monta a apresentação no painel, copia o link e manda no WhatsApp. O cliente abre no celular e vê um perfil com cara de Instagram, com os próximos posts numerados.</p>'
          )}
          ${renderVideo(
            '/videos/previa-demo.mp4',
            '/images/cases/previa-video-poster.jpg',
            'Vídeo de 25 segundos: antes, o conteúdo ia num .zip pelo WhatsApp; agora, um link mostra o grid numerado e o ajuste cita o número do post'
          )}
          ${renderSubBlock(
            'Tela do cliente',
            '<p>Sem login, sem menu, nada pra aprender: quem lê o feed todo dia já sabe usar. Grid numerado, visualizador em tela cheia pra post, carrossel (com swipe e contador) e Reels, sempre com legenda e hashtags. Stories da semana com o anel que fica cinza depois de visto. Segue o tema claro ou escuro do aparelho.</p>'
          )}
          ${renderImage(
            '/images/cases/previa-cliente.jpg',
            'Visualizador da Rabisco Prévia no celular: carrossel com contador, Reels com controles e story da semana',
            'case__inline-image'
          )}
          ${renderSubBlock(
            'Painel da equipe',
            '<p>Cadastro de clientes e apresentações por semana. Novo post com arrastar e soltar e barra de progresso real; reordenar posts arrastando, <span class="case__highlight">inclusive pelo teclado</span>. Medidor de armazenamento e limpeza em lote, porque o limite que aperta é 1 GB de arquivos. Redesenhado no estilo Notion com a identidade da Rabisco, com tema claro e escuro e gaveta no celular.</p>'
          )}
          ${renderImage(
            '/images/cases/previa-painel.jpg',
            'Painel da Rabisco Prévia nos temas escuro e claro, com a lista de posts e stories da semana de um cliente',
            'case__inline-image'
          )}
          ${renderSubBlock(
            'Vídeo comprimido no navegador',
            '<p>Vídeo de iPhone (HEVC) quase sempre passa de 50 MB, o limite por arquivo do plano gratuito do Supabase. Em vez de pagar servidor de vídeo, a compressão roda no navegador de quem monta a semana, com ffmpeg.wasm, e já gera a capa. Como o Turbopack não empacota o worker do ffmpeg, ele vem de um CDN com versão fixa e hash SHA-384 conferido antes do uso. Um vídeo real de 43 s caiu de <span class="case__highlight">57,4 MB para 6,7 MB</span>.</p>'
          )}
          ${renderSubBlock(
            'Segurança',
            '<p>O link do cliente dá acesso a conteúdo ainda não publicado, então segurança entrou como parte do produto, não como acabamento. A tela do cliente nunca fala com o banco: o servidor recebe o token, busca só aquela apresentação e devolve URLs assinadas, válidas por 6 horas, de um bucket privado. O painel usa a chave pública com a sessão de quem entrou, sob RLS, e cada ação confere o login no servidor. Acesso público direto ao banco: <span class="case__highlight">nenhum, conferido por script</span>. O link pode ser desativado, reativado ou regenerado a qualquer momento.</p>'
          )}
          ${renderSubBlock(
            'Prova, não "parece certo"',
            '<p><span class="case__highlight">41 testes de unidade</span> e teste de ponta a ponta com Playwright contra o Supabase real. O painel foi redesenhado inteiro e a tela do cliente passou intacta, provado por comparação de capturas em 7 telas, no claro e no escuro: só o rodapé da assinatura mudou. Contraste validado por script no padrão WCAG AA. Os dois bugs mais caros foram resolvidos na causa. A "senha incorreta" no login era, na verdade, uma chave pública errada (erro 401 do Supabase). E os modais abrindo no canto vinham do reset do Tailwind zerando a margem que o diálogo nativo usa pra se centralizar; a correção veio junto com um teste que mede o centro do modal em 1280 px e em 375 px.</p>'
          )}
          ${renderSubBlock(
            'Identidade & página pública',
            `<p>Página inicial e páginas de erro na identidade da Rabisco (terracota, mostarda e creme), com o mockup de celular feito em HTML e CSS. Uma demo pública mostra o resultado sem login, e a assinatura "Plataforma criada por Lucas Roldão" no rodapé leva pra este portfólio.</p>
            <a href="https://rabisco-previa.vercel.app/p/demo" target="_blank" rel="noopener noreferrer" class="case__inline-link">Abrir a demo no celular${EXTERNAL_LINK_ICON}</a>`
          )}
          ${renderImage(
            '/images/cases/previa-pagina-inicial.jpg',
            'Página inicial da Rabisco Prévia no desktop e no celular, em terracota, com mockup do grid de posts',
            'case__inline-image'
          )}
          ${renderSubBlock(
            'IA como ferramenta, não como piloto',
            '<p>Claude como par de trabalho (escopo, revisão dos relatórios, prompt de cada etapa) e Claude Code como executor no repositório. As decisões, os testes no Preview (inclusive em iPhone e Android) e os merges ficaram comigo. E teve proposta vetada: uma cor própria pro anel dos stories (ficou a convenção visual do Instagram) e o upload em massa.</p>'
          )}
        </div>`,
      ],
      [
        'Resultado',
        `<p>Da especificação ao painel com identidade no ar em <span class="case__highlight">dois dias</span> (13 e 14/10/2026), a <span class="case__highlight">custo de infraestrutura zero</span> (planos gratuitos do Supabase e da Vercel). Vídeos de <span class="case__highlight">88% a 93% menores</span>, zero acesso público ao banco e a tela do cliente intacta depois de um redesenho completo do painel. O código é aberto, então cada número aqui pode ser conferido no <a href="https://github.com/devlucasroldao/rabisco-previa" target="_blank" rel="noopener noreferrer" class="case__text-link">repositório</a>.</p>
        <p>Fase atual: uso real com clientes por 2 a 3 semanas, anotando cada atrito, sem construir módulo novo. Os números de uso entram aqui depois disso. Limites conhecidos e aceitos: 1 GB de arquivos (por isso só as três últimas semanas de cada cliente ficam guardadas, com os originais no Drive), compressão testada no navegador de computador e ainda não no celular, e hospedagem no plano Hobby da Vercel, que pede o Pro pra uso comercial pleno. Essa decisão ainda está em aberto.</p>`,
      ],
    ],
    learning:
      '"Prova vale mais que \'parece certo\'. Os dois bugs mais caros tinham causa em outra camada: a \'senha incorreta\' era uma chave errada, e o modal torto era o reset do CSS. Remendar o sintoma teria parecido resolvido. E o escopo que escolheu não crescer foi o que deixou o produto de pé: cada coisa que eu não construí é uma coisa que eu não preciso manter."',
    stack: [
      { label: 'Frontend', icons: ['nextdotjs', 'typescript', 'zod', 'tailwindcss'] },
      { label: 'Banco/Infra', icons: ['supabase', 'vercel'] },
      { label: 'Vídeo', icons: ['ffmpeg'] },
    ],
  },
];

// Foto real — mesma vaga que o placeholder ocupava, sem a borda tracejada
// e o texto "imagem real aqui". `eager`: só os 2 banners full-bleed do
// topo de cada case usam isso (primeira dobra, carregam prioritário);
// todo o resto usa loading="lazy" por padrão.
function renderImage(src, alt, extraClass = '', { eager = false } = {}) {
  const loadingAttrs = eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"';
  return `<img src="${src}" alt="${alt}" class="${extraClass}" ${loadingAttrs} />`;
}

// Vídeo curto dentro do case — com controles, sem autoplay (respeita quem
// pede menos movimento sem precisar de checagem extra) e preload="none":
// só baixa o arquivo quando a pessoa aperta o play; até lá, aparece o poster.
function renderVideo(src, poster, label) {
  return `<video class="case__inline-video" src="${src}" poster="${poster}" controls muted playsinline preload="none" aria-label="${label}"></video>`;
}

// Selo circular reforçando a categoria do case — círculo é a exceção de
// forma prevista no briefing pra ícone isolado. Só aparece no teaser da
// home, não na página de case dedicada.
function renderCaseBadge(data) {
  return `
    <span class="case__badge" title="${data.eyebrow}" aria-hidden="true">
      ${BADGE_ICONS[data.badgeIcon] ?? ''}
    </span>
  `;
}

function renderTeaserTags(tags) {
  return `
    <div class="case-teaser__tags">
      ${tags.map((tag) => `<span class="case-teaser__tag">${tag}</span>`).join('')}
    </div>
  `;
}

function renderCaseMeta(meta) {
  return `
    <div class="case-full__meta">
      ${meta
        .map(
          ([label, value]) => `
        <div class="case-full__meta-item">
          <span class="case-full__meta-label">${label}</span>
          <span class="case-full__meta-value">${value}</span>
        </div>
      `
        )
        .join('')}
    </div>
  `;
}

// Link pro site real + Instagram da empresa + trabalho de marketing —
// perto da meta-informação, tratamento discreto e igual em todos os cases
// (ver .case-full__links). O link de marketing já chega filtrado nesse
// cliente específico (?cliente=... lido por marketing-page.js) — quem
// clicou a partir do case da Conecte não precisa filtrar de novo lá.
// Campos opcionais: `marketingClient` (só quem tem artes na página de
// marketing), `repoUrl` (só projeto com código público, ex.: Rabisco
// Prévia) e `liveLabel` (quando o link ao vivo é uma demo, não um site).
function renderCaseLinks(data) {
  const repoLink = data.repoUrl
    ? `<a href="${data.repoUrl}" target="_blank" rel="noopener noreferrer" class="case-full__live-link">${GITHUB_ICON}Ver código no GitHub</a>`
    : '';
  const instagramLink = data.instagramUrl
    ? `<a href="${data.instagramUrl}" target="_blank" rel="noopener noreferrer" class="case-full__instagram-link">${INSTAGRAM_ICON}Instagram</a>`
    : '';
  const marketingLink = data.marketingClient
    ? `<a href="/marketing?cliente=${data.marketingClient}" class="case-full__instagram-link">Trabalho de marketing →</a>`
    : '';
  return `
    <div class="case-full__links">
      <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="case-full__live-link">${data.liveLabel ?? 'Ver site ao vivo'}${EXTERNAL_LINK_ICON}</a>
      ${repoLink}
      ${instagramLink}
      ${marketingLink}
    </div>
  `;
}

// "Próximo" segue a ordem de casesData, ciclicamente
// (Conecte -> Lu Perfumes -> Helena Lima -> Rabisco Prévia -> Conecte).
function renderNextCaseNav(currentId) {
  const idx = casesData.findIndex((c) => c.id === currentId);
  const next = casesData[(idx + 1) % casesData.length];
  return `
    <a href="${next.href}" class="case-next">
      <span class="case-next__eyebrow">Próximo case</span>
      <span class="case-next__title">${next.title} →</span>
    </a>
  `;
}

function renderCaseTeaser(data) {
  return `
    <article class="case${data.reverse ? ' case--reverse' : ''}">
      <div class="case__media case-teaser__media">
        <a href="${data.href}" class="case-teaser__image-link" aria-label="Ver case completo: ${data.title}">
          ${renderImage(data.teaserImage, data.teaserImageAlt, 'case-teaser__image')}
        </a>
        ${renderCaseBadge(data)}
      </div>
      <div class="case__content case-teaser__content">
        <span class="case__eyebrow">${data.title}</span>
        <h3 class="case__title">${data.teaserHeadline}</h3>
        <p class="case-teaser__problem">${data.teaserProblem}</p>
        ${renderTeaserTags(data.teaserTags)}
        <a href="${data.href}" class="case-teaser__link">Ver case completo →</a>
      </div>
    </article>
  `;
}

export function casesTeaserTemplate() {
  return `
    <section class="cases" id="cases">
      <div class="cases__header">
        <span class="cases__eyebrow">Cases selecionados</span>
        <h2 class="cases__heading">Onde estratégia encontra <span class="cases__heading-accent">forma</span>.</h2>
        <p class="cases__subtitle">Trabalhos reais, contados do jeito que aconteceram — inclusive o que não deu certo de primeira.</p>
      </div>
      <div class="case-list">
        ${casesData.map(renderCaseTeaser).join('')}
      </div>
    </section>
  `;
}

export function renderCaseFull(caseId) {
  const data = casesData.find((c) => c.id === caseId);
  if (!data) return '';

  return `
    <article class="case-full" id="${data.id}">
      <div class="case-full__banner">
        ${renderImage(data.bannerImage, data.bannerImageAlt, 'case-full__banner-image', { eager: true })}
      </div>

      <div class="case-full__header">
        ${renderTeaserTags(data.teaserTags)}
        <span class="case__eyebrow">${data.eyebrow}</span>
        <h1 class="case__title">${data.title}</h1>
        <p class="case__subtitle">${data.teaserProblem}</p>
        ${renderCaseMeta(data.meta)}
        ${renderCaseLinks(data)}
        <div class="case-full__stack">
          <span class="case-full__meta-label">Stack</span>
          ${renderStack(data.stack)}
        </div>
      </div>

      <div class="case-full__body">
        <div class="case-full__content">
          ${data.blocks.map(([label, html]) => renderBlock(label, html)).join('')}

          <blockquote class="case__learning">${data.learning}</blockquote>
        </div>

        ${renderNextCaseNav(data.id)}
      </div>
    </article>
  `;
}

// Fallback de toque pro tooltip do Stack (:hover não existe em touch) —
// tocar no ícone alterna o tooltip (fecha os outros abertos); tocar fora
// de qualquer ícone fecha tudo. Usa o evento "click" (não touchstart) de
// propósito: no mobile o navegador só dispara click num toque de verdade,
// não num arrasto de rolagem — evita abrir o tooltip sem querer ao rolar
// a página por cima do ícone.
export function initStackTooltips() {
  const icons = document.querySelectorAll('.stack-icon');
  if (!icons.length) return;

  icons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      const wasActive = icon.classList.contains('is-active');
      icons.forEach((i) => i.classList.remove('is-active'));
      if (!wasActive) icon.classList.add('is-active');
      e.stopPropagation();
    });
  });

  document.addEventListener('click', () => {
    icons.forEach((i) => i.classList.remove('is-active'));
  });
}
