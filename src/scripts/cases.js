import { getIconSvg, iconTitles } from './icons.js';
import { initCodeTabs } from './code-tabs.js';

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
    title: 'Conecte Telecom',
    imageAlt: 'Screenshot real do site da Conecte Telecom — substituir',
    teaserProblem:
      'Auditoria de rotina virou vulnerabilidade crítica: dados de clientes acessíveis sem autenticação.',
    teaserStat: {
      label: 'Resultado',
      value: '150–1000ms → 2–20ms no carregamento afetado',
    },
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
    title: 'Lu Perfumes & Presentes',
    imageAlt: 'Screenshot real do catálogo da Lu Perfumes & Presentes — substituir',
    teaserProblem:
      'Atendimento de perfumes e cosméticos 100% manual por WhatsApp, sem catálogo nem histórico de pedidos.',
    teaserStat: {
      label: 'Estado atual',
      value: 'De atendimento 100% manual pra vitrine própria',
    },
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

function renderImagePlaceholder(imageAlt) {
  return `
    <div class="case__image-placeholder">
      [ imagem real aqui — ${imageAlt} ]
    </div>
  `;
}

function renderCaseTeaser(data) {
  return `
    <article class="case${data.reverse ? ' case--reverse' : ''}">
      <div class="case__media">${renderImagePlaceholder(data.imageAlt)}</div>
      <div class="case__content case-teaser__content">
        <span class="case__eyebrow">${data.eyebrow}</span>
        <h3 class="case__title">${data.title}</h3>
        <p class="case-teaser__problem">${data.teaserProblem}</p>
        <div class="case-teaser__stat">
          <span class="case__block-label">${data.teaserStat.label}</span>
          <span class="case-teaser__stat-value">${data.teaserStat.value}</span>
        </div>
        <a href="${data.href}" class="case-teaser__link">Ver case completo →</a>
      </div>
    </article>
  `;
}

export function casesTeaserTemplate() {
  return `
    <section class="cases" id="cases">
      <h2 class="cases__heading">Cases</h2>
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
    <article class="case${data.reverse ? ' case--reverse' : ''}" id="${data.id}">
      <div class="case__media">${renderImagePlaceholder(data.imageAlt)}</div>
      <div class="case__content">
        <span class="case__eyebrow">${data.eyebrow}</span>
        <h1 class="case__title">${data.title}</h1>

        ${data.blocks.map(([label, html]) => renderBlock(label, html)).join('')}

        <blockquote class="case__learning">${data.learning}</blockquote>

        ${data.code ?? ''}

        ${renderStack(data.stack)}
      </div>
    </article>
  `;
}

export function initCodeEditors() {
  document.querySelectorAll('.code-editor').forEach((editor) => initCodeTabs(editor));
}
