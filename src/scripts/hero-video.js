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
    return;
  }

  // Bug do Instagram/WKWebView: o navegador embutido suspende o <video>
  // quando o usuário toca num link (mesmo que a navegação seja cancelada
  // ou abra outra aba). Resultado: a pessoa volta à página com o vídeo
  // parado. Dois listeners cobrem os dois cenários:
  //
  // 1. 'pause' disparado pelo próprio browser → rebate com play()
  //    imediatamente. Guard 'ended' evita rebater quando o vídeo
  //    termina de verdade (não acontece com loop, mas seguro ter).
  //
  // 2. visibilitychange → quando a aba/webview volta ao foco, garante
  //    que o vídeo esteja rodando (cobre Instagram, Twitter e qualquer
  //    navegador embutido que pausa ao perder foco).
  video.addEventListener('pause', () => {
    if (!video.ended) {
      video.play().catch(() => {
        // Falha silenciosa — pode acontecer se o usuário navegou de
        // fato (página real sendo destruída), não precisa logar.
      });
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && video.paused && !video.ended) {
      video.play().catch(() => {});
    }
  });
}
