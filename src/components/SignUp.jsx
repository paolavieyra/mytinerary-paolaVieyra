import axios from "axios"
import React, { useState } from "react"
//import { useNavigate } from "react-router-dom"
import apiUrl from "../apiUrl.js"
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"
import jwtDecode from "jwt-decode"
import Swal from "sweetalert2"
//import { useDispatch } from "react-redux"



const signUp = () => {
//const dispatch = useDispatch()
//const navigate = useNavigate()


    const [data, setData] = useState({
        name: "",
        mail: "",
        password: "",
        birth_date: "",
        //country:"",
        age: "",
        terms: false

    })
    const handleChangeData = (e) => {
        setData((prevState) => {
            return e.target.name === 'terms' ? { ...prevState, [e.target.name]: e.target.checked } : { ...prevState, [e.target.name]: e.target.value }
        })

    }
    const handleSubmitData = async (e) => {
        e.preventDefault()
        const userData = { ...data }
        console.log(userData);
        if (userData.terms) {

            delete userData.terms
            try {
                 const res = await axios.post(apiUrl + 'auth/signUp', userData)
                 
                 Swal.fire({
                    icon: "success",
                    title: "Registered Successful",
                    text: `Welcome, ${res.data.userData.name}! You have successfully registered .,`
                });
            } catch (error) {
                console.log(error);

                Swal.fire({
                    icon: "error",
                    title: "Registered Failed",
                    text:  `${error.response.data.message}`
                });
                
            }
           
            

        }
    }
    const handleSubmitGoogle = async (data) => {
        const userData = { ...data }
        if (userData.terms) {
            delete userData.terms


            try {
                const res = await axios.post(apiUrl + 'auth/signUp', userData)
                //dispatch(signUpAction(res.data))
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

            console.log(res);
        }
    }

    return (

        <form onSubmit={handleSubmitData} className="w-full max-w-lg">

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Name
                    </label>
                    <input name="name" onChange={handleChangeData} value={data.name} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Email
                    </label>
                    <input name="mail" onChange={handleChangeData} value={data.mail} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Password
                    </label>
                    <input name="password" onChange={handleChangeData} value={data.password} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                        Birth_date
                    </label>
                    <input name="birth_date" onChange={handleChangeData} value={data.birth_date} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="mm/dd/yyyy" />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        Country
      </label> */}
                    {/* <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" placeholder="Choise one">
         <option className="text bg-gray-400">Choise one</option>
          <option>Argentine</option>
          <option>Brazil</option>
          <option>Japan</option>
          <option>Mexico</option>
           <option>Spain</option>
          <option>Unites States</option>          
          <option>Others</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div> */}
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                        Age
                    </label>
                    <input name="age" onChange={handleChangeData} value={data.age} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" />
                </div>
            </div>
            <div className="min-h-6 pl-7 mb-0.5 block">
                <input name="terms" onChange={handleChangeData} value={data.terms} type="checkbox" />
            </div>
            <GoogleOAuthProvider clientId="474455969631-48srbbppv84u6uep2t0iop791867td0v.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                        const infoUser = jwtDecode(credentialResponse.credential)
                        console.log(infoUser);
                        handleSubmitGoogle({
                            mail: infoUser.email,
                            name: infoUser.given_name + ' ' + infoUser.family_name,
                            password: 'aA_123',
                            birth_date: '04/12/1971',
                            age: 51,
                            terms: true
                        })

                    }}
                    onError={(error) => {

                        Swal.fire({
                            icon: "error",
                            title: "Google Registered Failed",
                            text: `Oops! Something went wrong while registered with Google: ${error.message},`
                        });
                    }}
                />
            </GoogleOAuthProvider>
            <button type='submit' className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
                Sign Up
            </button>

        </form>

    )
}
export default signUp