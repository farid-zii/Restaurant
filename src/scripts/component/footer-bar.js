/* eslint-disable lines-between-class-members */
/* eslint-disable no-useless-constructor */
class FooterBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <p><b>Copyright</b> &copy; 2022, Fanda Alfaridzi </p>
    </footer>
      `;
  }
}
customElements.define('footer-bar', FooterBar);
