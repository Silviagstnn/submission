class AppBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
        this.innerHTML = `<h2>Recipe Finder</h2>`;
    }
  }

customElements.define('app-bar', AppBar);