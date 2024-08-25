class MyReactiveElement extends HTMLElement {
    static get observedAttributes() {
      return ['name'];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <p>Hello, <span id="name"></span>!</p>
      `;
    }
  
    connectedCallback() {
      this.updateName();
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'name') {
        this.updateName();
      }
    }
  
    updateName() {
      const name = this.getAttribute('name');
      this.shadowRoot.getElementById('name').textContent = name;
    }
  }
  
  customElements.define('my-reactive-element', MyReactiveElement);
  