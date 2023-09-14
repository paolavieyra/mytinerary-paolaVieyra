import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiUrl from "../apiUrl.js";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/userAction.js";
import Swal from "sweetalert2";

const signIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState({
        mail: '',
        password: '',
        send: false
    })
    const handleChangeData = (e) => {
        setData((prevState) => {
            return e.target.name === 'Send' ? { ...prevState, [e.target.name]: e.target.checked } : { ...prevState, [e.target.name]: e.target.value }
        })
    }
    const handleSubmitData = async (e) => {
        e.preventDefault()
        const userData = { ...data }
        console.log(userData);
        if (userData.send) {

            delete userData.send
            try {
                const res = await axios.post(apiUrl + 'auth/signIn', userData)
            dispatch(login(res.data))
            navigate('/')
            Swal.fire({
                icon: "success",
                title: "Google Registered Successful",
                text: `Welcome, ${res.data.userData.name}! You have successfully registered with Google.,`

            });
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Google Registered Failed",
                    text:  `${error.response.data.message}`
                });
            }
            



        }
    }


    const handleSubmitGoogle = async (data) => {
        const userData = { ...data }
        try {
            const res = await axios.post(apiUrl + 'auth/signIn', userData)
        dispatch(login(res.data))
        console.log();
        
        Swal.fire({
            icon: "success",
            title: "Google Registered Successful",
            text: `Welcome, ${res.data.userData.name}! You have successfully registered with Google.,`


        });
        navigate('/')
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Google Registered Failed",
                text:  `${error.response.data.message}`
            });
        }
       

    }

    return (

        < form onSubmit={handleSubmitData} className="w-full max-w-sm" >
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Mail
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input name="mail" onChange={handleChangeData} value={data.mail} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                        Password
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input name="password" onChange={handleChangeData} value={data.password} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3"></div>
                <label className="md:w-2/3 block text-gray-500 font-bold">
                    <input name="send" onChange={handleChangeData} value={data.send} className="mr-2 leading-tight" type="checkbox" />
                    <span className="text-sm">
                        Send me your newsletter!
                    </span>
                </label>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <button type='submit' className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
                        Sign In
                    </button>
                    <GoogleOAuthProvider clientId="474455969631-48srbbppv84u6uep2t0iop791867td0v.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                                const infoUser = jwtDecode(credentialResponse.credential)
                                console.log(infoUser);
                                handleSubmitGoogle({
                                    mail: infoUser.email,

                                    password: 'aA_123'

                                })

                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </GoogleOAuthProvider>
                </div>
            </div>
        </form >

    )
}

export default signIn