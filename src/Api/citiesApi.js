
import {postData, getData, deleteData, updateData} from "./defaultApi"


const CITIES_URL = "cities"

export const postCity = data => {
    return postData(CITIES_URL, data)
}

export const getCities = () => {
    return getData(CITIES_URL)
}

export const deleteCity = id => {
    return deleteData(`${CITIES_URL}/${id}` )
}

export const updateCity = (id, data) => {
    return updateData(`${CITIES_URL}/${id}`, data )
}