import React, { Component } from "react";
import Slider from "react-slick";
import s1 from '../../Resources/Photos/inf/s1.png';
import s2 from '../../Resources/Photos/inf/s2.png';
import s3 from '../../Resources/Photos/inf/s3.png';
import s4 from '../../Resources/Photos/inf/s4.png';
import s5 from '../../Resources/Photos/inf/s5.png';
import s6 from '../../Resources/Photos/inf/s6.png';
import s7 from '../../Resources/Photos/inf/s7.png';
import s8 from '../../Resources/Photos/inf/s8.png';
import s9 from '../../Resources/Photos/inf/s9.png';
import s10 from '../../Resources/Photos/inf/s10.png';
import s11 from '../../Resources/Photos/inf/s11.png';
import s12 from '../../Resources/Photos/inf/s12.png';
import s13 from '../../Resources/Photos/inf/s13.png';


export default class BrandCarousel extends Component {
  render() {
    const settings = {
        accessibility: false,
        arrows:false,  
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            infinite: true,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        
                <div className="container-fluid py-3" style = {{backgroundColor:'#eeeeee'}}>
                    <div className="container" >
        
        <Slider {...settings}>
          <div>
            <img src={s1} alt="" width = '140vw' height='70vh'/>
          </div>
          <div>
          <img src={s2} alt="" width = '140vw' height='70vh'/>
          </div>
          <div>
          <img src={s3} alt="" width = '140vw' height='70vh'/>
          </div>
          <div>
          <img src={s4} alt="" width = '140vw' height='70vh'/>
          </div>
          <div>
          <img src={s5} alt="" width = '140vw' height='70vh'/>
          </div>
          <div>
          <img src={s6} alt="" width = '140vw' height='70vh'/>
          </div>
          <div>
          <img src={s7} alt="" width = '140vw' height='70vh'/>
          </div>
          <div>
          <img src={s8} alt="" width = '140vw' height='60vh'/>
          </div>
          <div>
          <img src={s9} alt="" width = '140vw' height='70vh'/>
          </div>
          <div>
          <img src={s10} alt="" width = '140vw' height='60vh'/>
          </div>
          <div>
          <img src={s11} alt="" width = '140vw' height='70vh'/>
          </div>
          <div>
          <img src={s12} alt="" width = '140vw' height='70vh'/>
          </div>
          <div>
          <img src={s13} alt="" width = '140vw' height='70vh'/>
          </div>
        </Slider>
      </div>
                </div>
      
    );
  }
}