import "./videocarousel.css";
import { useState } from "react";
import Slider from "react-slick";



import Weko from '../ResComp/Weko.png'
import Marien from '../ResComp/Marien.png'
import Explainer from '../ResComp/Explainer.png'
import Praktiker from '../ResComp/Praktiker.png'


import video0 from '../../Resources/Videos/VidCaro/video0.mp4'
import video1 from '../../Resources/Videos/VidCaro/video1.mp4'
import video2 from '../../Resources/Videos/VidCaro/video2.mp4'
import video3 from '../../Resources/Videos/VidCaro/video3.mp4'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import ReactPlayer from 'react-player'
const images = [Marien,Praktiker,Weko,Explainer];



function VideoCarousel({click}) {
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
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    responsive:[
      {breakpoint: 1000,
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
    <div className="container-lg my-5 p-3 pb-5 " id = 'vids-carousel'>
      <Slider {...settings}> 
      
        {images.map((img, idx) => (
            
<div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            {idx === imageIndex?<img class = 'shadow-lg' id ='vid-img' src={img} alt={img} 
            type="button" data-bs-toggle="modal" data-bs-target= {`#vid${idx}`}
            onClick={((e) => handleClick(e, idx))}/>:
            <img class = 'shadow-lg' id ='vid-img' src={img} alt={img} 
            />}
            
          </div>))}
      </Slider>
        
      
      
            <div>
            <div class="modal fade" id="vid0" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg ">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
        onClick={closeAll}
        ></button>
      </div>
      <div class="modal-body">
      <div className="container">
      
      <ReactPlayer url={video0} playing={play0} controls  width='100%' height='100%' />
      
      </div>
</div>
      
    </div>
  </div>
</div>
            <div class="modal fade" id="vid1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg ">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
        onClick={closeAll}
        ></button>
      </div>
      <div class="modal-body">
      <div className="container">
      
      <ReactPlayer url={video1} playing={play1} controls  width='100%' height='100%' />
      
      </div>
</div>
      
    </div>
  </div>
</div>
            <div class="modal fade" id="vid2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg ">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
        onClick={closeAll}
        ></button>
      </div>
      <div class="modal-body">
      <div className="container">
      
      <ReactPlayer url={video2} playing={play2} controls  width='100%' height='100%' />
      
      </div>
</div>
      
    </div>
  </div>
</div>
            <div class="modal fade" id="vid3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg ">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
        onClick={closeAll}
        ></button>
      </div>
      <div class="modal-body">
      <div className="container">
      
      <ReactPlayer url={video3} playing={play3} controls  width='100%' height='100%' />
      
      </div>
</div>
      
    </div>
  </div>
</div>



            </div>
     
    </div>
  );
}

export default VideoCarousel;