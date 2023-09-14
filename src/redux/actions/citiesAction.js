import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const readAllCities = createAsyncThunk('readAllCities', async ()=>{
    try {
        const cities = await axios.get('http://localhost:8080/api/cities')
        
        return cities.data.response
    } catch (error) {
        console.log(error);
        return []
    }
})
export const filterCities = createAction('filterCities', (search)=>{
    return {
        payload: search
    }
})