import React from 'react'
import {Link} from 'react-router-dom'
import LiAnchor from './LiAnchor'

const links = [
    { value: '/', content: 'Home', id:'1'},
    { value: '/Cities', content: 'Cities', id:'2'},
    { value: '/SignUp', content: 'SignUp', id:'3'},
   
    
]

const Nav = () => {
    return (
        <nav>
            <ul className='md:flex gap-3 pt-12'>
                 

                 {links.map((link, indice) => {
                    return <LiAnchor key={indice} value={link.value} content={link.content} />

                }
                ) }
                
                {/*<LiAnchor value='#' content='Cities' />
                <LiAnchor value='#' content='Link 1' />
                <LiAnchor value='#' content='Link 2' />
                <LiAnchor value='#' content='Link 3' />*/}

            </ul>

        </nav>
    )
}

export default Nav