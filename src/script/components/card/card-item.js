class CardItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card shadow-lg border bg-base-100 hover:bg-base-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-meal-id="${this.getAttribute(
      "id"
    )}">
          <div class="flex-row items-center space-x-4 card-body">
            <div>
              <div class="avatar">
                <div class="rounded-full w-14 h-14 shadow">
                  <img src="${this.getAttribute(
                    "src"
                  )}" alt="${this.getAttribute("title")}">
                </div>
              </div>
            </div> 
            <div>
              <h2 class="card-title">${this.getAttribute("title")}</h2> 
            </div>
          </div>
        </div>`;
  }
}

customElements.define("card-item", CardItem);
