class MySearch extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      this.searchInput = document.createElement('input');
      this.searchButton = document.createElement('button');
  
   
      this.searchInput.setAttribute('type', 'text');
      this.searchInput.setAttribute('placeholder', 'Search...');
      this.searchButton.textContent = 'Search';
  
   
      this.shadowRoot.append(this.searchInput, this.searchButton);
  
      this.searchButton.addEventListener('click', () => this.performSearch());
    }

    performSearch() {
      const query = this.searchInput.value;
      if (query) {
        alert(`Searching for: ${query}`);
      } else {
        alert('Please enter a search query.');
      }
    }
  }
  
 
  customElements.define('my-search', MySearch);
  