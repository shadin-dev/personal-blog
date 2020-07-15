import React from 'react';
import './style.css';
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className='header'>
        <nav className='headerMenu'>
            <a href='#'>Home</a>
            <a href='#'>AboutUS</a>
            <a href='#'>ContactUS</a>
        </nav>

        <div>
            Social media links
        </div>
    </header>
   )

 }

export default Header