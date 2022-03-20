import '../../App.css';
import React from 'react';
import MunichOffice from '../../Resources/Photos/Pages/Navigation/MunichOffice.png';
import navigate from '../../Resources/Photos/Pages/Navigation/navigate.png';
import phone3 from '../../Resources/Photos/Pages/Navigation/phone3.png';
import h2 from '../../Resources/Photos/h2.gif';
import Usecase from '../../Components/Usecase'
function Navigation() {
  return <div>
  <div className="container-fluid bg-dark text-white px-5">

    <div className="row align-items-center">
      <div className="col-md-6 align-self-center">
        <h1 style={{fontFamily:'Poppins'}} className='display-4 fw-bold'>Ariadne<br/> Navigation</h1>
        <p style={{fontFamily:'Poppins'}} className='fs-6'>Engage with your visitors at the right time and the right place. Develop strategies targeted to specific clusters of customers</p>
        </div>
        <div className="col-md-6">
          <img src={MunichOffice} alt="" height={'500px'} width = '80%' />
          </div>
      </div>
    </div>
  <main>
  <div className="container-fluid  p-5" style = {{backgroundColor: '#f2f2f2'}}>
      <div className="row align-items-center justify-content-around ">
      <div className="col-md-6">
        
        <p className='lh-lg fs-4'>Ariadne Navigation performs the indoor navigation and indoor positioning for your business, making it simple for users to locate their destination.<br/>

Ariadne Navigation also provides the user with information about his surroundings and reduces the time he invests in searching.
</p>
        </div>
      <div className="col-md-5">
        <img src={h2} alt="" className='img-fluid rounded shadow' />
        </div>
      </div>
        </div>
        
        <div className="container my-5" >
      <div className="row align-items-center justify-content-around">
      <div className="col-md-5">
      <h3>Indoor Positioning Services (IPS)</h3>
            <p>We offer Indoor GPS, which assists customers and users in determining the most efficient route to their destination. Customers can also customize their routes by adding stops for more efficient planning.
</p>
            <h3 className='mt-5'>Efficient Ad Placement</h3>
            <p>Targeted marketing campaigns connected to customers’ destination location are achievable using Ariadne Navigation.
We enable and lead you to hyperlocal marketing.</p>
        </div>
      <div className="col-md-5" >
        <img src={navigate} alt="" className='img-fluid rounded' />
        </div>
      </div>
        </div>
        
        <div className="container py-5">
      <div className="row align-items-center justify-content-around">
      <div className="col-md-5">
        <img src={phone3} alt="" className='img-fluid' />
        </div>
      <div className="col-md-6">
      <h2>Seamless Customer Experience</h2>
            <p>Ariadne Navigation allows you to provide seamless customer experience right from visitors’ entry in your premises. We give the opportunity to learn about your customers' navigation patterns, which you can utilize to optimise your business strategies.

</p>
            
        </div>
      
      </div>
        </div>
        <div className="container-fluid bg-black text-light text-center my-5 py-5">
          <h1 className='mb-5'>Why Ariadne?</h1>
          <div className="row justify-content-around">
            <div className="col-md-2">
              <p className='fs-4'>Browser-based Navigation</p>
            </div>
            <div className="col-md-2">
            <p className='fs-4'>Award Winning Accuracy</p>
            </div>
            <div className="col-md-2">
            <p className='fs-4'>No Infrastructure Needed</p>
            </div>
            <div className="col-md-2">
            <p className='fs-4'>Multi Storey Differentiation</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-5">
        <h1 className='display-4 fw-bold'>Complementary Solutions</h1>
        <h4>Complement your navigation tool with our solutions below, increase returns on your investments</h4>
      </div>
      <div className="container">
        <div className="row justify-content-around mt-5 py-5">
        <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Analytics.svg' alt ='' class = 'img-fluid' width="27%"/>
            
            <a href="" className = "text-decoration-none"><h2>Ariadne Analytics</h2></a>
            <p>

Ariadne’s indoor analytics encompasses a wide variety of tools that will help you improve in every aspect of your business. From people counting to heatmaps to loyalty rates, you can view your performance, develop new strategies and watch your returns increasing.</p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Map.svg' alt ='' class = 'img-fluid' width="27%"/>
            
            <a href="" className = "text-decoration-none"><h2>Ariadne Mapping</h2></a>
            <p>

            Transform your physical business into a digital landscape! Ariadne Maps creates your indoor maps that can be integrated with other platforms in digital environment, and enables you to position assets and products for the ease of finding and time efficiency. </p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Engagement.svg' alt ='' width='27%'/>
             
            <a href="#" className = "text-decoration-none"><h2>Ariadne Engagement</h2></a>
            <p>

Ariadne comes with an opt-in option for your customers. Even though the core technology does not require interaction from your visitors, with the opt-in option, you can push notifications to your customers, or just send short surveys to assess the quality of your service.</p>
          </div>
        </div>
        
        
      </div>
          <div class = 'text-center'>
            <h1>Discover Use Cases</h1>
          </div>

        <Usecase/>
        
        
  </main>
</div>;
}

export default Navigation;
