import '../App.css';
import React from 'react';
import whyariadne from '../Resources/Photos/Pages/whyariadne.jpg';
import './Industries/industriesALL.css'
function WhyAriadne() {
  return <div class ='i-all'>
  <img src = {whyariadne} width="100%" height="800vh"  alt = "why-ariadne"/>
  <main>
  <div className="container mt-4">
      <h1 class = 'display-4'>Why

Ariadne Maps?</h1>
        <p class= 'fs-4'>Not only localization, but a lot more we have for you! Discover the advantages of using 

our devices and benefits for your business!</p>
    </div>

  
      <div className="container">
        <div className="row justify-content-around mt-5 py-5">
          <div className="col-md-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/wifi-no.png' alt ='' class = 'img-fluid' width='27%'/>
            <h1>No Network Connection</h1>
            <p>

For localization and data, we don’t need the customers and passengers to connect to any kind of network, such as WiFi or mobile data.</p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/app-no-1.png' alt ='' class = 'img-fluid' width='27%'/>
            <h1>No Application Installation</h1>
            <p>

Unlike other technologies relying on application installation, our solution offers convenience and works without any application.</p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/gdpr.png' alt ='' width='27%'/>
            <h1>GDPR Compliance</h1>
            <p>

Ariadne is the first framework that applies mathematically proven state-of-the-art anonymization methods in real time for stream data.</p>
          </div>
        </div>
        <div className="row justify-content-around mt-2 py-5">
          <div className="col-md-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/technology.png' alt ='' class = 'img-fluid'/>
            <h1>Patented Technology</h1>
            <p>

Ariadne Maps already secured its novel technology with multiple patents, publications and scientific papers.</p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/chart.png' alt ='' class = 'img-fluid'/>
            <h1>Vertical Differentiation</h1>
            <p>

We can differentiate between floors of your business area and give you exact details and data for each separate floor.</p>
          </div>

          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/precise.png' alt ='' class = 'img-fluid'/>
            <h1>Great Localization Accuracy</h1>
            <p>

Ariadne Maps has been benchmarked by IPIN 2018 and found to be more accurate than leading companies such as Google, IBM, and Samsung.</p>
          </div>
        </div>
        <div className="row justify-content-around mt-2 py-5">
          <div className="col-md-4">
            <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/plug.png' alt ='' class = 'img-fluid'/>
            <h1>Easy & Quick Installation</h1>
            <p>

A large project, including the installation and calibration, usually takes less than a day to complete and we directly generate analytics.</p>
          </div>
          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/people.png' alt ='' class = 'img-fluid'/>
            <h1>Expert Team</h1>
            <p>

Ariadne’ expert team consists of PhD and Master’s degree holders and has multiple patents issued and published more than 15 papers.</p>
          </div>

          <div className="col-md-4">
          <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/04/inexpensive.png' alt ='' class = 'img-fluid'/>
            <h1>Inexpensive Solution</h1>
            <p>

Low costs mean lower prices! Ariadne Maps missions to offer its technology and service for the most affordable prices in the industry.</p>
          </div>
        </div>
        
      </div>
      <div class="container-fluid p-5 mt-5 bg-black text-white text-center font-weight-bold align-items-center">
           
            
            
            <div className="row align-items-center justify-content-center">
              <div className="col-8">
              <h1 class='mb-5'>Find out how we can 

work together</h1>
              <button type="button" class="btn btn-success">Let's Talk</button>
              </div>
            
            </div>
            
            
          </div>
    </main>
</div>;
}

export default WhyAriadne;
