import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'




import db from '../../Config/firebase'
import {collection, addDoc} from "firebase/firestore"



function FormContact() {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email, setEmail]= useState('')

    const [country, setCountry] = useState('')
    const [subject,setSubject] = useState('')
    const [message,setMessage] = useState('')

    
    const formCollectionRef = collection(db,"ContactForm");


  const options = useMemo(() => countryList().getData(), [])

  const firstNameHandler = value => {
    setFirstName(value)
  }
  const lastNameHandler = value => {
    setLastName(value)
  }
  const emailHandler = value => {
    setEmail(value)
  }
  const countryHandler = value => {
    setCountry(value)
    console.log(value.label)
  }

  const subjectHandler = value => {
    setSubject(value)
  }
  
  const messageHandler = value => {
    setMessage(value)
  }
  const createMessage = async(firstName,lastName,email,country,subject, message)=>{
    await addDoc(formCollectionRef,{
      firstName:firstName,
      lastName:lastName,
      email:email,
      country:country,
      subject:subject,
      message:message})
}

  const submitMessage =()=>{
      if(firstName===''||lastName===''||email===''|| subject===''|| message===''){
        alert('Invalid form')
      } else {
        createMessage(firstName,lastName,email,country.label,subject, message)
        // alert('sent successful')
      }
    
   

} 

  return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/* <h1>first name: {firstName}</h1> */}
            <h1>Contact Us</h1>
            <h2> 
            Ariadne Maps GmbH
            </h2>
            <p>
            Brecherspitzstraße 8
            </p>
            <p>81541 München</p>
            <p>+49 174 4079675</p>
            <p>contact@ariadnemaps.com</p>









          </div>
          <div className="col-lg-6">
          <form action="">
            <div className="mb-3">
            <div  className="row">
  <div  className="col">
  <label    className="form-label">First Name</label>
    <input type="text"  className="form-control" id="validationTextarea"  required placeholder="Max"
      value = {firstName}
      onChange={(e) => firstNameHandler(e.target.value)}
    />
  </div>
  <div  className="col">
  <label    className="form-label">Last Name</label>
    <input type="text"  className="form-control" required placeholder="Mustermann"
    value = {lastName}
    onChange={(e) => lastNameHandler(e.target.value)}/>
  </div>
</div>
            </div>
          


          <div  className="mb-3">
            <div className="row">
              <div className="col">
              <label    className="form-label">Email address</label>
  <input type="email"  className="form-control" required id="exampleFormControlInput1" placeholder="name@example.com"
  value = {email}
  onChange={(e) => emailHandler(e.target.value)}/>
              </div>
              <div className="col">
              <label    className="form-label">Select country</label>
          <Select options={options} value={country} onChange={countryHandler} />
              </div>
            </div>
  
</div>       
            

            <div className="mb-3">
            <label    className="form-label">Subject</label>
    <input type="text"  className="form-control" placeholder="Inquiry" required 
    value = {subject}
    onChange={(e) =>subjectHandler(e.target.value)}/>
            </div>
          
<div  className="mb-3">
  <label  className="form-label">Message</label>
  <textarea  className="form-control" id="exampleFormControlTextarea1" rows="4" required
  value = {message}
  onChange={(e) => messageHandler(e.target.value)}></textarea>
</div>
     
      <button type="submit"  className="btn ms-auto btn-primary align-self-end" 
    onClick={(e)=>submitMessage()}
  >Submit</button>
      
          
</form>
          </div>
        </div>
          
          
          
      </div>
  )
}

export default FormContact