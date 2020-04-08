class Caraousel extends HTMLElement {

    connectedCallback() {
        const img1 = this.getAttribute("img1") || null;
        const img2 = this.getAttribute("img2") || null;
        const img3 = this.getAttribute("img3") || null;

        this.render(img1, img2, img3);
    }

    render(img1, img2, img3) {
        this.innerHTML = `
        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-interval="10000">
                    <img src="${img1}" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-interval="2000">
                    <img src="${img2}" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${img3}" class="d-block w-100" alt="...">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
         </div>
        `;
    }
}

customElements.define('caraousel-view', Caraousel);

