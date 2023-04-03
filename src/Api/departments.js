
import {postData, getData, deleteData, updateData} from "./defaultApi"

const DEPARTMENTS_URL = "departments"

export const postDepartment = data => {
    return postData(DEPARTMENTS_URL, data)
}

export const getDepatments = () => {
    return getData(DEPARTMENTS_URL)
}

export const deleteDepartment =id => {
return deleteData(`${DEPARTMENTS_URL}/${id}` )
}

export const updateDepartment = (id, data) => {
    return updateData(`${DEPARTMENTS_URL}/${id}`, data )
}