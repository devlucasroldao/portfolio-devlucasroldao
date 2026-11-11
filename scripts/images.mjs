// Gera as versões WebP (com srcset) em public/img/ e o manifesto src/data/images.json.
// Rodar com `npm run images` sempre que uma imagem de origem mudar.
// As origens ficam em assets/images/ (fora de public/, então não vão pro deploy).
//
// Pra trocar a foto do topo: substitua assets/images/bio/lucas-header.jpg (ou mude
// `src` em "lucas-retrato" abaixo), ajuste o recorte se precisar e rode o script.
// O layout não muda: a moldura tem proporção fixa.
import sharp from 'sharp';
import { mkdir, writeFile, readdir } from 'node:fs/promises';
import { basename, extname } from 'node:path';

const OUT = 'public/img';
const WIDTHS = [480, 960, 1600];

// Imagens com recorte ou nome próprio.
const special = [
  // Retrato 4:5 recortado da foto larga (rosto centralizado).
  { key: 'lucas-retrato', src: 'assets/images/bio/lucas-header.jpg', extract: { left: 430, top: 0, width: 540, height: 672 }, widths: [360, 540] },
  { key: 'sobre-lucas', src: 'assets/images/marketing/lucas-hero.jpg', widths: [480, 900] },
];

// Pastas convertidas por inteiro: a chave é "<pasta>-<arquivo>".
const folders = [
  { dir: 'assets/images/cases', prefix: '' },
  { dir: 'assets/images/depoimentos', prefix: '', widths: [160, 320] },
];

// Só as 4 peças do bloco de marketing.
const marketing = ['conecte-dinossauro', 'conecte-tabela-planos', 'lu-kit-personalizado', 'lu-pronta-entrega'].map((n) => ({
  key: `mkt-${n}`,
  src: `assets/images/marketing/${n}.jpg`,
  widths: [360, 720],
}));

const jobs = [...special, ...marketing];
for (const f of folders) {
  for (const file of await readdir(f.dir)) {
    if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
    jobs.push({ key: f.prefix + basename(file, extname(file)), src: `${f.dir}/${file}`, widths: f.widths });
  }
}

await mkdir(OUT, { recursive: true });
const manifest = {};
for (const job of jobs) {
  let base = sharp(job.src);
  if (job.extract) base = base.extract(job.extract);
  const { data, info } = await base.toBuffer({ resolveWithObject: true });
  const widths = (job.widths ?? WIDTHS).filter((w) => w <= info.width);
  if (!widths.length) widths.push(info.width);
  for (const w of widths) {
    await sharp(data).resize({ width: w }).webp({ quality: 78 }).toFile(`${OUT}/${job.key}-${w}.webp`);
  }
  manifest[job.key] = { w: info.width, h: info.height, widths };
}
await writeFile('src/data/images.json', JSON.stringify(manifest, null, 2) + '\n');
console.log(`${jobs.length} imagens, ${Object.values(manifest).reduce((n, m) => n + m.widths.length, 0)} arquivos em ${OUT}`);
