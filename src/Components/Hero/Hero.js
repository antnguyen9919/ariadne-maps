import React from 'react'

import Hero2vid from '../../Resources/Videos/Hero2vid.mp4'
import smallScreen from '../../Resources/Photos/smallScreen.png'

import './hero.css'
import { useTranslation } from 'react-i18next'

const Hero2 = () => {
	const { t, i18n } = useTranslation();
  return (
    
	
	<div  style = {{backgroundColor:'#30303d',paddingTop:'50px'}}>

{/*  small  */}
<div id='h-small' className = ' container  align-items-center justify-content-center text-light mt-5 pt-3' >
		
		
<div className='container '>
					<div className="row justify-content-center">
				<div className="col-10">
				<h1 style ={{fontFamily:'Poppins'}} className='mb-3 lh-sm fw-bold text-left'>{t('home.heroh1')}</h1>
					<p class='my-2 lh-md ' style ={{fontFamily:'Poppins'}}>{t('home.herop')}</p>
							
							<button id='hero-xxl-button' type="button" class=" mt-3"
							><p class='my-1 mx-3 text-light fs-5 fw-bold    lh-md' style ={{fontFamily:'Poppins'}}>Let's Talk</p></button>
				</div>

					</div>
		<div className="row row justify-content-center">
		<div className="col-md-10 mt-5">
					<img src={smallScreen} alt="smc" className='img-fluid' />
					</div>
		</div>
					
						
					</div>
		
			
	
	</div>
{/* medium large	 */}

<div id='h-medium' className = ' container    align-items-end text-light mt-5 pt-3' >
		
<div className='container '>
					<div className="row justify-content-center">
				<div className="col-10">
				<h1 style ={{fontFamily:'Poppins',fontSize:'4vw'}} className='mb-3  text-left'>{t('home.heroh1')}</h1>
					<p class='my-2 lh-md ' style ={{fontFamily:'Poppins',fontSize:'2vw'}}>{t('home.herop')}</p>
							
							<button id='hero-xxl-button' type="button" class=" mt-3"
							><p class='my-1 mx-3 text-light fw-bold    lh-md' style ={{fontFamily:'Poppins',fontSize:'2vw'}}>Let's Talk</p></button>
				</div>

					</div>
		<div className="row row justify-content-center">
		<div className="col-md-10 mt-5">
					<img src={smallScreen} alt="smc" className='img-fluid' />
					</div>
		</div>
					
						
					</div>
	
					
			
	</div>


{/* extra large  TRANSLATED */}
<div id='h-xl' className = ' container-fluid  align-items-end text-light mt-5 pt-3' >
		
		<div className="row align-items-center">
				<div className="col mb-5 p-0 " style={{marginLeft:'55px'}} >
					<span class="fi fi-gr"></span> <span class="fi fi-gr fis"></span>
				<h1 style ={{fontFamily:'Poppins',fontSize:'40px',lineHeight:'normal'}} className='mb-3  text-left'>{t('home.heroh1')}</h1>
				<p class='my-2 lh-md ' style ={{fontFamily:'Poppins',fontSize:'18px'}}>{t('home.herop')}</p>
                        
						<button id='hero-xxl-button' type="button" class=" mt-3"
						><p class='my-1 mx-3 text-light fw-bold    lh-md' style ={{fontFamily:'Poppins',fontSize:'1.5vw'}}>Let's Talk</p></button>
					
				</div>

				<div className="col-md-7 mt-5">
				<video src = {Hero2vid} class="d-block mx-lg-auto" disablePictureInPicture   autoPlay oncontextmenu='return false' poster={smallScreen}  playsinline muted loop type = "videos/mp4" style = {{width: '103%', pointerEvents: "none"}}/>
				</div>
			</div>
		
			
	</div>

{/* extra extra large 	 */}
	<div id='h-xxl' className = 'container-fluid   text-light mt-5 pt-3' >
		
		<div className="row ">
				<div className="col-md-4 offset-md-1 col-sm-10 ">
					
				<h1 style ={{fontFamily:'Poppins',fontSize:'3vw',lineHeight:'normal',marginTop:'14vh'}} className=' text-left mb-4'>{t('home.heroh1')}</h1>
				<p class='my-2 lh-md ' style ={{fontFamily:'Poppins',fontSize:'1.5vw'}}>{t('home.herop')}</p>
                        <button id='hero-xxl-button' type="button" class=" mt-3"
						><p class='my-1 mx-3 text-light fw-bold    lh-md' style ={{fontFamily:'Poppins',fontSize:'1.5vw'}}>Let's Talk</p></button>
					
				</div>
				<div className="col-md-7 mt-5 align-self-end" style = {{pointerEvents: 'none'}}>
				<video src = {Hero2vid} class="d-block mx-lg-auto" disablePictureInPicture   autoPlay oncontextmenu='return false' poster={smallScreen}  playsinline muted loop type = "videos/mp4" style = {{width: '100%', pointerEvents: "none" }}/>
				</div>	
			</div>
		
			
	</div>
	
	</div>


	
  )
}

export default Hero2