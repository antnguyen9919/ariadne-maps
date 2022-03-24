import React from 'react';

import './home.css';

import CheckIcon from '@mui/icons-material/Check';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import screens from '../Resources/Photos/screens.png';

import h1 from '../Resources/Photos/h1.mp4';
import h2 from '../Resources/Photos/h2.mp4';
import h3 from '../Resources/Photos/h3.mp4';
import h4 from '../Resources/Photos/h4.mp4';

// enlarge 
import eAnalytics from '../Resources/Photos/enlarge/eAnalytics.png'
import CRM from '../Resources/Photos/enlarge/CRM.png'
import ERP from '../Resources/Photos/enlarge/ERP.png'


import {ProductSection,Testimonials,Hero,BrandCarousel} from '../Components'
import Spotlight from './Company/Blog/Spotlight';
import  VideoCarousel2  from '../Components/VideoCarousel/VideoCarousel2';
import { useTranslation } from 'react-i18next';







function Home() {

  const { t, i18n } = useTranslation();
  return <div className = 'home-all'>
      

<Hero/>


  
   

<main >
  

    <BrandCarousel/>
  
    <div id= 'home-sec-1' class = 'container d-xxl-none text-align-center text-center mt-5 px-5 mb-5'> 
    <h1 class='fw-bold' style ={{fontFamily:'Poppins'}}>{t('home.home-sec-1.title')} </h1>

    </div>
    <div class = 'container d-none d-xxl-block text-align-center text-center mt-5 px-5 mb-5'> 
    <h1 className='fw-bold'  style ={{fontFamily:'Poppins'}}>{t('home.home-sec-1.title')}</h1>

    </div>

    
    {/* Intro section  */}
  <div className="container-fluid d-xxl-none mb-2 align-items-center py-5 shadow-sm mt-4">
    
      <div className="row align-items-center" >
        
          <div className="row justify-content-around">
          <div className="col-lg-7 justify-conter-center">
        <img src={screens} class = 'img-fluid' alt = {screens}/>
       
        <button type="button" class="btn text-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{display:'block',margin:'0 auto'}}>
       <h5 type="button" class="btn text-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"><AddCircleOutlineIcon style = {{paddingBottom:'3px'}}/> {t('home.home-sec-1.enlarge')}</h5>
       
</button>
       
        
        
        </div>
        
          <div className="col-lg-4  text-md-start text-sm-center">
        
        <div >
        <p class = 'mb-4' style ={{fontSize:'normal'}} >{t('home.home-sec-1.p')}
        </p>
        
        
      <p class = 'lh-lg'>
      <span style = {{paddingRight: '25px',fontSize:'1.6vw'}}><CheckIcon /></span>{t('home.home-sec-1.ul.0')}<br/>
      <span style = {{paddingRight: '25px',fontSize:'1.6vw'}}><CheckIcon /></span>{t('home.home-sec-1.ul.1')}<br/>
      <span style = {{paddingRight: '25px',fontSize:'1.6vw'}}><CheckIcon /></span>{t('home.home-sec-1.ul.2')}<br/>
      <span style = {{paddingRight: '25px',fontSize:'1.6vw'}}><CheckIcon /></span>{t('home.home-sec-1.ul.3')}<br/>
      <span style = {{paddingRight: '25px',fontSize:'1.6vw'}}><CheckIcon /></span>{t('home.home-sec-1.ul.4')}

      </p>
      
      
      
        <div>

      
       



        </div>

          </div>
          </div>
          
            </div>
            
        </div>
        
    

    </div>

    <div className="container-fluid d-none d-xxl-block mb-2 align-items-center py-5 shadow-sm mt-4">
    
      <div className="row align-items-around" >
        
          <div className="row justify-content-around">
          <div className="col-lg-6 offset-1">
        <img src={screens} class = 'img-fluid' alt = {screens}/>
        </div>
        
          <div className="col-lg-4  text-md-start text-sm-center">
        
        <div >
        <p class = 'lh-lg mb-5  ' >{t('home.home-sec-1.p')}</p>
        
        
      <p className=' '><span style = {{paddingRight: '25px'}}><CheckIcon /></span>{t('home.home-sec-1.ul.0')}</p>
      <p className=' '><span style = {{paddingRight: '25px'}}><CheckIcon /></span>{t('home.home-sec-1.ul.1')}</p>
      <p className=' '><span style = {{paddingRight: '25px'}}><CheckIcon /></span>{t('home.home-sec-1.ul.2')}</p>
      <p className=' '><span style = {{paddingRight: '25px'}}><CheckIcon /></span>{t('home.home-sec-1.ul.3')}</p>
      <p className=' '><span style = {{paddingRight: '25px'}}><CheckIcon /></span>{t('home.home-sec-1.ul.4')}</p>
        
        <div>
        </div>

          </div>
          </div>
          
            </div>
            
        </div>
        <button type="button" class="btn text-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{display:'block',margin:'0 auto'}}>
       <h5 ><AddCircleOutlineIcon style = {{paddingBottom:'3px'}}/> Enlarge</h5>
       
</button>
    

    </div>
    
{/* Vid Carousel  text */}
<div class = 'py-4' style ={{
background: 'linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 46%)'}}>
<div className="container text-align-center text-center mt-5 px-5"  >
    <h1 class='fw-bold text-center mt-5' style ={{fontFamily:'Poppins'}}>{t('home.home-sec-2-title')}</h1>
    </div>
    <VideoCarousel2/>

      
    
</div>
    
  
     
{/* Ariadne Platform  */}
      <div class = 'text-center px-5 mt-5'> <h1 class='fw-bold' style ={{fontFamily:'Poppins'}}>The Ariadne Platform</h1> </div>
    
<div className="container-fluid d-xxl-none flex-column">
    <div className="row align-items-center mt-5 py-2 justify-content-around   p-5 ">
      <div className="col-lg-6  ">
        <h1 class = '  display-xxl-5'>Ariadne Analytics</h1>
        <p class = 'mt-4' style ={{fontSize:'normal'}} >{t("home.ariadne-platform-p.0")}
        <br/>

</p>
        </div>
      <div className="col-lg-4">
       
        <video src={h1} autoPlay loop muted type = "videos/mp4" class ='rounded shadow' style = {{width: '103%', pointerEvents: "none"}}/>
        </div>
      </div>
      
      <div className="row align-items-center mt-5 justify-content-around  p-5 " style = {{backgroundColor: '#f2f2f2'}}>
      <div className="col-lg-6">
        <h1 >Ariadne Navigation</h1>

        <p class = 'mt-4  '>{t("home.ariadne-platform-p.1")}</p>
        </div>
      <div className="col-lg-4">
      <video src={h2} autoPlay loop muted type = "videos/mp4" class ='rounded shadow' style = {{width: '103%', pointerEvents: "none"}}/>
        </div>
      </div>

      <div className="row align-items-center mt-5 justify-content-around  p-5 ">
      <div className="col-lg-6">
        <h1>Ariadne Engagement</h1>
        <p class = 'mt-4  '>{t("home.ariadne-platform-p.2")}</p>
        </div>
      <div className="col-lg-4">
      <video src={h3} autoPlay loop muted type = "videos/mp4" class ='rounded shadow' style = {{width: '103%', pointerEvents: "none"}}/>
        </div>

      </div>
      <div className="row align-items-center mt-5 mb-5 justify-content-around  p-5" style = {{backgroundColor: '#f2f2f2'}}>
      <div className="col-lg-6">
        <h1>Ariadne Mapping</h1>
        <p class = 'mt-4  '>{t("home.ariadne-platform-p.3")}</p>
        </div>
      <div className="col-lg-4">
      <video src={h4} autoPlay loop muted type = "videos/mp4" class ='rounded shadow' style = {{width: '103%', pointerEvents: "none"}}/>
        </div>
      </div>
  </div>



  <div className="container-fluid d-none d-xxl-block flex-column">
    <div className="row align-items-center  mt-5 justify-content-center  p-5 " style = {{
        background: 'linear-gradient(0deg, rgba(229,229,229,1) 0%, rgba(252,252,252,1) 20%)'}}>
      <div className="col-lg-6  ">
        <h1 class = '  display-xxl-5'>Ariadne Analytics</h1>
        <p class = 'mt-4  '>{t("home.ariadne-platform-p.0")}</p>
        </div>
      <div className="col-lg-4">
        <img src={h1} alt="" class="img-fluid rounded  shadow" />
        </div>
      </div>
      
      <div className="row align-items-center  justify-content-center  p-5 " style ={{
background: 'linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 46%)'}}>
      <div className="col-lg-6">
        <h1 >Ariadne Navigation</h1>

        <p class = 'mt-4  '>{t("home.ariadne-platform-p.1")}</p>
        </div>
      <div className="col-lg-4">
        <img src={h2} alt="" class="img-fluid rounded  shadow"  />
        </div>
      </div>

      <div className="row align-items-center  justify-content-center  p-5 " style = {{
        background: 'linear-gradient(0deg, rgba(229,229,229,1) 0%, rgba(252,252,252,1) 20%)'}}>
      <div className="col-lg-6">
        <h1>Ariadne Engagement</h1>
        <p class = 'mt-4  '>{t("home.ariadne-platform-p.2")}</p>
        </div>
      <div className="col-lg-4">
        <img src={h3} alt=""class="img-fluid rounded shadow"  />
        </div>

      </div>
      <div className="row align-items-center  mb-5 justify-content-center  p-5" style ={{
background: 'linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 46%)'}}>
      <div className="col-lg-6">
        <h1>Ariadne Mapping</h1>
        <p class = 'mt-4  '>{t("home.ariadne-platform-p.3")}</p>
        </div>
      <div className="col-lg-4">
        <img src={h4} alt="" class="img-fluid rounded  shadow" />
        </div>
      </div>
  </div>


  {/* end  */}

      
        <div style ={{
background: 'linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 46%)'}}>
<div class = 'text-center px-5 my-5'> <h1 class='fw-bold' style ={{fontFamily:'Poppins'}}>{t('home.testimonials-title')}</h1> </div>
<Testimonials/>

        </div>
      
  



{/* <Testimo/> */}
<div style ={{
background: 'linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 36%)'}} >
<ProductSection/>
</div>


<div className="container-fluid text-center h-75 py-3 mb-5" style ={{
background: 'linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 36%)'}} >
  <h1 class='fw-bold' style ={{fontFamily:'Poppins', fontSize:'3.6vw'}}>Spotlight</h1>
  <Spotlight/>
  
  </div>
  
 

{/* text  */}
<div className="container d-xxl-none text-center mb-5">
<h1 class='fw-bold mb-4' style ={{fontFamily:'Poppins'}}>Let's talk</h1>
<p>{t('home.iframe-sec')}</p>
  </div>

  <div className="container d-none d-xxl-block text-center">
<h1 class='fw-bold mb-3 display-3' style ={{fontFamily:'Poppins'}}>Let's talk</h1>
<p>{t('home.iframe-sec')}</p>
  </div>
  
<iframe src="https://calendly.com/georgios-ariadnemaps/30min?month=2022-03" frameBorder="0" width='100%' height='800px' title = 'calendly' ></iframe>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen  ">
    <div class="modal-content " style = {{
        background: 'linear-gradient(0deg, rgba(229,229,229,1) 0%, rgba(252,252,252,1) 20%)'}}>
      <div class="modal-header">
        <h3 class = 'ms-auto'>Omnichannel Solution</h3> 
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="container">
      <div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="carousel">
 
  <div class="carousel-inner">
    <div class="carousel-item active justify-content-center">
      <img src={eAnalytics} alt= {eAnalytics} class = 'shadow mb-4 rounded omni-img' width='70%' height='auto' style = {{display:'block',margin:'auto'}}/>
          <div class = 'text-center'>
          <h5>Ariadne Analytics </h5>
        <p>People Counting, Dwell Time, Heat Map, Alerts, Transitions…</p>
          </div>
        
      
    </div>
    <div class="carousel-item justify-content-center text-center">
      <img src={CRM}   alt= {CRM} width='70%' class = 'shadow mb-4  rounded omni-img' height='auto' style = {{display:'block',margin:'auto'}}/>
      <div class = 'text-center'>
          <h5>CRM Optin Tool</h5>
        <p>Customers opt-in and you can see the contact info store by store</p>
          </div>
      
    </div>
    <div class="carousel-item">
      <img src={ERP}  alt={ERP}  width='70%' class = 'shadow mb-4 rounded omni-img' height='auto' style = {{display:'block',margin:'auto'}}/>
      <div class = 'text-center'>
          <h5>ERP Data Integration</h5>
        <p>Measure the conversion rate of each product</p>
          </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
</div>
      
    </div>
  </div>
</div>



</main>






  </div>

}

export default Home;