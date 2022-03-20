import React from 'react';
import './footer.css';
// import  Button from './Button';
// import './NavBar.css';
import { Link } from 'react-router-dom';
// import '../Hero/hero.css'


function Footer() {
  return (
    
    <div className="container-fluid bg-black">
<div className='footer-container'>


    
      
 
<div class='footer-links'>
      
  <div className='footer-link-wrapper'>
    <div class='footer-link-items'>
      <h3>Technology</h3>
      <Link to='/ariadne-mapping'>Ariadne Mapping</Link>
      <Link to='/ariadne-navigation'>Ariadne Navigation</Link>
      <Link to='/ariadne-analytics'>Ariadne Analytics</Link>
      <Link to='/ariadne-engagement'>Ariadne Engagement</Link>
      {/* <Link to='/industries'>Industries</Link>
      <Link to='/data-lifecycle'>Data Lifecycle</Link> */}
    </div>
    <div class='footer-link-items'>
      <h3>Company</h3>
      <Link to='/about-us'>About Us</Link>
      <Link to='/why-ariadne'>Why Ariadne</Link>
      {/* <Link to='/resources'>Resources</Link> */}
      <Link to='/blog'>Blog</Link>
      <Link to='/careers'>Careers</Link>
    </div>
  </div>

  <div className='footer-link-wrapper'>
    
    <div class='footer-link-items'>
      <h3>Social Media</h3>
      {/* <Link to='/'>Instagram <i class='fab fa-instagram' /></Link> */}
      
      <a href='https://www.facebook.com/ariadnemaps/'>Facebook <i class='fab fa-facebook-f' /></a>
      <a href='https://www.youtube.com/channel/UCetG3dxFlJrFno0ChaJ5VXQ'>Youtube <i class='fab fa-youtube' /></a>
      <a href='https://twitter.com/ariadne_maps'>Twitter <i class='fab fa-twitter' /></a>
      <a href='https://www.linkedin.com/company/ariadne-maps'>LinkedIn <i class='fab fa-linkedin' /></a>
    
     
      
    </div>
    <div class='footer-link-items'>
      <div>
    
    
      <button id='hero-xxl-button' type="button" class="mb-2"
						><p class='my-1 mx-3 text-light fs-5 fw-bold    lh-md' style ={{fontFamily:'Poppins'}}>Let's Talk</p></button>

      </div>
      <div className="para">

      <p>Ariadne Maps GmbH

Brecherspitzstraße 8 <br/>

81541 München
</p>

<p>

+49 174 4079675

contact@ariadnemaps.com</p>

      </div>
      
            </div>


  </div>
</div>

<hr className = 'divider'/>

<section class='social-media'>
  <div class='social-media-wrap'>
   <div>
    <small class='website-rights'>© 2019 - 2022 Ariadne Maps GmbH. All rights reserved.</small>

   </div>
    
    <div class='social-icons'>
      <Link
        class='social-icon-link facebook'
        to='/privacy'
       
      >
        Privacy Policy
      </Link>
      <Link
        class='social-icon-link instagram'
        to='/'
        
      >
        Impressum
      </Link>
     
    </div>
  </div>
</section>
</div>
    </div>
  );
}

export default Footer;