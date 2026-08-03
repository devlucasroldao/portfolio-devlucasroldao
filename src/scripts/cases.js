import { getIconSvg, iconTitles } from './icons.js';
import { BADGE_ICONS } from './badge-icons.js';
import { EXTERNAL_LINK_ICON } from './ui-icons.js';

function renderStack(groups) {
  return `
    <div class="case__stack">
      ${groups
        .map(
          (group) => `
        <div class="stack-group">
          <span class="stack-group__label">${group.label}</span>
          <div class="stack-group__icons">
            ${group.icons
              .map(
                (key) => `
              <span class="stack-icon" title="${iconTitles[key]}">${getIconSvg(key)}</span>
            `
              )
              .join('')}
          </div>
        </div>
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
    imageAlt: 'Screenshot real do site da Conecte Telecom — substituir',
    teaserHeadline: 'De site solto a plataforma real',
    teaserProblem:
      'De landing page genérica a plataforma completa: admin sem depender de código, mobile redondo, analytics de verdade — e uma vulnerabilidade crítica corrigida no meio do caminho.',
    teaserTags: ['Plataforma completa', 'Contratação digital', 'Segurança auditada'],
    blocks: [
      [
        'Problema',
        `<p>Durante meses, eu sequer sabia que a Conecte tinha um site oficial — e eu trabalhava lá. Isso já dizia tudo: o site existia, mas era tão desatualizado e distante da identidade da empresa que passava despercebido até por quem trabalhava dentro dela. Os próprios gestores sabiam que aquilo não representava a marca. Recebi liberdade total pra reconstruir a presença digital do zero.</p>
        <a href="https://www.linkedin.com/posts/devlucasroldao_reestrutura%C3%A7%C3%A3o-site-conecte-telecom-activity-7468042231271026688-U9Ty" target="_blank" rel="noopener noreferrer" class="case__inline-link">Contei mais sobre essa descoberta neste post${EXTERNAL_LINK_ICON}</a>`,
      ],
      [
        'Decisão',
        '<p>A decisão que definiu o projeto não foi técnica, foi estratégica: pensei no cenário em que, no futuro, eu não estivesse mais na empresa. O sistema não podia depender de alguém mexendo em código toda vez que fosse preciso trocar uma imagem ou atualizar um plano — por isso o projeto virou uma plataforma com painel administrativo completo, não só um site bonito. Essa mesma lógica se repetiu quando percebi que clientes queriam contratar mas não conseguiam assinar por estarem fora da cidade — decisão de construir contratação 100% digital, o que por sua vez exigiu revisar toda a arquitetura de segurança da aplicação a fundo.</p>',
      ],
      [
        'Solução',
        `<div class="case__sub-blocks">
          ${renderSubBlock(
            'Plataforma & Admin',
            '<p>Painel administrativo completo — planos (com ou sem preço visível), textos, imagens, conteúdo do site, tudo gerenciável sem depender de código.</p>'
          )}
          ${renderImagePlaceholder('screenshot do painel administrativo', 'case__inline-image')}
          ${renderSubBlock(
            'Contratação digital',
            '<p>Assinatura eletrônica com PDF real, versionamento de templates legais (cada contrato trava a versão exata do texto vigente no momento da assinatura), acesso protegido a documentos sensíveis.</p>'
          )}
          ${renderSubBlock(
            'Segurança',
            '<p>Durante o aprofundamento da arquitetura, uma auditoria revelou uma falha crítica — dados pessoais de clientes ficavam acessíveis sem autenticação. Corrigida com endpoint dedicado, validado antes e depois em produção. Foram tratados 39 achados no total (do crítico ao baixo), incluindo autenticação em duas etapas no admin e correção sistemática de um padrão de falha silenciosa em ~10 pontos do sistema.</p>'
          )}
          ${renderSubBlock(
            'Central de Ajuda',
            '<p>Base de conhecimento com mais de 40 artigos reais cobrindo dúvidas de internet, equipamentos, instalação e contrato — com expansão futura planejada em vídeo.</p>'
          )}
          ${renderImagePlaceholder('screenshot da Central de Ajuda', 'case__inline-image')}
          ${renderSubBlock(
            'Analytics',
            '<p>Painel próprio de conversão (~35 pontos instrumentados) + página de links (bio do Instagram) integrada ao Google Analytics.</p>'
          )}
          ${renderImagePlaceholder('screenshot do painel de Analytics ou página de links', 'case__inline-image')}
          ${renderSubBlock(
            'Correção de canais',
            '<p>7 números de WhatsApp incorretos identificados e corrigidos, com validação no admin pra impedir recorrência.</p>'
          )}
          ${renderSubBlock('Stack', '<p>Next.js 14, TypeScript, Supabase, Tailwind, Vercel.</p>')}
        </div>`,
      ],
      [
        'Resultado',
        '<p>Performance: 150–1000ms → 2–20ms (medido). Tracking: de ~3 de 19 pontos corretos para 35 de 35 confirmados. Central de Ajuda: de 3 categorias vazias pra mais de 40 artigos publicados. Vulnerabilidade crítica corrigida antes de qualquer incidente. O site deixou de ser uma landing page esquecida e virou uma plataforma que integra marketing, gestão de conteúdo, contratos e suporte — pensada pra continuar funcionando mesmo sem depender de quem a construiu.</p>',
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
    imageAlt: 'Screenshot real do catálogo da Lu Perfumes & Presentes — substituir',
    teaserHeadline: 'Catálogo & atendimento sem perder o humano',
    teaserProblem:
      '"O que você tem de perfume feminino aí?" — a Lu respondia isso, um por um, pra centenas de clientes, sem catálogo, sem histórico, sem parar.',
    teaserTags: ['Catálogo online', '500+ produtos', 'Painel admin autônomo'],
    blocks: [
      [
        'Problema',
        '<p>"Quais perfumes masculinos você tem?" "Quanto custa esse?" — minha mãe respondia isso, uma pessoa de cada vez, fotografando produto por produto pelo WhatsApp, todos os dias. Ela divide a rotina entre atendimento, compra, organização da loja e montagem de kits — e o tempo pra responder cliente por cliente ia ficando cada vez mais curto.</p>',
      ],
      [
        'Decisão',
        '<p>A decisão mais importante foi não tentar substituir o atendimento humano — o catálogo existe pra tornar esse atendimento mais eficiente, não pra eliminá-lo. Dentro disso, teve uma decisão que eu errei e corrigi no meio do caminho: comecei sem mostrar preço nenhum, achando que simplificaria a manutenção com centenas de produtos. Conversando com outras pessoas, percebi que preço é uma das primeiras coisas que o cliente procura — sem ele, muita gente perde interesse antes mesmo de chamar no WhatsApp. Reestruturei a plataforma inteira pra ter gerenciamento de preço via painel, o que aumentou bastante a complexidade (hoje são 500+ produtos cadastrados), mas resolveu o problema de verdade.</p>',
      ],
      [
        'Solução',
        `<p>Catálogo completo navegável por categoria/marca, com kits personalizados prontos ou montados pelo cliente, e envio direto pro WhatsApp já com a seleção pronta.</p>
        ${renderImagePlaceholder('screenshot do catálogo de produtos', 'case__inline-image')}
        <p>Painel administrativo: cadastro de produto, edição de preço individual ou em massa, promoções, dashboard, e até anotações internas pra facilitar a operação da loja.</p>
        ${renderImagePlaceholder('screenshot do cadastro de produto no admin', 'case__inline-image')}
        <p>Fotos reais dos produtos, não banco de imagem nem geração por IA — decisão consciente pra manter o catálogo confiável e fiel ao que a cliente realmente vai receber. Estratégia de marketing começou antes do site: incentivo real a avaliações no Google, construindo uma base de mais de 100 avaliações com média 5 estrelas antes mesmo do lançamento — pra quando o site entrar no ar, já ter reputação local forte pra SEO. Página de links dedicada pra bio do Instagram. Sem checkout, decisão deliberada — venda fecha no WhatsApp, mantendo o atendimento humano no centro.</p>`,
      ],
      [
        'Resultado',
        '<p>Site funcional, em fase final de cadastro de produto antes do lançamento oficial. Sem número de tráfego ainda (justo, é pré-lançamento) — mas a base de reputação (100+ avaliações 5 estrelas) e a estrutura de 500+ produtos já estão prontas pro dia em que o domínio for ao ar.</p>',
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

function renderImagePlaceholder(imageAlt, extraClass = '') {
  return `
    <div class="case__image-placeholder${extraClass ? ` ${extraClass}` : ''}">
      [ imagem real aqui — ${imageAlt} ]
    </div>
  `;
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
          ${renderImagePlaceholder(data.imageAlt, 'case-teaser__image')}
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
        <p class="cases__subtitle">Dois projetos reais — do problema bruto ao resultado medido, sem enfeite.</p>
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
        ${renderImagePlaceholder(data.imageAlt, 'case-full__banner-image')}
        <div class="case-full__banner-overlay"></div>
        <div class="case-full__banner-content">
          ${renderTeaserTags(data.teaserTags)}
          <span class="case__eyebrow">${data.eyebrow}</span>
          <h1 class="case__title">${data.title}</h1>
          <p class="case__subtitle">${data.teaserProblem}</p>
          ${renderCaseMeta(data.meta)}
          <div class="case-full__stack">
            <span class="case-full__meta-label">Stack</span>
            ${renderStack(data.stack)}
          </div>
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
