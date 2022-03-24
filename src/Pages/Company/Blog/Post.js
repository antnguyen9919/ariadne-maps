import { Link } from "react-router-dom";
import "./post.css";
import parse from 'html-react-parser'
export default function Post({article,img}) {
  // const viewrole = {
  //   article:article,
  //   moderator
    
  // }

  
  return ( 
    <div id='post-card' className=" container rounded post border">
        
      
          
          <img
        className="postImg"
        src={img}
        alt=""
      />
      
      <div className="postInfo">
        {/* <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div> */}
        <span className="postTitle">
          <Link to={`/post/${article.slug}`} state={article} className="link">
            {article.title}
          </Link>
        </span>
        {/* <hr />
        <span className="postDate">1 hour ago</span> */}
      </div>
      {/* <p className="postDesc">
        {parse(article.content)}
        
       
      </p> */}
      <div className="sneak">
        {parse(article.content)}
        
        {/* {article.content} */}
      </div>
      <Link to={`/post/${article.slug}`} state={article} className="link" id='wrapper-link'></Link>
    </div>
    
  );
}