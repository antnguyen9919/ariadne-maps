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
        

        <div className="container d-none d-xxl-block text-center">
      <h1  style ={{fontFamily:'Poppins'}}>{t('home.products-sec.title')}</h1>
            <p class = 'mt-4  px-5 mx-3 text-center '>{t('home.products-sec.subtitle')}</p>
      </div>
      <div className="container d-xxl-none">
      <h1 class=' text-center' style ={{fontFamily:'Poppins'}}>{t('home.products-sec.title')}</h1>
            <p class = 'mt-4  px-5 mx-3 text-center'>{t('home.products-sec.subtitle')}</p>
      </div>

{/* end of texts  */}

{/* XXL  */}
<div className="container-fluid d-none d-xxl-block my-5 px-5">
      <div className="row justify-content-around">
        <div className="col-md-3 col-sm-4 m-5 col-xxl-3 p-3">
          <img src={floor} alt=""  width={'100%'}/>
          <h4 class = 'pt-5'>{t('home.products-sec.name.0')}</h4>
          <p >{t('home.products-sec.desc.0')}</p>
        </div>
        <div className="col-md-3 m-5 col-xxl-3 p-5">
          <img src={device2} alt="" width={'100%'} />
          <h4 class = 'pt-5'>{t('home.products-sec.name.1')}</h4>
          <p >{t('home.products-sec.desc.1')}</p>
        </div>
        <div className="col-md-3 m-5 col-xxl-3 p-5">
          <img src={screen} alt=""  width='110%' />
          <h4 class = 'pt-5'>{t('home.products-sec.name.1')}</h4>
          <p>{t('home.products-sec.desc.1')}</p>
        </div>
      </div>
    </div>


      <div className="container d-none d-sm-block d-xxl-none my-5">
      <div className="row justify-content-around align-items-center py-5 px-1">
        <div className="col-md-3 col-sm-4 mx-3">
          <img src={floor} alt="" className="img-fluid" style={{alignItems:'center'}}/>
          <h4 class = 'pt-5'>{t('home.products-sec.name.0')}</h4>
          <p >{t('home.products-sec.desc.0')}</p>
        </div>
        <div className="col-md-3 mx-3">
          <img src={device2} alt="" className="img-fluid" />
          <h4 class = 'pt-5'>{t('home.products-sec.name.1')}</h4>
          <p >{t('home.products-sec.desc.1')}</p>
        </div>
        <div className="col-md-3 mx-3">
          <img src={screen} alt="" width={'114%'}/>
          <h4 class = 'pt-5'>{t('home.products-sec.name.2')}</h4>
          <p >{t('home.products-sec.desc.2')}</p>
        </div>
      </div>
    </div>
        
    
    {/* XS  */}
    <div className="container d-block d-sm-none  my-3 text-center">

      <div className="row justify-content-around align-items-center p-5">
        <div className="col">
          <img src={floor} alt="" className="img-fluid" style={{alignItems:'center'}}/>
          <h4 class = 'pt-3'>{t('home.products-sec.name.0')}</h4>
          <p >{t('home.products-sec.desc.0')}</p>
        </div>
        <div className="col">
          <img src={device2} alt="" className="img-fluid" />
          <h4 class = 'pt-3'>{t('home.products-sec.name.1')}</h4>
          <p >{t('home.products-sec.desc.1')}</p>
        </div>
        <div className="col">
          <img src={screen} alt="" width={'100%'}/>
          <h4 class = 'pt-3'>{t('home.products-sec.name.2')}</h4>
          <p>{t('home.products-sec.desc.2')}</p>
        </div>
      </div>
    </div>

    

    <hr/>

    </div>
  )
}



export default ProductSection