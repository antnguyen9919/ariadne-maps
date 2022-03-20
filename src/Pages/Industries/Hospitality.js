import '../../App.css';
import React from 'react';
import hospitality from '../../Resources/Photos/Pages/hospitality.jpg';
function Hospitality() {
  return <div>
  <img src = {hospitality} width="100%" height="800vh"  alt = "company"/>
  <main>
  <div className="container mt-4">
      <h1 class = 'display-3 fw-bold'>Hospitality</h1>
        <p class= 'fs-4'>Ariadne Maps helps retailers understand their customers, generate their conversion funnel,

identify their unnecessary costs and increase their revenues</p>
    </div>

  <div className="text-center mt-5">
        <h1 className='display-4 fw-bold'>Use Cases</h1>
      </div>
      <div className="container">
        <div className="row justify-content-around mt-5 py-5">
          <div className="col-md-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/Route.png' alt ='' class = 'img-fluid'/>
            <h2>Guest Navigation</h2>
            <p>

Ariadne Navigation enables you to offer a better experience to your guests via navigating them to their destinations with great convenience, shorter routes</p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/ring.png' alt ='' class = 'img-fluid'/>
            <h2>Push notifications</h2>
            <p>

Notifications based on location and history are to be pushed, e.g., happy to host you again, enjoy your 20% discount, or, breakfast is to start in 20 minutes, here are the directions…</p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/review.png' alt ='' width='27%'/>
            <h2>Review and Feedback</h2>
            <p>

To improve your service, short online surveys can be pushed to your guests and their feedback can be received, e.g., how would you rate your experience with the pool today…</p>
          </div>
        </div>
        <div className="row justify-content-around mt-2 py-5">
          <div className="col-md-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/chess.png' alt ='' class = 'img-fluid'/>
            <h2>Strategy Optimization</h2>
            <p>

Identify which of your actions, services or promotions bring you the best return, dwell time and loyalty, and work on the most reasonable one</p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/Pool.png' alt ='' class = 'img-fluid'/>
            <h2>Guest Familiarity</h2>
            <p>

Encourage your guests to enjoy your hotel and increase spending via introducing and promoting your amenities, venues and services</p>
          </div>

          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/Funnel.png' alt ='' class = 'img-fluid'/>
            <h2>Conversion Funnel</h2>
            <p>

Let your concessionaires acquire their conversion funnel of customers, and base your lease agreements on Ariadne’s traffic data</p>
          </div>
        </div>
        
      </div>
      <div class="container-fluid p-5 mb-5 bg-black text-white text-center font-weight-bold align-items-center">
           
            
            
            <div className="row align-items-center justify-content-center">
              <div className="col-8">
              <h1 class='mb-5'>Work Together?</h1>
              <button type="button" class="btn btn-success">Let's Talk</button>
              </div>
            
            </div>
            
            
          </div>
      <div class='text-center'>
        <h1>Discover More Industries</h1>
      </div>
      <div className="container mt-5 py-5">

        <div class="row justify-content-around" >
  <div class="col-md-2">
    <div class="card border-light">
      <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Mall.svg" class="card-img-top" alt="..."/>
      <div class="card-body">
      <a href="#" class="btn btn-primary">Shopping</a>
        <p class="card-text mt-3 mt-3">Structure the layout and decide on the tenant mix that brings you the most returns</p>
       
      </div>
      
    </div>
  </div>

  <div class="col-md-2">
    <div class="card border-light">
      <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Airport.svg" class="card-img-top" alt="..."/>
      <div class="card-body">
      <a href="#" class="btn btn-primary">Airports</a>
        <p class="card-text mt-3 mt-3">Optimize the revenues of commercial duty free area and minimize the queue times</p>
        
      </div>
      
    </div>
  </div>

  <div class="col-md-2">
    <div class="card border-light">
      <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Train.svg" class="card-img-top" alt="..."/>
      <div class="card-body">
      <a href="#" class="btn btn-primary">Transportation</a>
        <p class="card-text mt-3 mt-3">

Engage with passengers, optimize train scheduling and make better use of your spaces</p>
        
      </div>
      
    </div>
  </div>

  <div class="col-md-2">
    <div class="card border-light">
      <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/City.svg" class="card-img-top" alt="..."/>
      <div class="card-body">
      <a href="#" class="btn btn-primary">Cities</a>
        <p class="card-text mt-3 mt-3">Measure the performance of your shopping streets, increase the visitor satisfaction at government buildings</p>
        
      </div>
      
    </div>
  </div>
  <div class="col-md-2">
    <div class="card border-light">
      <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Hotel.svg" class="card-img-top" alt="..."/>
      <div class="card-body">
      <a href="#" class="btn btn-primary">Hospitality</a>
        <p class="card-text  mt-3">Provide the best service to your guests, increase their spending and deliver unique experiences</p>
        
      </div>
      
    </div>
  </div>
  
</div>
        </div>
    </main>
</div>;
}

export default Hospitality;
