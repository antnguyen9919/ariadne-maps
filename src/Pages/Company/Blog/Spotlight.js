

import Slider from "react-slick";
import { useEffect, useState } from 'react';
import {collection, getDocs} from "firebase/firestore"
import './spotlight.css'
import {Link} from 'react-router-dom';

import db from '../../../Config/firebase'




import { FaAngleRight, FaAngleLeft } from "react-icons/fa";





function Spotlight() {

    const [articles,setArticles] = useState([]);
    const articlesCollectionRef = collection(db,"BlogArticles");

    

  
    useEffect(()=>{
        const getArticles = async() =>{
          const data = await getDocs(articlesCollectionRef);
          setArticles(data.docs.map((doc)=>({...doc.data(), id: doc.id} )));
        };
        getArticles();
      } ,[])   

 
      const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaAngleRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaAngleLeft />
          </div>
        );
      };
      const [imageIndex, setImageIndex] = useState(0);

  var settings = {
    infinite: true,
    lazyLoad: true,
    centerPadding: "60px",
    speed: 300,
    slidesToShow: 3,
    responsive:[
      {breakpoint: 1200,
        settings:{
          slidesToShow:1,
        }
      }
    ]
    ,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    
  };
  

  return (
    <div className="container-lg my-5 p-5 " id = 'spot'>
        
      <Slider {...settings}> 
                {articles.map((article,idx)=>(
                    <div id={idx === imageIndex ? "sm-active" : "spot-m"} className={idx=== imageIndex? "container text-light  border rounded w-65 pb-4": "container text-light  border rounded w-75 pb-4 my-3"} >
<div id='spot-card' className="container   py-4"  >
                            <h5>{article.title}</h5>
                            
                        
                        
                    </div>  
                    
                    
                    <Link to={`/post/${article.slug}`} state={article} className="link">
                    <button className="btn btn-sm shadow border btn-danger align-self-end ">Learn more</button>
          </Link>

                    </div>
                    
  ))}
        
      </Slider>
        
      
      
            <div>
           
            



            </div>
     
    </div>
  );
}

export default Spotlight;