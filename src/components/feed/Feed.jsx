import "./feed.css"
import { useEffect,useState } from "react"
import Share from '../share/Share.jsx'
import Post from '../post/Post.jsx'
 import axios from "axios"


export default function Feed({username}) {
  const[post,setPosts]=useState([])

  useEffect(()=>{
    const fetchPosts = async () => {
      const res= username 
     ? await axios.get("/post/profile/" + username) 
     : await axios.get("post/timeline/64fc663d4a480932c70e248a");
            // console.log(res);
            setPosts(res.data)
    };
    fetchPosts();
 
  },[username])
  return (
    <div className="feed" >
      <div className="feedWrapper">
          <Share/>
          {post.map((p)=>(
             <Post key={p._id} post={p} />
          ))

          }
          
          
      </div>
    </div>
  )
}
