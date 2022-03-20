import '../../App.css';
import React from 'react';
import h1 from '../../Resources/Photos/h1.gif';
import Phone from '../../Resources/Photos/Pages/Engagement/Phone.png'
import somescreen from '../../Resources/Photos/Pages/Engagement/somescreen.png'
import phone2 from '../../Resources/Photos/Pages/Engagement/phone2.jpg'
import phonewp from '../../Resources/Photos/Pages/Engagement/phonewp.png'
import scan from '../../Resources/Photos/Pages/Engagement/scan.png'
import Usecase from '../../Components/Usecase'

function Engagement() {
  return <div>
  
          <div className="container-fluid bg-dark text-white">
    <div className="row justify-content-around">
      <div className="col-md-5 align-self-center">
        <h1 style={{fontFamily:'Poppins'}} className='display-4 fw-bold'>Ariadne
Engagement</h1>
        <p style={{fontFamily:'Poppins'}} className='fs-5'>Engage with your visitors at the right time and the right place. Develop strategies targeted to specific clusters of customers</p>
        </div>
        <div className="col-md-5 align-self-end">
          <img src={phonewp} alt="" class = 'img-fluid' />
          </div>
      </div>
    </div>


  <main>
  
  <div className="container-fluid  p-5" style = {{backgroundColor: '#f2f2f2'}}>
      <div className="row align-items-center justify-content-between ">
      <div className="col-md-6">
        
        <p className='lh-lg fs-4'>The relationship between the business and its customers is elevated through engagement.<br/>

Ariadne Engagement allows you to give personalized offers and valuable product information to your customers in real time when they need it the most.
</p>
        </div>
      <div className="col-md-5">
        <img src={h1} alt="" className='img-fluid rounded shadow'/>
        </div>
      </div>

        

        



        </div>



        
        <div className="container">
        <div className="row align-items-center justify-content-between m-5 py-5">
          <div className="col-md-6">
            <img src={Phone} alt="" className='img-fluid'/>
            </div>

           
          <div className="col-md-5">
            <h3>Unlock Hyperlocal Marketing</h3>
            <p>We offer businesses the ability to send visitors dynamic and customised promotions based on their location and previous interests.</p>
            <h3>Enable Real-Time Recommendations</h3>
            <p>Do you have a sweet spot in your business that you'd like to introduce to your customers? We assist you in sending real-time customised recommendations to customers.</p>
            <h3>Reviews Make The Deal</h3>
            <p>New Customers make their purchase decision based on reviews and ratings. We enable and encourage customers to provide feedbacks and surveys.</p>
            </div>
            
          </div>
        </div>



        
        
        <div class=" container-fluid p-5 mb-5 bg-black text-white text-center font-weight-bold align-items-center">
           
            <div className="row align-items-center justify-content-center">
              <div className="col-8">
              <h1 class='mb-3'>Here is an example</h1>
            <p className='lh-lg fs-5'>A customer walks into the store and spends the most time in the shirts section. In the end, she walks away without buying an item. About the exit, she receives a text saying “Get a 20% discount on shirts with the code DISC20, today only!” and walks back in to make a discounted purchase, which benefits both the customer and the business.</p>
              </div>
            
            </div>
          </div>

          <div className="container my-4">
            <div className="row align-items-center justify-content-between">
             
              <div className="col-md-5">
                <h3 className='mb-3'>All-in-One Platform</h3>
                <p className=' fs-5'>Ariadne connects the data from your store to your CRM system, allowing you to run targeted marketing campaigns. Ariadne also assists for a complete perspective of consumer behavior that includes both online and on-premises activity.</p>

                <h3 className='mb-3'>Design Efficient Campaigns </h3>
                <p className=' fs-5'>Measure the success of your campaigns, e.g., a temporary theme park, and compare results</p>
                </div>
                <div className="col-md-6">

                  <img src={somescreen} className='img-fluid' alt="" /> 
                  </div>
              </div>
            </div>
            <div class="container-fluid p-5 mb-5 bg-black text-white text-center font-weight-bold align-items-center">
           
           
            <div className="row align-items-center justify-content-center">
              <div className="col-8">
              <h1 class='mb-3'>Privacy First!</h1>
            <p className='lh-lg fs-5'>Our experience shows that most customers are happy to opt-in and share information to benefit from the promotions and the additional services. At Ariadne Maps, we put the privacy of customers first and establish a reliable relationship between the customers and the businesses.</p>
              </div>
            
            </div>
            
          </div>

          
          <div className="container text-center p-3">
              <h1 class='mb-5'>With a simple tap</h1>
              
              <div className="row mt-5 justify-content-between">
                <div className="col-md-3">
                  <img src={scan} alt="" className='img-fluid'/>
                  <h6 className='mt-5'>Let your customers simply tap their phones or scan a QR code</h6>
                  </div>
                  <div className="col-md-3">
                  <img src={somescreen} alt=""  className='img-fluid'/>
                  <h6 className='mt-5'>View them automatically added to your customized CRM tool</h6>
                  </div>
                  <div className="col-md-3">
                  <img src={phone2} alt=""  className='img-fluid'/>
                  <h6 className='mt-5'>Notify your customers of promotions etc. based on their location behaviour (visit frequency, nearby location, dwell time) with SMS, push notifications, email or even social media</h6>
                  </div>
                </div>
              </div>









              <div class="container-fluid p-5 mt-5 bg-black text-white text-center font-weight-bold align-items-center">
           
            
            
            <div className="row align-items-center justify-content-center">
              <div className="col-8">
              <h1 class='mb-5'>Work Together?</h1>
              <button type="button" class="btn btn-success">Let's Talk</button>
              </div>
            
            </div>
            
            
          </div>




          <div className="text-center mt-5">
        <h1 className='display-4 fw-bold'>Complementary Solutions</h1>
        <h4>Complement your engagement tools with our solutions below, increase returns on your investments</h4>
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
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Navigation.svg' alt ='' class = 'img-fluid' width="27%"/>
            
            <a href="" className = "text-decoration-none"><h2>Ariadne Navigation</h2></a>
            <p>

Navigate your visitors and guests for an enhanced experience; show ads and promotions in your map to engage and help your customers find the right products with convenience. Ariadne Maps helps lets you use navigation data to optimize your strategies. </p>
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

export default Engagement;
