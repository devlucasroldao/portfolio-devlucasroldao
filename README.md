# Lucas Roldão — Portfólio

> Não é uma lista de tecnologias. É um lugar pra mostrar como eu penso — os problemas que resolvi, as decisões que tomei (inclusive as erradas) e o que aprendi no caminho.

[![Site ao vivo](https://img.shields.io/badge/Site%20ao%20vivo-devlucasroldao.vercel.app-52B788?style=for-the-badge&logo=vercel&logoColor=white)](https://devlucasroldao.vercel.app)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

---

## 📖 Sobre o Projeto

Esse é o meu portfólio pessoal — e por muito pouco não virou mais um clichê de "dev com cara de IA". Não virou porque cada decisão aqui foi questionada antes de entrar no ar, inclusive essa frase, que tá literalmente escrita no rodapé do site.

A ideia nasceu depois de ver o portfólio que minha professora Andrezza Andrade criou pra ela. Peguei a referência, pesquisei bastante coisa no Dribbble e fui construindo o meu, do jeito que quis: sem "Olá, sou desenvolvedor tal", sem lista de tecnologia solta, com a minha cara.

Aqui dá pra conhecer um pouco mais sobre mim, minha rotina, onde moro (Arroio do Sal, litoral gaúcho), e — o mais importante — dois projetos reais que construí, com cliente de verdade, problema de verdade e resultado medido, não case fictício de portfólio.

---

## ✨ Funcionalidades

### Navegação e experiência
- 🌗 **Modo claro/escuro** completo, com preferência salva e contraste ajustado nos dois temas
- 📱 **Mobile-first de verdade** — menu em drawer lateral, navbar que some perto do fim da página pra não cobrir o CTA
- ⌨️ **Acessibilidade** — landmarks semânticos, `aria-label` em elementos interativos, drawer com `inert` quando fechado, navegação por teclado testada
- 🎬 **Hero com vídeo de fundo** — poster leve pro primeiro carregamento, e respeita `prefers-reduced-motion` (quem pede menos movimento no sistema nem baixa o vídeo)

### Conteúdo
- 💼 **Cases reais** — Conecte Telecom (plataforma full-stack + correção de uma vulnerabilidade crítica de segurança) e Lu Perfumes & Presentes (e-commerce em desenvolvimento pra minha mãe), cada um com página própria, stack documentada e resultado real, não inventado
- 🗣️ **Depoimentos** — carrossel com gente de verdade que cruzou meu caminho (profissional e pessoal), sem troca automática — só avança quando a pessoa clica
- 🎨 **Galeria de Marketing & Redes Sociais** — página própria, separada do fluxo principal, com artes reais que já produzi pra Conecte e Lu Perfumes: grid *masonry* (cada peça na proporção real dela, sem cortar nada), filtro por cliente, lightbox, e um esmaecimento no final convidando pra ver mais no Instagram de cada marca

### Por trás dos panos
- 🔍 **SEO e compartilhamento** — Open Graph e Twitter Card com imagem própria, então o link do site aparece bonito em qualquer lugar que for compartilhado
- 🔒 **Headers de segurança** configurados via `vercel.json` (`X-Frame-Options`, `Strict-Transport-Security`, `Permissions-Policy`)
- ⚡ **Performance** — payload total reduzido de 17,6MB pra 6MB (vídeo recomprimido, imagens redimensionadas pro tamanho real de exibição, `width`/`height` explícitos pra evitar pulo de layout)

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Decisão |
|---|---|---|
| **Build** | Vite | Múltiplos pontos de entrada (uma página por HTML), dev server rápido, zero configuração desnecessária |
| **Frontend** | HTML + CSS + JavaScript puro | Sem framework — pro tamanho e propósito desse site, React/Vue seriam peso sem benefício real |
| **Fontes** | JetBrains Mono + Geist Sans, via Fontsource | Self-hosted, sem depender de CDN externo nem esperar Google Fonts carregar |
| **Ícones** | simple-icons | Ícones de marca (GitHub, LinkedIn, Instagram) sempre atualizados e consistentes |
| **Deploy** | Vercel | CI/CD automático a cada push, headers de segurança configuráveis via `vercel.json` |

---

## 🏗️ Arquitetura

```
portfolio-devlucasroldao/
├── index.html              # Home
├── case-conecte.html       # Case completo: Conecte Telecom
├── case-lu-perfumes.html   # Case completo: Lu Perfumes & Presentes
├── marketing.html          # Galeria de Marketing & Redes Sociais
├── src/
│   ├── main.js, case-conecte.js, case-lu-perfumes.js, marketing.js   # pontos de entrada
│   ├── scripts/
│   │   ├── navbar.js, footer.js          # layout compartilhado
│   │   ├── hero-rotator.js, hero-video.js
│   │   ├── cases.js, case-page.js
│   │   ├── carousel.js, testimonials.js
│   │   ├── marketing-page.js, marketing-items.js
│   │   └── scroll-animations.js          # reveal ao rolar, digitação nos eyebrows
│   └── styles/
│       ├── tokens.css                    # cores, tipografia, espaçamento — fonte única da verdade
│       └── um arquivo por seção (hero.css, cases.css, marketing.css...)
├── public/
│   ├── images/             # organizadas por seção (cases, depoimentos, marketing, sobre)
│   ├── hero-video.mp4 + hero-poster.jpg
│   └── og-image.jpg        # imagem de preview pra compartilhamento
└── vercel.json             # headers de segurança
```

---

## 🎨 Identidade Visual

| | |
|---|---|
| Fundo | `#0D1B2A` |
| Acento | `#52B788` (verde — usado com moderação, nunca em blocos grandes) |
| Texto | `#E0E1DD` |
| Fontes | JetBrains Mono (estrutura/títulos) · Geist Sans (corpo) |

---

## 🤖 IA como Ferramenta de Desenvolvimento

Esse projeto foi construído com ajuda de IA — o [Claude](https://claude.com), da Anthropic, esteve em praticamente todo o processo. Não escondo isso, mas também não foi no piloto automático.

### Como a IA foi usada na prática:

- **Implementação ponta a ponta** — do primeiro rascunho da estrutura até detalhes finos de CSS
- **Testes reais antes de qualquer entrega** — build, Playwright em várias larguras de tela, modo claro/escuro, acessibilidade, tudo verificado antes de eu ver o resultado
- **Auditoria de performance e acessibilidade** — encontrou e corrigiu problemas reais (imagens 3-6x maiores que o necessário, elementos sem rótulo acessível, vídeo de fundo sem respeitar preferência de movimento reduzido)
- **Revisão de decisão, não só execução** — quando pedi algo que ia contra minha própria estratégia (tipo destacar demais o lado de marketing quando o objetivo era mostrar que sou dev), fui questionado antes de implementar

### O que aprendi sobre usar IA:

> Não é sobre deixar a IA decidir. É sobre saber o que pedir, dar contexto suficiente pra decisão fazer sentido, e revisar o resultado como se eu mesmo tivesse escrito — porque no fim, cada coisa que está no ar eu aprovei.

A IA acelerou a execução. As decisões — o que construir, o que cortar, o que priorizar — continuam sendo minhas.

---

## 🚀 Evolução do Projeto

| Etapa | O que mudou |
|---|---|
| **Estrutura inicial** | Hero, Cases, Sobre mim, Depoimentos, CTA final — primeira versão completa |
| **Refinamento mobile** | Menu virou drawer lateral, correções de toque e acessibilidade crítica |
| **Cases reais** | Conecte Telecom e Lu Perfumes ganharam páginas completas, com stack documentada e imagens reais |
| **Modo claro/escuro** | Sistema de tema completo, com contraste ajustado nos dois modos |
| **Performance e acessibilidade** | Payload de 17,6MB → 6MB, `width`/`height` explícitos, `aria-label`, `inert` no drawer, landmark `<main>` |
| **SEO e segurança** | Open Graph com imagem própria, headers de segurança via `vercel.json` |
| **Galeria de Marketing** | Nova página, separada do fluxo principal — grid masonry com artes reais da Conecte e da Lu Perfumes |

---

## 👨‍💻 Sobre Mim

**Lucas Roldão Cardoso** — Estudante de Análise e Desenvolvimento de Sistemas (ULBRA), hoje atuando com marketing digital na Conecte Telecom. Foi lá, por iniciativa própria, que encarei meu primeiro projeto de desenvolvimento de verdade: reconstruí o site da empresa como uma plataforma completa e, no processo, encontrei e corrigi uma vulnerabilidade crítica de segurança.

Busco minha primeira oportunidade formal como desenvolvedor.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/devlucasroldao)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/devlucasroldao)

---

<div align="center">
  <p>Arroio do Sal, RS</p>
  <p><em>"Bah, eu sou o Lucas Roldão."</em></p>
</div>
