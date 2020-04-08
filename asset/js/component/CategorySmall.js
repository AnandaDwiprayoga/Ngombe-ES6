class CategorySmall extends HTMLElement {

    set lists(lists) {
        this._lists = lists;
        this.render();
    }

    render() {
        let template = `
                <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01"><img src="./asset/img/beer.png"
                                        alt="icon-drink"></label>
                            </div>
                            <select class="custom-select" id="categorySelect">
                                <option selected value="none">Choose Category</option>`;
        this._lists.forEach(list => {
            template += `\n<option value="${list.strCategory}">${list.strCategory}</option>`
        });
        template += `</select></div>`;
        this.innerHTML = template;
    }
}

customElements.define('category-small', CategorySmall);