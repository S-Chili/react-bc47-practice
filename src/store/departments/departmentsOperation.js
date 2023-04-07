import { createAsyncThunk } from '@reduxjs/toolkit';
import {postDepartment, getDepatments, deleteDepartment, updateDepartment} from "../../Api/departments"


export const fetchDepartments = createAsyncThunk("departments/fetchDepartments", async (_, thunkAPI) => {
    try {
const {data} = await getDepatments()
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const deleteDepartmentsOperation = createAsyncThunk('departments/deleteDepartment', async (id, thunkAPI) => {
    try {
const {data} = await deleteDepartment(id)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const addDepartmentsOperatiom = createAsyncThunk("departments/postDepartment", async (name, thunkAPI) => {
try {
    const { data } = await postDepartment({ name })
        return data
} catch (error) {
   return thunkAPI.rejectWithValue(error.message) 
}
})

export const editDepartmentsOperation = createAsyncThunk("departments/updateDepartment", async({id, name}, thunkAPI) => {
    try {
    const { data } = await updateDepartment(id, { id, name })
    return data
} catch (error) {
    return thunkAPI.rejectWithValue(error.message)
}
})







