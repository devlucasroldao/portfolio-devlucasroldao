import { initRotator } from './rotator.js';

const WORDS = ['Lucas Roldão', 'Desenvolvedor', 'Criador de conteúdo', 'Estrategista', '"Kinhooo"'];

export function initHeroRotator() {
  initRotator(document.querySelector('.hero__rotator'), WORDS, { wordSelector: '.hero__rotator-word' });
}
