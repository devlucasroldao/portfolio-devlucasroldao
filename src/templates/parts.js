// Peças pequenas de HTML usadas pelos templates e pelos dados dos cases.
// Tudo aqui roda no build (Node), não no navegador.
import { readFileSync } from 'node:fs';

const manifest = JSON.parse(readFileSync(new URL('../data/images.json', import.meta.url), 'utf8'));

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export const EXTERNAL_LINK_ICON =
  '<svg class="ext" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M3 2h7v7M10 2 2 10" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';

// <img> com srcset em WebP, largura e altura reais (sem pulo de layout).
// `key` é o nome gerado por scripts/images.mjs (ver src/data/images.json).
export function img(key, alt, { cls = '', sizes = '100vw', eager = false } = {}) {
  const m = manifest[key];
  if (!m) throw new Error(`Imagem "${key}" não está em src/data/images.json. Rode "npm run images".`);
  const srcset = m.widths.map((w) => `/img/${key}-${w}.webp ${w}w`).join(', ');
  const fallback = m.widths[Math.min(1, m.widths.length - 1)];
  const loading = eager ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"';
  return `<img src="/img/${key}-${fallback}.webp" srcset="${srcset}" sizes="${sizes}" width="${m.w}" height="${m.h}" alt="${esc(alt)}"${cls ? ` class="${cls}"` : ''} ${loading} />`;
}

// Vídeo curto dentro do case: só baixa quando a pessoa aperta o play.
export function video(src, posterKey, label) {
  const m = manifest[posterKey];
  const poster = `/img/${posterKey}-${m.widths[m.widths.length - 1]}.webp`;
  return `<figure class="shot"><video src="${src}" poster="${poster}" width="${m.w}" height="${m.h}" controls muted playsinline preload="none" aria-label="${esc(label)}"></video></figure>`;
}

export function subBlock(label, html) {
  return `<div class="case__sub-block"><h3 class="case__sub-label">${label}</h3>${html}</div>`;
}

// Janela: a moldura dos cards. `status` vira a barra de baixo.
export function win(title, body, { cls = '', tag = 'div', status = '' } = {}) {
  return `<${tag} class="win ${cls}">
    <div class="win-bar"><span>${title}</span><span class="win-dots" aria-hidden="true"><i></i><i></i><i></i></span></div>
    ${body}
    ${status ? `<p class="win-status">${status}</p>` : ''}
  </${tag}>`;
}

// Ícones em pixel art, desenhados aqui mesmo (11×11). Cada "#" vira um quadrado.
const ICONS = {
  busco: ['..####.....', '.#....#....', '#......#...', '#......#...', '#......#...', '#......#...', '.#....#....', '..####.#...', '.......##..', '........##.', '.........##'],
  hoje: ['....###....', '...#...#...', '.#########.', '#.........#', '#.........#', '#####.#####', '#...#.#...#', '#....#....#', '#.........#', '#.........#', '.#########.'],
  formacao: ['.....#.....', '...#####...', '.#########.', '###########', '.#########.', '...#####..#', '..#.....#.#', '..#.....#.#', '..#######.#', '...#####.##', '..........#'],
  front: ['###########', '#.#.#.....#', '###########', '#.........#', '#..#...#..#', '#.#.....#.#', '#..#...#..#', '#.........#', '#.........#', '###########'],
  back: ['..#######..', '.#.......#.', '#.........#', '#.#######.#', '#.........#', '#.........#', '#.#######.#', '#.........#', '#.........#', '.#.......#.', '..#######..'],
  tools: ['###########', '#.........#', '#.#.......#', '#..#......#', '#...#.....#', '#..#......#', '#.#..####.#', '#.........#', '#.........#', '###########'],
};

export function pixelIcon(name) {
  const rows = ICONS[name];
  const rects = rows
    .flatMap((row, y) => [...row].map((c, x) => (c === '#' ? `<rect x="${x}" y="${y}" width="1" height="1"/>` : '')))
    .join('');
  return `<svg class="px-icon" viewBox="0 0 11 11" width="33" height="33" shape-rendering="crispEdges" fill="currentColor" aria-hidden="true">${rects}</svg>`;
}

// ---------- Ícones em pixel art ----------
// Cada ícone é um desenho em texto: "#" é um quadradinho pintado. O build transforma
// em SVG. Todos foram desenhados aqui, inclusive os de GitHub, LinkedIn e Instagram.
const BITMAPS = {
  cv: ['.#######....', '.#.....##...', '.#.....#.#..', '.#.....####.', '.#........#.', '.#.####...#.', '.#........#.', '.#.######.#.', '.#........#.', '.#.######.#.', '.#........#.', '.##########.'],
  mail: ['............', '############', '##........##', '#.#......#.#', '#..#....#..#', '#...#..#...#', '#....##....#', '#..........#', '#..........#', '############', '............', '............'],
  github: ['..#......#..', '.###....###.', '.##########.', '############', '############', '###..##..###', '###..##..###', '############', '.##########.', '..###..###..', '..###..###..', '...#....#...'],
  linkedin: ['############', '############', '##..########', '##..########', '############', '##..##...###', '##..#.....##', '##..#..#..##', '##..#..#..##', '##..#..#..##', '############', '############'],
  instagram: ['.##########.', '#..........#', '#.......##.#', '#...####...#', '#..#....#..#', '#..#....#..#', '#..#....#..#', '#..#....#..#', '#...####...#', '#..........#', '#..........#', '.##########.'],
  arrow: ['............', '............', '......#.....', '......##....', '.########...', '.#########..', '.########...', '......##....', '......#.....', '............', '............', '............'],
  down: ['............', '....###.....', '....###.....', '....###.....', '....###.....', '.#########..', '..#######...', '...#####....', '....###.....', '.....#......', '............', '............'],
  play: ['............', '...#........', '...###......', '...#####....', '...#######..', '...########.', '...#######..', '...#####....', '...###......', '...#........', '............', '............'],
  back: ['............', '............', '.....#......', '....##......', '...########.', '..#########.', '...########.', '....##......', '.....#......', '............', '............', '............'],
  sun: ['.....#......', '.#...#...#..', '..#.....#...', '....###.....', '...#####....', '##.#####.##.', '...#####....', '....###.....', '..#.....#...', '.#...#...#..', '.....#......', '............'],
  moon: ['....####....', '..###.......', '.###........', '.###........', '###.........', '###.........', '###.........', '.###......#.', '.####....##.', '..########..', '....####....', '............'],
};

function bitmapPath(rows) {
  let d = '';
  rows.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      if (row[x] !== '#') continue;
      let w = 1;
      while (row[x + w] === '#') w++;
      d += `M${x} ${y}h${w}v1h-${w}z`;
      x += w;
    }
  });
  return d;
}

export function ic(name, cls = '') {
  const rows = BITMAPS[name];
  if (!rows) throw new Error(`Ícone não existe: ${name}`);
  return `<svg class="ic ic-${name}${cls ? ` ${cls}` : ''}" viewBox="0 0 12 12" width="18" height="18" shape-rendering="crispEdges" aria-hidden="true"><path fill="currentColor" d="${bitmapPath(rows)}"/></svg>`;
}
