import "./FavItem";
class FavList extends HTMLElement {

    set favs(favs) {
        this._favs = favs;
        this.render();
    }

    render() {
        this.innerHTML = ""
        this._favs.forEach(fav => {
            const favItem = document.createElement("fav-item");
            favItem.fav = fav;
            favItem.className = "row mb-3 p-2 ml-0 shadow-sm";
            this.appendChild(favItem);
        });
    }

    renderEmpty() {
        this.innerHTML = `<img src="./asset/img/Group 24.png" style="height: 250px; width: 250px;" alt="">`;
    }
}

customElements.define("fav-list", FavList);