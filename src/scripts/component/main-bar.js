/* eslint-disable no-useless-constructor */
class MainBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <main id="mainContent"  tabindex="0">
            
        </main>
        `;
  }
}
customElements.define('main-bar', MainBar);
