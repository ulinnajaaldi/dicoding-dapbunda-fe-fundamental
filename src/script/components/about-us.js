class AboutUs extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = ``;
  }
}

customElements.define("about-us", AboutUs);
