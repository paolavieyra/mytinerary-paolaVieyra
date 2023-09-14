import { createAction, createAsyncThunk } from "@reduxjs/toolkit";



const login = createAction('login',(credentials) =>{
    console.log(credentials);
    const reducerData ={
        user: credentials.userData,
        token: credentials.token,
        status: 'online'
    }
    return {
        payload: reducerData
    }

} )
const logoutAction = createAction('logoutAction',() =>{
    
    const reducerData ={
        user: {},
        token: '',
        status: 'offline'
    }
    return {
        payload: reducerData
    }

} )
// const signUpAction = createAction ('signUpAction',(credentials) =>{
//        return {
//         payload: credentials
//     }

// })
const authenticate = createAsyncThunk('authenticate',() =>{
    return {
        payload: 'algo'
    }

})

export { login, authenticate, logoutAction }