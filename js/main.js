class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
            <header>
                
                <ul class="list-inline top-link link">
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Youtube</a></li>
                
                </ul>
           
            </header>

    }
}

customElements.define("my-header", MyHeader)