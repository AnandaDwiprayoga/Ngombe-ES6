class DataSources {

    static getCategory() {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.drinks) {
                    return Promise.resolve(responseJson.drinks);
                } else {
                    return Promise.reject(`empty category`);
                }
            });
    }


    static searcByCategory(keyword) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.drinks) {
                    return Promise.resolve(responseJson.drinks);
                } else {
                    return Promise.reject(`empty category`);
                }
            });
    }


    static searchByName(keyword) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.drinks) {
                    return Promise.resolve(responseJson.drinks);
                } else {
                    return Promise.reject([`empty drink`, keyword]);
                }
            });
    }

    static searchById(id) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.drinks) {
                    return Promise.resolve(responseJson.drinks);
                } else {
                    return Promise.reject([`empty drink`, keyword]);
                }
            });
    }
}

export default DataSources;