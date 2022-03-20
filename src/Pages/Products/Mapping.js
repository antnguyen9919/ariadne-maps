import '../../App.css';
import React from 'react';
import h3 from '../../Resources/Photos/h3.gif';
import MunichOffice from '../../Resources/Photos/Pages/Navigation/MunichOffice.png';
import Usecase from '../../Components/Usecase'

function Mapping() {
  return <div>
 <div className="container-fluid bg-dark text-white px-5">

<div className="row align-items-center">
  <div className="col-md-6 align-self-center">
    <h1 style={{fontFamily:'Poppins'}} className='display-4 fw-bold'>Ariadne <br/>

Mapping</h1>
    <p style={{fontFamily:'Poppins'}} className='fs-6'>Digitalize, customize and update your maps at any point

Engage your customers not only in the physical space but also in the digital environment</p>
    </div>
    <div className="col-md-6">
      <img src={MunichOffice} alt="" height={'500px'} width = '80%' />
      </div>
  </div>
</div>
  <main>
  <div className="container-fluid  p-5" style = {{backgroundColor: '#f2f2f2'}}>
      <div className="row align-items-center justify-content-between ">
      <div className="col-md-6">
        
        <p className='lh-lg fs-4'>Transform your physical business into a digital landscape.
        <br/>
By enabling you to map and localize your products, Ariadne increases your efficiency.
</p>
        </div>
      <div className="col-md-5">
        <img src={h3} alt="" className='img-fluid rounded shadow'/>
        </div>
      </div>

        

        



        </div>
        <div class=" container-fluid p-5 mb-5 bg-black text-white text-center font-weight-bold align-items-center">
           
            <div className="row align-items-center justify-content-center">
              <div className="col-8">
              
            <p className='lh-lg fs-5'>Ariadne Mapping is the first component of the Ariadne Platform. With this feature, Ariadne Maps creates the indoor maps of your areas. We transform your static map, i.e., floor plan, into a digital map and and position your assets, areas and offices. This feature can be applied to any industry, from hospitals to government facilities and ease your challenges of wayfinding, asset tracking, navigation and many more. It is also possible to update the maps with changes in your layout design, such as a new food court in your premises or a concert in your main hall. Your maps can be displayed across all platforms including mobile, desktop and kiosks.</p>
              </div>
            
            </div>
            
          </div>
          <div className="text-center mt-5">
        <h1 className='display-4 fw-bold'>Features</h1>
      </div>
      <div className="container">
        <div className="row justify-content-around mt-5 py-5">
          <div className="col-md-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Map.svg' alt ='' class = 'img-fluid' width='27%'/>
            <h2>Digital Conversion</h2>
            <p>

Create the digital version of your static map and have a holistic overview of your spaces in real time. </p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Navigation.svg' alt ='' class = 'img-fluid' width='27%'/>
            <h2>Asset Positioning</h2>
            <p>

Place your assets and properties in the map and don’t waste your time with wayfinding and navigation</p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/Branding.png' alt ='' />
            <h2>Branding</h2>
            <p>

Customize your digital map in line with your brand and colors, show off your values to your customers</p>
          </div>
        </div>
        <div className="row justify-content-around mt-2 py-5">
          <div className="col-md-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/Settings.png' alt ='' class = 'img-fluid'/>
            <h2>Integration</h2>
            <p>

Integrate your digital map with your existing infrastructure and tools like CRM to get the most benefits</p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/City.svg' alt ='' class = 'img-fluid' width='27%'/>
            <h2>Detailed Overview</h2>
            <p>

Insert details about your assets and areas, help your visitors zoom and find what they need with ease</p>
          </div>

          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/Updates.png' alt ='' class = 'img-fluid'/>
            <h2>Customization</h2>
            <p>

Customize, edit and update your map with changes in your spaces, add or remove areas with modifications</p>
          </div>
        </div>
        
      </div>
      <div className="text-center mt-5">
        <h1 className='display-4 fw-bold'>Complementary Solutions</h1>
        <h4>Complement your digital maps with our solutions below, increase returns on your investments</h4>
      </div>
      <div className="container">
        <div className="row justify-content-around mt-5 py-5">
          <div className="col-md-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Navigation.svg' alt ='' class = 'img-fluid' width="27%"/>
            
            <a href="" className = "text-decoration-none"><h2>Ariadne Navigation</h2></a>
            <p>

Navigate your visitors and guests for an enhanced experience; show ads and promotions in your map to engage and help your customers find the right products with convenience. Ariadne Maps helps lets you use navigation data to optimize your strategies. </p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Analytics.svg' alt ='' class = 'img-fluid' width="27%"/>
            
            <a href="" className = "text-decoration-none"><h2>Ariadne Analytics</h2></a>
            <p>

Ariadne’s indoor analytics encompasses a wide variety of tools that will help you improve in every aspect of your business. From people counting to heatmaps to loyalty rates, you can view your performance, develop new strategies and watch your returns increasing.</p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Engagement.svg' alt ='' width='27%'/>
             
            <a href="#" className = "text-decoration-none"><h2>Ariadne Engagement</h2></a>
            <p>

Ariadne comes with an opt-in option for your customers. Even though the core technology does not require interaction from your visitors, with the opt-in option, you can push notifications to your customers, or just send short surveys to assess the quality of your service.</p>
          </div>
        </div>
        
        
      </div>

      <div class='text-center'>
        <h1>Discover Our Use Cases</h1>
      </div>
      <Usecase/>
  </main>
</div>;
}

export default Mapping;
