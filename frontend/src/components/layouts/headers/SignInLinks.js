import React from 'react';
import Notificaions from './Notifications'
import { NavLink } from 'react-router-dom'


const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li><NavLink to='/'>Connections</NavLink></li>
      <li><NavLink to='/notifications' ><Notificaions/></NavLink></li>
      <li><NavLink to='/'>Log Out</NavLink></li>
      <li><NavLink to='/profile' className='btn btn-floating pink lighten-1'>NN</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;