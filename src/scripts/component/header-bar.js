/* eslint-disable no-useless-constructor */
class HeaderBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="app-bar">
            <div class="app-bar__menu">
                <button id="hamburgerButton">☰</button>
            </div>
            <div class="app-bar__brand">
                <h1>Baratie</h1>
            </div>
            <nav id="navigationDrawer" class="app-bar__navigation">
                <ul>
                <li class="nav-item"><a href="#/">Home</a></li>
                <li class="nav-item"><a href="#/like">Favorite</a></li>
                <li class="nav-item"><a href="https://www.instagram.com/alfrdzi_fnda">About Us</a></li>
                </ul>
            </nav>
        </header>
          `;
  }
}
customElements.define('header-bar', HeaderBar);
