/* eslint-disable import/no-extraneous-dependencies */
import "aos/dist/aos.css";
import "./style/style.css";

import AOS from "aos";
import main from "./script/views/main.js";

// Components
import "./script/components/navigation-bar.js";
import "./script/components/hero-element.js";
import "./script/components/about-us.js";
import "./script/components/item-list.js";
import "./script/components/search-item.js";
import "./script/components/footer-component.js";

AOS.init();

document.addEventListener("DOMContentLoaded", main);
