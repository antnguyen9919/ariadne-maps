import '../../App.css';
import React from 'react';
import './industriesALL.css';
import cities from '../../Resources/Photos/Pages/cities.jpg';
// import { Link } from "react-router-dom";
import Usecase from '../../Components/Usecase'
function Cities() {
  return <div className ="i-all">
  <img src = {cities} width="100%" height="800vh" alt = "cities"/>
  <main>
  <div className="container mt-4">
      <h1 >Cities</h1>
        <p>Cities and government entities are flooded with people throughout the whole year.

Ariadne Maps helps them better serve their residents and improve their experience</p>
    </div>

  <div className="text-center mt-5">
        <h1>Use Cases</h1>
      </div>
      <div className="container">
        <div className="row justify-content-around mt-5 py-5">
          <div className="col-lg-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Retail.svg' alt ='' class = 'img-fluid' width='27%'/>
            <h2>Shopping Streets</h2>
            <p>

How many people visit a shopping street, how much time they spend, which stores they visit and much more data is provided by Ariadne Maps solutions </p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/public.png' alt ='' class = 'img-fluid'/>
            <h2>Service Buildings</h2>
            <p>

Let your visitors have a better experience in your entities with faster processing and minimum queue time, e.g., in foreigners office, by using our indoor analytics </p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/ad.png' alt ='' width='27%'/>
            <h2>Public Advertising</h2>
            <p>

Measure the success of your outdoor and indoor marketing, quantify how much billboard advertising converts and improve your strategies accordingly </p>
          </div>
        </div>
        <div className="row justify-content-center mt-2 py-5">
          <div className="col-lg-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/personas.png' alt ='' class = 'img-fluid'/>
            <h2>Identify Personas</h2>
            <p>

Cluster people based on certain attributes, customize your service and marketing based on these personas</p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/contract.png' alt ='' class = 'img-fluid'/>
            <h2>Rent Prices</h2>
            <p>

With Ariadne’s footfall data, you can measure how much each building/property attracts, and adjust your rent/lease prices based on this traffic data</p>
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

export default Cities;
