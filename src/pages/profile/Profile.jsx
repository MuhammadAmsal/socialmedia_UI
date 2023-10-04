import './profile.css'
import Topbar from '../../components/topbar/Topbar.jsx' ;
import Sidebar from '../../components/sidebar/Sidebar.jsx' ;
import Rightbar from '../../components/rightbar/Rightbar.jsx' ;
import Feed from '../../components/feed/Feed.jsx' ;
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'; 

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const[user,setUser]=useState({})
  const userName=useParams().username
  // console.log(username)
  useEffect(()=>{
    const fetchUsers = async () => {
      const res= await axios.get(`/users?username=${userName}`);
            // console.log(res);
            setUser(res.data)
    };
    fetchUsers();
  
  },[userName])
  const imageUrl = user.profilePicture === " " ?  `${PF}persons/userAvatar.png` : user.profilePicture;
  const bannerImg = user.coverPicture === " " ?  `${PF}/nobannerimg.jpg` : user.coverPicture;
  return (
    <>
     <Topbar/>
    <div className="profile">
        <Sidebar/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className='profileCoverImg' src={bannerImg} alt="" />
              <img className='profileUserImg' src={imageUrl} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <h4 className="profileInfoDesc">{user.desc} </h4>
            </div>
          </div>
          <div className="profileRightBottom">
           <Feed username={userName} />
           <Rightbar user={user}/>
          </div>
        </div>
        

    </div>
    </>
  )
}
