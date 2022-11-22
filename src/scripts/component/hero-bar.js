/* eslint-disable no-useless-constructor */
class HeroBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero-inner">
                <h1 class="hero-title">Baratie</h1>
                <p class="hero-tagline">Kami adalah penyedia Restaurant diatas lautan dan didalam lautan kami memiliki berbagai cabang di semua lautan</p>
                <picture>
                <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
                  <img src='./images/hero-image_2-large.jpg' 
                      alt="hero poster">
                </picture>
            </div>
        </div>
          `;
  }
}
customElements.define('hero-bar', HeroBar);
