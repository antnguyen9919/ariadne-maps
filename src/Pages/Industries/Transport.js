import '../../App.css';
import React from 'react';
import './industriesALL.css';
import transportation from '../../Resources/Photos/Pages/transportation.jpeg';
// import { Link } from "react-router-dom";
import Usecase from '../../Components/Usecase'

function Transport() {
  return <div className ="i-all">
  <img src = {transportation} width="100%" height="800vh"  alt = "transportation"/>
  <main>
  <div className="container mt-4">
      <h1 >Transportation</h1>
        <p >Ariadne Maps helps leading transportation companies, including bus and railway 

operators, become more data-driven, understand their passengers and abandon costly strategies</p>
    </div>

  <div className="text-center mt-5">
        <h1 >Use Cases</h1>
      </div>
      <div className="container">
        
        <div className="row justify-content-around mt-2 py-5">
          <div className="col-lg-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/ticket.png' alt ='' class = 'img-fluid'/>
            <h2>Ticket Pricing</h2>
            <p>

Major transportation companies use surveys to determine their ticket prices, which is costly and inefficient. Ariadne Maps offers required data to improve your ticket prices.</p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/share.png' alt ='' class = 'img-fluid'/>
            <h2>Revenue Sharing</h2>
            <p>

Ariadne Maps helps track a traveler’s journey for transit agencies to better share the revenues between railway companies of different nations or subsidiaries of the same company</p>
          </div>

          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/train.png' alt ='' class = 'img-fluid' width='27%'/>
            <h2>Train Scheduling</h2>
            <p>

How often do trains come to the station? How crowded are they? Quantify how many people are waiting for train at each point time, optimize the train timing and length</p>
          </div>
        </div>
        <div className="row justify-content-around mt-2 pb-5">
          <div className="col-lg-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Mall.svg' alt ='' width='27%'/>
            <h2>Retail Hubs</h2>
            <p>

Network Rail footfall studies show that 25% of people coming to its stations are not travelers, but actually use them as hubs for shopping and dining, paving the way for more retail opportunities. To optimize the retail section, you can have a look at what we offer.</p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/chess.png' alt ='' class = 'img-fluid'/>
            <h2>Leverages</h2>
            <p>

Find strategies that gives you maximum output with the least expenses! By using the data we provide in conjunction with your understanding of the customer journey, you can evaluate where opportunities for leverage exist.. </p>
          </div>
          <div className="col-lg-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/more.png' alt ='' class = 'img-fluid'/>
            <h2>More</h2>
            <p>Passengers to be directed to emptier compartments of the train, unique versus returning passengers to be compared, Ariadne’s reliable and precise data to be employed instead of intuition, and many more</p>
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

export default Transport;
