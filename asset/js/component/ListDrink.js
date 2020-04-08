import "./ItemDrink";

class ListDrink extends HTMLElement {

    set drinks(drinks) {
        this._drinks = drinks;
        this.render();
    }

    render() {
        // <div class="col-6 col-lg-4 mb-3"></div>
        this.innerHTML = "";
        this._drinks.forEach(drink => {
            const itemDrink = document.createElement("item-drink");
            itemDrink.drink = drink;
            itemDrink.className = "col-6 col-lg-4 mb-3";
            this.appendChild(itemDrink);
        });
    }

    renderNotfound(keyword) {
        this.innerHTML = `
        <div class="row d-flex flex-column text-center">
            <h5>${keyword} Not found</h5>
            <img src=" ./asset/img/fogg-page-not-found.png" alt="">
        </div>
        `;
    }
}

customElements.define("list-drink", ListDrink);