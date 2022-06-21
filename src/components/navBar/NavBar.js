import React from 'react'
import { Link } from 'react-router-dom';
import pokeBallImage from '../../images/poke-ball.png'

const NavBar = () => {

  return (
    <ul className='nav-bar-list'>
      <li className='nav-bar-logo'><img className='poke-ball-logo' src={pokeBallImage} alt='pokeball'/></li>
      <li className='nav-bar-item'><Link to='/gymleaders'>Gym Leaders</Link></li>
      <li className='nav-bar-item'><Link to='/gyms'>Gyms</Link></li>
      <li className='nav-bar-item'><Link to='/trainers'>Trainers</Link></li>
      <li className='nav-bar-item'><Link to='/pokemons'>Pokémons</Link></li>
      <li className='nav-bar-item'><Link to='/'>Home</Link></li>
    </ul>
  )
}

export default NavBar;