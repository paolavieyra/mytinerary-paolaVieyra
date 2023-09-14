import React from 'react'
import { Link as Anchor, NavLink } from 'react-router-dom'

const Maincontainer = () => {
  return (
    <main className="hero min-h-min bg-base-200 p-11">
    <div className="hero-content text-center ">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">MyTineraries</h1>
        <p className="py-1">Find your perfect trip, designed by insiders who know and loves their cities.</p>
        
        <img className='h-80' src="src\assets\img\paris.jpg" alt="" />
        
        <Anchor to='/Cities' className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Search for your favorite city</Anchor>
      </div>
    </div>
  </main>
  )
}

export default Maincontainer