import React from 'react'
import { Link as Anchor, NavLink } from 'react-router-dom'

const LiAnchor = (props) => {
  return (
    <li className='flex items-center'> <Anchor className='bg-gradient-to-b from-green-400 to-blue-400 rounded-lg p-3' to={props.value} >{props.content}</Anchor> </li>
  )
}

export default LiAnchor