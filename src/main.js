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

const heroTemplate = `
  <section class="hero">
    <h1 class="hero__headline">Dev que pensa como estrategista e constrói em público.</h1>

    <p class="hero__subtitle">
      Decisão real, prazo real, resultado honesto — nada de portfólio de mentirinha.
    </p>

    <div class="hero__terminal">
      <span class="hero__terminal-prompt">&gt; status --lucas</span>
      <span class="hero__terminal-output">2 cases reais · 1 falha crítica corrigida antes de virar incidente</span>
    </div>

    <div class="hero__ctas">
      <a href="#contato" class="btn">Falar comigo</a>
      <a href="#cases" class="btn btn--secondary">Ver os cases</a>
    </div>
  </section>
`;

const sobreTemplate = `
  <section class="sobre" id="sobre">
    <h2 class="sobre__heading">Sobre</h2>
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

const whatsappMessage = 'Olá Lucas, vi seu portfólio e quero conversar sobre [algo]';
const whatsappHref = `https://wa.me/5551999611692?text=${encodeURIComponent(whatsappMessage)}`;

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
