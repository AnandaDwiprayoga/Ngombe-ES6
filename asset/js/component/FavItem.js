class FavItem extends HTMLElement {

    set fav(fav) {
        this._fav = fav;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="col-lg-3 col-sm-12 col-3 img-container pr-0 pl-0 d-flex">
                <img src="${this._fav.img}">
            </div>
            <div class="col-lg-9 col-sm-12 col-9 pr-0 pl-sm-0 pl-lg-3">
                <h6 class="mb-0">${this._fav.name}</h6>
                <div class="button-container d-sm-flex flex-sm-column d-lg-block">
                    <a href="#" class="btn-detail rounded-pill fav-detail mb-sm-2 mt-sm-2 text-center" data-id="${this._fav.id}">Detail<img
                            src="./asset/img/arrow_right_white_alt-24px.png" alt=""></a>
                    <a href="#" class="btn-delete rounded-pill fav-delete text-center" data-id="${this._fav.id}">Delete<img
                            src="./asset/img/clear-24px.png" alt=""></a>
                </div>
            </div>
        `;

    }
}

customElements.define("fav-item", FavItem);