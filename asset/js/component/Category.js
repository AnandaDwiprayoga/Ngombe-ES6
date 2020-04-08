class Category extends HTMLElement {

    set lists(lists) {
        this._lists = lists;
        this.render();
    }

    render() {
        let template = `
                <div class="list-title d-flex pt-3 pb-3">
                    <h4 class="mb-0 d-inline mr-2 font-weight-bold">Category</h4>
                    <img src="./asset/img/beer.png" alt="icon-drink">
                </div>
                <ul class="pl-0">`
        this._lists.forEach(list => {
            template += `\n<li class="pb-2"><a href="javascript:void(0)">${list.strCategory}</a></li>`
        });
        template += `</ul>`;
        this.innerHTML = template;
    }
}

customElements.define("category-drink", Category);