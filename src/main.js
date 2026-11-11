import './styles/site.css';

// O site inteiro funciona sem este arquivo. Ele só liga o botão de tema.
const root = document.documentElement;
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
  button.hidden = false;
  button.addEventListener('click', () => {
    const current = root.dataset.theme || (systemDark.matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // Sem localStorage (modo privado antigo): o tema vale só nesta visita.
    }
  });
});
