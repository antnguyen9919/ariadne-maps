import '../../App.css';
import React from 'react';
import career from '../../Resources/Photos/Pages/career.jpg';
import './career.css'
function Career() {
  return <div>
    
  <img src = {career} width="100%" alt = "career"/>
  <main>
      <div className="container my-5">
          
          <div className='mb-4'>
          <h1 style={{fontFamily:'Poppins'}} className='display-4 fw-bold'>  Join Us</h1>
          <p style={{fontFamily:'Poppins'}} className='fs-5'>Do you want to extend your boundaries? Do you enjoy working in international teams? Ariadne Maps offers a dynamic environment for talented individuals who are excited to innovate and disrupt a huge industry!</p>
          </div>

          <div className='mb-4'>
            <h1 style={{fontFamily:'Poppins'}}>Open Positions</h1>
            <p style={{fontFamily:'Poppins'}}>Ariadne Maps is a rapidly growing company on its way to disrupt a huge industry. We have a vision to be the Google Analytics of physical world, and the new GPS of indoor spaces. On our journey, we need talented members just like you. Check out the positions below and apply now! We are looking forward to meet you!</p>
          </div>

          <div className='mb-4'>
            <h1 style={{fontFamily:'Poppins'}}>Technology</h1>
            <h2 style={{fontFamily:'Poppins'}}>Data Science</h2>
            <p style={{fontFamily:'Poppins'}}>Contribute end-to-end for data science projects, from data processing, to training, evaluating, to deploying and monitoring, understand business objectives and translate them into solutions that leverage machine learning…

</p>

          </div>

          <div>
            <h1 style={{fontFamily:'Poppins'}}>Business</h1>
            <h2 style={{fontFamily:'Poppins'}}>Social Media</h2>
            <p style={{fontFamily:'Poppins'}}>Strategize and enable our growth: Ideate, create and launch content related to building our brand and reach. Keep constant track of data and adapt the content in order to improve performance, make organic social a channel for growth…</p>
            <h2 style={{fontFamily:'Poppins'}}>Business Development Representative</h2>
            <p style={{fontFamily:'Poppins'}}>Generate and nurture leads through digital/mailing/phone, lead opportunities of change as they relate to campaign and lead generation gaps, partner with the Sales and Marketing team to enhance opportunities to deliver incremental revenue…</p>

          </div>

      </div>
  
  
    
  
  </main>
</div>;
}

export default Career;
