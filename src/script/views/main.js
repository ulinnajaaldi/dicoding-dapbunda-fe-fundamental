/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import DataSource from "../data/data-source.js";

const main = () => {
  const searchButton = document.querySelector("#searchButtonElement");
  const searchInput = document.querySelector("#searchElement");
  const searchMealsCard = document.querySelector("#search-meals-card");

  searchButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const results = await DataSource.searchMealByName(searchInput.value);
    let mealCards = "";
    if (searchInput.value === "") {
      alert("Please fill the search box!");
      mealCards = "";
      searchMealsCard.innerHTML = mealCards;
    } else if (results && results.length >= 3) {
      results.forEach((result) => {
        mealCards += `<card-item id="${result.idMeal}" src="${result.strMealThumb}" title="${result.strMeal}"></card-item>`;
      });
      searchMealsCard.classList.add("grid-cols-3", "grid");
      searchMealsCard.classList.remove("flex", "item-center", "justify-center");
      searchMealsCard.innerHTML = mealCards;
    } else if (results && results.length === 1) {
      results.forEach((result) => {
        mealCards += `<card-item id="${result.idMeal}" src="${result.strMealThumb}" title="${result.strMeal}"></card-item>`;
      });
      searchMealsCard.classList.remove("grid-cols-3", "grid");
      searchMealsCard.classList.add("flex", "item-center", "justify-center");
      searchMealsCard.innerHTML = mealCards;
    } else {
      alert("No results found!");
      mealCards = "";
      searchMealsCard.innerHTML = mealCards;
    }
  });
};

export default main;
