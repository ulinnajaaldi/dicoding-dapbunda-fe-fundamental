import "./card/card-item.js";

class SearchItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="flex flex-col items-center justify-center pb-10 gap-4 relative" id="searchFood">
        <h1 class="lg:text-3xl text-xl font-bold leading-relaxed" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">Find Food You Like Here!</h1>
        <form class="lg:w-[450px] md:w-[400px] w-[350px] relative" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 z-[99] pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>

                <input id="searchElement" type="search" class="block drop-shadow-lg w-full p-4 pl-10 focus:outline-none rounded-lg border-b md:text-base text-sm " placeholder="Search Food, Menu, Others..." required/>
                
                <button type="submit" id="searchButtonElement" class="text-white bg-accent transition-all duration-300 absolute right-2.5 bottom-2.5 font-medium rounded-lg px-4 py-2 z-[99] md:text-base text-sm">
                  Search
                </button>

                <div class="hidden justify-center items-center absolute z-[99] right-[38px] top-[18px] bg-accent" id="loaderSearch">
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
        </form>
        <div class="md:py-10 py-4 grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2" id="search-meals-card"></div>
        
    </section>
    <div id="modal" class="modal">
      <div class="modal-box w-11/12 max-w-6xl max-h-5/6">
        <label id="close-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <p id="meal-details"></p>
      </div>
    </div>
    `;
  }
}

customElements.define("search-item", SearchItem);
