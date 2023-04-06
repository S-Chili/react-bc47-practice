import { createSlice } from '@reduxjs/toolkit'
import { addCitiesOperation, deleteCityOperation, editCitiesOperation, fetchCities } from './citiesOperation'
const initialState = {items: []}

const citiesSlice = createSlice({
    name: 'cities', 
    initialState, 
    extraReducers: {
        [fetchCities.fulfilled]:(state, { payload }) => {
            state.items = payload.map(city=> {return {...city, relation: 'cities'}})
        },
        [deleteCityOperation.fulfilled]:(state, {payload}) => {
            state.items = state.items.filter(city => city.id !== payload.id)
        },
        [addCitiesOperation.fulfilled]:(state, {payload}) => {
            state.items.unshift({...payload, relation:'cities'})
        },
        [editCitiesOperation.fulfilled]:(state, {payload}) => {
            state.items = state.items.map(city=> city.id === payload.id ? {...payload, relation:'cities'} : city)
        }
    }
})

export const citiesReducer = citiesSlice.reducer