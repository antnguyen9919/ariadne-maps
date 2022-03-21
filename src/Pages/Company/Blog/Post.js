import { Link } from "react-router-dom";
import "./post.css";
import parse from 'html-react-parser'
export default function Post({article,img,moderator}) {
  const viewrole = {
    article:article,
    moderator
    
  }
  return (
    <div className="post">
      <Link to={`/post/${article.id}`} state={article} className="link">
      <img
        className="postImg"
        src={img}
        alt=""
      />
          </Link>
      
      <div className="postInfo">
        <div className="postCats">
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
        </div>
        <span className="postTitle">
          <Link to={`/post/${article.id}`} state={viewrole} className="link">
            {article.title}
          </Link>
        </span>
        {/* <hr />
        <span className="postDate">1 hour ago</span> */}
      </div>
      <p className="postDesc">
        {parse(article.content)}
      </p>
    </div>
  );
}