import { getIconSvg, iconTitles } from './icons.js';
import { BADGE_ICONS } from './badge-icons.js';
import { EXTERNAL_LINK_ICON, INSTAGRAM_ICON } from './ui-icons.js';

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
    href: 'case-conecte.html',
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
            `<p>Durante o aprofundamento da arquitetura, uma auditoria revelou uma <span class="case__highlight">falha crítica</span> — dados pessoais de clientes ficavam acessíveis sem autenticação. Corrigida com endpoint dedicado, validado antes e depois em produção. Foram tratados <span class="case__highlight">39 achados</span> no total (do crítico ao baixo), incluindo autenticação em duas etapas no admin e correção sistemática de um padrão de falha silenciosa em ~10 pontos do sistema.</p>
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
        '<p>Performance: 150–1000ms → <span class="case__highlight">2–20ms</span> (medido). Tracking: de ~3 de 19 pontos corretos para <span class="case__highlight">35 de 35 confirmados</span>. Central de Ajuda: de 3 categorias vazias pra mais de 40 artigos publicados. <span class="case__highlight">Vulnerabilidade crítica corrigida antes de qualquer incidente</span>. O site deixou de ser uma landing page esquecida e virou uma plataforma que integra marketing, gestão de conteúdo, contratos e suporte — pensada pra continuar funcionando mesmo sem depender de quem a construiu.</p>',
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
    href: 'case-lu-perfumes.html',
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
    teaserHeadline: 'Catálogo & atendimento sem perder o humano',
    teaserProblem:
      '"O que você tem de perfume feminino aí?" — a Lu respondia isso, um por um, pra centenas de clientes, sem catálogo, sem histórico, sem parar.',
    teaserTags: ['Catálogo online', 'Meta: 500+ produtos', 'Painel admin autônomo'],
    blocks: [
      [
        'Problema',
        `<p>"Quais perfumes masculinos você tem?" "Quanto custa esse?" — minha mãe respondia isso, uma pessoa de cada vez, fotografando produto por produto pelo WhatsApp, todos os dias. Ela divide a rotina entre atendimento, compra, organização da loja e montagem de kits — e o tempo pra responder cliente por cliente ia ficando cada vez mais curto.</p>
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
        '<p>Site funcional, catálogo ainda em construção: das <span class="case__highlight">mais de 500 peças planejadas</span>, <span class="case__highlight">~350 já foram fotografadas</span> e menos de 100 estão cadastradas até agora — processo manual e ainda em andamento. A base de reputação (<span class="case__highlight">100+ avaliações 5 estrelas</span>) já está pronta pro dia em que o domínio for ao ar.</p>',
      ],
    ],
    learning:
      '"A decisão errada mais valiosa desse projeto foi esconder o preço no início — corrigir isso me ensinou que simplificar o trabalho do desenvolvedor e simplificar a vida do cliente nem sempre são a mesma coisa, e às vezes é preciso escolher a segunda opção mesmo custando mais trabalho técnico."',
    stack: [
      { label: 'Frontend', icons: ['nextdotjs', 'javascript'] },
      { label: 'Banco/Infra', icons: ['supabase', 'vercel'] },
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

// Link pro site real + Instagram da empresa — perto da meta-informação,
// tratamento discreto e igual nos dois cases (ver .case-full__links).
function renderCaseLinks(data) {
  return `
    <div class="case-full__links">
      <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="case-full__live-link">Ver site ao vivo${EXTERNAL_LINK_ICON}</a>
      <a href="${data.instagramUrl}" target="_blank" rel="noopener noreferrer" class="case-full__instagram-link">${INSTAGRAM_ICON}Instagram</a>
    </div>
  `;
}

// Só existem 2 cases — o "próximo" é sempre o outro, ciclicamente
// (Conecte -> Lu Perfumes -> Conecte).
function renderNextCaseNav(currentId) {
  const next = casesData.find((c) => c.id !== currentId) ?? casesData[0];
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
        <p class="cases__subtitle">Dois projetos reais — com as partes feias incluídas, não só o resultado bonito.</p>
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
