import './recipe-item.js';

class RecipeList extends HTMLElement {
    set recipes(recipes) {
        this._recipes = recipes;
        this.render();
    }
   
    renderError(message) {
        this.innerHTML = '';
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.innerHTML = '';
        this._recipes.forEach(recipe => {
            const recipeItemElement = document.createElement('recipe-item');
            recipeItemElement.recipe = recipe;
            this.appendChild(recipeItemElement);
        });
    }
  }
customElements.define('recipe-list', RecipeList);
