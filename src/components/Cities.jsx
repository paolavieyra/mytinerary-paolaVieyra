import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import apiUrl from '../apiUrl'
import CardCities from './cardCities'
import { useDispatch, useSelector } from 'react-redux'
import { readAllCities, filterCities } from '../redux/actions/citiesAction.js'



export default function Cities  ()  {
  //const [cities, setCities] = useState ([])
  const [reEffect, setReEffect] = useState (true)
  const text = useRef()
  const dispatch = useDispatch()
  const cities = useSelector(store => store.readAllCitiesReducer.filteredCities)
 
  useEffect(()=>{
   dispatch(readAllCities())
    console.log(cities);
  },[])

  

  // useEffect(
  //   ()=> {
  //     axios(apiUrl+'cities?city='+text.current.value)
  //     //.then(res=>console.log(res.data.response))
  //     .then(res=>setCities(res.data.response))
  //     .catch(err=>console.log(err))
  //   },[reEffect]
  // )
  function handleFilter(e) {
    dispatch(filterCities(e))
    //console.log(text.current.value)
    //setReEffect(!reEffect)
  }
  return (
    <>
    <div className='bg-fuchsia-400'>
    <input ref={text} type="text" name='text' id='text' onKeyUp={(e)=>handleFilter(e.target.value)}/>
    {cities.map(each=><CardCities key={each._id} src={each.photo} alt={each._id} text={each.city} id={each._id} country={each.country}/>)}
    <a href="javascript: history.go(-1)" className="bg-red-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded end-32">Go back</a>
    </div>
    </>
  )
}

