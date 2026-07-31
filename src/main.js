import './styles/main.css';
import './styles/navbar.css';
import './styles/buttons.css';
import './styles/hero.css';
import './styles/cases.css';
import './styles/sobre.css';
import './styles/carousel.css';
import './styles/cta-final.css';
import './styles/footer.css';
import { renderNavbar, initNavbar } from './scripts/navbar.js';
import { casesTeaserTemplate } from './scripts/cases.js';
import { depoimentosTemplate, initCarousels } from './scripts/carousel.js';
import { renderFooter, initFooterEmail } from './scripts/footer.js';
import { whatsappHref } from './scripts/contact.js';
import { initHeroRotator } from './scripts/hero-rotator.js';

const heroTemplate = `
  <section class="hero" id="inicio">
    <div class="hero__media">
      <div class="hero__media-overlay"></div>
      <div class="hero__media-placeholder">
        [ vídeo real aqui — self-hosted, mp4, você em ação — substituir ]
      </div>
    </div>

    <div class="hero__content">
      <h1 class="hero__headline">Bah, eu sou o <span class="hero__rotator"><span class="hero__rotator-word pos-current">Lucas Roldão</span><span class="hero__rotator-word"></span></span></h1>

      <p class="hero__subtitle">
        <span class="hero__subtitle-highlight">Dev</span>, <span class="hero__subtitle-highlight">designer</span>,
        <span class="hero__subtitle-highlight">marketeiro</span> e
        <span class="hero__subtitle-highlight">comunicador</span> — tudo ao mesmo tempo... e sim, dá pra fazer tudo
        isso bem, com a ferramenta certa e um pouco de teimosia.
      </p>

      <div class="hero__ctas">
        <a href="#cases" class="btn">Ver cases</a>
        <a href="https://linkedin.com/in/devlucasroldao" target="_blank" rel="noopener noreferrer" class="btn btn--secondary">Meu LinkedIn</a>
      </div>
    </div>
  </section>
`;

const sobreTemplate = `
  <section class="sobre" id="sobre">
    <div class="sobre__inner">
      <div class="sobre__main">
        <div class="sobre__header">
          <span class="sobre__caption">Sobre mim</span>
          <h2 class="sobre__heading">
            <span class="sobre__heading-line">Uma cabeça, várias ideias</span>
            <span class="sobre__heading-line"><span class="sobre__heading-accent">Um caos</span> com</span>
            <span class="sobre__heading-line">prazo de entrega.</span>
          </h2>
        </div>

        <div class="sobre__text">
          <p>
            Olá! Nessa altura do campeonato, já sabe que meu nome é Antônio Fagundes... brincadeira. Sou o
            <span class="sobre__highlight sobre__highlight--accent">Lucas Roldão Cardoso</span>, de
            <span class="sobre__highlight">Arroio do Sal, RS</span> — terra dos maiores gauderios de todos os
            tempos. Daleee, Coloradooo!
          </p>
          <p>
            Estudante de <span class="sobre__highlight">ADS na ULBRA (Campus Torres)</span> — só ir à aula não
            é suficiente. Meto a mão na massa, que nem <span class="sobre__highlight">meu pai, pedreiro</span>:
            estudo, pratico, faço projeto.
          </p>
          <p>
            Atuo com <span class="sobre__highlight">marketing digital</span> aqui na minha cidade, ajudando
            negócios a ter identidade que conversa com o público. Comecei ajudando o negócio da
            <span class="sobre__highlight">minha mãe</span> a crescer nas redes.
          </p>
          <p>
            Gosto de fazer coisas — se for meio maluca, ainda melhor. Essa é a parte mais humana desse site. Um
            abração — <span class="sobre__highlight sobre__highlight--accent">Kinho</span>.
          </p>
        </div>

        <div class="sobre__ctas">
          <a href="https://linkedin.com/in/devlucasroldao" target="_blank" rel="noopener noreferrer" class="btn btn--secondary">Meu LinkedIn</a>
          <a href="${whatsappHref}" target="_blank" rel="noopener noreferrer" class="btn">Fale comigo</a>
        </div>
      </div>

      <div class="sobre__side">
        <div class="sobre__grid">
          <div class="case__image-placeholder sobre__grid-item sobre__grid-item--1">[ foto real aqui — foto trabalhando — substituir ]</div>
          <div class="case__image-placeholder sobre__grid-item sobre__grid-item--2">[ foto real aqui — setup/mesa — substituir ]</div>
          <div class="case__image-placeholder sobre__grid-item sobre__grid-item--3">[ foto real aqui — Rabisco — substituir ]</div>
          <div class="case__image-placeholder sobre__grid-item sobre__grid-item--4">[ foto real aqui — tela de código — substituir ]</div>
          <div class="case__image-placeholder sobre__grid-item sobre__grid-item--5">[ foto real aqui — foto casual — substituir ]</div>
        </div>

        <div class="sobre__info">
          <div class="sobre__info-row">
            <span class="sobre__info-label">Disponibilidade</span>
            <span class="sobre__info-value"><span class="sobre__info-dot"></span>CLT + projetos paralelos</span>
          </div>
          <div class="sobre__info-row">
            <span class="sobre__info-label">Atuação</span>
            <span class="sobre__info-value">Dev &amp; Estrategista Digital</span>
          </div>
          <div class="sobre__info-row">
            <span class="sobre__info-label">Ferramentas</span>
            <span class="sobre__info-value">Claude · VS Code · Canva · Notion</span>
          </div>
          <div class="sobre__info-row">
            <span class="sobre__info-label">Base</span>
            <span class="sobre__info-value">Arroio do Sal, RS</span>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const ctaFinalTemplate = `
  <section class="cta-final" id="contato">
    <h2 class="cta-final__heading">Tem um problema real? Fala comigo.</h2>
    <p class="cta-final__subtitle">
      Sem formulário de 10 campos, sem "em breve retornaremos". Me manda uma mensagem e eu respondo — sério.
    </p>
    <div class="cta-final__ctas">
      <a href="${whatsappHref}" target="_blank" rel="noopener noreferrer" class="btn">Falar comigo</a>
      <a href="https://linkedin.com/in/devlucasroldao" target="_blank" rel="noopener noreferrer" class="btn btn--secondary">LinkedIn</a>
    </div>
  </section>
`;

document.querySelector('#app').innerHTML =
  renderNavbar() + heroTemplate + casesTeaserTemplate() + sobreTemplate + depoimentosTemplate() + ctaFinalTemplate + renderFooter();

initNavbar();
initCarousels();
initFooterEmail();
initHeroRotator();
