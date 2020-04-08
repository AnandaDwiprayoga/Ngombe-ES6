import DataSource from "./DataSources.js";
import "./component/Category.js";
import "./component/CategorySmall.js";
import "./component/ListDrink";
import "./component/FavList";
import swal from "sweetalert";

const main = () => {
    const category = document.querySelector('category-drink');
    const categorySmall = document.querySelector('category-small');
    const listDrink = document.querySelector('list-drink');
    const search = document.querySelector('#search');
    const favList = document.querySelector('fav-list');

    let favorite = [];


    const renderFavList = () => {
        const favs = JSON.parse(localStorage.favorite);
        if (favs.length > 0) {
            favList.favs = favs;

            const btnDetails = favList.querySelectorAll('.fav-detail');
            const btnDeletes = favList.querySelectorAll('.fav-delete');

            btnDetails.forEach(btn => {
                btn.addEventListener("click", () => {
                    DataSource.searchById(btn.dataset.id)
                        .then(showDetail);
                })
            })

            btnDeletes.forEach(btn => {
                btn.addEventListener("click", () => {
                    let favs = JSON.parse(localStorage.favorite);
                    favs = favs.filter(x => x.id !== btn.dataset.id);

                    localStorage.setItem("favorite", JSON.stringify(favs));
                    renderFavList();
                })
            })
        } else {
            favList.renderEmpty();
        }
    }


    const renderResult = result => {
        category.lists = result;
        return Promise.resolve(result);
    }

    const renderResultSmall = result => {
        categorySmall.lists = result;
        const listCategory = document.querySelectorAll('category-drink li a');
        return Promise.resolve(listCategory);
    }

    const showDetail = results => {
        results.forEach(result => {
            swal({
                title: result.strDrink,
                text: result.strInstructions,
                icon: result.strDrinkThumb,
                imageAlt: 'Custom image',
            })
        });
    };

    const renderResultDrink = result => {
        listDrink.drinks = result;

        const anchors = document.querySelectorAll("list-drink .detailDrink");
        const buttonsFav = document.querySelectorAll("list-drink .add-to-fav");

        anchors.forEach(a => {
            a.addEventListener("click", () => {
                DataSource.searchById(a.dataset.drinkid)
                    .then(showDetail);
            })
        });

        buttonsFav.forEach(button => {
            button.addEventListener("click", () => {
                if (typeof (Storage) !== "undefined") {
                    let uniq = true;
                    if (typeof (localStorage.favorite) !== "undefined") {
                        favorite = JSON.parse(localStorage.favorite);
                        favorite.forEach(fav => {
                            if (fav.id == button.dataset.id) {
                                swal("Failed!", "Drink has been stored in fav!", "info");
                                uniq = false;
                            }
                        })
                    }

                    if (uniq) {
                        swal("Good job!", `${button.dataset.name} success saved in fav`, "success");

                        favorite.push({
                            id: button.dataset.id,
                            name: button.dataset.name,
                            img: button.dataset.img
                        });

                        localStorage.setItem("favorite", JSON.stringify(favorite));
                        renderFavList();
                    }
                }
            })
        })

        return Promise.resolve("");
    }

    const eventClickList = lists => {
        lists.forEach(list => {
            list.addEventListener("click", () => {
                //to reset input search when category clicked
                search.value = "";

                DataSource.searcByCategory(list.innerHTML)
                    .then(renderResultDrink)
                    .then(() => {
                        const listCategory = document.querySelectorAll('category-drink li a');
                        listCategory.forEach(cat => {
                            cat.classList.remove("active");
                        })
                        list.classList.add("active");
                    });
            });
        });
        const categorySelect = document.querySelector('category-small #categorySelect');
        return Promise.resolve(categorySelect);
    }

    const eventChangeSelect = select => {
        select.addEventListener('change', event => {
            if (event.target.value != "none") {
                //to reset input search when category clicked
                search.value = "";

                DataSource.searcByCategory(event.target.value)
                    .then(renderResultDrink)
            }
        })
    }

    const fallbackResult = message => {
        if (message[0] === 'empty drink') {
            listDrink.renderNotfound(message[1]);
        }
    }

    search.addEventListener("keyup", event => {
        event.preventDefault();
        if (event.keyCode == 13) {
            if (event.target.value.trim() != "") {
                //when search, category back to default
                const option = document.getElementById("categorySelect");
                option.value = "none";


                //delete active category becase can't search name with category
                const listCategory = document.querySelectorAll('category-drink li a');
                listCategory.forEach(cat => {
                    cat.classList.remove("active");
                })

                DataSource.searchByName(event.target.value)
                    .then(renderResultDrink)
                    .catch(fallbackResult);
            }
        }
    })


    const searchEvent = evnt => {
        search.addEventListener(evnt, event => {
            event.preventDefault();
            if (event.keyCode == 13) {
                if (event.target.value.trim() != "") {
                    //when search, category back to default
                    const option = document.getElementById("categorySelect");
                    option.value = "none";


                    //delete active category becase can't search name with category
                    const listCategory = document.querySelectorAll('category-drink li a');
                    listCategory.forEach(cat => {
                        cat.classList.remove("active");
                    })

                    DataSource.searchByName(event.target.value)
                        .then(renderResultDrink)
                        .catch(fallbackResult);
                }
            }
        })
    }

    searchEvent("keyup");
    searchEvent("input");

    DataSource.getCategory()
        .then(renderResult)
        .then(renderResultSmall)
        .then(eventClickList)
        .then(eventChangeSelect);


    if (typeof (localStorage.favorite) !== "undefined") {
        renderFavList();
    } else {
        favList.renderEmpty();
    }



}

export default main;