/* eslint-disable no-shadow */
import DataSource from "../data/data-source";
import "./card/card-item";
import "./item-list-content";

class ItemList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    const categories = await DataSource.getAllListCategories();
    let categoryList = "";
    categories.forEach((category) => {
      categoryList += `<li class="p-2 rounded-md transition-all hover:bg-accent hover:text-white cursor-pointer">${category.strCategory}</li>`;
    });
    this.innerHTML = `
      <div class="flex gap-3">
        <ul class="w-1/4 p-2">${categoryList}</ul>
        <div class="w-3/4 relative">
          <item-list-content></item-list-content>
        </div>
      </div>
      <div id="modal" class="modal">
        <div class="modal-box">
          <p id="meal-details"></p>
          <div class="modal-action">
            <button class="btn btn-primary" id="close-modal">Close</button>
          </div>
        </div>
      </div>
    `;

    // Membuat state awal agar di Beef Category
    const meals = await DataSource.getMealByCategory("Beef");
    let mealCards = "";
    meals.slice(0, 12).forEach((meal) => {
      mealCards += `
        <card-item id="${meal.idMeal}" src="${meal.strMealThumb}" title="${meal.strMeal}"></card-item>
        `;
    });
    this.querySelector("#meal-cards").innerHTML = mealCards;
    this.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", async (event) => {
        const { mealId } = event.currentTarget.dataset;
        const mealDetails = await DataSource.getMealByID(mealId);
        this.querySelector("#meal-details").textContent =
          JSON.stringify(mealDetails);
        this.querySelector("#modal").classList.add("modal-open");
      });
    });

    // List Category sesuai yang di klik
    this.querySelectorAll("li").forEach((li) => {
      li.addEventListener("click", async (event) => {
        const category = event.target.textContent;
        this.querySelector("#breadcrumb").textContent = category;
        this.querySelector("#loader").classList.remove("hidden");
        this.querySelector("#loader").classList.add("flex");

        const meals = await DataSource.getMealByCategory(category);
        let mealCards = "";
        meals.slice(0, 12).forEach((meal) => {
          mealCards += `
          <card-item id="${meal.idMeal}" src="${meal.strMealThumb}" title="${meal.strMeal}">
          </card-item>
          `;
        });

        this.querySelector("#loader").classList.remove("flex");
        this.querySelector("#loader").classList.add("hidden");
        this.querySelector("#meal-cards").innerHTML = mealCards;

        this.querySelectorAll(".card").forEach((card) => {
          card.addEventListener("click", async (event) => {
            const { mealId } = event.currentTarget.dataset;
            const mealDetails = await DataSource.getMealByID(mealId);
            this.querySelector("#meal-details").textContent =
              JSON.stringify(mealDetails);
            this.querySelector("#modal").classList.add("modal-open");
          });
        });
      });
    });

    this.querySelector("#close-modal").addEventListener("click", () => {
      this.querySelector("#modal").classList.remove("modal-open");
    });
  }
}

customElements.define("item-list", ItemList);
