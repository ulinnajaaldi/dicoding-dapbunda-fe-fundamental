class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="text-blue-500">
            <ul class="flex flex-row justify-center">
                <li class="mr-4">
                    <a href="#/home" class="text-blue-500">Home</a>
                </li>
                <li class="mr-4">
                    <a href="#/favorite">Favorite</a>
                </li>
                <li class="mr-4">
                    <a href="/" id="logout">Logout</a>
                </li>
            </ul>
        </nav>
    `;
  }
}

customElements.define("navigation-bar", NavigationBar);
