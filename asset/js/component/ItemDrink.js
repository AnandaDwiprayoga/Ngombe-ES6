class ItemDrink extends HTMLElement {

    set drink(drink) {
        this._drink = drink;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="card border-1 shadow">
                <div class="img-dark">
                    <a href="javascript:void(0)"
                        data-id="${this._drink.idDrink}" data-name="${this._drink.strDrink}" data-img="${this._drink.strDrinkThumb}"
                        class="icon-add-fav d-flex justify-content-center add-to-fav"><img
                            src="./asset/img/icon fav.png" alt="" class="align-self-center"></a>
                    <div class="opacity-dark"></div>
                    <img class="card-img-top" src="${this._drink.strDrinkThumb}" alt="Card image cap">
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">${this._drink.strDrink}</h5>
                    <a href="javascript:void(0)" class="detailDrink" data-drinkId="${this._drink.idDrink}">
                        <span>Detail</span><img src="./asset/img/arrow_right_alt-24px.png" alt="">
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define("item-drink", ItemDrink);