import '../../App.css';
import './analytics.css'
import React from 'react';

import h1 from '../../Resources/Photos/h1.mp4';
import Floor1 from '../../Resources/Photos/Pages/Analytics/Floor1.png';
import Floor2 from '../../Resources/Photos/Pages/Analytics/Floor2.png';
import Total from '../../Resources/Photos/Pages/Analytics/Total.png';
import Daily from '../../Resources/Photos/Pages/Analytics/Daily.png';
import Laptopwp from '../../Resources/Photos/Pages/Analytics/Laptopwp.png';
import h1a from '../../Resources/Photos/Pages/Analytics/BasicAnalytics/h1a.png'
import h2 from '../../Resources/Photos/Pages/Analytics/BasicAnalytics/h2.png'
import h3 from '../../Resources/Photos/Pages/Analytics/BasicAnalytics/h3.png'
import h4 from '../../Resources/Photos/Pages/Analytics/BasicAnalytics/h4.png'
import h5 from '../../Resources/Photos/Pages/Analytics/BasicAnalytics/h5.png'
import h6 from '../../Resources/Photos/Pages/Analytics/BasicAnalytics/h6.png'
import h7 from '../../Resources/Photos/Pages/Analytics/BasicAnalytics/h7.png'
import h8 from '../../Resources/Photos/Pages/Analytics/BasicAnalytics/h8.png'
import h9 from '../../Resources/Photos/Pages/Analytics/BasicAnalytics/h9.png'
import h10 from '../../Resources/Photos/Pages/Analytics/AdvancedAnalytics/h10.png'
import h11 from '../../Resources/Photos/Pages/Analytics/AdvancedAnalytics/h11.png'
import h12 from '../../Resources/Photos/Pages/Analytics/AdvancedAnalytics/h12.png'
import h13 from '../../Resources/Photos/Pages/Analytics/AdvancedAnalytics/h13.png'
import h14 from '../../Resources/Photos/Pages/Analytics/AdvancedAnalytics/h14.png'
import h15 from '../../Resources/Photos/Pages/Analytics/AdvancedAnalytics/h15.png'
import Usecase from '../../Components/Usecase'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Analytics() {
  const { t, i18n } = useTranslation();
  
  return <div>
  <div className="container-fluid  bg-dark text-white mt-5 overflow-hidden" id='analytics-hero'  >
    <div className="row justify-content-around align-items-end   h-100">
      <div id='analytics-open' className="col align-self-center  px-0 col-sm-9">
        <h1  >Ariadne <br/> Analytics</h1>
        <p>{t('analytics.hero-p')}</p>
        </div>

        <div className="col-lg-6 align-items-end  col-sm-12 col-md-10">
          <img src={Laptopwp} alt="" id = 'lap_wp' class = ' align-self-end'/>
          </div>

      </div>
    </div>

  <main>
    <div id = 'products-body'>

    
      <div id='analytics-gif' className="container-fluid p-5" style = {{backgroundColor: '#f2f2f2'}}>
      <div className="row align-items-center justify-content-around" >
      <div className="col-lg-6 p-section" >
        
        <p style={{fontFamily:'Poppins'}} >{t('analytics.intro')}</p>
        </div>
      <div className="col-lg-4 col-sm-12">
      <video src={h1} autoPlay loop muted type = "videos/mp4" class ='rounded shadow' style = {{width: '103%', pointerEvents: "none"}}/>
        </div>
      </div>
        </div>

        <div className="analytics-whole justify-content-center text-center">

        <div className="container mt-5 text-center mb-5 px-4" >
          <h1 class='mb-4' style={{fontFamily:'Poppins', lineHeight:'normal'}}>{t('analytics.titles.0')}</h1>
          <p style={{fontFamily:'Poppins'}}>{t('analytics.text.0')}</p>
          <div className="row  px-0 mt-5 justify-content-between mb-3">
            <div className="col-lg-3 mb-4">
              <img src={Total} alt="" class = 'img-fluid' />
              </div>
            <div className="col-lg-3  mb-4">
            <img src={Floor1} alt="" class = 'img-fluid'/></div>
            <div className="col-lg-3  mb-4">
            <img src={Floor2} alt="" class = 'img-fluid '/></div>
            
            </div>
            <div className="row mt-3 ">
            <img src={Daily} alt="" />
              </div>

          </div>
         
          
<div className="container text-center px-0">
<h1 class = 'mb-5'style={{fontFamily:'Poppins', lineHeight:'normal'}} >{t('analytics.titles.1')}</h1>
          <p style={{fontFamily:'Poppins'}}>{t('analytics.text.1')}</p>
</div>

          <div className="container mt-5  mb-5 px-4" >
          
            <div className="row mt-5 justify-content-between mb-5">
            

         
              <div className="col-lg-3  mb-4">
              <img src={h1a} alt="" class = 'img-fluid' />
                </div>
              <div className="col-lg-3  mb-4"><img src={h2} alt="" class = 'img-fluid'/></div>
              <div className="col-lg-3  mb-4"><img src={h3} alt="" class = 'img-fluid'/></div>
              </div>
              <h6 className='text-center' style={{fontFamily:'Poppins'}}>{t('analytics.text.2')}</h6>

            <div className="row mt-5 justify-content-between mb-5">
            <div className="col-lg-3  mb-4"><img src={h4} alt="" class = 'img-fluid'/></div>
            <div className="col-lg-3  mb-4"><img src={h5} alt="" class = 'img-fluid'/></div>
            <div className="col-lg-3  mb-4"><img src={h6} alt="" class = 'img-fluid'/></div>
            
              
              </div>
              <p className='text-center' style={{fontFamily:'Poppins'}}>{t('analytics.text.3')}</p>
            <div className="row mt-5 justify-content-between mb-5">
            <div className="col-lg-3  mb-4"><img src={h7} alt="" class = 'img-fluid'/></div>
            <div className="col-lg-3  mb-4"><img src={h8} alt="" class = 'img-fluid'/></div>
            <div className="col-lg-3  mb-4"><img src={h9} alt="" class = 'img-fluid'/></div>
              </div>

              <h1 style={{fontFamily:'Poppins', lineHeight:'normal'}} class = 'mb-3 mt-4'>{t('analytics.titles.2')}</h1>

              <h6 className='text-center' style={{fontFamily:'Poppins'}}>{t('analytics.text.4')}</h6>

              <div className="row mt-5 justify-content-around mb-5">
                <div className="col-lg-5  mb-4">
                <img src={h10} alt="" class = 'img-fluid'/>
                  </div>
                  <div className="col-lg-5  mb-4">
                <img src={h11} alt="" class = 'img-fluid'/>
                  </div>
                </div>
                <h6 className='text-center' style={{fontFamily:'Poppins'}}>{t('analytics.text.5')}</h6>

                <div className="row mt-5 justify-content-around mb-5">
                <div className="col-lg-5  mb-4">
                <img src={h12} alt="" class = 'img-fluid'/>
                  </div>
                  <div className="col-lg-5  mb-4">
                <img src={h13} alt="" class = 'img-fluid'/>
                  </div>
                </div>
                <p className='text-center' style={{fontFamily:'Poppins'}}>{t('analytics.text.6')}</p>
                <div className="row mt-5 justify-content-around mb-5">
                <div className="col-lg-5  mb-4">
                <img src={h14} alt="" class = 'img-fluid'/>
                  </div>
                  <div className="col-lg-5  mb-4">
                <img src={h15} alt="" class = 'img-fluid'/>
                  </div>
                </div>
            </div>

           
          
          
          
          </div>
          <div class="container-fluid p-5 mt-5 bg-black text-white text-center font-weight-bold align-items-center">
           
            
            
            <div className="row align-items-center justify-content-center">
              <div className="col-8">
              <h1 class='mb-5'>{t('analytics.worktogether')}</h1>
              <button type="button" class="btn btn-lg btn-success">Let's Talk</button>
              </div>
            
            </div>
            
            
          </div>

          <div className="text-center mt-5"  >
        <h1 style={{fontFamily:'Poppins',lineHeight:'normal'}} className=''>Complementary Solutions</h1>
        <h4 style={{fontFamily:'Poppins'}}>Complement your analytics tool with our solutions below, increase returns on your investments</h4>
      </div>
      <div className="container" id='solution-area'>
        <div className="row justify-content-around mt-5 py-5">
          <div className="col-xxl-3 col-lg-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Navigation.svg' alt ='' class = 'img-fluid' width="27%"/>
            
            <Link to="/ariadne-navigation" className = "text-decoration-none text-dark"><h2>Ariadne Navigation</h2></Link>
            <p style={{fontFamily:'Poppins'}} class='mt-4'>
    {t('solutions-ref.1')}
</p>
          </div>
          <div className="col-lg-4 col-xxl-3">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Map.svg' alt ='' class = 'img-fluid' width="27%"/>
            
            <Link to="/ariadne-mapping" className = "text-decoration-none text-dark"><h2>Ariadne Mapping</h2></Link>
            <p style={{fontFamily:'Poppins'}} class='mt-4'>
            {t('solutions-ref.3')}</p>
          </div>
          <div className="col-lg-4 col-xxl-3">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Engagement.svg' alt ='' width='27%'/>
             
            <Link to="/ariadne-engagement" className = "text-decoration-none text-dark"><h2>Ariadne Engagement</h2></Link>
            <p style={{fontFamily:'Poppins'}} class='mt-4'>
            {t('solutions-ref.2')}</p>
          </div>
        </div>
        
        
      </div>

      

  
        </div>
        <Usecase title = 'Discover our Use Cases'/>
  
  
  
 
  </main>
</div>;
}

export default Analytics;
