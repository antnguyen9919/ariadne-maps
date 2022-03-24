import React from 'react'

import atlantis from '../ResComp/atlantis.png'
import db from '../ResComp/db.png'
import glasgow from '../ResComp/glasgow.png'
import grabert from '../ResComp/grabert.png'
import './testi2.css'


function Testi2() {
  return (
    <div id ='testi2' className = 'mt-4 '>
    <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-inner" >
    <div class="carousel-item active">
      <img src={atlantis}  alt="atlantis" id='atlantis'/>
      <p><b>"</b>Your devices are like beacons on steroids<b>"</b> </p>
      <p><b>Anthony Lynsdale,</b> Atlantis The Palm, VP Information Technology</p>
    </div>
    <div class="carousel-item">
      <img src={db} class="testi-img" alt="..."/>
      <p> <b>"</b>You presented to us what we were expecting to see in at least 7 years<b>"</b>
     </p>
     <p><b>Janis Diekmann,</b> Deutsche Bahn, Innovation Manager</p>
    </div>
    <div class="carousel-item">
      <img src={grabert} class="testi-img " alt="..."/>
      <p><b>"</b> When they said "We are the Google Analytics of the physical world", they were not kidding! Thanks to Ariadne Maps, I have now reliable data and numbers about the visitors on my shopping centre. We can now use this information to make better decisions and optimize the customer experience<b>"</b> </p>
     <p> <b>Thomas Grabert,</b> Ö-Center Mall, Managing Director</p>
    </div>
    <div class="carousel-item">
      <img src= {glasgow} class="testi-img" alt="..."/>
      <p><b>"</b>I cannot think of anyone who does not need your devices  <b>" </b></p>
      <p><b>Gordon Bain,</b> Glasgow Airport, Head of Project Delivery</p>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Testi2