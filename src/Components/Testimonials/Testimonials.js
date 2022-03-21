import React from 'react'
import './testimonials.css'
import atlantis from '../ResComp/atlantis.png'
import db from '../ResComp/db.png'
import glasgow from '../ResComp/glasgow.png'
import grabert from '../ResComp/grabert.png'



const Testimonials = () => {
  return (
    <div className="container mb-3 testimonials text-center"  >
      
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  
    
  <div class="carousel-inner">
    <div class="carousel-item active" >
    <img src={grabert} class = 'my-2' style={{height:'18vh' ,
    width:'18vh' }} alt="..."/>
          <div className="container">
          <div className="row justify-content-center align-items-center">
       <div className="col-8">
        
        <p style ={{fontSize:'1em'}} class = 'lead text-center'> <b>"</b> When they said "We are the Google Analytics of the physical world", they were not kidding! Thanks to Ariadne Maps, I have now reliable data and numbers about the visitors on my shopping centre. We can now use this information to make better decisions and optimize the customer experience<b>"</b> 
       
       </p>
       <p><b>Thomas Grabert,</b> Ö-Center Mall, Managing Director</p></div>
       </div>
          </div>
      </div>
    <div class="carousel-item" >
    <img src={atlantis} style={{height:'12vh' ,
    width:'19vw' }} class = 'my-5'  alt="..."/>
        <div className="container align-items-center">
        <div className="row justify-content-center align-items-center">
      <div className="col-8">
      
      <p  class = 'lead text-center'> <b>"</b>Your devices are like beacons on steroids<b>"</b> 
     
     </p>
     <p><b>Anthony Lynsdale,</b> Atlantis The Palm, VP Information Technology</p>
     </div>
     </div>


        
        </div>
   
    
    </div>
    

    
    <div class="carousel-item" >
    <img src={db} style={{height:'18vh' ,
    width:'15vw' }} class = 'my-5'  alt="..."/>
        <div className="container align-items-center">
        <div className="row justify-content-center align-items-center">
      <div className="col-8">
      
      <p  class = 'lead text-center'> <b>"</b>You presented to us what we were expecting to see in at least 7 years<b>"</b>
     
     </p>
     <p><b>Janis Diekmann,</b> Deutsche Bahn, Innovation Manager</p>
     </div>
     </div>


        
        </div>
   
    
    </div>



    
    <div class="carousel-item" >
    <img src={glasgow} style={{height:'20vh' ,
    width:'20vh' }} class = 'my-5'  alt="..."/>
        <div className="container align-items-center">
        <div className="row justify-content-center align-items-center">
      <div className="col-8">
      
      <p  class = 'lead text-center'> <b>"</b>I cannot think of anyone who does not need your devices  <b>" </b>
     
     </p>
     <p><b>Gordon Bain,</b> Glasgow Airport, Head of Project Delivery</p>
     </div>
     </div>


        
        </div>
   
    
    </div>


  </div>

  

    
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  
</div>




 

</div>

  )
}

export default Testimonials