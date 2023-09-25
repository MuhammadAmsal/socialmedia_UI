import './post.css'
import {MoreVert} from '@mui/icons-material'
import {Users} from '../../dummtdata.js'
import { useState } from 'react'
export default function Post({post}) {

const [like,setLike]= useState(post.likes)
const [isLiked,setIsliked]= useState(false)

const likeHandler =()=>{
  setLike(isLiked ? like-1 : like+1)
  setIsliked(!isLiked)
}
  return (
    <div className='post' >
     <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter((u)=> u.id===post.id)[0].profilePicture} alt="" className="postProfileImg" />
            <span className="postUsername">{Users.filter((u)=> u.id===post.id)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight"><MoreVert/></div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img  src={post.photo} className='postImg' alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img  className='likeIcon'  src="/assets/png-transparent-like-logo-facebook-like-button-facebook-like-button-computer-icons-like-miscellaneous-blue-text-thumbnail.png" onClick={likeHandler} alt="" />
            <img  className='likeIcon' src="/assets/facebook-red-love-heart-png-17.png" onClick={likeHandler} alt="" />
            <span className='postLikeCounter'>{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
        </div> 
    </div>
  )
}
