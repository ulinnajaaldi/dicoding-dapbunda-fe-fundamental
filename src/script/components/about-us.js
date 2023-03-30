import imageAbout1 from "../../assets/images-about-1.png";
import imageAbout2 from "../../assets/images-about-2.png";
import imageAbout3 from "../../assets/images-about-3.png";

class AboutUs extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="flex lg:flex-row flex-col items-center justify-center md:mt-0 mt-12 relative lg:mb-14 mb-10" id="about-us">
      <div class="flex-1">
        <h1 class="lg:text-[52px] md:text-4xl text-2xl font-bold text-center pb-5" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">About <span class="text-secondary">Us</span></h1>
        <p class="text-center md:w-[450px] w-11/12 lg:text-base text-sm mx-auto lg:pb-16 pb-12 leading-relaxed" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
          Like any other original place, we have our own, special history. The idea of the restaurant came to the founders unexpectedly. While walking through the woods, the creator of our restaurant was stuck hundreds of kilometers from the nearest settlement. Far from civilization and communication, they had to temporarily equip themselves with a simple way of life, to get and cook their own food.
        </p>
        <div class="flex items-center justify-center gap-10 md:pb-20 pb-8">
          <div class="inline-block text-center" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
            <h3 class="lg:text-[40px] md:text-3xl text-xl text-secondary">14</h3>
            <p class="lg:text-xl md:text-lg text-base">Categories</p>
          </div>
          <div class="inline-block text-center" data-aos="fade-up" data-aos-duration="900" data-aos-once="true">
            <h3 class="lg:text-[40px] md:text-3xl text-xl text-secondary">285</h3>
            <p class="lg:text-xl md:text-lg text-base">Meals</p>
          </div>
          <div class="inline-block text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <h3 class="lg:text-[40px] md:text-3xl text-xl text-secondary">574</h3>
            <p class="lg:text-xl md:text-lg text-base">Ingredients</p>
          </div>
        </div>
      </div>
      <div class="flex-1 lg:flex hidden">
        <img src=${imageAbout1} alt="imageAbout1" class="absolute top-14 right-[300px] z-50 -translate-x-20 drop-shadow-xl shadow-xl" data-aos="zoom-in" data-aos-duration="800" data-aos-once="true"/>
        <img src=${imageAbout2} alt="imageAbout2" class="absolute -bottom-10 right-0 z-50 -translate-x-20 drop-shadow-xl shadow-xl" data-aos="zoom-in" data-aos-duration="800" data-aos-once="true"/>
        <img src=${imageAbout3} alt="imageAbout3" class="absolute top-0 right-10 z-10 -translate-x-20" data-aos="zoom-in" data-aos-duration="800" data-aos-once="true"/>
      </div>
    </div>
    `;
  }
}

customElements.define("about-us", AboutUs);
