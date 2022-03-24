import React from 'react'
import './navbar.css'
import Asset16 from '../../Resources/Photos/Asset16.png';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';


function Navbar() {
  const { t, i18n } = useTranslation();
  

  const handleLanguage=(value)=>{
      i18n.changeLanguage('de')
  }
  

  return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black align-items-center">
            <div className="container">
                <Link className='px-4 pt-1'  to='/' > <img src={Asset16} alt="Ariadne Logo" width="140x"/>
                            
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">

<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse " id="navbarNavDarkDropdown">
<ul className="navbar-nav mx-auto">

<li className="nav-item dropdown" id= 'roro'>

  <h5 className="nav-link dropdown active fw-normal mt-1" style ={{fontFamily:'Poppins'}}  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    {t('navFoot.solutions.self')}
  </h5>
  <ul id='kaka' className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
    <li><Link className="dropdown-item" to ="/ariadne-analytics">Ariadne Analytics</Link></li>
    {/* <li><Link className="dropdown-item" to ="/ariadne-mapping">Ariadne Mapping</Link></li> */}
    <li><Link className="dropdown-item" to ="/ariadne-navigation">Ariadne Navigation</Link></li>
    <li><Link className="dropdown-item" to ="/ariadne-engagement">Ariadne Engagement</Link></li>
  </ul>
</li>
<li className="nav-item dropdown" id= 'roro'>
<h5 style ={{fontFamily:'Poppins'}} className="nav-link dropdown active fw-normal mt-1"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
{t('navFoot.industries.self')}
  </h5>
  
  <ul id='kaka' className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
 
                <li><Link className="dropdown-item " to ="/retail-stores">{t('navFoot.industries.retail')}</Link></li>
                <li><Link className="dropdown-item" to ="/shopping-centres">{t('navFoot.industries.mall')}</Link></li>
                <li> <Link className="dropdown-item" to ="/airports">{t('navFoot.industries.airports')}</Link></li>
                <li> <Link className="dropdown-item" to ="/transportation">{t('navFoot.industries.transportation')}</Link></li>
                <li><Link className="dropdown-item" to ="/cities">{t('navFoot.industries.cities')}</Link></li>
                <li><Link className="dropdown-item" to ="/hospitality">{t('navFoot.industries.hospitality')}</Link></li>
  </ul>
</li>
<li className="nav-item">
 
  <Link className="nav-link active" aria-current="page"  to ='/why-ariadne' >
                        <h5 style ={{fontFamily:'Poppins'}} className='fw-normal mt-1' id="navbarDarkDropdownMenuLink">{t('navFoot.whyariadne')}</h5>
                     </Link>
</li>
<li className="nav-item dropdown" id = 'roro'>
<h5 style ={{fontFamily:'Poppins'}} className="nav-link dropdown active mt-1"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
{t('navFoot.company.self')}
  </h5>
  <ul id = 'kaka' className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
    <li>   <Link className="dropdown-item" to ="/about-us">{t('navFoot.company.aboutus')}</Link>                                                 </li>
          
    <li> <Link className="dropdown-item" to ="/careers">{t('navFoot.company.careers')}</Link>                                                     </li>
    <li> <Link className="dropdown-item" to ="/blog">Blog</Link>                                               </li>
    <li> <Link className="dropdown-item" to ="/contact">{t('navFoot.company.contact')}</Link>                                                       </li>
               
          
                
  </ul>
</li>
  
</ul>
    <ul className="navbar-nav mx-auto ">
    <li className="nav-item"> <Link className="nav-link active" aria-current="page"  to ='/why-ariadne' >
                               <h5 className= 'mt-1' style ={{fontFamily:'Poppins'}} id="navbarDarkDropdownMenuLink">Let's talk</h5>
                            </Link></li>
    <li className="nav-item"> </li>

    <li className="nav-item dropdown">

  <h5 className="nav-link dropdown active fw-normal mt-1 dropdown-toggle" style ={{fontFamily:'Poppins'}}  id="navbarDarkDropdownMenuLink" role="button"  data-bs-toggle="dropdown" aria-expanded="false">
    <LanguageIcon/>
  </h5>
  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
  <li type='button' className="dropdown-item" onClick={()=>i18n.changeLanguage('en')}>
      <div className="row">
        <div className="col-6"><p >English</p></div>
        <div className="col"><img src = 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/33px-Flag_of_the_United_Kingdom.svg.png' className='rounded'/></div>
      </div>
    </li>
    <li type='button' className="dropdown-item" onClick={()=>i18n.changeLanguage('de')}>
      <div className="row">
        <div className="col-6"><p >German</p></div>
        <div className="col "><img src = 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/35px-Flag_of_Germany.svg.png' className='rounded' /></div>
      </div>
    </li>
    <li type='button' className="dropdown-item" onClick={()=>i18n.changeLanguage('de')}>
      <div className="row">
        <div className="col-6"><p >French</p></div>
        <div className="col"><img src = 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/35px-Flag_of_France.svg.png' className='rounded'/></div>
      </div>
    </li>
    
    
  </ul>
</li>
    </ul>


</div>


        </div>
</nav>
    </div>
  )
}

export default Navbar