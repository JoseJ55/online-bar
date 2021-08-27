import axios from "axios";

function searchName(name) {
    return axios.get(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then(res => {
        return console.log(res)
    })
}

export {searchName};