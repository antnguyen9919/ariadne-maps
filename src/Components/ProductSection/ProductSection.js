import React from 'react'
import './productsection.css'
import device2 from '../../Resources/Photos/device2.png'
import floor from '../../Resources/Photos/floor.png'
import screen from '../../Resources/Photos/screen.png'
import { useTranslation } from 'react-i18next'
const ProductSection = () => {
  const { t, i18n } = useTranslation();
  return (
    
    <div className = 'product-main '>
        
    
            
      <div className="container d-xxl-none">
      <h1 class='fw-bold text-center' style ={{fontFamily:'Poppins'}}>{t('home.products-sec.title')}</h1>
            <p class = 'mt-4 fs-3 px-5 mx-3 text-center lead'>{t('home.products-sec.subtitle')}</p>
      </div>

      <div className="container d-none d-xxl-block">
      <h1 class='fw-bold text-center display-5' style ={{fontFamily:'Poppins'}}>{t('home.products-sec.title')}</h1>
            <p class = 'mt-4 fs-3 px-5 mx-3 text-center lead'>{t('home.products-sec.subtitle')}</p>
      </div>
        
    <div className="container d-xxl-none my-5">
      <div className="row justify-content-around align-items-center p-5">
        <div className="col-md-3 col-sm-4 mx-3">
          <img src={floor} alt="" className="img-fluid" style={{alignItems:'center'}}/>
          <h4 class = 'pt-5'>{t('home.products-sec.name.0')}</h4>
          <p class='fs-4 lead'>{t('home.products-sec.desc.0')}</p>
        </div>
        <div className="col-md-3 mx-3">
          <img src={device2} alt="" className="img-fluid" />
          <h4 class = 'pt-5'>{t('home.products-sec.name.1')}</h4>
          <p class='fs-4 lead'>{t('home.products-sec.desc.1')}</p>
        </div>
        <div className="col-md-3 mx-3">
          <img src={screen} alt="" width={'114%'}/>
          <h4 class = 'pt-5'>{t('home.products-sec.name.2')}</h4>
          <p class='fs-4 lead'>{t('home.products-sec.desc.2')}</p>
        </div>
      </div>
    </div>

    <div className="container-fluid d-none d-xxl-block my-5 px-5 mx-5">
      <div className="row justify-content-center">
        <div className="col-md-3 col-sm-4 m-5 col-xxl-3">
          <img src={floor} alt=""  width={'70%'}/>
          <h4 class = 'pt-5'>Configuration</h4>
          <p class='fs-4 lead'>Let our team design a project based on your floor plan and industry.</p>
        </div>
        <div className="col-md-3 m-5">
          <img src={device2} alt="" width={'70%'} />
          <h4 class = 'pt-5'>Installation</h4>
          <p class='fs-4 lead'>Simply plug the devices in the predetermined sockets.</p>
        </div>
        <div className="col-md-3 m-5">
          <img src={screen} alt=""  width='80%' />
          <h4 class = 'pt-5'>The Dashboard</h4>
          <p class='fs-4 lead'>Voila! Now you can make the most out of your existing traffic.</p>
        </div>
      </div>
    </div>


    </div>
  )
}



export default ProductSection