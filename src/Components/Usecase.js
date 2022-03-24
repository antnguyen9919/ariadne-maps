import React from 'react'
import { Link } from 'react-router-dom'
import './usecase.css'
import { useTranslation } from 'react-i18next';

const Usecase = ({title}) => {

  const { t, i18n } = useTranslation();
  return (
    <div id='usecase'>
        <div class='text-center'>
        <h1>{title}</h1>
      </div>
      <div className="container-xxl mt-5 py-5">

        <div class="row justify-content-around px-4" >
  <div class="col-lg-2 col-sm-8">
    <div class="card border-light">
      <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Mall.svg" class="card-img-top" alt="..."/>
      <div class="card-body">
      
      <Link to="/shopping-centres" className = "text-decoration-none"><h5>Shopping</h5></Link>
        <p  class="card-text mt-3 mt-3">{t('useCase.0')}</p>
       
      </div>
      
    </div>
  </div>

  <div class="col-lg-2">
    <div class="card border-light">
      <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Airport.svg" class="card-img-top" alt="..."/>
      <div class="card-body">
    
      <Link to="/airports" className = "text-decoration-none"><h5>{t('navFoot.industries.airports')}</h5></Link>
        <p class="card-text mt-3 mt-3">{t('useCase.1')}</p>
        
      </div>
      
    </div>
  </div>

  <div class="col-lg-2">
    <div class="card border-light">
      <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Train.svg" class="card-img-top" alt="..."/>
      <div class="card-body">
      
      <Link to="/transportation" className = "text-decoration-none"><h5>{t('navFoot.industries.transportation')}</h5></Link>
        <p class="card-text mt-3 mt-3">

        {t('useCase.2')}</p>
        
      </div>
      
    </div>
  </div>

  <div class="col-lg-2">
    <div class="card border-light">
      <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/City.svg" class="card-img-top" alt="..."/>
      <div class="card-body">
      
      <Link to="/cities" className = "text-decoration-none"><h5>{t('navFoot.industries.cities')}</h5></Link>
        <p class="card-text mt-3 mt-3">{t('useCase.3')}</p>
        
      </div>
      
    </div>
  </div>
  <div class="col-lg-2">
    <div class="card border-light">
      <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Hotel.svg" class="card-img-top" alt="..."/>
      <div class="card-body">
      
      <Link to="/hospitality" className = "text-decoration-none"><h5>{t('navFoot.industries.hospitality')}</h5></Link>
        <p class="card-text  mt-3">{t('useCase.4')}</p>
        
      </div>
      
    </div>
  </div>
  
</div>
        </div>
    </div>
  )
}

export default Usecase