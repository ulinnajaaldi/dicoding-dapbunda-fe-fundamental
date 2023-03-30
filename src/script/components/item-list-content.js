class ItemListContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="md:text-sm text-xs breadcrumbs cursor-default mb-2">
          <ul>
            <li >Category</li> 
            <li id="breadcrumb">Beef</li> 
          </ul>
        </div>
        <div class="hidden justify-center items-center w-full bg-white/50 absolute h-full top-32 -translate-y-32 z-[99]" id="loader">
          <button type="button" class="inline-flex items-center font-semibold leading-6 text-sm transition ease-in-out duration-150 " disabled="">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
          </button>
          </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4" id="meal-cards">
        </div>`;
  }
}

customElements.define("item-list-content", ItemListContent);
