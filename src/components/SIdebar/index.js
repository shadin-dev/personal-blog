import React from 'react';
import './style.css';
import Card from '../UI/Card';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  return(

    <div className = "sidebarcontainer">
      
        <div className = 'cardheader'>
          <span>ABOUT US</span>
        </div>

        <div className = 'profilepic'>
          <img src = {require('../../images/basin 2.jpg')} alt = 'about us image'/>
        </div>

        <div className = 'cardheader2'>
        <span>Social Networking</span>
        </div>


    </div>
   )

 }

export default Sidebar