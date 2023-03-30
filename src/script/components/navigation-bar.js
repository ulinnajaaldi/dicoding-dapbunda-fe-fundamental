import logo from "../../assets/logo.png";

class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="flex items-center justify-between py-6" id="home" >

      <div class="flex items-center justify-center gap-2" data-aos="fade-up">
        <img src=${logo} alt="logo-app" class="xl:w-14 w-12"/>
        <h3 class="xl:text-2xl text-xl text-accent">DapBunda</h3>
      </div>

      <div class="md:flex items-center justify-center gap-4 hidden">
        <div class="flex items-center justify-center gap-5 font-semibold xl:text-base text-sm " data-aos="fade-up"  data-aos-duration="800">
          <a href="#home" class="hover:text-accent text-primary transition-all duration-200">Home</a>
          <a href="#category-list-up" class="hover:text-accent text-primary transition-all duration-200">Menu</a>
          <a href="#searchFood" class="hover:text-accent text-primary transition-all duration-200">Search Food</a>
          <a href="#about-us" class="hover:text-accent text-primary transition-all duration-200">About Us</a>
        </div>
        <div class="h-12 w-[1px] bg-primary/30 hidden lg:block" data-aos="fade-up" data-aos-duration="900"></div> 
        <div class="lg:flex hidden items-center" data-aos="fade-up" data-aos-duration="1000">
          <h3 class="w-3/5 xl:text-sm text-xs cursor-default">Get in touch with us for Booking</h3>
          <button class="px-5 py-2 bg-accent font-medium text-white hover:bg-accent/80 transition-all duration-200 xl:text-base text-sm">Call Now</button>
        </div>
      </div>

      <div class="block z-[99] md:hidden" data-aos="fade-up" data-aos-duration="800">
        <div class="dropdown dropdown-end">
          <button tabindex="0">
              <label class="bg-accent p-2 rounded-full text-white swap">
                <input type="checkbox" />
                <svg class=" fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
              </label>
          </button>
          <div tabindex="0" class="dropdown-content flex flex-col items-start gap-3 menu px-7 py-5 shadow-lg drop-shadow-sm bg-base-100 rounded-box w-64">
            <a href="#home" class="hover:text-accent text-primary transition-all duration-200">Home</a>
            <a href="#category-list-up" class="hover:text-accent text-primary transition-all duration-200">Menu</a>
            <a href="#searchFood" class="hover:text-accent text-primary transition-all duration-200">Search Food</a>
            <a href="#about-us" class="hover:text-accent text-primary transition-all duration-200">About Us</a>
          </div>
        </div>
      </div>

    </nav>
    `;
  }
}

customElements.define("navigation-bar", NavigationBar);
