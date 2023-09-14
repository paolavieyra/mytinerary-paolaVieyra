import { Link as Anchor } from 'react-router-dom'

export default function CardCity ({ src, alt, text, id}) {
  return (
    <Anchor to ={'/city/'+id} className='w-2/5 flex flex-col items-center p-2 m-2 bg-white'>
      <img src={src} alt={alt} />
      <p className='text-[20px] '>{text}</p>
    </Anchor>
  )
}

