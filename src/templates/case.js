import { casesData } from '../data/cases.js';
import { img, win, EXTERNAL_LINK_ICON } from './parts.js';
import { nav, footer } from './layout.js';

const imgKey = (path) => path.split('/').pop().replace(/\.\w+$/, '');
const slug = (label) =>
  label
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

// Resumo escaneável: o recrutador lê isto e decide se continua.
function resumo(c) {
  const papel = c.meta.find(([k]) => k === 'Papel')?.[1];
  const periodo = c.meta.find(([k]) => k === 'Período')?.[1];
  return win(
    'resumo.txt',
    `<div class="resumo">
      <dl>
        <dt>Papel</dt><dd>${papel}</dd>
        <dt>Período</dt><dd>${periodo}</dd>
        <dt>Stack</dt><dd>${c.stackText}</dd>
        <dt>Resultado</dt><dd>${c.result}${c.resultNote ? ` ${c.resultNote}` : ''}</dd>
      </dl>
      <div class="proof">
        <h2>Clique e confira</h2>
        ${c.proofIntro ? `<p>${c.proofIntro}</p>` : ''}
        <ul>
          ${c.proof.map((p) => `<li><a href="${p.href}" target="_blank" rel="noopener noreferrer">${p.label}${EXTERNAL_LINK_ICON}</a>${p.note ? `<span>${p.note}</span>` : ''}</li>`).join('')}
        </ul>
        ${c.featured ? `<a class="btn btn-primary btn-small" href="${c.liveUrl}" target="_blank" rel="noopener noreferrer">Abrir meuaval.com.br</a>` : ''}
        ${c.proofFooter ? `<p class="proof-foot">${c.proofFooter}</p>` : ''}
      </div>
    </div>`,
    { cls: 'resumo-win' }
  );
}

function nextCase(c) {
  const next = casesData[(casesData.indexOf(c) + 1) % casesData.length];
  return `<a class="case-next" href="${next.href}"><span class="label">Próximo case</span><strong>${next.title}</strong><span>${next.teaserHeadline}</span></a>`;
}

export function casePage(id) {
  const c = casesData.find((x) => x.id === id);
  if (!c) throw new Error(`Case não encontrado: ${id}`);

  return `
    <div class="case-head">
      ${nav('/')}
      <div class="wrap">
        <a class="crumb label" href="/#cases">&lt; voltar pros cases</a>
        <h1>${c.title}</h1>
        <p class="lead">${c.teaserProblem}</p>
        ${resumo(c)}
        ${win(imgKey(c.bannerImage) + '.webp', img(imgKey(c.bannerImage), c.bannerImageAlt, { sizes: '(min-width: 1168px) 1116px, 100vw', eager: true }), { cls: 'banner', tag: 'figure' })}
      </div>
    </div>
    <main id="conteudo" class="case-body">
      <nav class="indice" aria-label="Nesta página">
        <ul>${c.blocks.map(([label]) => `<li><a href="#${slug(label)}">${label}</a></li>`).join('')}</ul>
      </nav>
      <article class="prose">
        ${c.blocks.map(([label, html]) => `<section class="case__block" id="${slug(label)}"><h2>${label}</h2>${html}</section>`).join('')}
        <blockquote class="case__learning">${c.learning}</blockquote>
        ${nextCase(c)}
      </article>
    </main>
    ${footer('/')}
  `;
}

export function notFoundPage() {
  return `
    <div class="case-head notfound">
      ${nav('/')}
      <main id="conteudo" class="wrap">
        ${win(
          'erro-404.txt',
          `<div class="notfound-body">
            <h1>Bah, essa página não existe.</h1>
            <p>O link pode estar velho, ou eu mudei alguma coisa de lugar.</p>
            <div class="actions">
              <a class="btn btn-primary" href="/">Ir pro início</a>
              <a class="btn" href="/#cases">Ver cases</a>
            </div>
          </div>`
        )}
      </main>
    </div>
    ${footer('/')}
  `;
}
