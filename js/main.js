class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
            <header class="main-header">
                <div class="zerogrid">

                    <div id="top">
                        <div class="row">
                            <div class="col-2-3">
                                <ul class="list-inline top-link link">
                                <li><a href="#">GitHub</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Youtube</a></li>
                                
                                </ul>
                            </div>
                            <div class="col-1-3">
                                <div class="top-search">
                                    <form id="form-container" action="">
                                        <input type="submit" id="searchsubmit" value="" />
                                        <a class="search-submit-button" href="javascript:void(0)">
                                        <i class="fa fa-search"></i>
                                        </a>
                                        <div id="searchtext">
                                            <input type="text" id="s" name="s" placeholder="Search" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="t-center">
                        <a class="site-branding" href="/index.html">
                        <img src="/images/logo.png" width="500px"/>	
                        </a>
                        
                        <div id='cssmenu' class="align-center">
                            <ul>
                                <li class="active"><a href='/index.html'><span>Home</span></a></li>
                                <li class=' has-sub'><a href='#'><span>Categories</span></a>
                                <ul >
                                    <li><a href='/tribute/tribute_varda.html'><span>Agnès Varda</span></a></li>
                                    <li><a href='/tribute/tribute_sciamma.html'><span>Céline Sciamma</span></a></li>
                                    <li><a href='/tribute/tribute_gerwig.html'><span>Greta Gerwig</span></a></li>
                                    <li><a href='/tribute/tribute_campion.html'><span>Jane Campion</span></a></li>
                                    <li><a href='/tribute/tribute_zhao.html'><span>Zhao Ting</span></a></li>
                                    <li><a href='/tribute/tribute_garnier.html'><span>Katja Von Garnier</span></a></li>
                                </ul>
                            
                                </li>
                                <li><a href='/single.html'><span>About</span></a></li>
                                <li><a href='/archive.html'><span>Blog</span></a></li>
                                <li class='last'><a href='/contact.html'><span>Contacts</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

    }
}

customElements.define("my-header", MyHeader)