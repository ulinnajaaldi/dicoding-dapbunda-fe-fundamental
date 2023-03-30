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
        <ul class="w-1/4 px-2 text-sm md:text-base">${categoryList}</ul>
        <div class="w-3/4 relative">
          <item-list-content></item-list-content>
        </div>
      </div>
      <div id="modal" class="modal">
        <div class="modal-box w-11/12 max-w-6xl max-h-5/6">
          <label id="close-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <p id="meal-details"></p>
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
        let mealDataDetails = "";
        mealDetails.forEach((meal) => {
          let ingredientsList = "";
          for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
              ingredientsList += `<p class="lg:p-2 p-1 px-2 rounded-md transition-all hover:bg-gray-200/60 cursor-pointer">${
                meal[`strMeasure${i}`]
              } ${meal[`strIngredient${i}`]}</p>`;
            }
          }

          mealDataDetails += `
          <h2 class="font-bold lg:text-xl md:text-lg text-base text-primary pb-3">${
            meal.strMeal
          }</h2>
          <div class="flex md:flex-row flex-col items-start justify-start lg:gap-10 gap-5 md:py-1 pb-3 pt-1 border-b-2 md:border-b-0">
            <img src="${meal.strMealThumb}" alt="${
            meal.strMeal
          }" class="lg:h-72 h-56 rounded-xl">
            <div>
              <p class="lg:text-lg text-base font-semibold text-primary lg:pb-3 pb-1 pl-2">Ingridient 🍳</p> 
              <div class="grid lg:grid-rows-6 grid-rows-5 grid-flow-col gap-1 lg:gap-x-3 gap-x-0 lg:text-sm text-xs"> ${ingredientsList}</div>
            </div>
          </div>
          <p class="md:pt-0 pt-3 antialiased leading-relaxed text-justify lg:text-base text-sm whitespace-normal ">
            ${meal.strInstructions.split("\r\n ")}
          </p>
          `;
        });

        this.querySelector("#meal-details").innerHTML = mealDataDetails;
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
            let mealDataDetails = "";
            mealDetails.forEach((meal) => {
              let ingredientsList = "";
              for (let i = 1; i <= 20; i++) {
                if (meal[`strIngredient${i}`]) {
                  ingredientsList += `<p class="lg:p-2 p-1 px-2 rounded-md transition-all hover:bg-gray-200/60 cursor-pointer">${
                    meal[`strMeasure${i}`]
                  } ${meal[`strIngredient${i}`]}</p>`;
                }
              }

              mealDataDetails += `
              <h2 class="font-bold lg:text-xl md:text-lg text-base text-primary pb-3">${
                meal.strMeal
              }</h2>
              <div class="flex md:flex-row flex-col items-start justify-start lg:gap-10 gap-5 md:py-1 pb-3 pt-1 border-b-2 md:border-b-0">
                <img src="${meal.strMealThumb}" alt="${
                meal.strMeal
              }" class="lg:h-72 h-56 rounded-xl">
                <div>
                  <p class="lg:text-lg text-base font-semibold text-primary lg:pb-3 pb-1 pl-2">Ingridient 🍳</p> 
                  <div class="grid lg:grid-rows-6 grid-rows-5 grid-flow-col gap-1 lg:gap-x-3 gap-x-0 lg:text-sm text-xs"> ${ingredientsList}</div>
                </div>
              </div>
              <p class="md:pt-0 pt-3 antialiased leading-relaxed text-justify lg:text-base text-sm whitespace-normal ">
                ${meal.strInstructions.split("\r\n ")}
              </p>
                `;
            });

            this.querySelector("#meal-details").innerHTML = mealDataDetails;
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
