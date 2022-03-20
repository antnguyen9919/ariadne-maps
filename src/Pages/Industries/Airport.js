import '../../App.css';
import React from 'react';
import './Airport.css';
import airport from './resources/airport.jpg'
function Airport() {
  return <div className ="all">
    <img src = {airport} width="100%" height="500vh"  alt = "transportation"/>

    <main>
    <div className="container mt-4">
    <h1 style={{fontFamily:'Poppins'}} className='display-4 fw-bold'>AIRPORTS</h1>
    <p style={{fontFamily:'Poppins'}} className='fs-5'>Ariadne Maps helps airports understand and serve their passengers better,

provide useful services, and do more targeted marketing campaigns</p>
    </div>
    <div className="text-center mt-5">
        <h1 className='display-4 fw-bold'>Use Cases</h1>
      </div>


      <div className="container">
        <div className="row justify-content-around mt-5 py-5">
          <div className="col-md-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/Route.png' alt ='' class = 'img-fluid'/>
            <h2>Passenger Insights</h2>
            <p>Measure the time it takes your passengers to reach the gate from the moment they enter the airport, and the pattern they follow. </p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/queue.png' alt ='' class = 'img-fluid'/>
            <h2>Minimize Queue Time</h2>
            <p>Measure the time it takes your passengers to reach the gate from the moment they enter the airport, and the pattern they follow. </p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Mall.svg' alt ='' width='27%'/>
            <h2>Shopping Area</h2>
            <p>Measure the time it takes your passengers to reach the gate from the moment they enter the airport, and the pattern they follow. </p>
          </div>
        </div>
        <div className="row justify-content-around mt-2 py-5">
          <div className="col-md-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/routes-and-x.png' alt ='' class = 'img-fluid'/>
            <h2>Shorter Paths</h2>
            <p>With the data and insights we offer, you can improve the processes to reduce lines at airports, knowing that for those customers that aren’t planning ahead, they’re going to choose your provided line since it’s the shortest. </p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/manager.png' alt ='' class = 'img-fluid'/>
            <h2>Check-in and Security</h2>
            <p>You can see the number of people waiting at check-in and security areas, for how long they have been waiting and the average waiting time. Having this data, you can allocate the staff optimally and ensure the customer satisfaction.</p>
          </div>

          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/areas.png' alt ='' class = 'img-fluid'/>
            <h2>Efficient Areas</h2>
            <p>See which areas are visited the most and which areas are not visited at all! This way, you can analyze the density of each space and maximize the efficiency.</p>
          </div>
        </div>
        <div className="row justify-content-around mt-2 pb-5">
          <div className="col-md-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/Analytics.svg' alt ='' width='27%'/>
            <h2>Data-Driven Growth</h2>
            <p>

Growth of your airport is all about being data-driven, rather than relying on anticipation or gut feeling. The more insight you capture, the more you correlate.</p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/ratio.png' alt ='' class = 'img-fluid'/>
            <h2>Inexpensive Testing</h2>
            <p>

You develop hypothesis to figure out customer behavior, either by experiments or conducting use surveys, which incur you high costs. Using our inexpensive solution, you can test it with reliable data. </p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/more.png' alt ='' class = 'img-fluid'/>
            <h2>More</h2>
            <p>

Employee supervision, machine/asset tracking, visitor averages comparison over time, unique versus repeating passengers, country of origin of your visitors, real time traffic data and trends…</p>
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

export default Airport;
