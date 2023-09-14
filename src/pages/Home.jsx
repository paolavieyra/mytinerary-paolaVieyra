import React from 'react'
import { useState } from 'react';
import Carrousel from '../components/Carrousel'
//import  Header  from '../components/Header';
import  Footer  from '../components/Footer';
import Maincontainer from '../components/Maincontainer';
import Header from '../components/Header';

//import CardCity from '../components/CardCity';
export default function Home() {
  const[show,setShow] = useState(true)

  const name1= "My";
  const name2= "Tinerary";
  let data = [
    {id: "eu1", city: "Paris", photo: "src/assets/img/paris1.jpg"},
    {id: "eu2", city: "Madrid", photo: "src/assets/img/madrid.jpg"},
    {id: "eu3", city: "Amsterdan", photo: "src/assets/img/amsterdan.jpg"},
    {id: "eu4", city: "London", photo: "src/assets/img/london.jpg"},
    {id: "am1", city: "Códoba", photo: "src/assets/img/cordoba.jpg"},
    {id: "am2", city: "Rio de Janeiro", photo: "src/assets/img/rioDeJaneiro.jpg"},
    {id: "am3", city: "New York", photo: "src/assets/img/newYork.jpg"},
    {id: "am4", city: "Caracas", photo: "src/assets/img/caracas.jpg"},
    {id: "as1", city: "Moscow", photo: "src/assets/img/moscow.jpg"},
    {id: "oc2", city: "Melbourne", photo: "src/assets/img/melbourne.jpg"},
    {id: "af3", city: "El Cairo", photo: "src/assets/img/elCairo.jpg"},
    {id: "as4", city: "Doha", photo:"src/assets/img/qatar.jpg"}

  ];
  return (
    <div>
      
         <Header />
        <Maincontainer />
      
    
    <main className='grow flex flex-col items-center mt-[20px] bg-red-400'>

      <h2 className='text-[25px] font-extrabold'>{`${name1} ${name2}`}</h2>
      {show ? (< input onClick={()=>setShow(!show)} type='button' defaultValue='Hide carousel' className='bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'/> ) : (< input onClick={()=>setShow(!show)} type='button' defaultValue='show carousel' className='bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' />)}
      
      {show ? <Carrousel data={data} />: <h1>click over to see carousel</h1>}
      
    </main>

    <Footer /> 
        
    </div>
  );
        }
