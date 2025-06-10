class SlotParagraph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        h2 { color: black; }
        p { font-size: 1rem; }
        
      </style>
      <h2><slot name="title">Standardüberschrift</slot></h2>
      <p><slot name="text">Standardtext</slot></p>
    `;
  }
}

customElements.define('slot-paragraph', SlotParagraph);
