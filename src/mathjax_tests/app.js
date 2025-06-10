class customFormulaArea extends HTMLElement {
      constructor() {
        super();

        // Shadow DOM verwenden für Kapselung
        const shadow = this.attachShadow({ mode: 'open' });

        // HTML-Template für die Navigation
        shadow.innerHTML = `     
        
              <style>
        h2 { color: black; }
        p { font-size: 1rem; }

        
        
      </style>
      <h2><slot name="title">Standardüberschrift</slot></h2>
      <p><slot name="text">Standardtext</slot></p>
        
        `;
      }
    }

    // Registrieren des Custom Elements
    customElements.define('formula-area', customFormulaArea);