import axios from "axios";

class DataSource {
  static getMealByCategory(category) {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => response.data.meals)
      .catch((error) => error);
  }

  static getAllListCategories() {
    return axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((response) => response.data.meals)
      .catch((error) => error);
  }

  static getMealByID(id) {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.data.meals)
      .catch((error) => error);
  }

  static searchMealByName(name) {
    return axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((response) => response.data.meals)
      .catch((error) => error);
  }
}

export default DataSource;
