// Gera o favicon (uma janelinha com "LR") em SVG e PNG. Rodar: node scripts/favicon.mjs
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const INK = '#0d1b2a', GREEN = '#52b788', PAPER = '#ffffff';
// 16 × 16. I = contorno, G = barra da janela, P = papel, # = letra.
const rows = [
  'IIIIIIIIIIIIIIII',
  'IGGGGGGGGGGGGGGI',
  'IGGGGGGGGGGPGPGI',
  'IGGGGGGGGGGGGGGI',
  'IIIIIIIIIIIIIIII',
  'IPPPPPPPPPPPPPPI',
  'IP#PPPP####PPPPI',
  'IP#PPPP#PPP#PPPI',
  'IP#PPPP#PPP#PPPI',
  'IP#PPPP####PPPPI',
  'IP#PPPP#P#PPPPPI',
  'IP#PPPP#PP#PPPPI',
  'IP####P#PPP#PPPI',
  'IPPPPPPPPPPPPPPI',
  'IPPPPPPPPPPPPPPI',
  'IIIIIIIIIIIIIIII',
];
const color = { I: INK, G: GREEN, P: PAPER, '#': INK };
let rects = '';
// Fundo inteiro em tinta; por cima, só os trechos de outra cor (em faixas, pra o arquivo ficar pequeno).
rects += `<rect width="16" height="16" fill="${INK}"/>`;
rows.forEach((row, y) => {
  for (let x = 0; x < row.length; x++) {
    const c = row[x];
    if (c === 'I' || c === '#') continue;
    let w = 1;
    while (row[x + w] === c) w++;
    rects += `<rect x="${x}" y="${y}" width="${w}" height="1" fill="${color[c]}"/>`;
    x += w - 1;
  }
});
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges">${rects}</svg>`;
await writeFile('public/favicon.svg', svg + '\n');
for (const [size, file] of [[16, 'favicon-16.png'], [32, 'favicon-32.png'], [180, 'apple-touch-icon.png']]) {
  await sharp(Buffer.from(svg), { density: 72 * (size / 16) * 4 }).resize(size, size, { kernel: 'nearest' }).png().toFile(`public/${file}`);
}
console.log('favicon.svg, favicon-16.png, favicon-32.png, apple-touch-icon.png');
