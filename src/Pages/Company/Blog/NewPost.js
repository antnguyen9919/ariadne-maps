import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import db from '../../../Config/firebase'
import {collection, addDoc} from "firebase/firestore"
const articlesCollectionRef = collection(db,"BlogArticles");

const createArt = async(title,content)=>{
    await addDoc(articlesCollectionRef,{title:title,content:content})
}

export default class NewPost extends Component {
    constructor(props){
        super(props)
        this.state={
                 article:{
                     title:'',
                     content:'',
                     
                 }   
        }
    }
    handleChange(html) {
        this.setState({ editorHtml: html });
      }

    


    formats = [
        "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color"
    ]
    modules = {
        toolbar: {
          container:[
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
          
            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
          
            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
          
            ['clean']                                         // remove formatting button
          ] ,
          
        },
        clipboard: {
          matchVisual: false,
        }
      };  
    onChangeArticleTitle= (value)=>{
        this.setState({
            article:{
                ...this.state.article,
                title:value
            }
        })
    }  
    onChangeArticleContent= (value)=>{
        this.setState({
            article:{
                ...this.state.article,
                content:value
            }
        })
    }  
    
    submitArticle =()=>{
        const article = this.state.article
        // articlesCollectionRef.add(
        //     article
        // ).then(res=>{
        //     console.log(res)
        // }).catch(err=>console.log(err))

         createArt(article.title,article.content)

    } 

  render() {
    return (
      <div className='container'>
          <h2>New Article</h2>
          <div className="row">
              <div className="col-12">

              <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input type="text" class="form-control" id="articleTitle"
        name = 'articleTitle' onChange ={(e)=>this.onChangeArticleTitle(e.target.value)}
        value={this.state.article.title}
    />
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Content</label>
    
    <ReactQuill 
    ref={(el)=>this.quill=el}
    value = {this.state.article.content}
    onChange={(e)=> this.onChangeArticleContent(e)}
    theme='snow'
    modules={this.modules}
    formats={this.formats}
    />
  </div>
  
  <button type="submit" class="btn btn-primary" 
    onClick={(e)=>this.submitArticle()}
  >Submit</button>
</form>
              </div>
              <div className="col-4">
              



              </div>
          </div>
      </div>
    )
  }
}
