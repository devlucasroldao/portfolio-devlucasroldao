// O <video> do Hero tem autoplay+loop como atributo estático no HTML (roda
// direto, sem esperar JS) — funciona bem pra maioria, mas ignora quem
// configurou "reduzir movimento" no sistema (acessibilidade: gente com
// sensibilidade a movimento/vestibular). O resto do site já respeita essa
// preferência (rotator.js, scroll-animations.js) — faltava só o vídeo.
// Também economiza os 10.8MB do arquivo pra quem pediu menos movimento:
// sem autoplay, o browser não precisa baixar o vídeo inteiro, só fica o
// poster (~113KB) parado.
export function initHeroVideo() {
  const video = document.querySelector('.hero__video');
  if (!video) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.pause();
    video.removeAttribute('autoplay');
    video.removeAttribute('loop');
    video.currentTime = 0;
  }
}
