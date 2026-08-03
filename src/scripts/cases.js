import { getIconSvg, iconTitles } from './icons.js';
import { initCodeTabs } from './code-tabs.js';
import { BADGE_ICONS } from './badge-icons.js';

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

const conecteCode = `
  <div class="code-editor">
    <div class="code-editor__tabs">
      <button class="code-editor__tab is-active" data-tab="before">before.ts</button>
      <button class="code-editor__tab" data-tab="after">after.ts</button>
    </div>
    <div class="code-editor__body">
      <pre class="code-editor__panel is-active" data-panel="before"><span class="comment">// busca direta, sem checar quem está pedindo o dado</span>
export async function getClienteData(id: string) {
  return db.clientes.findUnique({ where: { id } });
}</pre>
      <pre class="code-editor__panel" data-panel="after">export async function getClienteData(id: string, session: Session) {
  if (!session?.userId) {
    throw new UnauthorizedError();
  }

  <span class="highlight">// depois: valida a sessão no servidor antes de liberar qualquer dado</span>
  return db.clientes.findUnique({ where: { id } });
}</pre>
    </div>
    <div class="code-editor__note">
      &gt; trecho ilustrativo e generalizado, sem expor o mecanismo real da falha — o snippet definitivo (revisado) entra aqui antes do lançamento.
    </div>
  </div>
`;

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
    teaserTags: ['Identidade visual', '+5 anos de mercado', 'Segurança auditada'],
    blocks: [
      [
        'Problema',
        '<p>O pedido inicial era uma checagem de segurança de rotina antes de migrar o site para domínio próprio. A auditoria revelou uma falha crítica: dados pessoais de clientes ficavam acessíveis sem autenticação. Havia também canais de contato quebrados silenciosamente e um problema de performance específico e mensurável.</p>',
      ],
      [
        'Decisão',
        '<p>Não aceitar "parece corrigido" como critério de conclusão. Isso significou reproduzir os bugs em ambiente controlado em vez de aceitar a primeira explicação plausível, e fazer uma varredura manual completa — clique real em cada um dos ~35 pontos de contato do site — antes de declarar o lançamento pronto, mesmo sob pressão de prazo.</p>',
      ],
      [
        'Solução',
        '<p>Correção da falha de acesso a dados, endpoint de servidor dedicado, autenticação em duas etapas no painel admin, fluxo de assinatura eletrônica com versionamento de contrato, e analytics de conversão construído do zero (~35 pontos instrumentados).</p>',
      ],
      [
        'Resultado',
        `<ul class="case__result-list">
          <li>Performance: 150–1000ms → 2–20ms no carregamento afetado (medido, antes/depois)</li>
          <li>Cobertura de tracking: de ~3 de 19 pontos rastreados corretamente para 35 de 35 confirmados</li>
          <li>Vulnerabilidade crítica identificada e corrigida antes de qualquer incidente registrado</li>
          <li>Impacto em geração de leads ainda não medido em número fechado (domínio recém no ar) — assumido honestamente como qualitativo por enquanto</li>
        </ul>`,
      ],
    ],
    learning:
      '"Parece corrigido" e "está corrigido" são coisas diferentes — a diferença só aparece quando alguém força a reprodução real em vez de aceitar a primeira explicação plausível.',
    code: conecteCode,
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
    teaserTags: ['Catálogo online', 'Kits personalizados', 'Painel admin autônomo'],
    blocks: [
      [
        'Problema',
        '<p>A Lu (mãe do Lucas) revende perfumes e cosméticos há mais de 5 anos, tudo gerenciado manualmente por WhatsApp — sem catálogo, sem organização, sem histórico de pedidos. Ela mal parava de trabalhar respondendo "o que você tem?" e "qual o preço?" repetidamente. Kits personalizados existiam só como ideia, sem execução estruturada.</p>',
      ],
      [
        'Decisão',
        '<p>A mais importante: sem sistema de pagamento, deliberadamente, contrariando o caminho óbvio de e-commerce completo — pagamento online exige responsabilidade legal/fiscal que a Lu não tem estrutura para absorver agora. Toda venda fecha no WhatsApp, mantendo o atendimento humanizado que é o diferencial real dela. Também: JavaScript puro em vez de TypeScript (sem overhead desnecessário pro escopo) e Pages Router em vez de App Router (estabilidade em vez de modernidade, por ser projeto de produção real).</p>',
      ],
      [
        'Solução',
        '<p>Catálogo completo com filtros, busca e categorias; sistema de kits prontos + "monte o seu"; sacola com envio formatado automaticamente pro WhatsApp; painel admin com autonomia total pra Lu gerenciar produtos, preços e campanhas sem depender do filho; segurança implementada (senha fora do bundle público, rate limiting, sanitização de input).</p>',
      ],
      [
        'Estado atual',
        '<p>Site funcional em produção, catálogo em fase de povoamento com produtos e fotos reais. Sem número de tráfego/conversão ainda — lançamento oficial aguarda catálogo completo. O que já mudou, comparado a antes: atendimento que era 100% manual agora tem vitrine própria; pedidos que não tinham histórico agora ficam salvos automaticamente.</p>',
      ],
    ],
    learning:
      'O erro mais caro foi pensar demais em vez de meter a mão na massa — um componente específico passou por mais de 9 iterações por tentar prever o resultado sem implementar e ver. Projeto real ensina o que projeto fictício não ensina: lidar com mudança de ideia do cliente e limitações operacionais reais é a diferença entre desenvolvedor e profissional.',
    code: null,
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
        </div>
      </div>

      <div class="case-full__body">
        <div class="case-full__content">
          ${data.blocks.map(([label, html]) => renderBlock(label, html)).join('')}

          <blockquote class="case__learning">${data.learning}</blockquote>

          ${data.code ?? ''}

          ${renderStack(data.stack)}
        </div>

        ${renderNextCaseNav(data.id)}
      </div>
    </article>
  `;
}

export function initCodeEditors() {
  document.querySelectorAll('.code-editor').forEach((editor) => initCodeTabs(editor));
}
