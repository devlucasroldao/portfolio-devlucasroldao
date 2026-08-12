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
import { initHeroVideo } from './scripts/hero-video.js';
import { initRotator } from './scripts/rotator.js';
import { initScrollReveal, initTypewriter } from './scripts/scroll-animations.js';
import { EXTERNAL_LINK_ICON } from './scripts/ui-icons.js';

const CTA_HEADING_PHRASES = ['Fala comigo!', 'Me chama!', 'Vem de zapzap', 'Bora trocar uma ideia'];

const heroTemplate = `
  <section class="hero" id="inicio">
    <div class="hero__media">
      <video class="hero__video" autoplay loop muted playsinline poster="/hero-poster.jpg">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div class="hero__media-overlay"></div>
    </div>

    <div class="hero__content">
      <h1 class="hero__headline">Bah, eu sou o <span class="hero__rotator"><span class="hero__rotator-word pos-current">Desenvolvedor</span><span class="hero__rotator-word"></span></span></h1>

      <p class="hero__subtitle">
        <span class="hero__subtitle-highlight">Dev</span> que também pensa como
        <span class="hero__subtitle-highlight">estrategista</span>, escreve como
        <span class="hero__subtitle-highlight">comunicador</span> e não foge de um
        <span class="hero__subtitle-highlight">design</span> quando precisa. Tudo com a ferramenta certa e um
        pouco de teimosia.
      </p>

      <div class="hero__ctas">
        <a href="#cases" class="btn">Ver cases</a>
        <a href="https://linkedin.com/in/devlucasroldao" target="_blank" rel="noopener noreferrer" class="btn btn--secondary">Meu LinkedIn${EXTERNAL_LINK_ICON}</a>
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
            tempos.
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
          <a href="https://linkedin.com/in/devlucasroldao" target="_blank" rel="noopener noreferrer" class="btn btn--secondary">Meu LinkedIn${EXTERNAL_LINK_ICON}</a>
          <a href="${whatsappHref}" target="_blank" rel="noopener noreferrer" class="btn">Fale comigo${EXTERNAL_LINK_ICON}</a>
        </div>
      </div>

      <div class="sobre__side">
        <div class="sobre__grid">
          <img src="/images/sobre/trabalhando.jpg" alt="Lucas fazendo sinal de positivo em frente ao notebook, editando artes no Canva pra Conecte Telecom" class="sobre__grid-item sobre__grid-item--1" loading="lazy" />
          <img src="/images/sobre/setup-mesa.jpg" alt="Notebook com editor de código e vídeo-aula de JavaScript ao lado de um livro de lógica de programação" class="sobre__grid-item sobre__grid-item--2" loading="lazy" />
          <img src="/images/sobre/rabisco.jpg" alt="Tela do site da Rabisco Agência de Marketing aberta no notebook, ao lado do editor de código" class="sobre__grid-item sobre__grid-item--3" loading="lazy" />
          <img src="/images/sobre/tela-codigo.jpg" alt="Editor de código VS Code mostrando o desenvolvimento do site da Lu Perfumes & Presentes" class="sobre__grid-item sobre__grid-item--4" loading="lazy" />
          <img src="/images/sobre/casual.jpg" alt="Foto casual de Lucas em ambiente descontraído, fazendo sinal de positivo pra câmera" class="sobre__grid-item sobre__grid-item--5" loading="lazy" />
        </div>

        <div class="sobre__info">
          <div class="sobre__info-row">
            <span class="sobre__info-label">Disponibilidade</span>
            <span class="sobre__info-value sobre__info-value--nowrap"><span class="sobre__info-dot"></span>Aberto a oportunidades</span>
          </div>
          <div class="sobre__info-row">
            <span class="sobre__info-label">Atuação</span>
            <span class="sobre__info-value">Dev &amp; Estrategista Digital</span>
          </div>
          <div class="sobre__info-row">
            <span class="sobre__info-label">Ferramentas</span>
            <span class="sobre__info-value sobre__info-value--tools">Claude · VS Code · Canva · Notion</span>
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

const closingTemplate = `
  <section class="closing" id="contato">
    <div class="cta-final">
      <div class="cta-final__inner">
        <h2 class="cta-final__heading">
          <span class="cta-final__heading-line cta-final__heading-line--intro">Tem um problema real?</span>
          <span class="cta-final__heading-line cta-final__rotator"><span class="cta-final__rotator-word pos-current">${CTA_HEADING_PHRASES[0]}</span><span class="cta-final__rotator-word"></span></span>
        </h2>
        <p class="cta-final__subtitle">Manda uma mensagem que eu respondo de verdade (sem meme).</p>
        <div class="cta-final__ctas">
          <a href="${whatsappHref}" target="_blank" rel="noopener noreferrer" class="btn cta-final__button--primary">Chamar no WhatsApp${EXTERNAL_LINK_ICON}</a>
          <a href="https://linkedin.com/in/devlucasroldao" target="_blank" rel="noopener noreferrer" class="btn btn--secondary">Meu LinkedIn${EXTERNAL_LINK_ICON}</a>
        </div>
      </div>
    </div>
  </section>
`;

document.querySelector('#app').innerHTML =
  renderNavbar() +
  '<main>' +
  heroTemplate +
  casesTeaserTemplate() +
  sobreTemplate +
  depoimentosTemplate() +
  closingTemplate +
  '</main>' +
  renderFooter();

initNavbar();
initCarousels();
initFooterEmail();
initHeroRotator();
initHeroVideo();
initRotator(document.querySelector('.cta-final__rotator'), CTA_HEADING_PHRASES, { wordSelector: '.cta-final__rotator-word' });

initScrollReveal({
  sections: ['.cases', '.sobre', '.depoimentos', '.closing'],
  staggerGroups: [
    ['.case-list', ':scope > .case'],
    ['.depoimentos__grid', ':scope > .carousel'],
  ],
});
initTypewriter('.cases__eyebrow, .sobre__caption, .depoimentos__eyebrow, .case__eyebrow');
