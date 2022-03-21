import Post from "./Post";
import "./posts.css";

export default function Posts({articles,moderator}) {
  console.log("Hello: ",articles)
  return (
    <div className="posts">
      
      {articles.map((article)=> (
          
            <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" article = {article} moderator = {moderator}/>
          
      )  )}
    </div>
  );
}