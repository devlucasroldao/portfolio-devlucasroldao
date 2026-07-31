import nextdotjs from 'simple-icons/icons/nextdotjs.svg?raw';
import typescript from 'simple-icons/icons/typescript.svg?raw';
import tailwindcss from 'simple-icons/icons/tailwindcss.svg?raw';
import supabase from 'simple-icons/icons/supabase.svg?raw';
import vercel from 'simple-icons/icons/vercel.svg?raw';
import javascript from 'simple-icons/icons/javascript.svg?raw';
import github from 'simple-icons/icons/github.svg?raw';

// Ícones vêm em preto por padrão (simple-icons) — forçamos currentColor pra
// respeitar a paleta fechada do briefing (nada de cor de marca solta).
function withCurrentColor(svg) {
  return svg.replace('<svg ', '<svg fill="currentColor" ');
}

const rawIcons = { nextdotjs, typescript, tailwindcss, supabase, vercel, javascript, github };

export const iconTitles = {
  nextdotjs: 'Next.js',
  typescript: 'TypeScript',
  tailwindcss: 'Tailwind CSS',
  supabase: 'Supabase',
  vercel: 'Vercel',
  javascript: 'JavaScript',
  github: 'GitHub',
};

export function getIconSvg(key) {
  return withCurrentColor(rawIcons[key]);
}
