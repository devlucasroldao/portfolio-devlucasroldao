import { initRotator } from './rotator.js';

const WORDS = ['Desenvolvedor', 'Lucas Roldão', 'Criador de conteúdo', 'Estrategista', '"Kinhooo"'];

export function initHeroRotator() {
  initRotator(document.querySelector('.hero__rotator'), WORDS, { wordSelector: '.hero__rotator-word' });
}
