import React from 'react';
import Header from '../../Components/Blog/Header';
import Posts from '../../Components/Blog/Posts';

import Sidebar from '../../Components/Blog/Sidebar';
import './Blog.css';
import Client from '../../Components/Blog/Client';
import PostPage from '../../Components/Blog/PostPage';

class Blog extends React.Component {
  state = {
    articles: []
  }
  componentDidMount(){
    Client.getEntries()
          .then((response)=>{
            console.log(response)
            this.setState({
              articles: response.items
            })
          })
          .catch(console.error)

  }

  render(){
    return <>
    <Header/>
    <div>
      {/* <Posts posts = {this.state.articles}/> */}
      <div className="container">
        <div className="row">
          <div className="col-md-8">
          {this.state.articles.map((article,index) => <PostPage article= {article}   key = {index}/>)}
          </div>
          <div className="col-md-4">
          <Sidebar/>
          </div>
        </div>
      </div>
     
      {/* <PostPage/> */}
      
      {/* <Single/> */}
    </div>
  </>;
  }
  
}

export default Blog;
