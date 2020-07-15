import React from 'react';
import './style.css';
import Blogpost from '../../components/Blogpost';
import Sidebar from '../../components/SIdebar';

/**
* @author
* @function Post
**/

const Post = (props) => {
  return(
    <section className = 'container'>
        <Blogpost/>
        <Sidebar/>
    </section>
   )

 }

export default Post