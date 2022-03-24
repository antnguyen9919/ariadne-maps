import React, { Component, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import db from '../../Config/firebase'
import {collection, addDoc} from "firebase/firestore"
const articlesCollectionRef = collection(db,"BlogArticles");

const createArt = async(title,content, slug)=>{
    await addDoc(articlesCollectionRef,{title:title,content:content,slug:slug})
}

export default class ContactForm extends Component {
    constructor(props){
        super(props)
        this.state={
                 form:{
                     firstName:'',
                     lastName:'',
                     email:'',
                     country:'',
                     subject:'',
                     content:''
                     
                 }   
        }
    }

    options = useMemo(() => countryList().getData(), [])
    

    // handleChange(html) {
    //     this.setState({ editorHtml: html });
    //   }

      onChangeFormCountry= (value)=>{
        this.setState({
            form:{
                ...this.state.form,
                country:value
            }
        })
    } 
     
    



    onChangeFormSubject= (value)=>{
        this.setState({
            form:{
                ...this.state.form,
                subject:value
            }
        })
    }  
    onChangeFormContent= (value)=>{
        this.setState({
            form:{
                ...this.state.form,
                content:value
            }
        })
    }  
    
    
    submitArticle =()=>{
        const article = this.state.article
       createArt(article.title,article.content, this.convertToSlug(article.title))

    } 

  render() {
    return (
      <div className='container'>
          <h2>New Article</h2>
          <div className="row">
              <div className="col-12">

              <form>

              <div class="input-group">
  <span class="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" class="form-control"/>
  <input type="text" aria-label="Last name" class="form-control"/>
                </div>
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>

  {/* <Select options={this.options} value={this.state.form.country} onChange={this.onChangeFormCountry} /> */}
</div>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Subject</label>
    <input type="text" class="form-control" id="articleTitle"

        // name = 'articleTitle' onChange ={(e)=>this.onChangeArticleTitle(e.target.value)}
        // value={this.state.article.subject} 
        />
   
  </div> 
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>


                  
   
  
  
  <button type="submit" class="btn btn-primary" 
    onClick={(e)=>this.submitArticle()}
  >Submit</button>
</form>
              </div>
              
          </div>
      </div>

    //   <div>sas</div>
    )
  }
}
