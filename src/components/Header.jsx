import React from 'react'
import logo from '../assets/img/logoMytinerary.png'
import usuario from '../assets/img/logoUsuario.jpg'
import Nav from './Nav'
import { useSelector, useDispatch } from 'react-redux'
import { Link  } from 'react-router-dom'
import { logoutAction } from '../redux/actions/userAction.js'
import Swal from 'sweetalert2'

const Header = () => {
  const dispatch = useDispatch()

  const user = useSelector(store => store.userReducer.user)

  const logout = () => {
    dispatch(logoutAction())
    Swal.fire({
      icon: "success",
      title: "Log out",
      

  });

  }

  return (

    <header className='flex h-[25vh] items-center px-4 justify-between'>
<img className='h-48 mx-1' src={logo} alt="Mytinerary" />
      {user && Object.keys(user).length !== 0 ?
      <>
       <a href='#'><img className=' h-14 mx-1 flex items-center' src={user?.photo} alt={user?.name} /></a>
      
      <Link onClick={logout} className='bg-gradient-to-b from-green-400 to-blue-400 rounded-lg p-3' to='/signIn' >Logout</Link>
      </>     
    :
    <>
    <a href='#'><img className=' h-14 mx-1 flex items-center' src={usuario} alt="" /></a>
    
    <Link className='bg-gradient-to-b from-green-400 to-blue-400 rounded-lg p-3' to='/signIn' >Login</Link>
    </>
    
    }
      
      
      <Nav />

    </header>

  )
}

export default Header