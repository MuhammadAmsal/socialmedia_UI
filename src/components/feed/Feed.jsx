import "./feed.css"
import { useEffect,useState } from "react"
import Share from '../share/Share.jsx'
import Post from '../post/Post.jsx'
 import axios from "axios"
import { AuthContext } from "../../context/AuthContext"
 import { useContext } from "react"


export default function Feed({username}) {
  const[post,setPosts]=useState([])
  const {user} = useContext(AuthContext)

  useEffect(()=>{
    const fetchPosts = async () => {
      const res= username 
     ? await axios.get("/post/profile/" + username) 
     : await axios.get("post/timeline/" + user._id);
            // console.log(res);
            setPosts(res.data)
    };
    fetchPosts();
 
  },[username, user._id])
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
