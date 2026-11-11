import { site, testimonials, marketingPieces } from '../data/site.js';
import { casesData } from '../data/cases.js';
import { img, win, esc, pixelIcon, ic } from './parts.js';
import { nav, footer } from './layout.js';

function hero() {
  return `
    <header class="hero" id="topo">
      <div class="sky" aria-hidden="true"><span class="cloud c1"></span><span class="cloud c2"></span><span class="cloud c3"></span><span class="star s1"></span><span class="star s2"></span><span class="star s3"></span><span class="star s4"></span><span class="star s5"></span></div>
      ${nav('')}
      <div class="wrap hero-grid">
        <div>
          <p class="avail label">${site.availability}</p>
          <h1>Bah, eu sou o ${site.name}.<span class="caret" aria-hidden="true"></span></h1>
          <p class="role">${site.role}</p>
          <p class="stack">${site.stack}, com produtos em produção</p>
          <p class="pitch">Dev que também pensa como estrategista, escreve como comunicador e não foge de um design quando precisa. Tudo com a ferramenta certa e um pouco de teimosia.</p>
          <div class="actions">
            <a class="btn btn-primary" href="#cases">${ic('down')}Ver cases</a>
            <a class="btn" href="${site.cv}">${ic('cv')}Currículo (PDF)</a>
            <a class="btn" href="${site.github}" rel="noopener">${ic('github')}GitHub</a>
            <a class="btn" href="${site.linkedin}" rel="noopener">${ic('linkedin')}LinkedIn</a>
            <a class="btn" href="mailto:${site.email}">${ic('mail')}E-mail</a>
          </div>
        </div>
        ${win(
          'lucas.jpg',
          // Moldura de proporção fixa. Se a foto faltar, ficam as iniciais.
          `<div class="photo"><span aria-hidden="true">LR</span>${img(site.heroPhoto, site.heroPhotoAlt, { sizes: '(min-width: 820px) 330px, 180px', eager: true })}</div>`,
          { cls: 'hero-photo', tag: 'figure', status: `<span class="label">Base</span> ${site.base}` }
        )}
      </div>
      <svg class="hills" viewBox="0 0 1440 170" preserveAspectRatio="none" aria-hidden="true">
        <path class="hill-far" d="M0 110 C 260 20, 520 40, 800 100 S 1260 150, 1440 70 V170 H0 Z"/>
        <path class="hill-near" d="M0 150 C 300 70, 620 150, 900 120 S 1300 60, 1440 120 V170 H0 Z"/>
      </svg>
    </header>
      <div class="ticker" aria-hidden="true">
        <div class="ticker-track">
          ${[0, 1].map(() => ['React', 'Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Acessibilidade', 'Produtos em produção', 'Arroio do Sal, RS'].map((t) => `<span>${t}</span>`).join('')).join('')}
        </div>
      </div>
  `;
}

function tags(list) {
  return `<ul class="tags">${list.map((t) => `<li>${t}</li>`).join('')}</ul>`;
}

const imgKey = (path) => path.split('/').pop().replace(/\.\w+$/, '');

function caseCard(c) {
  const status = `<span class="label">Resultado</span> ${c.result}`;
  if (c.featured) {
    return win(
      `${c.title} · meuaval.com.br`,
      `<div class="win-body">
        <a class="thumb" href="${c.href}" tabindex="-1" aria-hidden="true">${img(imgKey(c.teaserImage), '', { sizes: '(min-width: 820px) 580px, 100vw' })}</a>
        <div class="case-text">
          <h3><a href="${c.href}">${c.teaserHeadline}</a></h3>
          <p>${c.teaserProblem}</p>
          ${tags(c.tags)}
          <div class="case-links">
            <a class="btn btn-primary btn-small" href="${c.href}">Ver case<span class="sr"> ${c.title}</span>${ic('arrow')}</a>
            <a class="btn btn-small" href="${c.demoUrl}" rel="noopener">${ic('play')}Abrir demo</a>
          </div>
        </div>
      </div>`,
      { cls: 'case-card case-destaque', tag: 'article', status }
    );
  }
  return win(
    c.title,
    `<a class="thumb" href="${c.href}" tabindex="-1" aria-hidden="true">${img(imgKey(c.teaserImage), '', { sizes: '(min-width: 820px) 340px, 100vw' })}</a>
    <div class="case-text">
      <h3><a href="${c.href}">${c.teaserHeadline}</a></h3>
      ${tags(c.tags)}
      <a class="more" href="${c.href}">Ver case<span class="sr"> ${c.title}</span>${ic('arrow')}</a>
    </div>`,
    { cls: 'case-card', tag: 'article', status }
  );
}

function cases() {
  return `
    <section class="section" id="cases">
      <div class="wrap">
        <h2>Cases</h2>
        <p class="sub">Trabalhos reais, contados do jeito que aconteceram — inclusive o que não deu certo de primeira.</p>
        <div class="case-grid">${casesData.map(caseCard).join('')}</div>
      </div>
    </section>
  `;
}

// Ícones em pixel art, desenhados aqui (grade de 16 × 16). Nenhum vem de biblioteca.
const ICONS = {
  busco: 'M4 2h6v2h2v6h-2v2H4v-2H2V4h2z M4 4v6h6V4z M11 11h2v2h2v2h-2v-2h-2z',
  hoje: 'M6 2h4v3h4v9H2V5h4z M7 3v2h2V3z M2 8h5v2h2V8h5v1H2z',
  formacao: 'M2 3h5v1h2V3h5v10H9v1H7v-1H2z M4 5v6h3V5z M9 5v6h3V5z',
  front: 'M1 2h14v12H1z M3 6v6h10V6z M5 8h2v1H6v1h1v1H5z M9 8h2v3H9v-1h1V9H9z',
  back: 'M3 2h10v3H3z M3 6h10v3H3z M3 10h10v3H3z',
};
const icon = (name) =>
  `<svg class="pix" viewBox="0 0 16 16" width="32" height="32" shape-rendering="crispEdges" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="${ICONS[name]}"/></svg>`;

const fichaItems = [
  ['busco', 'Busco', 'Estágio ou vaga júnior em front-end. Remoto, ou presencial no Litoral Norte e em Porto Alegre.'],
  ['hoje', 'Hoje', 'Desenvolvedor Web e Responsável pelos Canais Digitais na Conecte Telecom. Cofundador da Rabisco.'],
  ['formacao', 'Formação', 'Análise e Desenvolvimento de Sistemas, ULBRA (Torres, RS), previsão 2027.'],
  ['front', 'Front-end', 'React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Vite, acessibilidade.'],
  ['back', 'Back-end e dados', 'Supabase (PostgreSQL, Auth, Storage, Row Level Security), SQL, testes automatizados.'],
];

function sobre() {
  return `
    <section class="section section-alt" id="sobre">
      <div class="wrap">
        <div class="sobre-grid">
          <div class="sobre-text">
            <h2>Uma cabeça, várias ideias. Um caos com prazo de entrega.</h2>
            <p>Olá! Nessa altura do campeonato, já sabe que meu nome é Antônio Fagundes... brincadeira. Sou o <strong>Lucas Roldão Cardoso</strong>, de Arroio do Sal, RS — terra dos maiores gauderios de todos os tempos.</p>
            <p>Estudante de ADS na ULBRA (Campus Torres) — só ir à aula não é suficiente. Meto a mão na massa, que nem meu pai, pedreiro: estudo, pratico, faço projeto.</p>
            <p>Venho do marketing e do atendimento. Comecei ajudando o negócio da minha mãe a crescer nas redes, e é daí que vem o costume de olhar pro usuário e pro resultado antes de olhar pro código.</p>
            <p>Gosto de fazer coisas — se for meio maluca, ainda melhor. Um abração — <strong>Kinho</strong>.</p>
          </div>
          ${win('eu.jpg', `<div class="sobre-photo">${img('sobre-lucas', 'Lucas de fone de ouvido em frente ao notebook, fazendo sinal de paz', { sizes: '(min-width: 820px) 460px, 100vw' })}</div>`, { tag: 'figure' })}
        </div>
        <dl class="ficha">
          ${fichaItems.map(([ic, label, text]) => `<div class="ficha-item">${icon(ic)}<dt>${label}</dt><dd>${text}</dd></div>`).join('')}
        </dl>
      </div>
    </section>
  `;
}

function marketing() {
  return `
    <section class="section" id="marketing">
      <div class="wrap mkt-grid">
        <div>
          <h2>Também faço marketing</h2>
          <p>Sou cofundador da <strong>Rabisco</strong>, agência que atende 4 empresas locais com identidade de marca, redes sociais e vídeo. Na Conecte Telecom, os vídeos que produzi levaram o engajamento de cerca de 20 para quase 100 interações por publicação.</p>
          <p class="mkt-links">
            <a href="${site.rabiscoInstagram}" rel="noopener">${ic('instagram')}Instagram da Rabisco</a>
            <a href="${site.cvGrowth}">${ic('cv')}Currículo Web/Growth (PDF)</a>
          </p>
        </div>
        <ul class="mkt-pieces">
          ${marketingPieces.map((p) => `<li>${img(p.key, p.alt, { sizes: '(min-width: 820px) 150px, 45vw' })}</li>`).join('')}
        </ul>
      </div>
    </section>
  `;
}

function depoimentos() {
  return `
    <section class="section section-alt" id="depoimentos">
      <div class="wrap">
        <h2>Quem trabalhou comigo</h2>
        <div class="depo-grid">
          ${testimonials
            .map(
              (t) => `
            <figure class="depo">
              <blockquote><p>${t.quote}</p></blockquote>
              <figcaption>
                ${img(t.photo, '', { sizes: '56px' })}
                <span><strong>${t.name}</strong><br />${esc(t.role)}</span>
              </figcaption>
            </figure>`
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

function contato() {
  return `
    <section class="section contato" id="contato">
      <div class="wrap">
        <h2>Tem um problema real? Me chama.</h2>
        <p class="sub">Manda uma mensagem que eu respondo de verdade (sem meme).</p>
        <div class="actions">
          <a class="btn btn-primary" href="mailto:${site.email}">${ic('mail')}${site.email}</a>
          <a class="btn" href="${site.linkedin}" rel="noopener">${ic('linkedin')}LinkedIn</a>
          <a class="btn" href="${site.github}" rel="noopener">${ic('github')}GitHub</a>
          <a class="btn" href="${site.cv}">${ic('cv')}Currículo (PDF)</a>
        </div>
      </div>
    </section>
  `;
}

export function homePage() {
  return `${hero()}<main id="conteudo">${cases()}${sobre()}${marketing()}${depoimentos()}${contato()}</main>${footer('')}`;
}
