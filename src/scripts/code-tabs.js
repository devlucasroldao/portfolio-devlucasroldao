export function initCodeTabs(root) {
  const tabs = root.querySelectorAll('.code-editor__tab');
  const panels = root.querySelectorAll('.code-editor__panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('is-active'));
      panels.forEach((p) => p.classList.remove('is-active'));
      tab.classList.add('is-active');
      root.querySelector(`[data-panel="${tab.dataset.tab}"]`).classList.add('is-active');
    });
  });
}
