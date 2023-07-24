import React from 'react'
import { navbarItems } from '../../Constants'
import { signInWithGoogle,signOutWithGoogle } from './GoogleAuth/Firebase'
import GoogleAuth from './GoogleAuth/GoogleAuth';
import './style.css'

const index = () => {

  return (
    <div className='top-navbar'>
        {navbarItems.map((item)=>(
            <div className='navbar-icons'>
                {item?.name === 'signin' 
                ?
                    <GoogleAuth/>
                : 
                <img src={item.url} className='navbar-icon'/>}
            </div>
        ))}
    </div>
  )
}

export default index