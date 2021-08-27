import axios from "axios";

function searchName(name) {
    return axios.get(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then(res => {
        return res
    })
}

function searchRandom() {
    return axios.get("www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(res => {
        console.log(res)
    })
}

export {searchName, searchRandom};