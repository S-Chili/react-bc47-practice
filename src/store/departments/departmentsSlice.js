import { createSlice } from '@reduxjs/toolkit'
import {fetchDepartments, deleteDepartmentsOperation, addDepartmentsOperatiom, editDepartmentsOperation} from "./departmentsOperation"

const initialState = {items: []}

const convertToFromDepartments = ({ id, name }) => {
    
    return {
        id,
        text: name,
        relation: 'departments'
    }
}



const departmentsSlice = createSlice({
    name: 'departments',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchDepartments.fulfilled, (state, { payload }) => {
                state.items = payload.map(convertToFromDepartments)
            })
            .addCase(deleteDepartmentsOperation.fulfilled, (state, { payload }) => {
                
                state.items = state.items.filter(department => department.id !== payload.id)
            })
            .addCase(addDepartmentsOperatiom.fulfilled, (state, { payload }) => {
                
                const department = convertToFromDepartments(payload)
                
                 
                if (state.items.some(item => item.text.toLowerCase() !== department.text.toLowerCase()
                )) {
                    state.items.unshift(department)
                } else {
                    console.log(department);
                }
            })
            .addCase(editDepartmentsOperation.fulfilled, (state, { payload }) => { 
                const department = convertToFromDepartments(payload)
                state.items = state.items.map(departmentItem => departmentItem.id === department.id ? department : departmentItem)
            })
    }
})

export const departmentsReducer = departmentsSlice.reducer
