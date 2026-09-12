# Lucas Roldão — Portfólio

Site pessoal de **Lucas Roldão Cardoso** — estudante de ADS, dev front-end/full-stack e estrategista digital. Mais do que uma lista de tecnologias, é um lugar pra mostrar como eu penso: os problemas que resolvi, as decisões que tomei (inclusive as erradas) e o que aprendi no caminho.

**No ar em:** [devlucasroldao.vercel.app](https://devlucasroldao.vercel.app)

---

## O que tem aqui

| Página | O que mostra |
|---|---|
| `index.html` | Home — Hero, Cases (teaser), Sobre mim, Depoimentos, CTA final |
| `case-conecte.html` | Case completo: Conecte Telecom (plataforma full-stack + correção de vulnerabilidade de segurança) |
| `case-lu-perfumes.html` | Case completo: Lu Perfumes & Presentes (e-commerce em desenvolvimento) |
| `marketing.html` | Galeria de marketing/redes sociais — artes e posts reais feitos pra Conecte e Lu Perfumes |

## Stack

Site estático, sem framework de front-end — só o essencial:

- **[Vite](https://vitejs.dev)** — build e dev server, múltiplos pontos de entrada (uma página por HTML)
- **HTML + CSS + JavaScript puro** — sem React/Vue, sem build de componentes
- **[Fontsource](https://fontsource.org)** — JetBrains Mono e Geist Sans self-hosted (sem depender de CDN externo)
- **[simple-icons](https://simpleicons.org)** — ícones de marca (GitHub, LinkedIn, Instagram etc.)
- **Deploy:** [Vercel](https://vercel.com), com headers de segurança configurados via `vercel.json`

## Rodando localmente

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção em dist/
npm run preview   # serve o build de produção localmente, pra conferir antes do deploy
```

## Estrutura do projeto

```
├── index.html / case-conecte.html / case-lu-perfumes.html / marketing.html
├── src/
│   ├── main.js, case-conecte.js, case-lu-perfumes.js, marketing.js   # pontos de entrada
│   ├── scripts/    # lógica de cada seção/componente (navbar, carrossel, cases, etc.)
│   └── styles/     # um arquivo CSS por seção + tokens.css (cores, tipografia, espaçamento)
├── public/
│   ├── images/     # fotos e artes, organizadas por seção (cases, depoimentos, marketing, sobre)
│   ├── hero-video.mp4 + hero-poster.jpg
│   └── favicons
└── vercel.json     # headers de segurança (X-Frame-Options, HSTS, etc.)
```

Cada seção principal segue o mesmo padrão: um arquivo em `src/scripts/` monta o HTML e a lógica, um arquivo correspondente em `src/styles/` cuida do visual, usando as variáveis definidas em `tokens.css` — nada de cor ou espaçamento solto no meio do código.

## Identidade visual

| | |
|---|---|
| Fundo | `#0D1B2A` |
| Acento | `#52B788` (verde — usado com moderação, nunca em blocos grandes) |
| Texto | `#E0E1DD` |
| Fontes | JetBrains Mono (títulos/estrutura) · Geist Sans (corpo) |

Modo claro/escuro via `data-theme` no `<html>`, com preferência salva em `localStorage`.

## Como esse projeto foi construído

Isso aqui foi feito com ajuda de IA — principalmente o [Claude](https://claude.com), da Anthropic — e não escondo isso, mas também não foi no piloto automático. O fluxo real:

1. Decido o que quero mudar ou construir
2. O Claude gera o código, testa (build, Playwright em várias larguras de tela, modo claro/escuro, acessibilidade) e explica o que fez e por quê
3. Eu reviso, aprovo (ou não) e uso o [Claude Code](https://claude.com/claude-code) pra aplicar e commitar

Prefiro isso a esconder o processo. Cada decisão que está no ar foi pensada — a IA acelera a execução, mas quem decide o que fica sou eu.

## Contato

- **LinkedIn:** [linkedin.com/in/devlucasroldao](https://linkedin.com/in/devlucasroldao)
- **GitHub:** [github.com/devlucasroldao](https://github.com/devlucasroldao)
- **WhatsApp:** disponível direto no site, botão "Falar comigo"

---

*Arroio do Sal, RS.*
