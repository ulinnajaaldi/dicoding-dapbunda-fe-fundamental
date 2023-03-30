class CardItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card shadow-lg border bg-base-100 hover:bg-base-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-meal-id="${this.getAttribute(
      "id"
    )}">
          <div class="flex-row items-center space-x-0 md:space-x-2 lg:space-x-4 card-body lg:p-8 md:p-4 p-2  ">
            <div>
              <div class="avatar">
                <div class="rounded-full w-10 h-10 lg:w-14 lg:h-14">
                  <img src="${this.getAttribute(
                    "src"
                  )}" alt="${this.getAttribute("title")}">
                </div>
              </div>
            </div> 
            <div>
              <h2 class="card-title lg:text-xl md:text-base text-sm">${this.getAttribute(
                "title"
              )}</h2> 
            </div>
          </div>
        </div>`;
  }
}

customElements.define("card-item", CardItem);
