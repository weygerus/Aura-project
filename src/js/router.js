// router.js
import Home from './pages/home.js';
import Previews from './pages/previews.js';
import Contato from './pages/contato.js';

const routes = {
  '/': Home,
  '/previews': Previews,
  '/contato': Contato
};

export function initRouter() {
  
  const app = document.getElementById('app');
  
  function navigate(path) {
    const page = routes[path] || routes['/'];
    app.innerHTML = page.render();
  }
  
  // Navegar na mudança de hash
  window.addEventListener('hashchange', () => {
    const path = window.location.hash.slice(1) || '/';
    navigate(path);
  });
  
  // Navegação inicial
  navigate(window.location.hash.slice(1) || '/');
}