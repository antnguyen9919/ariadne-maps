import React from 'react';

import './home.css';

import CheckIcon from '@mui/icons-material/Check';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import screens from '../Resources/Photos/screens.png';

import h1 from '../Resources/Photos/h1.gif';
import h2 from '../Resources/Photos/h2.gif';
import h3 from '../Resources/Photos/h3.gif';
import h4 from '../Resources/Photos/h4.gif';
// enlarge 
import eAnalytics from '../Resources/Photos/enlarge/eAnalytics.png'
import CRM from '../Resources/Photos/enlarge/CRM.png'
import ERP from '../Resources/Photos/enlarge/ERP.png'


import {ProductSection,Testimonials,Hero,VideoCarousel,BrandCarousel} from '../Components'
import Spotlight from './Company/Blog/Spotlight';






function Home() {
  return <div className = 'home-all'>
      

<Hero/>


  
   

<main >
  

    <BrandCarousel/>
  
    <div class = 'container text-align-center text-center mt-5 px-5 mb-5'> 
    <h1 class='fw-bold' style ={{fontFamily:'Poppins', fontSize:'3.6vw'}}>Unlock the value of your data and multiply your returns!</h1>

    </div>

    
    {/* Intro section  */}
  <div className="container-fluid d-xxl-none mb-2 align-items-center py-5 shadow-sm mt-4">
    
      <div className="row align-items-center" >
        
          <div className="row justify-content-around">
          <div className="col-md-7 justify-conter-center">
        <img src={screens} class = 'img-fluid' alt = {screens}/>
        <div className="row">
        <button type="button" class="btn text-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
       <p class = 'fs-5'><AddCircleOutlineIcon style = {{fontSize:'100%',paddingBottom:'3px'}}/> Enlarge</p>
       
</button>
        </div>
        </div>
        
          <div className="col-lg-4  text-md-start text-sm-center">
        
        <div >
        <p class = 'mb-4' style ={{fontSize:'1.6vw'}} >Ariadne is considered to be the Google Analytics of the physical world. Ariadne helps you to analyze your visitors’ behavior, it consults you on strategies, and provides you with recommendations for the future.
        </p>
        
        
      <p class = 'lh-lg'><span style = {{paddingRight: '25px',fontSize:'1.6vw'}}><CheckIcon /></span>      Footfall (Total and by area)<br/>
      <span style = {{paddingRight: '25px',fontSize:'1.6vw'}}><CheckIcon /></span>      Dwell Time(Total and by area) <br/>
      <span style = {{paddingRight: '25px',fontSize:'1.6vw'}}><CheckIcon /></span>      Heatmap (2D and 3D)<br/>
      <span style = {{paddingRight: '25px',fontSize:'1.6vw'}}><CheckIcon /></span>      Transitions between areas)<br/>
      <span style = {{paddingRight: '25px',fontSize:'1.6vw'}}><CheckIcon /></span>      ERP, BI, POS Integration

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
          <div className="col-md-6 offset-1">
        <img src={screens} class = 'img-fluid' alt = {screens}/>
        </div>
        
          <div className="col-lg-4  text-md-start text-sm-center">
        
        <div >
        <p class = 'lh-lg mb-5 fs-4' >Ariadne is considered to be the Google Analytics of the physical world. Ariadne helps you to analyze your visitors' behavior, it consults you on strategies, and provides you with recommendations for the future.
        </p>
        
        
      <p className='fs-5'><span style = {{paddingRight: '25px'}}><CheckIcon /></span>      Footfall (Total and by area)</p>
      <p className='fs-5'><span style = {{paddingRight: '25px'}}><CheckIcon /></span>      Dwell Time(Total and by area)</p>
      <p className='fs-5'><span style = {{paddingRight: '25px'}}><CheckIcon /></span>      Heatmap (2D and 3D)</p>
      <p className='fs-5'><span style = {{paddingRight: '25px'}}><CheckIcon /></span>      Transitions between areas)</p>
      <p className='fs-5'><span style = {{paddingRight: '25px'}}><CheckIcon /></span>      ERP, BI, POS Integration</p>
        
        <div>
        </div>

          </div>
          </div>
          
            </div>
            
        </div>
        
    <div className="row justify-content-start">
      <div className="col-md-2 offset-md-3">
        
      <button type="button" class="btn text-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
       <p class = 'fs-3'><AddCircleOutlineIcon style = {{fontSize:'100%',paddingBottom:'3px'}}/> Enlarge</p>
       
</button>
      </div>
    </div>

    </div>
    
{/* Vid Carousel  text */}
<div class = 'py-4' style ={{
background: 'linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 46%)'}}>
<div className="container text-align-center text-center mt-5 px-5"  >
    <h1 class='fw-bold text-center mt-5' style ={{fontFamily:'Poppins'}}>See how our customers are succeeding<br/> with Ariadne</h1>
    </div>
    <VideoCarousel/>
    
</div>
    
  
     
{/* Ariadne Platform  */}
      <div class = 'text-center px-5 mt-5'> <h1 class='fw-bold' style ={{fontFamily:'Poppins'}}>The Ariadne Platform</h1> </div>
    
<div className="container-fluid d-xxl-none flex-column">
    <div className="row align-items-center mt-5 py-2 justify-content-around   p-5 ">
      <div className="col-md-6  ">
        <h1 class = '  display-xxl-5'>Ariadne Analytics</h1>
        <p class = 'mt-4 fs-5'>Obtain people counting, heatmaps, loyalty rate and more!<br/>
        <br/>

With Ariadne analytics, you can review your performance in real time.</p>
        </div>
      <div className="col-md-4">
        <img src={h1} alt="" class="img-fluid rounded  shadow" />
        </div>
      </div>
      
      <div className="row align-items-center mt-5 justify-content-around  p-5 " style = {{backgroundColor: '#f2f2f2'}}>
      <div className="col-md-6">
        <h1 >Ariadne Navigation</h1>

        <p class = 'mt-4 fs-5'>Navigate your visitors and guests for an enhanced experience!
<br/> <br/>
Present promotions in your map to engage and enhance your visitors satisfaction.</p>
        </div>
      <div className="col-md-4">
        <img src={h2} alt="" class="img-fluid rounded  shadow"  />
        </div>
      </div>

      <div className="row align-items-center mt-5 justify-content-around  p-5 ">
      <div className="col-md-6">
        <h1>Ariadne Engagement</h1>
        <p class = 'mt-4 fs-5'>Ariadne enables your visitors to opt-in to your loyalty program!
        <br/> <br/>
The opt-in feature enables you to push notifications to your visitors the right moment.</p>
        </div>
      <div className="col-md-4">
        <img src={h3} alt=""class="img-fluid rounded shadow"  />
        </div>

      </div>
      <div className="row align-items-center mt-5 mb-5 justify-content-around  p-5" style = {{backgroundColor: '#f2f2f2'}}>
      <div className="col-md-6">
        <h1>Ariadne Mapping</h1>
        <p class = 'mt-4 fs-5'>Transform your physical business into a digital landscape.
        <br/> <br/>
By enabling you to map and localize your products, Ariadne increases your efficiency.</p>
        </div>
      <div className="col-md-4">
        <img src={h4} alt="" class="img-fluid rounded  shadow" />
        </div>
      </div>
  </div>
  <div className="container-fluid d-none d-xxl-block flex-column">
    <div className="row align-items-center  mt-5 justify-content-center  p-5 " style = {{
        background: 'linear-gradient(0deg, rgba(229,229,229,1) 0%, rgba(252,252,252,1) 20%)'}}>
      <div className="col-md-6  ">
        <h1 class = '  display-xxl-5'>Ariadne Analytics</h1>
        <p class = 'mt-4 fs-5'>Obtain people counting, heatmaps, loyalty rate and more!<br/>
        <br/>

With Ariadne analytics, you can review your performance in real time.</p>
        </div>
      <div className="col-md-4">
        <img src={h1} alt="" class="img-fluid rounded  shadow" />
        </div>
      </div>
      
      <div className="row align-items-center  justify-content-center  p-5 " style ={{
background: 'linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 46%)'}}>
      <div className="col-md-6">
        <h1 >Ariadne Navigation</h1>

        <p class = 'mt-4 fs-5'>Navigate your visitors and guests for an enhanced experience!
<br/> <br/>
Present promotions in your map to engage and enhance your visitors satisfaction.</p>
        </div>
      <div className="col-md-4">
        <img src={h2} alt="" class="img-fluid rounded  shadow"  />
        </div>
      </div>

      <div className="row align-items-center  justify-content-center  p-5 " style = {{
        background: 'linear-gradient(0deg, rgba(229,229,229,1) 0%, rgba(252,252,252,1) 20%)'}}>
      <div className="col-md-6">
        <h1>Ariadne Engagement</h1>
        <p class = 'mt-4 fs-5'>Ariadne enables your visitors to opt-in to your loyalty program!
        <br/> <br/>
The opt-in feature enables you to push notifications to your visitors the right moment.</p>
        </div>
      <div className="col-md-4">
        <img src={h3} alt=""class="img-fluid rounded shadow"  />
        </div>

      </div>
      <div className="row align-items-center  mb-5 justify-content-center  p-5" style ={{
background: 'linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 46%)'}}>
      <div className="col-md-6">
        <h1>Ariadne Mapping</h1>
        <p class = 'mt-4 fs-5'>Transform your physical business into a digital landscape.
        <br/> <br/>
By enabling you to map and localize your products, Ariadne increases your efficiency.</p>
        </div>
      <div className="col-md-4">
        <img src={h4} alt="" class="img-fluid rounded  shadow" />
        </div>
      </div>
  </div>


  {/* end  */}

      
        <div style ={{
background: 'linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 46%)'}}>
<div class = 'text-center px-5 my-5'> <h1 class='fw-bold' style ={{fontFamily:'Poppins'}}>Trusted by industry leaders</h1> </div>
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
<p class='fs-4 lead'>Schedule a free 30 minute demo call with an expert</p>
  </div>

  <div className="container d-none d-xxl-block text-center">
<h1 class='fw-bold mb-3 display-3' style ={{fontFamily:'Poppins'}}>Let's talk</h1>
<p class='fs-4 lead'>Schedule a free 30 minute demo call with an expert</p>
  </div>
  
<iframe src="https://calendly.com/georgios-ariadnemaps/30min?month=2022-03" frameborder="0" width='100%' height='800px' title = 'calendly' ></iframe>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl ">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class = 'ms-auto'>Omnichannel Solution</h3> 
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="container">
      <div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="carousel">
 
  <div class="carousel-inner">
    <div class="carousel-item active justify-content-center">
      <img src={eAnalytics} alt= {eAnalytics} class = 'shadow mb-4' width='70%' height='auto' style = {{display:'block',margin:'auto'}}/>
          <div class = 'text-center'>
          <h5>Ariadne Analytics </h5>
        <p>People Counting, Dwell Time, Heat Map, Alerts, Transitions…</p>
          </div>
        
      
    </div>
    <div class="carousel-item justify-content-center text-center">
      <img src={CRM}   alt= {CRM} width='70%' class = 'shadow mb-4' height='auto' style = {{display:'block',margin:'auto'}}/>
      <div class = 'text-center'>
          <h5>CRM Optin Tool</h5>
        <p>Customers opt-in and you can see the contact info store by store</p>
          </div>
      
    </div>
    <div class="carousel-item">
      <img src={ERP}  alt={ERP}  width='70%' class = 'shadow mb-4' height='auto' style = {{display:'block',margin:'auto'}}/>
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