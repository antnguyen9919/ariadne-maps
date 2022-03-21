 import React from 'react';
import Sidebar from './Sidebar';
 import './Single.css';
import SinglePost from './SinglePost';
import { useLocation } from 'react-router-dom';

  function Single() {
    const location = useLocation();
    const data = location.state;


   return <div className='single'>
       <SinglePost data = {data.article} moderator = {data.moderator}/>
       <Sidebar/>
   </div>;
 }

 export default (Single)
 