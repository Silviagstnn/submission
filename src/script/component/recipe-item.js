class RecipeItem extends HTMLElement {
    set recipe(recipe) {
      this._recipe = recipe;
      this.render();
    }
   
    render() {
      this.innerHTML = `
        <img class="thumb" src="${thumb}"  alt="thumb">\n
      <div class="recipe-info">
      <h2>  ${title} </h2>
        <p> ${key} </p>
        <p> ${difficulty}</p>
        <p> ${serving }</p>
      </div>
      `;
    }
  }
   
  customElements.define('recipe-item', RecipeItem);