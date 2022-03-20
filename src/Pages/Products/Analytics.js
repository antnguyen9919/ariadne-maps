import '../../App.css';
import './analytics.css'
import React from 'react';
import analytics from '../../Resources/Photos/Pages/analytics.jpg';
import h1 from '../../Resources/Photos/h1.gif';
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


function Analytics() {
  
  return <div>
  <div className="container-fluid bg-dark text-white mt-5 pt-5" >
    <div className="row align-items-center justify-content-between">
      <div className="col-md-4 align-self-center offset-md-1 col-sm-10">
        <h1 style={{fontFamily:'Poppins'}} className='display-4 fw-bold'>Ariadne <br/> Analytics</h1>
        <p style={{fontFamily:'Poppins'}} className='fs-6'>Discover the potential of Ariadne Analytics for your business. Get to know your customers and explore the value behind it</p>
        </div>

        <div className="col-md-6 col-sm-12 col-xxl-6 offset-md-1">
          <img src={Laptopwp} alt="" id = 'lap_wp' class = ''/>
          </div>
      </div>
    </div>

  <main>
      <div className="container-fluid p-5" style = {{backgroundColor: '#f2f2f2'}}>
      <div className="row align-items-center justify-content-around">
      <div className="col-md-6">
        
        <p className='lh-lg fs-4'>Ariadne Analytics is the heart of the Ariadne Platform, and it can be used for people counting, determine retail conversion rates , reduce dwell timesand other useful customer success metrics. We place a high importance on privacy and employ anonymous tracking systems.</p>
        </div>
      <div className="col-md-4 col-sm-12">
        <img src={h1} alt="" className='img-fluid rounded shadow' />
        </div>
      </div>
        </div>

        <div className="analytics-whole">

        <div className="container mt-5 text-center mb-5 px-4" >
          <h1>Real-Time Analytics</h1>
          <p>When do your consumers prefer to shop during the day, and how many people are now in your store and where are they located? We provide answer to those questions with our intuitive dashboard.</p>
          <div className="row mt-5 justify-content-between mb-3">
            <div className="col-md-3 mb-4">
              <img src={Total} alt="" class = 'img-fluid' />
              </div>
            <div className="col-md-3  mb-4">
            <img src={Floor1} alt="" class = 'img-fluid'/></div>
            <div className="col-md-3  mb-4">
            <img src={Floor2} alt="" class = 'img-fluid'/></div>
            
            </div>
            <div className="row mt-3">
            <img src={Daily} alt="" />
              </div>

          </div>
         
          
          <div className="container mt-5 text-center mb-5 px-4" >
          <h1 class = 'mb-5'>Basic Analytics</h1>
          <h6>Recognize the most visited areas of your establishment and tailor your services there to improve your customer´s experience. </h6>
            <div className="row mt-5 justify-content-between mb-5">
            

         
              <div className="col-md-3  mb-4">
              <img src={h1a} alt="" />
                </div>
              <div className="col-md-3  mb-4"><img src={h2} alt="" class = 'img-fluid'/></div>
              <div className="col-md-3  mb-4"><img src={h3} alt="" class = 'img-fluid'/></div>
              </div>
              <h6>Understand what interests your customers, and how much time do they spend to each section in your premises? Take advantage of and cater to your customers' needs.</h6>

            <div className="row mt-5 justify-content-between mb-5">
            <div className="col-md-3  mb-4"><img src={h4} alt="" class = 'img-fluid'/></div>
            <div className="col-md-3  mb-4"><img src={h5} alt="" class = 'img-fluid'/></div>
            <div className="col-md-3  mb-4"><img src={h6} alt="" class = 'img-fluid'/></div>
            
              
              </div>
              <h6>Employ our queue management system to get notified when client wait times near the cashier counter are getting longer and reduce the dwell time. </h6>
            <div className="row mt-5 justify-content-between mb-5">
            <div className="col-md-3  mb-4"><img src={h7} alt="" class = 'img-fluid'/></div>
            <div className="col-md-3  mb-4"><img src={h8} alt="" class = 'img-fluid'/></div>
            <div className="col-md-3  mb-4"><img src={h9} alt="" class = 'img-fluid'/></div>
              </div>

              <h1 class = 'mb-3 mt-4'>Advanced Analytic</h1>

              <h6>Cool graphics and intuitive heat maps for your entire store that you may use to better manage your space.       </h6>

              <div className="row mt-5 justify-content-around mb-5">
                <div className="col-md-5  mb-4">
                <img src={h10} alt="" class = 'img-fluid'/>
                  </div>
                  <div className="col-md-5  mb-4">
                <img src={h11} alt="" class = 'img-fluid'/>
                  </div>
                </div>
                <h5>Utilize our user-friendly graphs to plan practical activities and to improve your operational strategies.</h5>

                <div className="row mt-5 justify-content-around mb-5">
                <div className="col-md-5  mb-4">
                <img src={h12} alt="" class = 'img-fluid'/>
                  </div>
                  <div className="col-md-5  mb-4">
                <img src={h13} alt="" class = 'img-fluid'/>
                  </div>
                </div>
                <h5>Study your store's customer flow patterns and concentrate on them to improve your customers Journey and boost your profits.</h5>
                <div className="row mt-5 justify-content-around mb-5">
                <div className="col-md-5  mb-4">
                <img src={h14} alt="" class = 'img-fluid'/>
                  </div>
                  <div className="col-md-5  mb-4">
                <img src={h15} alt="" class = 'img-fluid'/>
                  </div>
                </div>
            </div>

           
          
          
          
          </div>
          <div class="container-fluid p-5 mt-5 bg-black text-white text-center font-weight-bold align-items-center">
           
            
            
            <div className="row align-items-center justify-content-center">
              <div className="col-8">
              <h1 class='mb-5'>Work Together?</h1>
              <button type="button" class="btn btn-lg btn-success">Let's Talk</button>
              </div>
            
            </div>
            
            
          </div>

          <div className="text-center mt-5">
        <h1 className='display-4 fw-bold'>Complementary Solutions</h1>
        <h4>Complement your analytics tool with our solutions below, increase returns on your investments</h4>
      </div>
      <div className="container">
        <div className="row justify-content-around mt-5 py-5">
          <div className="col-xxl-3 col-md-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Navigation.svg' alt ='' class = 'img-fluid' width="27%"/>
            
            <Link to="/ariadne-navigation" className = "text-decoration-none text-dark"><h2>Ariadne Navigation</h2></Link>
            <p class = 'lead'>

Navigate your visitors and guests for an enhanced experience; show ads and promotions in your map to engage and help your customers find the right products with convenience. Ariadne Maps helps lets you use navigation data to optimize your strategies. </p>
          </div>
          <div className="col-md-4 col-xxl-3">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Map.svg' alt ='' class = 'img-fluid' width="27%"/>
            
            <Link to="/ariadne-mapping" className = "text-decoration-none text-dark"><h2>Ariadne Mapping</h2></Link>
            <p class = 'lead'>

            Transform your physical business into a digital landscape! Ariadne Maps creates your indoor maps that can be integrated with other platforms in digital environment, and enables you to position assets and products for the ease of finding and time efficiency. </p>
          </div>
          <div className="col-md-4 col-xxl-3">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Engagement.svg' alt ='' width='27%'/>
             
            <Link to="/ariadne-engagement" className = "text-decoration-none text-dark"><h2>Ariadne Engagement</h2></Link>
            <p class = 'lead'>

Ariadne comes with an opt-in option for your customers. Even though the core technology does not require interaction from your visitors, with the opt-in option, you can push notifications to your customers, or just send short surveys to assess the quality of your service.</p>
          </div>
        </div>
        
        
      </div>

      

  
        <Usecase/>
  
  
  

 
  </main>
</div>;
}

export default Analytics;
