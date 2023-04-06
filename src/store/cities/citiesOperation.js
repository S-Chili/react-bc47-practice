import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteCity, getCities, postCity, updateCity } from 'Api/citiesApi';

export const fetchCities = createAsyncThunk('cities/fetchCities', async (_, thunkAPI) => {
    try {
        const { data } = await getCities();
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const deleteCityOperation = createAsyncThunk('cities/deleteCity', async (id, thunkAPI) => {
    try {
        const {data} = await deleteCity(id);
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const addCitiesOperation = createAsyncThunk('cities/addCity', async (cityName, thunkAPI) => {
    try {
        const {data} = await postCity({text:cityName});
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const editCitiesOperation = createAsyncThunk('cities/editCity', async (data, thunkAPI) => {
    try {
        const {id, name} = data;
        const editCity = await updateCity(id, {text:name, id})
        return editCity.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})