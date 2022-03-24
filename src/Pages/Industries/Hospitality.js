import '../../App.css';
import './industriesALL.css';
import React from 'react';
import hospitality from '../../Resources/Photos/Pages/hospitality.jpg';
// import { Link } from "react-router-dom";
import Usecase from '../../Components/Usecase'
function Hospitality() {
  return <div className ="i-all">
  <img src = {hospitality} width="100%" height="800vh"  alt = "company"/>
  <main>
  <div className="container mt-4">
      <h1 >Hospitality</h1>
        <p>Ariadne Maps helps retailers understand their customers, generate their conversion funnel,

identify their unnecessary costs and increase their revenues</p>
    </div>

  <div className="text-center mt-5">
        <h1>Use Cases</h1>
      </div>
      <div className="container">
        <div className="row justify-content-around mt-5 py-5">
          <div className="col-lg-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/Route.png' alt ='' class = 'img-fluid'/>
            <h2>Guest Navigation</h2>
            <p>

Ariadne Navigation enables you to offer a better experience to your guests via navigating them to their destinations with great convenience, shorter routes</p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/ring.png' alt ='' class = 'img-fluid'/>
            <h2>Push notifications</h2>
            <p>

Notifications based on location and history are to be pushed, e.g., happy to host you again, enjoy your 20% discount, or, breakfast is to start in 20 minutes, here are the directions…</p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/review.png' alt ='' width='27%'/>
            <h2>Review and Feedback</h2>
            <p>

To improve your service, short online surveys can be pushed to your guests and their feedback can be received, e.g., how would you rate your experience with the pool today…</p>
          </div>
        </div>
        <div className="row justify-content-around mt-2 py-5">
          <div className="col-lg-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/chess.png' alt ='' class = 'img-fluid'/>
            <h2>Strategy Optimization</h2>
            <p>

Identify which of your actions, services or promotions bring you the best return, dwell time and loyalty, and work on the most reasonable one</p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/Pool.png' alt ='' class = 'img-fluid'/>
            <h2>Guest Familiarity</h2>
            <p>

Encourage your guests to enjoy your hotel and increase spending via introducing and promoting your amenities, venues and services</p>
          </div>

          <div className="col-lg-4">
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
          <Usecase title = 'Discover More Industries'/>
    </main>
</div>;
}

export default Hospitality;
