import React from 'react'
import { useEffect, useState } from 'react';
import {collection, getDocs} from "firebase/firestore"

import Header from './Header'
import Posts from './Posts'
import Sidebar from './Sidebar'
import db from '../../../Config/firebase'



function Blog() {
  
  const [articles,setArticles] = useState([]);
  const articlesCollectionRef = collection(db,"BlogArticles");
  

  useEffect(()=>{
    const getArticles = async() =>{
      const data = await getDocs(articlesCollectionRef);
      setArticles(data.docs.map((doc)=>({...doc.data(), id: doc.id} )));
    };
    getArticles();
  } ,[])   
  
 


  return (
    <>
      
    <Header />
    <div style = {{display:'flex'}}>
      
      <Posts articles = {articles} />
      <Sidebar />
    </div>
  </>
  );
}



export default Blog