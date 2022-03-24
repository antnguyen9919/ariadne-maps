import '../../App.css';
import React from 'react';
import './industriesALL.css';
import retail from './resources/retail.jpeg';
import './Retail.css';
// import { Link } from "react-router-dom";
import Usecase from '../../Components/Usecase'
function Retail() {
  return <div className ="i-all">
  <img src = {retail} width="100%" height="500vh"  alt = "retail"/>
  <main>

  <div className="container mt-4">
      <h1 >Retail Stores</h1>
        <p >Ariadne Maps helps retailers understand their customers, generate their conversion funnel,

identify their unnecessary costs and increase their revenues</p>
    </div>

  <div className="text-center mt-5">
        <h1 >Use Cases</h1>
      </div>
      <div className="container">
        <div className="row justify-content-around mt-5 py-5">
          <div className="col-lg-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/employee-1.png' alt ='' class = 'img-fluid'/>
            <h2>Labour Allocation</h2>
            <p>

When visitors enter the store today, they are most ready to buy. Following the traffic, allocate the labour accurately and ensure the satisfaction of your customers.</p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/staff.png' alt ='' class = 'img-fluid'/>
            <h2>Conversion Rate</h2>
            <p>

Want to figure out how many people convert to be your customers? Measure the visitors passing by your store and compare them to those entering in.</p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/Product-search.png' alt ='' width='27%'/>
            <h2>Product Success</h2>
            <p>

With the provided precise data, measure how many visitors each of your products attract! Then compare it to your sales to find out the success of your products.</p>
          </div>
        </div>
        <div className="row justify-content-around mt-2 py-5">
          <div className="col-lg-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Retail.svg' alt ='' class = 'img-fluid' width='27%'/>
            <h2>Showcase Performance</h2>
            <p>

Find out how many people are stopping by your shopping window and how much time they spend there, what they do next. Get all the data to optimize your shopping window!</p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/cart-in-phone.png' alt ='' class = 'img-fluid'/>
            <h2>Optimize Spending</h2>
            <p>

Marketing budgets are finite, which makes you use it to the full potential. Our solution enables marketers to target their spending where it is needed the most.</p>
          </div>

          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/space.png' alt ='' class = 'img-fluid'/>
            <h2>Space Efficiency</h2>
            <p>

See which areas are visited the most and which areas are not visited at all! This way, you can analyze the density of each space and maximize the efficiency.</p>
          </div>
        </div>
        <div className="row justify-content-around mt-2 pb-5">
          <div className="col-lg-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/manager.png' alt ='' width='27%'/>
            <h2>Supervision of Associates</h2>
            <p>

Store associates can be tracked and allocated to where they are needed the most. They can be optimally supervised to see their promised effort.</p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/campaign-ratio.png' alt ='' class = 'img-fluid'/>
            <h2>Marketing Success</h2>
            <p>

Calculate the number of your visitors before and after the marketing campaign! See how much increase your marketing strategy leads for each product. </p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/ring.png' alt ='' class = 'img-fluid'/>
            <h2>Promotions and Discounts</h2>
            <p>

93% of consumers will use offers throughout the year, which means retailers need to have a strategy that tracks and adapts pricing planning to broader market forces.</p>
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

export default Retail;
