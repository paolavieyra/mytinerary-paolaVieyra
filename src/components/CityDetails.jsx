import { useParams } from "react-router-dom"
import apiUrl from "../apiUrl.js"
import axios from "axios";
import { useEffect, useState } from "react";
import Itineraries from "./Itineraries.jsx";
function CityDetails() {
    const params = useParams()
    const [city, setCity] = useState([])
    const [itinerary, setItinerary] = useState([])

    useEffect(
        ()=> {
          axios(apiUrl+'cities/'+params.id)
          //.then(res=>console.log(res.data.response))
          .then(res=>setCity(res.data.response))
          .catch(err=>console.log(err))
        },[]
      )
      useEffect(()=>{
        axios(apiUrl+'itineraries/city/'+params.id)
        .then(res=>setItinerary(res.data.response))
        .catch(err=>console.log(err))

      },[])

  return (
    <div>
      <h1 className="tex text-3xl text-center bg-fuchsia-400">{city.city}</h1>
      <h2 className="tex text-2xl text-center text-black">({city.country})</h2>
      <img src={city.photo} alt={city.city} />
      <div className="text text-left text-xl bg-green-300">
          <p>Population: {city.population}</p>
          <p>Foundation: {city.creationDate}</p>
          <p>Currency: {city.currency}</p>
      </div>
      <div className="text text-left text-xl bg-green-300">
          <p>Featured Location: {city.featuredLocation}</p>
          <p>Official Language: {city.officialLanguage}</p>
          <p>Official Religión: {city.officialReligión}</p>
          <p>Goverment: {city.goverment}</p>
      </div>
      <div className="bg-blue-300">
      <h1 className="text text-3xl text-center">Itineraries</h1>
      {
        itinerary == '' ?
          <h2 className="text text-5xl">Not found itineraries for this city yet.</h2> :
          itinerary.map((e, i)=>{
            return <Itineraries key={i} data={e}/>
          })
          
      }
      <a href="javascript: history.go(-1)" className="bg-red-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded end-32">Go back</a>
</div>
	


    </div>
  )
}
export default CityDetails