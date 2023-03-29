/* eslint-disable import/extensions */
import hero from "../../assets/hero.png";
import "./card/card-hero.js";

class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="md:my-8 my-4">
      <div class="xl:h-[470px] lg:h-[400px] h-[430px] bg-[#884A16] relative flex lg:flex-row flex-col items-center justify-between rounded-3xl">
        <div class="flex flex-col items-center h-full justify-center w-full basis-1/2 text-white gap-3 translate-y-3 relative z-50">
          <h1 class="xl:text-4xl md:text-3xl text-xl font-semibold">Welcome to </h1>
          <h1 class="block xl:text-5xl md:text-4xl text-2xl font-bold">DapBunda Restaurant</h1>
          <div class="flex items-center justify-center gap-2 md:text-lg text-sm mb-2">
            <div class="h-[1.3px] w-10 bg-white"></div>
            <p>Home Of The Best Food</p>
            <div class="h-[1.3px] w-10 bg-white"></div>
          </div>
          <button class="px-5 py-2 bg-accent font-medium text-white hover:bg-accent/80 transition-all duration-200 xl:text-base md:text-sm text-xs"><a href="#category-list-up">VIEW MENU</a></button>
        </div>
        <div class="basis-1/2">
          <img src=${hero} alt="hero-image" class="lg:absolute md:w-6/12 w-10/12 bottom-0 right-0 lg:mx-0 mx-auto "/>
        </div>
      </div>
      <div class="xl:-translate-y-26 lg:-translate-y-20 md:-translate-y-10 -translate-y-0 md:mt-0 mt-6 flex md:flex-row flex-col items-center justify-center md:gap-8 gap-6 relative z-[99]">
        <card-hero title="Magical Atmosphere" description="In our institution there is a magical atmosphere filled with delicious flavors"></card-hero> 
        <card-hero title="Best Quality Food" description="The quality of our food is excellent!" class="lg:block hidden"></card-hero> 
        <card-hero title="Inexpensive Food" description="The cost of our food depends only on its quantity. Quality always on top!"></card-hero>
      </div>
    </section>
    `;
  }
}

customElements.define("hero-element", Hero);
