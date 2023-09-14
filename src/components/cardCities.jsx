import { Link as Anchor } from 'react-router-dom'

export default function CardCities ({ src, alt, text, id, country}) {
  return (
    <Anchor to ={'/city/'+id} className='w-2/5 flex flex-col items-center p-2 m-2 bg-pink-500'>
      <img src={src} alt={alt}  />
      <p className='text-[20px] '>{text}</p>
      <p className='text-[25px]'>{country}</p>
    </Anchor>
  )
}


