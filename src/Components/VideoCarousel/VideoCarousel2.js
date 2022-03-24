


import { useState } from 'react';
import './videocarousel2.css';
import Slider from "react-slick";

import Weko from '../ResComp/Weko.png'
import Marien from '../ResComp/Marien.png'
import Explainer from '../ResComp/Explainer.png'
import Praktiker from '../ResComp/Praktiker.png'

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import ReactPlayer from 'react-player'
const images = [Marien,Praktiker,Weko,Explainer];


function Spotlight() {
    const [play0,setPlay0] = useState(false);
  const [play1,setPlay1] = useState(false);
  const [play2,setPlay2] = useState(false);
  const [play3,setPlay3] = useState(false);

  
  const handleClick=(e, id)=>{
    console.log("id:",id);
    switch(id) {
      case 0:
        setPlay0(true);
        break;
      case 1:
        setPlay1(true);
        break;
        case 2:
          setPlay2(true);
        break;
        case 3:
          setPlay3(true);
        break;
      default:
        break;
    }
  }
  const closeAll =()=>{
    setPlay0(false);
    setPlay1(false);
    setPlay2(false);
    setPlay3(false);
  }

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
    autoplay: true,
    lazyLoad: true,
    // centerPadding: "60px",
    speed: 500,
    autoplaySpeed: 4000,
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
    <div className="container my-5 overflow-hidden" id = 'vc'>
        
      <Slider {...settings}> 
                
                {images.map((img,idx)=>(
                    <div style={{outline:'none'}}  id={idx === imageIndex ? "vc-active" : "vc-m"} className={idx=== imageIndex? "  w-60  ": "  w-90  my-3"}
                     >
                       {idx === imageIndex ?
                       <img className='rounded' src = {img} alt = {img}
                       type= "button" data-bs-toggle= "modal"
                   data-bs-target= {`#vid${idx}`}
                       onClick={((e) => handleClick(e, idx))}
                       />:
                       <img className='rounded' src = {img} alt = {img}
                        
                        />
                       }
                        

                    

                    </div>
                    
  ))}

             
        
      </Slider>
        
            <div>
           
            </div>
            <div>
            <div class="modal fade" id="vid0" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-fullscreen ">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
        onClick={closeAll}
        ></button>
      </div>
      <div class="modal-body">
      <div className="container py-0">
      
      {/* <ReactPlayer url={video0} playing={play0} controls  width='100%' height='100%' /> */}
      <ReactPlayer url='https://youtu.be/tWzIRapoac8' playing={play0} controls  width='100%' height='85vh' />
      
      </div>
</div>
      
    </div>
  </div>
</div>
            <div class="modal fade" id="vid1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-fullscreen ">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
        onClick={closeAll}
        ></button>
      </div>
      <div class="modal-body">
      <div className="container">
      
      <ReactPlayer url='https://youtu.be/UObhsmW9RgM' playing={play1} controls  width='100%' height='80vh' />
      
      </div>
</div>
      
    </div>
  </div>
</div>
            <div class="modal fade" id="vid2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-fullscreen ">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
        onClick={closeAll}
        ></button>
      </div>
      <div class="modal-body">
      <div className="container">
      
      <ReactPlayer url='https://www.youtube.com/watch?v=xFkPAAUrFAA' playing={play2} controls  width='100%' height='80vh' />
      
      </div>
</div>
      
    </div>
  </div>
</div>
            <div class="modal fade" id="vid3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog  modal-fullscreen ">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
        onClick={closeAll}
        ></button>
      </div>
      <div class="modal-body">
      <div className="container">
      
      <ReactPlayer url='https://www.youtube.com/watch?v=LarUhK6GAmI' playing={play3} controls  width='100%' height='80vh' />
      
      </div>
</div>
      
    </div>
  </div>
</div>



            </div>
    </div>
  );
}

export default Spotlight;