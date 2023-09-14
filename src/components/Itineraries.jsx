import React from 'react'

const Itineraries = ({data}) => {
  return (
    <div>
        <h1 className='text text-3xl text-center'>{data.title}</h1>
        <img className='w-44' src={data.photo} alt={data.title} />
        <p className='text text-2xl'>Author: {data.author}</p>
        <p className='text text-2xl'>Author photo: </p>
        <img className='w-24' src={data.authorPhoto} alt={data.title}/>
        <p className='text text-2xl'>Price: {"💸".repeat(data.price)}</p>
        <p className='text text-2xl'>Duration: {data.duration}min</p>
        <p className='text text-2xl'>Likes: {"❤".repeat(data.likes)}</p>
        <p className='text text-2xl'>Hashtags: {data.hastags}</p>
    </div>
  )
}

export default Itineraries