// js/app.js
import { initRouter } from './js/router.js';
import Navbar from './js/components/navbar.js';

import './styles/main.css';
import './styles/hero.css';
import './styles/featurePreviews.css';

// Renderiza a navbar
document.getElementById('navbar').innerHTML = Navbar.render();

// app.js ou onde inicializa a SPA
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav.navbar');
  if (window.scrollY > 12) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Inicializa o router
initRouter();

