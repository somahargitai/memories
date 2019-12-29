import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Nav = props => (
  <nav>
    <h3><Link to="/"> Kezdőoldal </Link></h3>
    <ul className="nav-links">
      
      <Link to="/people"><li> Emberek </li></Link>
      <Link to="/images"><li> Képek </li></Link>
      <Link className="inactive" to="/docs"><li> Dokumentumok </li></Link>
    </ul>
  </nav>
)

export default Nav;