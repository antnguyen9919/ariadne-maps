import Post from "./Post";
import "./posts.css";

export default function Posts({articles}) {
  
  return (
    <div className="posts">
      
      {articles.slice(0).reverse().map((article)=> (
          
            <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" article = {article}/>
          
      )  )}
    </div>
  );
}