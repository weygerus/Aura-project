// js/components/Navbar.js
export default {
  render() {
    return `
      <nav class="navbar">
        <div class="logo">
          <a href="#/">Aura</a>
        </div>
        <ul class="nav-links">
          <li><a href="#/">Home</a></li>
          <li><a href="#/previews">Previews</a></li>
          <li><a href="#/contato">Contato</a></li>
        </ul>
      </nav>
    `;
  }
};
