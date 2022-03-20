import React from 'react'

import Hero2vid from '../../Resources/Videos/Hero2vid.mp4'

import './hero.css'
const Hero2 = () => {
  return (
    
	
	<div style = {{backgroundColor:'#2F303A'}}>
<div className = ' container-fluid   d-xxl-none align-items-end text-light mt-5 pt-3' >
		
		<div className="row align-items-center justify-content-center">
				<div className="col-md-4 mb-5 p-0 px-1 offset-md-1">
					
				<h1 style ={{fontFamily:'Poppins',fontSize:'43px'}} className='mb-3 lh-sm fw-bold text-left'>People Flow To<br/> Actionable Insights</h1>
				<p class='my-2 lh-md ' style ={{fontFamily:'Poppins'}}>Turn your existing customer traffic into an additional<br/> source of revenue</p>
                        {/* <button type="button" class="hero-button mt-3" style={{backgroundColor:'red'}}><p class='my-1 mx-3     lh-md' style ={{fontFamily:'Poppins'}}>Let's Talk</p></button> */}
						<button id='hero-xxl-button' type="button" class=" mt-3"
						><p class='my-1 mx-3 text-light fs-5 fw-bold    lh-md' style ={{fontFamily:'Poppins'}}>Let's Talk</p></button>
					
				</div>

				<div className="col-md-7 mt-5">
				<video src = {Hero2vid} class="d-block mx-lg-auto" disablepictureinpicture   autoPlay oncontextmenu='return false'  playsinline muted looptype = "videos/mp4" style = {{width: '103%', pointerEvents: "none"}}/>
				</div>
			</div>
		
			
	</div>
	<div className = 'container-fluid d-none d-xxl-block align-items-end text-light mt-5 pt-3' >
		
		<div className="row align-items-center ">
				<div className="col-md-4 offset-md-1 col-sm-10">
					
				<h1 style ={{fontFamily:'Poppins'}} className='mb-3 display-3 lh-sm fw-bold text-left'>People Flow To<br/> Actionable Insights</h1>
				<p class='my-2 lh-md fs-5 ' style ={{fontFamily:'Poppins'}}>Turn your existing customer traffic into an additional<br/> source of revenue</p>
                        <button id='hero-xxl-button' type="button" class=" mt-3"
						><p class='my-1 mx-3 text-light fs-5 fw-bold    lh-md' style ={{fontFamily:'Poppins'}}>Let's Talk</p></button>
					
				</div>
				<div className="col-md-7 mt-5" style = {{pointerEvents: 'none'}}>
				<video src = {Hero2vid} class="d-block mx-lg-auto" disablepictureinpicture   autoPlay oncontextmenu='return false'  playsinline muted loop type = "videos/mp4" style = {{width: '100%', pointerEvents: "none" }}/>
				</div>	
			</div>
		
			
	</div>
	
	</div>


	
  )
}

export default Hero2