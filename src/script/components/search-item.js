/* eslint-disable import/extensions */
import "./card/card-item.js";

class SearchItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
    <section class="flex flex-col items-center justify-center pb-10 gap-4">
        <h1 class="text-3xl font-bold leading-relaxed">Find Food You Like Here!</h1>
        <form class="w-[450px] relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 z-[99] pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input id="searchElement" type="search" class="block drop-shadow-lg w-full p-4 pl-10 focus:outline-none rounded-lg border-b" placeholder="Search Food, Menu, Others..." required/>
                <button type="submit" id="searchButtonElement" class="text-white bg-secondary hover:bg-accent transition-all duration-300 absolute right-2.5 bottom-2.5 font-medium rounded-lg px-4 py-2 z-[99]">Search</button>
        </form>
        <div class="py-10 grid grid-cols-3 gap-4" id="search-meals-card"></div>
    </section>`;
  }
}

customElements.define("search-item", SearchItem);
