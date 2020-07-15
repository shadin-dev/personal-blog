import React, { useState } from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const [search,setSearch] = useState(false)


    const submitSearch = (e) => {
        e.preventDefault();
        alert('Well Done My BOYS');
    }


    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ? 'searchinput active' : 'searchinput';

  return(
    <div className = 'navbar'>
        <ul className = 'navbarMenu'>
            <li><NavLink to = '/'>Home</NavLink></li>
            <li><NavLink to = '/post'>Post</NavLink></li>
            <li><NavLink to = '/about-us'>Aboutus</NavLink></li>
            <li><NavLink to = '/contact-us'>Contact us</NavLink></li>
        </ul>

        <div className = 'search'>
            <form onSubmit = {submitSearch}>
                <input type = 'text' className = {searchClass} placeholder='Search'/>
                <img onClick = {openSearch} className = 'searchicon' src = {require('../../assets/icons/Search.png')} alt = 'Search'/>
            </form>
            

        </div>

    </div>
   )

 }

export default Navbar