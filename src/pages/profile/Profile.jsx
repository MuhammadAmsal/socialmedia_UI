import './profile.css'
import Topbar from '../../components/topbar/Topbar.jsx' ;
import Sidebar from '../../components/sidebar/Sidebar.jsx' ;
import Rightbar from '../../components/rightbar/Rightbar.jsx' ;
import Feed from '../../components/feed/Feed.jsx' ;

export default function Profile() {
  return (
    <>
     <Topbar/>
    <div className="profile">
        <Sidebar/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className='profileCoverImg' src="/assets/posts/Capture2.PNG" alt="" />
              <img className='profileUserImg' src="/assets/persons/Capture2.PNG" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Muhammad Amsal</h4>
              <h4 className="profileInfoDesc">Hello this is mern stack developer </h4>
            </div>
          </div>
          <div className="profileRightBottom">
           <Feed/>
           <Rightbar profile/>
          </div>
        </div>
        

    </div>
    </>
  )
}
