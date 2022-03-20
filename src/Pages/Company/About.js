import '../../App.css';
import './about.css';
import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function About() {
  return <div>
  <img src = "https://www.wework.com/ideas/wp-content/uploads/sites/4/2017/06/Web_150DPI-20190927_10th_Floor_Conference_Room_2_v1-1120x630.jpg" width="100%" alt = "company"/>
  <main>
    
  <div className="container mt-5 p-4 bg-light">
      <h1 class="display-3  fw-bold">Ariadne Maps</h1>
      <p class = 'fs-4 fw-light lh-lg pt-4'><b>Ariadne Maps</b> is a high tech company that provides detailed indoor analytics and customer analytics with its cutting edge artificial intelligence approach. With this approach, it enables indoor and outdoor localization in many industries such as transportation, malls as well as retailers and airports. We make use of advanced artificial intelligence algorithms for precise and anonymous tracking of passengers and customers, to help companies optimize their infrastructure for e.g., minimizing congestion, having a better targeted advertising and marketing while maximizing satisfaction and experience of consumers. <br/> <br/>

Ariadne Maps is based in Munich, Germany and has been operating for years. With our rapid growth, we vision to enable physical businesses to leverage the data they have been exposed through the whole time. In this vision, our strong team, advisors, investors and partners give us the confidence to advance, expand and succeed.</p>
  </div>
  


  <div className="container justify-content-between col-xxl-8 px-4 py-5 mb-5">
    
    <h2>European Union</h2>
    
    <div className="row py-5">
      <div className="col-md-3 ">
        <img src = 'https://ariadnemaps.com/wp-content/uploads/2021/03/European-Union.png' width = '100%'/>
      </div>
      <div className="col-md-8 ">
        <h5>Ariadne Maps is a European company, proudly supported by European Union.</h5>
      </div>
    </div>


    <h2>EIT Digital</h2>
    
    <div className="row">
      <div className="col-md-3 col-sm-10">
        <img src = 'https://ariadnemaps.com/wp-content/uploads/2020/05/logo-eitdigital.jpg' width = '100%'/>
      </div>
      <div className="col-md-8">
        <h5>Ariadne Maps is a European company, proudly supported by European Union.</h5>
      </div>
    </div>
    
  </div>



    <div className="text-center"> <h1 class="display-3">Ariadne Team</h1>  </div>
    
  <div className="container mt-5 text-center justify-content-center" id='employeeList'>
    
    <div className="row justify-content-md-around justify-content-sm-center">
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2 "  >
        <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Georgios.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Dipl.-Ing. Georgios Pipelidis</h5>
          <p className="card-text">CEO and Co-Founder</p>

        </div>
      </div>
      </div>
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Nikos.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Dipl.-Ing. Nikos Tsiamitros</h5>
          <p className="card-text">CTO and Co-Founder</p>

        </div>
      </div>
      </div>
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2"  >
        <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Nam.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Nam Le Duc</h5>
          <p className="card-text">Full Stack Developer</p>

        </div>
      </div>
      </div>
      
    </div>
    <div className="row justify-content-md-around justify-content-sm-center">
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Mustafa.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Mustafa Parlak</h5>
          <p className="card-text">Business Development Manager</p>

        </div>
      </div>
      </div>
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Hasim.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Hasim Koc</h5>
          <p className="card-text">Business Development Manager</p>

        </div>
      </div>
      </div>
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Victoria.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Victoria Tsiamitrou</h5>
          <p className="card-text">Country Manager (Greece – R&D)</p>

        </div>
      </div>
      </div>
      
    </div>
    <div className="row justify-content-md-around justify-content-sm-center">
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Pati.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Pati Flannery</h5>
          <p className="card-text">Strategic Partnerships, N. America</p>

        </div>
      </div>
      </div>
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Francesco.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Francesco Vasta</h5>
          <p className="card-text">Key Account Manager</p>

        </div>
      </div>
      </div>
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Ira.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Ira Dobrovolska</h5>
          <p className="card-text">Data Scientist</p>

        </div>
      </div>
      </div>
      
    </div>
    <div className="row justify-content-md-around justify-content-sm-center">
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2021/08/Najeeb.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Najeeb Khan</h5>
          <p className="card-text">Computer Vision Engineer</p>

        </div>
      </div>
      </div>
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Wasiq.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Wasiq Rumaney</h5>
          <p className="card-text">Senior Data Engineer</p>

        </div>
      </div>
      </div>
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Kostas.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Kostas Theocharoulis</h5>
          <p className="card-text">Data Engineer</p>

        </div>
      </div>
      </div>
      
    </div>
    <div className="row justify-content-md-around justify-content-sm-center">
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2021/08/KostasZ.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Kostas Ziampakas</h5>
          <p className="card-text">Onboarder</p>

        </div>
      </div>
      </div>
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2021/05/Xialoin.jpg" alt="" />
        <div className="card-body">
          <h5 className="card-title">Xiaolin Hou</h5>
          <p className="card-text">Account Manager</p>

        </div>
      </div>
      </div>
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2021/08/KostasK.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Kostas Kitsikidis</h5>
          <p className="card-text">Chief Account Manager</p>

        </div>
      </div>
      </div>
      
    </div>
    <div className="row justify-content-md-around justify-content-sm-center">
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2021/08/Shahab.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Md Shahabuddin</h5>
          <p className="card-text">Wireless Network Engineer</p>

        </div>
      </div>
      </div>
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2022/01/Precious.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Precious Adipere</h5>
          <p className="card-text">Procurement Specialist</p>

        </div>
      </div>
      </div>
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2022/01/Mahade.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Mahade Sarkar</h5>
          <p className="card-text">Embedded Systems Engineer</p>

        </div>
      </div>
      </div>
      
    </div>
    <div className="row justify-content-md-around justify-content-sm-center">
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2022/01/Karolina.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Karolina Piekarz</h5>
          <p className="card-text">Administrative Assistant</p>

        </div>
      </div>
      </div>
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2022/01/Elli.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Elli Dimopoulou</h5>
          <p className="card-text">Data Scientist</p>

        </div>
      </div>
      </div>
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2022/01/Roman.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Roman Kees</h5>
          <p className="card-text">Data Engineer</p>

        </div>
      </div>
      </div>
      
    </div>
    <div className="row justify-content-md-around justify-content-sm-center">
      <div className="col-md-3 col-sm-10">
      <div class="card border-light m-2" >
        <img src="https://ariadnemaps.com/wp-content/uploads/2022/01/Athanasios2.png" alt="" />
        <div className="card-body">
          <h5 className="card-title">Athanasios Brianis</h5>
          <p className="card-text">UX Data Engineer</p>

        </div>
      </div>
      </div>
      </div>
     
    
  </div>
  

  
  <p class="text-center my-4"><h1>Our Offices</h1></p>
  <div className="container my-5">
          
      <div className="row justify-content-md-around">
        <div className="col-md-4">
          <h4>Munich, Germany</h4>
          <p>Our headquarter is based in Munich, Germany.</p>
          <ul>
            <li><span><LocalPhoneIcon/></span>+49 174 4079675</li>
            <li><span><EmailIcon/></span>contact@ariadnemaps.com</li>
            <li><span><LocationOnIcon/></span>Brecherspitzstraße 8, 81541 Munich, Germany</li>
          </ul>
        </div>
        <div className="col-md-4 ">
          <h4>Veria, Greece</h4>
          <p>Our Greek office accommodates the R&D department.</p>
          <ul>
            <li><span><LocalPhoneIcon/></span>+30 697 0074000</li>
            <li><span><EmailIcon/></span>contact@ariadnemaps.com</li>
            <li><span><LocationOnIcon/></span>Plateia Raktivan 12, Veria 591 32, Greece</li>
          </ul>
        </div>
        <div className="col-md-4 ">
          <h4>Berkeley, CA, USA</h4>
          <p>Our USA office serves our clients in North America.</p>
          <ul>
            <li><span><LocalPhoneIcon/></span>+1 312 6100517</li>
            <li><span><EmailIcon/></span>contact@ariadnemaps.com</li>
            <li><span><LocationOnIcon/></span>Berkeley 2150 Shattuck Avenue, Penthouse Berkeley, CA 94704</li>
          </ul>
        </div>
      </div>
  </div>
  
  </main>
</div>;
}

export default About;
