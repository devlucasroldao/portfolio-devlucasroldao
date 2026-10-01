// O <video> do Hero é injetado pelo main.js com autoplay+loop — funciona
// bem pra maioria, mas ignora quem configurou "reduzir movimento" no
// sistema (acessibilidade: gente com sensibilidade a movimento/vestibular).
// O resto do site já respeita essa preferência (rotator.js,
// scroll-animations.js) — faltava só o vídeo. Também economiza os ~2.5MB
// do arquivo pra quem pediu menos movimento: sem autoplay, o browser não
// precisa baixar o vídeo inteiro, só fica o poster (~113KB) parado.
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

  // Navegadores embutidos (Instagram/WKWebView, WhatsApp) e o Safari iOS
  // deixam o vídeo parado em vários cenários, cada um sinalizado por um
  // evento diferente — ou por nenhum. Todos caem no mesmo tryPlay():
  //
  // 1. 'pause' disparado pelo próprio browser (ex: toque num link no
  //    Instagram) → rebate com play(). Guard 'ended' evita rebater quando
  //    o vídeo termina de verdade (não acontece com loop, mas seguro ter).
  //
  // 2. visibilitychange → a aba/webview voltou ao foco.
  //
  // 3. pageshow → volta pelo botão "voltar": a página sai do bfcache com
  //    o vídeo suspenso, sem 'pause' nem 'visibilitychange'.
  //
  // 4. Autoplay bloqueado na carga (modo pouca energia, webview
  //    restritivo): o vídeo nunca começou, então nenhum evento acima
  //    dispara. Tenta agora e, se o browser recusar, tenta de novo no
  //    primeiro gesto do usuário (que libera o play()).
  const tryPlay = () => {
    if (video.paused && !video.ended) {
      video.play().catch(() => {
        // Falha silenciosa — autoplay bloqueado ou página sendo
        // destruída por uma navegação real, não precisa logar.
      });
    }
  };

  video.addEventListener('pause', tryPlay);

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') tryPlay();
  });

  window.addEventListener('pageshow', tryPlay);

  tryPlay();
  const onGesture = () => {
    tryPlay();
    document.removeEventListener('touchend', onGesture);
    document.removeEventListener('click', onGesture);
  };
  video.addEventListener('playing', () => {
    document.removeEventListener('touchend', onGesture);
    document.removeEventListener('click', onGesture);
  }, { once: true });
  document.addEventListener('touchend', onGesture, { passive: true });
  document.addEventListener('click', onGesture);
}
