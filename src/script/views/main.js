import DataSource from "../data/data-source.js";

const main = () => {
  const searchButton = document.querySelector("#searchButtonElement");
  const searchInput = document.querySelector("#searchElement");
  const searchMealsCard = document.querySelector("#search-meals-card");
  const loader = document.querySelector("#loaderSearch");

  searchButton.addEventListener("click", async (e) => {
    e.preventDefault();
    loader.classList.remove("hidden");
    loader.classList.add("flex");
    searchButton.classList.remove("text-white");
    searchButton.classList.add("text-accent");
    const results = await DataSource.searchMealByName(searchInput.value);
    let mealCards = "";
    if (searchInput.value === "") {
      alert("Please fill the search box!");
      loader.classList.remove("flex");
      loader.classList.add("hidden");
      searchButton.classList.remove("text-accent");
      searchButton.classList.add("text-white");
      searchMealsCard.innerHTML = "";
    } else if (results && results.length >= 3) {
      results.forEach((result) => {
        mealCards += `<card-item id="${result.idMeal}" src="${result.strMealThumb}" title="${result.strMeal}"></card-item>`;
      });
      loader.classList.remove("flex");
      loader.classList.add("hidden");
      searchButton.classList.remove("text-accent");
      searchButton.classList.add("text-white");
      searchMealsCard.classList.add("md:grid-cols-3", "grid-cols-2", "grid");
      searchMealsCard.classList.remove("flex", "item-center", "justify-center");
      searchMealsCard.innerHTML = mealCards;
      document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("click", async (event) => {
          const { mealId } = event.currentTarget.dataset;
          const mealDetails = await DataSource.getMealByID(mealId);
          let mealDataDetails = "";
          mealDetails.forEach((meal) => {
            let ingredientsList = "";
            for (let i = 1; i <= 20; i++) {
              if (meal[`strIngredient${i}`]) {
                ingredientsList += `<p class="p-2 rounded-md transition-all hover:bg-gray-200/60 cursor-pointer">${
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
          document.querySelector("#meal-details").innerHTML = mealDataDetails;
          document.querySelector("#modal").classList.add("modal-open");
        });
      });
      document.querySelector("#close-modal").addEventListener("click", () => {
        document.querySelector("#modal").classList.remove("modal-open");
      });
    } else if (results && results.length === 1) {
      results.forEach((result) => {
        mealCards += `<card-item id="${result.idMeal}" src="${result.strMealThumb}" title="${result.strMeal}"></card-item>`;
      });
      loader.classList.remove("flex");
      loader.classList.add("hidden");
      searchButton.classList.remove("text-accent");
      searchButton.classList.add("text-white");
      searchMealsCard.classList.remove("md:grid-cols-3", "grid-cols-2", "grid");
      searchMealsCard.classList.add("flex", "item-center", "justify-center");
      searchMealsCard.innerHTML = mealCards;
      document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("click", async (event) => {
          const { mealId } = event.currentTarget.dataset;
          const mealDetails = await DataSource.getMealByID(mealId);
          let mealDataDetails = "";
          mealDetails.forEach((meal) => {
            let ingredientsList = "";
            for (let i = 1; i <= 20; i++) {
              if (meal[`strIngredient${i}`]) {
                ingredientsList += `<p class="p-2 rounded-md transition-all hover:bg-gray-200/60 cursor-pointer">${
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
          document.querySelector("#meal-details").innerHTML = mealDataDetails;
          document.querySelector("#modal").classList.add("modal-open");
        });
      });
      document.querySelector("#close-modal").addEventListener("click", () => {
        document.querySelector("#modal").classList.remove("modal-open");
      });
    } else {
      alert("No results found!");
      loader.classList.remove("flex");
      loader.classList.add("hidden");
      searchButton.classList.remove("text-accent");
      searchButton.classList.add("text-white");
      searchMealsCard.innerHTML = "";
    }
  });
};

export default main;
