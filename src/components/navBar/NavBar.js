import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul>
        <li><Link to='/'>Home</Link> </li>
        <li><Link to='/pokemons' ></Link>Pokémons</li>
        <li><Link to='/trainers' ></Link>Trainers</li>
        <li><Link to='/gyms' ></Link>Gyms</li>
        <li><Link to='/gymleaders' >Gym Leaders</Link></li>



    </ul>
  )
}

export default NavBar;