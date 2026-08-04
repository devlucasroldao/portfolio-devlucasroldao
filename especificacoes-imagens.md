# Especificações de imagens pendentes

Levantamento de todo espaço de imagem marcado como placeholder no site (texto
`[ imagem real aqui — ... ]` ou `[ foto real aqui — ... ]`), com as dimensões
medidas de verdade no navegador (não estimadas) — cada container foi aberto
via Chrome headless em 1920/1440/375px e a largura/altura real capturada.

**Como usar a coluna "Dimensão recomendada"**: é o tamanho de exportação do
Canva, não o tamanho que a imagem aparece na tela. Pra a maioria das imagens
recomendo o dobro do tamanho renderizado (2x) — garante nitidez em tela
retina/alta densidade sem pesar demais. **Exceção**: os banners full-bleed
dos cases (1920px de largura) ficam em 1x — dobrar pra 3840px geraria um
arquivo desproporcionalmente pesado pra um ganho de nitidez pouco perceptível
num fundo de banner (o usuário não examina de perto). Todas as larguras de
container HOME ficam iguais entre 1440px e 1920px porque o layout tem um teto
de largura (`--content-max-width: 1120px`) — acima disso o conteúdo já não
cresce mais, então uma dimensão só cobre ambas as larguras de tela.

**Peso**: os limites abaixo são por imagem individual. Páginas com várias
imagens (ex: case Conecte, com banner + 3 imagens) devem somar no máximo
~1.2-1.5MB de fotos no total pra não pesar o carregamento.

---

## Home (`index.html`)

Ordem de aparição na tela, de cima pra baixo.

### 1. Cases — screenshot do site da Conecte Telecom (card teaser)

- **Onde fica**: seção Cases, primeiro card teaser (`src/scripts/cases.js`,
  `casesData[0].imageAlt`, renderizado via `.case-teaser__image`)
- **Dimensão recomendada**: 1000 × 625 px
- **Proporção**: 8:5 (1.6:1) — medido 512×320px na tela (2x aplicado)
- **Peso máximo**: 200 KB
- **Formato**: JPG
- **Conteúdo**: screenshot amplo da home do site da Conecte Telecom,
  mostrando o design atual da plataforma (a mesma imagem reaparece, cortada
  em proporção diferente, no banner do topo da página do case — item 1 da
  seção seguinte)

### 2. Cases — screenshot do catálogo da Lu Perfumes & Presentes (card teaser)

- **Onde fica**: seção Cases, segundo card teaser (`casesData[1].imageAlt`)
- **Dimensão recomendada**: 1000 × 625 px
- **Proporção**: 8:5 (1.6:1)
- **Peso máximo**: 200 KB
- **Formato**: JPG
- **Conteúdo**: screenshot do catálogo online da Lu Perfumes & Presentes,
  mostrando a navegação/listagem de produtos

### 3. Sobre mim — foto trabalhando (peça grande do grid)

- **Onde fica**: seção Sobre mim, grid quebra-cabeça, peça 1 (2×2, a maior)
  — `.sobre__grid-item--1`
- **Dimensão recomendada**: 800 × 800 px
- **Proporção**: 1:1 (quadrada)
- **Peso máximo**: 150 KB
- **Formato**: JPG
- **Conteúdo**: Lucas trabalhando (no notebook/computador), ambiente real de
  trabalho — é a peça maior do grid, funciona bem como a foto "âncora" mais
  reconhecível do conjunto

### 4. Sobre mim — foto do setup/mesa

- **Onde fica**: grid quebra-cabeça, peça 2 (1×1, topo-direita) —
  `.sobre__grid-item--2`
- **Dimensão recomendada**: 400 × 400 px
- **Proporção**: 1:1 (quadrada)
- **Peso máximo**: 100 KB
- **Formato**: JPG
- **Conteúdo**: setup/mesa de trabalho — computador, periféricos, ambiente

### 5. Sobre mim — foto relacionada à Rabisco

- **Onde fica**: grid quebra-cabeça, peça 3 (1×1, meio-direita) —
  `.sobre__grid-item--3`
- **Dimensão recomendada**: 400 × 400 px
- **Proporção**: 1:1 (quadrada)
- **Peso máximo**: 100 KB
- **Formato**: JPG
- **Conteúdo**: foto relacionada ao trabalho/projeto com a Rabisco (mesmo
  cliente citado no depoimento #4 da seção Depoimentos) — contexto exato
  (produto, print, foto do trabalho) a definir com o Lucas, o texto do
  placeholder atual só diz "Rabisco"

### 6. Sobre mim — tela de código

- **Onde fica**: grid quebra-cabeça, peça 4 (1×1, base-esquerda) —
  `.sobre__grid-item--4`
- **Dimensão recomendada**: 400 × 400 px
- **Proporção**: 1:1 (quadrada)
- **Peso máximo**: 100 KB
- **Formato**: JPG
- **Conteúdo**: foto/screenshot de uma tela de código (editor tipo VS Code)
  em uso — reforça a identidade "dev" da seção

### 7. Sobre mim — foto casual

- **Onde fica**: grid quebra-cabeça, peça 5 (2×1, base-direita, larga) —
  `.sobre__grid-item--5`
- **Dimensão recomendada**: 800 × 400 px
- **Proporção**: ~2.1:1 (retangular horizontal)
- **Peso máximo**: 150 KB
- **Formato**: JPG
- **Conteúdo**: foto casual do Lucas, fora do contexto de trabalho — mais
  pessoal/descontraída, contrasta com as peças "de trabalho" do grid

### 8–13. Depoimentos — 6 fotos de perfil (cards do carrossel)

- **Onde fica**: seção Depoimentos, `.testimonial-card__photo` — os 6 cards
  do carrossel (os cards de estatística dos cases foram removidos; agora
  são 6 depoimentos reais, todos com foto)
- **Dimensão recomendada**: 900 × 1200 px
- **Proporção**: 3:4 (vertical/retrato) — é o corte usado no desktop/tablet;
  no mobile o mesmo arquivo é cortado em 16:9 (mais largo) via CSS, então
  componha a foto com a pessoa **centralizada** e algum respiro nas laterais,
  pra o corte mobile não cortar a cabeça/ombros
- **Peso máximo**: 150 KB cada
- **Formato**: JPG
- **Conteúdo** (uma foto por pessoa, arquivo já referenciado em
  `src/scripts/testimonials.js`):
  1. `depoimento1.jpg` — Giulia Teixeira, sócia na Rabisco
  2. `depoimento2.jpg` — João "Goiaba", amigo
  3. `depoimento3.jpg` — Manu Dias, amiga/fisioterapeuta
  4. `depoimento4.jpg` — Ricardo Germann, ex-colega/gerente na Agrocenter
  5. `depoimento5.jpg` — Anderson, dev do sistema da Conecte Telecom
  6. `depoimento6.jpg` — Lu Roldão, mãe do Lucas, dona da Lu Perfumes &
     Presentes

---

## `case-conecte.html`

### 1. Banner do topo

- **Onde fica**: banner full-bleed logo abaixo do "← voltar pros cases"
  (`.case-full__banner-image`)
- **Dimensão recomendada**: 1920 × 820 px (exceção de 1x, ver nota no topo
  do documento)
- **Proporção**: ~21:9 (bem larga/cinematográfica)
- **Peso máximo**: 400 KB
- **Formato**: JPG
- **Conteúdo**: screenshot amplo (estilo "hero") do site da Conecte Telecom
  — pode ser a home ou uma tela que resuma bem a plataforma; como o texto
  (tags/título/meta) fica sobreposto na base da imagem com um gradiente
  escuro, prefira uma composição com o "assunto" principal mais concentrado
  na metade de cima da imagem

### 2. Solução — screenshot do painel administrativo

- **Onde fica**: dentro da seção Solução, logo após o sub-bloco "Plataforma
  & Admin" (`.case__inline-image`, primeira ocorrência)
- **Dimensão recomendada**: 1280 × 720 px
- **Proporção**: 16:9
- **Peso máximo**: 250 KB
- **Formato**: JPG
- **Conteúdo**: screenshot do painel administrativo mostrando a lista de
  planos/produtos gerenciáveis (o que o texto ao lado descreve: planos,
  textos, imagens, conteúdo do site editável sem código)

### 3. Solução — screenshot da Central de Ajuda

- **Onde fica**: logo após o sub-bloco "Central de Ajuda"
- **Dimensão recomendada**: 1280 × 720 px
- **Proporção**: 16:9
- **Peso máximo**: 250 KB
- **Formato**: JPG
- **Conteúdo**: screenshot da Central de Ajuda mostrando a lista de
  artigos/categorias (internet, equipamentos, instalação, contrato)

### 4. Solução — screenshot do Analytics ou página de links

- **Onde fica**: logo após o sub-bloco "Analytics"
- **Dimensão recomendada**: 1280 × 720 px
- **Proporção**: 16:9
- **Peso máximo**: 250 KB
- **Formato**: JPG
- **Conteúdo**: screenshot do painel de conversão (Analytics, ~35 pontos
  instrumentados) OU da página de links (bio do Instagram) — qualquer um dos
  dois contextos mencionados no texto ao lado serve

---

## `case-lu-perfumes.html`

### 1. Banner do topo

- **Onde fica**: banner full-bleed logo abaixo do "← voltar pros cases"
- **Dimensão recomendada**: 1920 × 820 px (exceção de 1x)
- **Proporção**: ~21:9
- **Peso máximo**: 400 KB
- **Formato**: JPG
- **Conteúdo**: screenshot amplo do catálogo da Lu Perfumes & Presentes —
  visão geral da vitrine de produtos, mesma recomendação de composição do
  banner do Conecte (assunto principal na metade de cima, já que a base fica
  coberta pelo gradiente + texto)

### 2. Solução — screenshot do catálogo de produtos

- **Onde fica**: dentro da seção Solução, logo após a menção ao catálogo
  navegável por categoria/marca
- **Dimensão recomendada**: 1280 × 720 px
- **Proporção**: 16:9
- **Peso máximo**: 250 KB
- **Formato**: JPG
- **Conteúdo**: screenshot do catálogo navegável por categoria/marca,
  mostrando produtos listados (idealmente com preço visível, já que isso é
  citado como decisão importante no texto do case)

### 3. Solução — screenshot do cadastro de produto no admin

- **Onde fica**: logo após a menção ao painel administrativo
- **Dimensão recomendada**: 1280 × 720 px
- **Proporção**: 16:9
- **Peso máximo**: 250 KB
- **Formato**: JPG
- **Conteúdo**: screenshot da tela de cadastro/edição de produto no painel
  administrativo (o formulário onde a Lu cadastra produto, preço, etc.)
