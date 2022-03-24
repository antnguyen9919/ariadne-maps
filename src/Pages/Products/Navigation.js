import '../../App.css';
import React from 'react';
import MunichOffice from '../../Resources/Photos/Pages/Navigation/MunichOffice.png';
import navigate from '../../Resources/Photos/Pages/Navigation/navigate.png';
import phone3 from '../../Resources/Photos/Pages/Navigation/phone3.png';
import h2 from '../../Resources/Photos/h2.mp4';
import Usecase from '../../Components/Usecase'
import { Link } from 'react-router-dom';
import './productsAll.css'
function Navigation() {
  return <div>
  <div id='navi-hero' className="container-fluid bg-dark text-white px-5">

    <div className="row align-items-end justify-content-around h-100">
      <div className="col-lg-6 align-self-center">
        <h1 >Ariadne<br/> Navigation</h1>
        <p style={{fontFamily:'Poppins'}} >Navigate your visitors in your business for an enhanced customer experience!

        Present promotions in your map to engage and enhance your visitors satisfaction.</p>
        </div>
        <div className="col-lg-5">
          <img src={MunichOffice} alt=""  />
          </div>
      </div>
    </div>


    
  <main id = 'navi-main'>
  <div className="container-fluid  p-5" style = {{backgroundColor: '#f2f2f2'}}>
      <div className="row align-items-center justify-content-around ">
      <div className="col-lg-6">
        
        <p>Ariadne Navigation performs the indoor navigation and indoor positioning for your business, making it simple for users to locate their destination.<br/>

Ariadne Navigation also provides the user with information about his surroundings and reduces the time he invests in searching.
</p>
        </div>
      
        <div className="col-lg-4 col-sm-12">
        
        <video src={h2} autoPlay loop muted type = "videos/mp4" class ='rounded shadow' style = {{width: '103%', pointerEvents: "none"}}/>
        </div>
      </div>
        </div>
        
        <div className="container-fluid my-5 px-5" >
      <div className="row align-items-center justify-content-around">
      <div className="col-lg-5">
      <h3>Indoor Positioning Services (IPS)</h3>
            <p>We offer Indoor GPS, which assists customers and users in determining the most efficient route to their destination. Customers can also customize their routes by adding stops for more efficient planning.
</p>
            <h3 className='mt-5'>Efficient Ad Placement</h3>
            <p>Targeted marketing campaigns connected to customers’ destination location are achievable using Ariadne Navigation.
We enable and lead you to hyperlocal marketing.</p>
        </div>
      <div className="col-lg-5" >
        <img src={navigate} alt="" className=' rounded' />
        </div>
      </div>
        </div>
        
        <div className="container-fluid py-5 px-5">
      <div className="row align-items-center justify-content-around">
      <div className="col-lg-5">
        <img src={phone3} alt="" className='img-fluid' />
        </div>
      <div className="col-lg-5">
      <h2>Seamless Customer Experience</h2>
            <p>Ariadne Navigation allows you to provide seamless customer experience right from visitors’ entry in your premises. We give the opportunity to learn about your customers' navigation patterns, which you can utilize to optimise your business strategies.

</p>
            
        </div>
      
      </div>
        </div>
        <div  id='black-sec' className="container-fluid bg-black text-light text-center my-5 py-5">
          <h1 className='mb-5'>Why Ariadne?</h1>
          <div className="row justify-content-around">
            <div className="col-lg-2">
              <p  >Browser-based Navigation</p>
            </div>
            <div className="col-lg-2">
            <p  >Award Winning Accuracy</p>
            </div>
            <div className="col-lg-2">
            <p  >No Infrastructure Needed</p>
            </div>
            <div className="col-lg-2">
            <p  >Multi Storey Differentiation</p>
            </div>
          </div>
          <button type="button" class="btn btn-lg btn-success">Let's Talk</button>
        </div>
        
        
        <div className="text-center mt-5" >
        <h1 className='display-4 fw-bold'>Complementary Solutions</h1>
        <h4>Complement your navigation tool with our solutions below, increase returns on your investments</h4>
      </div>
      <div className="container " id = 'navi-end'>
        <div className="row justify-content-around mt-5 py-5">
        <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Analytics.svg' alt ='' class = 'img-fluid' width="27%"/>
            
            <Link to='/analytics' className = "text-decoration-none"><h2>Ariadne Analytics</h2></Link>
            <p>

Ariadne’s indoor analytics encompasses a wide variety of tools that will help you improve in every aspect of your business. From people counting to heatmaps to loyalty rates, you can view your performance, develop new strategies and watch your returns increasing.</p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Map.svg' alt ='' class = 'img-fluid' width="27%"/>
            
            <Link to="/" className = "text-decoration-none"><h2>Ariadne Mapping</h2></Link>
            <p>

            Transform your physical business into a digital landscape! Ariadne Maps creates your indoor maps that can be integrated with other platforms in digital environment, and enables you to position assets and products for the ease of finding and time efficiency. </p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Engagement.svg' alt ='' width='27%'/>
             
            <Link to="/" className = "text-decoration-none"><h2>Ariadne Engagement</h2></Link>
            <p>

Ariadne comes with an opt-in option for your customers. Even though the core technology does not require interaction from your visitors, with the opt-in option, you can push notifications to your customers, or just send short surveys to assess the quality of your service.</p>
          </div>
        </div>
        
        
      </div>
         

      <Usecase title = 'Discover our Use Cases'/>
        

        
        
  </main>
</div>;
}

export default Navigation;
