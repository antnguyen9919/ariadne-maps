
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { About, Airport, Analytics, Career, Cities, Contact, Engagement, Hospitality, Mall, Mapping, Navigation, Privacy, Retail, Transport, WhyAriadne } from './Pages';
import Home from './Pages/Home';
import {Footer} from './Components'

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path = '/' element = {<Home/>}/>
       
         
          <Route exact path = "/why-ariadne" element = {<WhyAriadne/>}/>
          
          
          <Route exact path = "/ariadne-analytics" element = {<Analytics/>}/>
          <Route exact path = "/ariadne-mapping" element = {<Mapping/>}/>
          <Route exact path = "/ariadne-navigation" element = {<Navigation/>}/>
          <Route exact path = "/ariadne-engagement" element = {<Engagement/>}/>
          
          <Route exact path = "/retail-stores" element = {<Retail/>}/>

          <Route exact  path = "/shopping-centres" element = {<Mall/>}/>
          <Route exact  path = "/airports" element = {<Airport/>}/>
          <Route exact  path = "/transportation" element = {<Transport/>}/>
          <Route exact  path = "/cities" element = {<Cities/>}/>
          <Route exact  path = "/hospitality" element = {<Hospitality/>}/>

          <Route exact  path = "/about-us" element = {<About/>}/>
          {/* <Route exact  path = "/blog" element = {<Blog/>}/> */}
          {/* <Route exact  path = "/blog/:slug" element = {<PostPage/>}/> */}
          <Route exact  path = "/careers" element = {<Career/>}/>
          <Route exact  path = "/contact" element = {<Contact/>}/>
          <Route exact  path = "/privacy" element =  {<Privacy/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
