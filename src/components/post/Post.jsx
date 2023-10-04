import './post.css'
import {MoreVert} from '@mui/icons-material'
import { useState,useEffect } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import {format} from "timeago.js"
export default function Post({post}) {

const [like,setLike]= useState(post.likes.lenght)
const [isLiked,setIsliked]= useState(false)
const[user,setUser]=useState({})
const PF = process.env.REACT_APP_PUBLIC_FOLDER

useEffect(()=>{
  const fetchUsers = async () => {
    const res= await axios.get(`/users?userId=${post.userId}`);
          // console.log(res);
          setUser(res.data)
  };
  fetchUsers();

},[post.userId])

const likeHandler =()=>{
  setLike(isLiked ? like-1 : like+1)
  setIsliked(!isLiked)
}
const imageUrl = user.profilePicture === " " ?  `${PF}persons/userAvatar.png` : user.profilePicture;
// console.log(imageUrl);
  return (
    <div className='post' >
     <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`} > 
            <img  src={imageUrl} alt="" className="postProfileImg" />
            </Link> 
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight"><MoreVert/></div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img  src={PF+post.img} className='postImg' alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img  className='likeIcon'  src={`${PF}png-transparent-like-logo-facebook-like-button-facebook-like-button-computer-icons-like-miscellaneous-blue-text-thumbnail.png`} onClick={likeHandler} alt="" />
            <img  className='likeIcon' src={`${PF}facebook-red-love-heart-png-17.png`} onClick={likeHandler} alt="" />
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
