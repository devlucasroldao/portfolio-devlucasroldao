import './styles/main.css';
import './styles/navbar.css';
import './styles/buttons.css';
import './styles/hero.css';
import './styles/cases.css';
import './styles/sobre.css';
import './styles/marquee.css';
import './styles/cta-final.css';
import './styles/footer.css';
import { renderNavbar, initNavbar } from './scripts/navbar.js';
import { casesTeaserTemplate } from './scripts/cases.js';
import { marqueeTemplate, initMarquee } from './scripts/marquee.js';
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
      <h1 class="hero__headline">Bah, eu sou o <span class="hero__rotator"><span class="hero__rotator-word">Lucas</span></span></h1>

      <p class="hero__subtitle">
        Dev, designer, marketeiro e comunicador — tudo ao mesmo tempo... e sim, dá pra fazer tudo isso bem, com a
        ferramenta certa e um pouco de teimosia.
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
    <h2 class="sobre__heading">Sobre mim</h2>
    <div class="sobre__inner">
      <div class="sobre__avatar">[ foto real aqui ]</div>
      <div class="sobre__text">
        <p>
          Estudante de Análise e Desenvolvimento de Sistemas na ULBRA. Assistente de Marketing Digital na
          Conecte Telecom, onde o trabalho é uma mistura de código, marketing e criação de conteúdo — ninguém
          definiu ainda um cargo pra isso, então esse aqui é o resumo que sobrou.
        </p>
        <p>
          Nas horas vagas, monto a Rabisco junto com a Júlia. Fora isso, é só rolar a página: o que tem aqui é
          o que já foi construído, não o que prometo construir algum dia.
        </p>
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
  renderNavbar() + heroTemplate + casesTeaserTemplate() + sobreTemplate + marqueeTemplate() + ctaFinalTemplate + renderFooter();

initNavbar();
initMarquee();
initFooterEmail();
initHeroRotator();
