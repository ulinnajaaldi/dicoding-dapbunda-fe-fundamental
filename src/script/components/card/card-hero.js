import cookIcon from "../../../assets/cook-icon.png";

class CardHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="flex flex-col items-center drop-shadow-2xl justify-center xl:w-[330px] w-[280px] xl:h-[300px] h-[250px] xl:p-10 p-5 text-center bg-white rounded-xl hover:-translate-y-5 cursor-pointer transition-all duration-300" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000" data-aos-once="true">
        <img src=${cookIcon} alt="hero-image" class="xl:w-24 w-20"/> 
        <h3 class="text-primary xl:text-2xl text-xl font-medium py-2">${this.getAttribute(
          "title"
        )}</h3>
        <p class="xl:text-lg text-base">${this.getAttribute("description")}</p>
    </div>`;
  }
}

customElements.define("card-hero", CardHero);
