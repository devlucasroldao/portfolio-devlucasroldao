# Briefing mestre — Portfólio Lucas Roldão

> Documento de referência único. Tudo aqui foi decidido e travado numa conversa longa — não é rascunho solto. Use a seção 9 como prompt inicial pro Claude Code.

---

## 1. Posicionamento

**"Dev que pensa como estrategista e constrói em público."**

- Handle único em todas as plataformas: `@devlucasroldao` (LinkedIn, GitHub) — decisão consciente de manter, não trocar por algo genérico
- Tom de voz: direto, autoirônico, sem clichê motivacional, sem tom de coach. Referência real: post do LinkedIn "Voltei ao LinkedIn / Outra vez... / A gente some, volta, promete que agora vai ser diferente, some de novo. Dessa vez voltei porque tinha coisa real pra mostrar — não porque achei que devia aparecer."
- Regra de conteúdo: especificidade sempre (números, nomes, contexto real), narrativa problema → decisão → solução → aprendizado, CTA real (nunca "curta e compartilhe")

---

## 2. Design tokens

### Cores
```
--bg-base: #0D1B2A        (fundo principal)
--bg-elevated: #141D2E    (cards, panels)
--bg-darker: #0F1622      (seção alternada, se precisar)
--border: #415A77         (bordas, divisores)
--text-secondary: #778DA9 (texto secundário, labels)
--text-primary: #E0E1DD   (texto principal)
--accent: #52B788         (verde — uso pontual, ver regra abaixo)
```

### Tipografia
- **JetBrains Mono** — headlines, labels, prompts de terminal, blocos de código
- **Geist Sans** — subtítulos e corpo de texto (pesos: regular pro corpo, medium/semibold pro subtítulo)
- Regra fechada: só essas duas famílias. Nada de terceira fonte, nem serifada pontual.

### Regra de uso do verde (`#52B788`)
- Uso pontual apenas: hover de link, prompt de terminal (`> texto`), detalhe de destaque em itálico no texto
- **Nunca** em preenchimento grande de botão ou bloco de fundo
- Botão CTA principal: **outline** com texto/borda verde, hover preenchendo de verde — não sólido

### Bordas e formas
- `border-radius` pequeno (6–8px) em blocos grandes: cards de case, botões, containers
- Círculo total reservado só para: avatar, ícone isolado, dot de status
- Sem gradiente, sem glow, sem sombra decorativa, sem glassmorphism — exceção única abaixo

### Exceção controlada: blur
- Navbar em formato pill, flutuante, centralizada ou levemente à direita — único lugar com leve blur/transparência ao rolar a página
- Fora da navbar, zero efeito vidro

### Ícones
- Ícones de tech stack: flat, dentro de caixinha com borda `#415A77` e fundo `#141D2E`, sem glow, sem linha conectora entre eles
- Agrupados por categoria (ex: Frontend, Backend, Banco/Infra), com label da categoria em Geist Sans itálico, cor `#52B788`
- Ícones de interface (setas, social): Tabler ou Simple Icons, flat, sem preenchimento decorativo

---

## 3. Arquitetura da página

1. **Hero** — headline ancorada em fato real (não frase de efeito genérica), prompt de terminal com verde pontual, subtítulo curto, dois CTAs (outline)
2. **Cases** (2), em layout intercalado: case 1 imagem esquerda/texto direita, case 2 inverte
   - Conecte Telecom primeiro (tem números fechados)
   - Lu Perfumes & Presentes depois
3. **Sobre** — curto, real, tom do post do LinkedIn. Menciona a Rabisco de leve, sem ser seção própria ainda
4. **O que dizem sobre mim** — depoimentos reais em marquee (ver seção 4)
5. **CTA final + footer** — CTA grande de contato, footer com nome/cargo/local, links, frase pessoal no lugar de disclaimer padrão (ver pendência na seção 8)

---

## 4. Componentes especiais

### Marquee de depoimentos
- **Uma fileira só** (não duas) — com poucos depoimentos reais, duas fileiras expõe repetição rápido demais
- Velocidade lenta (40–60s para uma volta completa), não corrida
- Pausa a animação no `:hover`
- Mistura: depoimentos reais de terceiros + 1–2 cards no mesmo formato visual com números/citações reais dos cases (ex: "35/35 pontos de contato validados manualmente" do case Conecte) — sem inventar depoimento falso
- Duplicar array de itens no código para loop infinito sem salto visual perceptível

### Bloco de código dentro dos cases
- Estilo editor (abas de arquivo, syntax highlight), fonte JetBrains Mono
- Usado dentro do case Conecte, no momento da correção técnica — trecho real, generalizado, sem expor mecanismo exato da vulnerabilidade (ver regra de nível de detalhe na seção 5)
- Nunca decorativo/solto no Hero ou em qualquer lugar sem conexão com o texto ao redor

---

## 5. Conteúdo — Case 1: Conecte Telecom

**Regra de disclosure**: nível médio-baixo de detalhe técnico sobre a vulnerabilidade — conta a decisão e o rigor do processo, **sem** especificar RLS, sem citar Supabase, sem citar quantidade exata de registros expostos, sem citar nome de tabela.

**Problema**
O pedido inicial era uma checagem de segurança de rotina antes de migrar o site para domínio próprio. A auditoria revelou uma falha crítica: dados pessoais de clientes ficavam acessíveis sem autenticação. Havia também canais de contato quebrados silenciosamente e um problema de performance específico e mensurável.

**Decisão**
Não aceitar "parece corrigido" como critério de conclusão. Isso significou reproduzir bugs em ambiente controlado em vez de aceitar a primeira explicação plausível, e fazer uma varredura manual completa — clique real em cada um dos ~35 pontos de contato do site — antes de declarar o lançamento pronto, mesmo sob pressão de prazo.

**Solução**
Correção da falha de acesso a dados, endpoint de servidor dedicado, autenticação em duas etapas no painel admin, fluxo de assinatura eletrônica com versionamento de contrato, analytics de conversão construído do zero (~35 pontos instrumentados). Stack: Next.js 14, TypeScript, Supabase, Tailwind, Vercel.

**Resultado**
- Performance: 150–1000ms → 2–20ms no carregamento afetado (medido, antes/depois)
- Cobertura de tracking: de ~3 de 19 pontos rastreados corretamente para 35 de 35 confirmados
- Vulnerabilidade crítica identificada e corrigida antes de qualquer incidente registrado
- Impacto em geração de leads ainda não medido em número fechado (domínio recém no ar) — assumido honestamente como qualitativo por enquanto

**Aprendizado**
"Parece corrigido" e "está corrigido" são coisas diferentes — a diferença só aparece quando alguém força a reprodução real em vez de aceitar a primeira explicação plausível.

---

## 6. Conteúdo — Case 2: Lu Perfumes & Presentes

**Regra de honestidade**: projeto pré-lançamento, sem métrica de tráfego/conversão ainda. Não forçar "resultado" como se fosse case fechado — assumir de frente que é sobre decisões técnicas tomadas, não impacto medido.

**Problema**
A Lu (mãe do Lucas) revende perfumes e cosméticos há 5+ anos, tudo gerenciado manualmente por WhatsApp — sem catálogo, sem organização, sem histórico de pedidos. Ela mal parava de trabalhar respondendo "o que você tem?" e "qual o preço?" repetidamente. Kits personalizados existiam só como ideia, sem execução estruturada.

**Decisão**
A mais importante: **sem sistema de pagamento**, deliberadamente, contrariando o caminho óbvio de e-commerce completo. Motivo: pagamento online exige responsabilidade legal/fiscal que a Lu não tem estrutura para absorver agora. Toda venda fecha no WhatsApp — mantendo o atendimento humanizado que é o diferencial real dela. Também: JavaScript puro em vez de TypeScript (sem overhead desnecessário pro escopo) e Pages Router em vez de App Router (estabilidade em vez de modernidade, por ser projeto de produção real).

**Solução**
Catálogo completo com filtros, busca e categorias; sistema de kits prontos + "monte o seu"; sacola com envio formatado automaticamente pro WhatsApp; painel admin com autonomia total para a Lu gerenciar produtos, preços e campanhas sem depender do filho; segurança implementada (senha fora do bundle público, rate limiting, sanitização de input). Stack: Next.js 14 (Pages Router), JavaScript, Supabase, Vercel.

**Resultado**
Site funcional em produção, catálogo em fase de povoamento com produtos e fotos reais. Sem número de tráfego/conversão ainda — lançamento oficial aguarda catálogo completo. O que já mudou, comparado a antes: atendimento que era 100% manual agora tem vitrine própria; pedidos que não tinham histórico agora ficam salvos automaticamente.

**Aprendizado**
O erro mais caro foi pensar demais em vez de meter a mão na massa — um componente específico passou por mais de 9 iterações por tentar prever o resultado sem implementar e ver. Projeto real ensina o que projeto fictício não ensina: lidar com mudança de ideia do cliente e limitações operacionais reais é a diferença entre desenvolvedor e profissional.

---

## 7. O que NUNCA fazer (lista de anti-clichê)

- Sem frase motivacional genérica ou tom de coach
- Sem headline solta sem ancoragem em fato real
- Sem ilustração de personagem estilo Notion/fofo
- Sem diagrama decorativo sem função (órbitas, linhas conectoras sem significado real)
- Sem glow, gradiente, glassmorphism fora da navbar
- Sem prova social vazia (formulário público de recado substitui depoimento real, não o contrário)
- Sem seção Rabisco própria por enquanto — só menção no Sobre
- Sem inventar métrica ou depoimento que não existe

---

## 8. Pendências antes de ir pro ar

- [ ] **Frase pessoal do footer** — no lugar do disclaimer padrão, tom autoirônico (referência: "se um dia tiverem uma versão sua sobre isso, seria algo como..."). Placeholder atual: `[SUBSTITUIR — frase pessoal, tom autoirônico]`
- [ ] Depoimentos reais: pedir pra 3–4 pessoas (Lu, alguém da Conecte, colega, cliente Rabisco) antes do lançamento
- [ ] Trecho de código real do case Conecte, revisado para não expor detalhe sensível

---

## 9. Prompt inicial para o Claude Code

Cole isto no Claude Code (VS Code, na pasta vazia do projeto):

```
Quero construir meu portfólio pessoal como projeto real, não protótipo genérico.
Contexto completo, decisões de design e conteúdo dos 2 cases estão no arquivo
briefing-portfolio-lucas.md nesta pasta — leia ele inteiro antes de escrever
qualquer código.

Stack: HTML/CSS/JS puro com Vite (sem framework — projeto pequeno, 2 cases,
não justifica overhead de React/Next).

Antes de começar, me faça as perguntas que precisar para não deixar nada
genérico ou faltando — não presuma nada que não esteja no briefing.

Construa por partes, nesta ordem, e pare para eu revisar no localhost entre
cada etapa:
1. Estrutura de pastas, setup do Vite, tokens de design (CSS variables) do
   arquivo de briefing
2. Navbar (pill flutuante, blur no scroll) + Hero
3. Seção de cases (layout intercalado, bloco de código estilo editor no
   case Conecte)
4. Sobre
5. Marquee de depoimentos (uma fileira, lenta, pausa no hover — deixe com
   dados de placeholder claramente marcados, vou trocar por depoimentos reais)
6. CTA final + footer

Não use nenhuma cor, fonte ou efeito que não esteja explicitamente no
briefing. Se tiver dúvida sobre alguma decisão visual, pergunte antes de
supor.
```

