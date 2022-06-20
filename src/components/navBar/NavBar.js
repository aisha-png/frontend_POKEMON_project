import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul>
        <li><Link to='/'>Home</Link> </li>
        <li><Link to='/pokemons' >Pokémons</Link></li>
        <li><Link to='/trainers' >Trainers</Link></li>
        <li><Link to='/gyms' >Gyms</Link></li>
        <li><Link to='/gymleaders' >Gym Leaders</Link></li>
    </ul>
  )
}

export default NavBar;