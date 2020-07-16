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
              <span>featured</span>
              <h1 className = 'posttitle'>Beautifull is always Beautifull</h1>
              <span>Posted on 28 dec 2020</span>
              </div>
          </Card>

        </div>
   )

 }

export default Blogpost