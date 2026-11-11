// Pré-renderização: cada arquivo .html da raiz recebe o <head> e o conteúdo prontos
// no build (ver o plugin em vite.config.js). O site funciona sem JavaScript.
import { site } from './data/site.js';
import { casesData } from './data/cases.js';
import { head } from './templates/layout.js';
import { homePage } from './templates/home.js';
import { casePage, notFoundPage } from './templates/case.js';

const caseDescriptions = {
  'case-aval':
    'Case Aval: SaaS de aprovação de conteúdo para agências, criado por Lucas Roldão. Como começou, as decisões, o que ficou de fora e quatro demos públicas.',
  'case-conecte':
    'Case Conecte Telecom: de site institucional a plataforma com contratação digital, painel próprio e auditoria de segurança com 39 achados corrigidos.',
  'case-lu-perfumes':
    'Case Lu Perfumes & Presentes: catálogo online com painel próprio e pedido pelo WhatsApp, sem tirar o atendimento humano do centro.',
  'case-helena-lima':
    'Case Helena Lima: posicionamento, identidade visual, fotos e landing page no ar em menos de 24 horas.',
};

export const pages = {
  'index.html': () => ({
    head: head({
      title: `${site.name} — ${site.role}`,
      description:
        'Portfólio de Lucas Roldão, desenvolvedor front-end (React, Next.js, TypeScript, Supabase) com produtos em produção. Disponível para estágio e júnior, remoto.',
      path: '/',
      type: 'profile',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Lucas Roldão Cardoso',
        jobTitle: site.role,
        url: site.url,
        email: `mailto:${site.email}`,
        address: { '@type': 'PostalAddress', addressLocality: 'Arroio do Sal', addressRegion: 'RS', addressCountry: 'BR' },
        sameAs: [site.linkedin, site.github],
      },
    }),
    body: homePage(),
  }),
  '404.html': () => ({
    head: head({ title: `Página não encontrada — ${site.name}`, description: 'Essa página não existe.', path: '/404', noindex: true }),
    body: notFoundPage(),
  }),
};

for (const c of casesData) {
  pages[`${c.id}.html`] = () => ({
    head: head({ title: `Case ${c.title} — ${site.name}`, description: caseDescriptions[c.id], path: c.href, type: 'article' }),
    body: casePage(c.id),
  });
}
