    class customNav extends HTMLElement {
      constructor() {
        super();

        // Shadow DOM verwenden für Kapselung
        const shadow = this.attachShadow({ mode: 'open' });

        // HTML-Template für die Navigation
        shadow.innerHTML = `
          <style>
header{
    display:flex;
    justify-content: space-between;
    background-color: #393b87;
    max-height:100px;
    min-width:100%;
    margin:0;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    
}

#lmgLogo {
max-width:17rem;
}
.navBarElements{
display:flex;

}


.dropdownContent{
    display:none;
    position:absolute;
    min-width:6rem;
    max-width:100%;
    overflow: auto;
    background-color: white;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    border:3px solid rgba(0,122,185,255);
    border-bottom: none;

    z-index:1;
    max-width: 100%;
}

.dropdownContent a 
{
    font-size: 1.3rem;
    float:none;
    text-align: left;
    padding:0.1rem;
    text-decoration: none;
    display:block;
    color:white;
    border-bottom: solid 3px rgb(0, 122, 185);
}

.dropdown {
    float:left;
    border:none;
    outline:none;
    background-color: inherit;
    font-family: inherit;
    margin:0;
}




.dropdown:hover .dropdownContent{
    display:block;
}

.mainNavigation input[type=text] {

  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 2rem;

}



.mainNavigation ul {
    
    list-style:none;
    @media only screen and (width > 500px){
    padding-block-start:0rem;
    padding-inline-start:3px;
    padding-inline-end:1rem;
    font-size:2rem;

}
}



.mainNavigation a:hover {
    color:#ffffff;
    transition:0.2s;
    background-color:rgba(0,122,185,0.9);
}


.mainNavigation a {
    text-decoration: none;
    color:white;
    font-weight:bold;
    padding:10px;



}
          </style>
        <header>
        <img id="lmgLogo" src="../../images/lmg_logo_blau.svg" alt="Logo des LMG Anrath">
        
        <nav class="mainNavigation">
         <ul class="navBarElements">
                   <!-- <div class="searchBar">
                    <input type="text" placeholder="Search...">
                    </div>-->

                    <li class="dropdown">
                    <li><a href="https://www.basecurrent.org/src/home/index.html">Home</a></li> 
                    </li>

                <li class="dropdown">
                    <li><a href="https://www.basecurrent.org/src/lang/english/modules/index.html">Modules</a>
                     <div class="dropdownContent">
                        <a href="#">Wetterstationen</a>
                        <a href="#">Windstationen</a>
                        <a href="#">Tiedenhub</a>
                    </div>
                    </li>
                </li>

                <li class="dropdown">
                    <li><a href="https://st-an-ley.github.io/wetterstationen_webseite/website/src/daten/index.html">Topics</a>
                        <div class="dropdownContent">
                        <a href="#">Messungen</a>
                        <a href="#">Auswertungen</a>
                        </div>
                    </li>
                </li>

                    
                <li class="dropdown">
                    <li><a href="https://st-an-ley.github.io/wetterstationen_webseite/website/src/mitwirken/index.html">Contribute</a>
                        <div class="dropdownContent">
                        <a href="#">Für Schüler*Innen</a>
                        <a href="#">Für Eltern</a>
                        <a href="#">Für Interessierte</a>
                        </div>
                    </li>
                </li>
                    
                    
                </ul>
            </nav>
        </header>
        `;
      }
    }

    // Registrieren des Custom Elements
    customElements.define('custom-nav-bar', customNav);
 

