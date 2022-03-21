import React from 'react'
import { useEffect, useState } from 'react';
import {collection, getDocs} from "firebase/firestore"

import Header from './Header'
import Posts from './Posts'
// import Sidebar from './Sidebar'
import db from '../../../Config/firebase'
import NewPost from './NewPost';



function Blog() {
  
  
  const [articles,setArticles] = useState([]);
  const articlesCollectionRef = collection(db,"BlogArticles");
  

  useEffect(()=>{
    const getArticles = async() =>{
      const data = await getDocs(articlesCollectionRef);
      setArticles(data.docs.map((doc)=>({...doc.data(), id: doc.id} )));
    };
    getArticles();
  }  ,[])   
  
  


  return (
    <>
      
    <Header />
    
        <NewPost props = {articlesCollectionRef}/>

    <div>
      
      <Posts articles = {articles} moderator = {true}/>
      {/* <Sidebar /> */}
      
    </div>
  </>
  );
}

export default Blog