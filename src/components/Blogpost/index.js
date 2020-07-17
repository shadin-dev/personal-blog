import React from 'react';
import './style.css';
import Card from '../UI/Card';

/**
* @author
* @function Blogpost
**/

const Blogpost = (props) => {
  return(
        <div className = 'blogpostcontainer'>
          <Card>
            <div className = 'blogheader'>
              <span className = 'bolgcategery'>Featured</span>
              <h1 className = 'posttitle'>Beautifull is always Beautifull</h1>
              <span className = 'posted by'>Posted on 28 dec 2020</span>
              </div>

              <div className = 'postimagecontainer'>
          <img src = {require('../../images/basin.jpg')} alt = 'basin with grey color'/>

        </div>

        
          </Card>

        </div>
   )

 }

export default Blogpost