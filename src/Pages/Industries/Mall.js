import '../../App.css';
import React from 'react';
import './industriesALL.css';
import shopCenter from './resources/shopCenter.jpg'
// import { Link } from "react-router-dom";
import Usecase from '../../Components/Usecase'

function Mall() {
  return <div className ="i-all">
  <img src = {shopCenter} width="100%" height="500vh" alt = "mall"/>
  <main>
    <div className="container mt-4">
      <h1>Shopping

Centers</h1>
        <p >Ariadne Maps works with the leading mall management companies worldwide 

and enables them to take data-based, strategic decisions</p>
    </div>

  <div className="text-center mt-5">
        <h1 className='display-4 fw-bold'>Use Cases</h1>
      </div>
      <div className="container">
        <div className="row justify-content-around mt-5 py-5">
          <div className="col-lg-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Analytics.svg' alt ='' class = 'img-fluid' width='27%'/>
            <h2>Get Ready</h2>
            <p>Be prepared for your prime times! You can know your peak times in advance, get well prepared and make the most out of your busiest periods!</p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/bell.png' alt ='' class = 'img-fluid'/>
            <h2>No Surprises</h2>
            <p>Don’t encounter with surprises! You can advise your tenants when to expect mass of customers, weekly or daily, and maintain the customer satisfaction. </p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/space.png' alt ='' width='27%'/>
            <h2>Data-Driven Plan</h2>
            <p>Layout of shopping centers, marketing campaigns and tenant mix can be optimally designed with the detailed and precise data that we offer.</p>
          </div>
        </div>
        <div className="row justify-content-around mt-2 py-5">
          <div className="col-lg-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/handshake.png' alt ='' class = 'img-fluid'/>
            <h2>Tenant Relations</h2>
            <p>Do business with accurate and detailed data! Traffic data over time can be provided to tenants, allowing you to justify your investments in the mall and charge your tenants accordingly. </p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/contract.png' alt ='' class = 'img-fluid'/>
            <h2>Leasing Space</h2>
            <p>

Potential retail tenants can be attracted by delivering reliable traffic data in the mall, instead of intuition or rough estimates. Longer lease terms would also be desired with this data.</p>
          </div>

          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/Updates.png' alt ='' class = 'img-fluid'/>
            <h2>Mall Upgrades</h2>
            <p>

Take right actions at the right time and space! Arrangements for a new store, extension can be made in line with data gathered. Keep in mind that tenants want to see your mall improvements are getting results.</p>
          </div>
        </div>
        <div className="row justify-content-around mt-2 pb-5">
          <div className="col-lg-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/cart-in-phone.png' alt ='' width='27%'/>
            <h2>In-Premises Marketing</h2>
            <p>

Traffic trends can help businesses to offer targeted marketing and adjust it to customers in the store. It is also advantageous to identify your return on marketing.</p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/chess.png' alt ='' class = 'img-fluid'/>
            <h2>Accurate Strategies</h2>
            <p>

If a mall has few visitors, then the marketing should be focused on obtaining more traffic. If the traffic is high, but conversion is low, product lines, pricing or staffing should be enhanced. </p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/more.png' alt ='' class = 'img-fluid'/>
            <h2>More</h2>
            <p>

            
Hour by hour traffic data and trends, comparison of visitor averages by time, unique visits compared to repeating, bounce rate, high demand products, strategy performance…</p>
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

export default Mall;
