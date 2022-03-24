// import '../../App.css';
import React from 'react';

import FormContact from './FormContact';

function Contact() {
  return <div>
    <div style ={{height:'10vh'}} className='container-fluid bg-dark text-light text-center align-content-center align-items-center'>
     
    {/* <img src = "https://www.wework.com/ideas/wp-content/uploads/sites/4/2017/06/Web_150DPI-20190927_10th_Floor_Conference_Room_2_v1-1120x630.jpg" style={{objectFit:'contain'}}  alt = "company"/> */}
    
    </div>

  
  <main>
    <div className="container my-5">
    {/* <h1>Company</h1> */}
  
  <FormContact/>
    </div>
  
  </main>
</div>;
}

export default Contact;
