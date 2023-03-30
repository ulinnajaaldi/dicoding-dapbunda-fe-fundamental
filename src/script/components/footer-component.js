import logo from "../../assets/logo.png";

class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="w-full absolute mx-auto right-0 bg-base-200 text-base-content">
        <div class="footer items-center flex justify-between p-10 max-w-screen-xl mx-auto">
            <div class="md:block flex items-center justify-center flex-col w-full md:text-start text-center">
                <img src=${logo} alt="logo" class="lg:w-20 w-16 mb-4"/>
                <p class="lg:text-lg text-base">DapBunda Meals ©<br/>Build by Aldilla Ulinnaja x IDCamp</p>
            </div> 
            <div class="flex items-start justify-center gap-10">
                <div class="md:flex hidden flex-col">
                    <span class="footer-title lg:text-xl text-lg">Services</span> 
                    <a href="#home" class="link link-hover lg:text-base text-sm">Home</a> 
                    <a href="#category-list-up" class="link link-hover lg:text-base text-sm">Menu</a> 
                    <a href="#searchFood" class="link link-hover lg:text-base text-sm">Search Food</a> 
                    <a href="#about-us" class="link link-hover lg:text-base text-sm">About Us</a>
                </div>
                <div class="md:flex hidden flex-col">
                    <span class="footer-title lg:text-xl text-lg">Social</span> 
                    <a href="https://github.com/ulinnajaaldi" target="_blank" class="link link-hover lg:text-base text-sm">Github</a>
                </div>
            </div> 
        </div>
    </footer>
    `;
  }
}

customElements.define("footer-component", FooterComponent);
