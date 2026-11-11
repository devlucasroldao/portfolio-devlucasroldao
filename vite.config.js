import { defineConfig } from 'vite';
import { resolve, basename } from 'node:path';

const htmlPages = ['index', 'case-aval', 'case-conecte', 'case-lu-perfumes', 'case-helena-lima', '404'];

// Preenche <!--head--> e <!--app--> de cada página com o HTML gerado por src/render.js.
// Resultado: o conteúdo existe no HTML final, sem depender de JavaScript no navegador.
function prerender() {
  return {
    name: 'prerender',
    transformIndexHtml: {
      order: 'pre',
      async handler(html, ctx) {
        const mod = ctx.server
          ? await ctx.server.ssrLoadModule('/src/render.js')
          : await import('./src/render.js');
        const page = mod.pages[basename(ctx.filename)];
        if (!page) return html;
        const { head, body } = page();
        return html.replace('<!--head-->', head).replace('<!--app-->', body);
      },
    },
  };
}

export default defineConfig({
  plugins: [prerender()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(htmlPages.map((p) => [p, resolve(__dirname, `${p}.html`)])),
    },
  },
});
