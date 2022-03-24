 import React,{useEffect, useState} from 'react';
import Sidebar from './Sidebar';
 import './Single.css';
import SinglePost from './SinglePost';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import db from '../../../Config/firebase'
import {collection,query, where ,getDocs } from "firebase/firestore"



  function Single() {
    const { slug } = useParams();
    const [blogData,setBlogData] = useState({title: 'No Title', content: 'No content', id: 'BEiANdpOI1I5Myn7DfBa'});
    const articlesCollectionRef = collection(db,"BlogArticles");
    const [articles,setArticles] = useState([]);
    
    const location = useLocation();
    
    const dataGot = query(articlesCollectionRef,where("slug", "==",slug))
    const querySnapshot = getDocs(dataGot);
    console.log("hehe", dataGot)
    
    // useEffect(()=>{
    //   const getArticles = () =>{
        
    //     setBlogData(querySnapshot.docs.map((doc)=>({...doc.data(), idk: doc.id} )));
        
    //   };
    //   getArticles();
    // } ,[])   
    
    

    const A = ''
    // console.log("Hehe", querySnapshot.map((doc)=> doc   ))
    


    useEffect(()=>{


      // const another = articlesCollectionRef.where("slug", "==",slug).get()
      const receiveData = ()=>{
        const data = location.state;

        if(data==null ) {
          // setBlogData(data)
         console.log("We have a Null")
        } else setBlogData({
          title: data.title,
          content: data.content
        });

      }
      
receiveData()

    },[])

    
    
    console.log(blogData);
    console.log('slug:',slug)


    // componentDidMount(){

    // }

   return <div className='single'>
       <SinglePost data = {blogData} />
       <Sidebar/>
   </div>;
 }

 export default (Single)
 