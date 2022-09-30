import recipes from "./recipes.js";

class DataSource {
      static searchRecipe(keyword) {
        return new Promise((resolve,reject) =>{
          const filteredRecipes = recipes.filter(recipe => recipe.title.toUpperCase().includes(keyword.toUpperCase()));

      if (filteredRecipes.length) {
        resolve(filteredRecipes);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  } 
}

export default DataSource;