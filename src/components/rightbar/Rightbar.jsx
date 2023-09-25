import "./rightbar.css"
import {Users} from '../../dummtdata.js'
import Online from '../online/Online.jsx'

export default function Rightbar({profile}) {
  const HomeRightbar=()=>{
    return(
      <> 
    <div className="birthdayContainer">
    <img src="/assets/837891.png" alt="" className="birthdayImg" />
    <span className="birthdayText"> <b>Ali </b>and <b>3 other friends </b> have a birthday today</span>
  </div>
      <img src="/assets/Capture (1).png" alt="" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
      {Users.map((u)=>(
         <Online key={u.id} user={u}/>
           ))}
      </ul> </> 
        )
  }
  const ProfileRightbar =()=>{
    return(
       <>
       <h4 className="rightbarTitle">User Information</h4>
       <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
       </div>
       <h4 className="rightbarTitle">Friends</h4>
       <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="/assets/persons/Capture3.PNG" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Micheal</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/persons/Capture.PNG" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Sierra</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/persons/Capture4.PNG" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Henry</span>
        </div>
        <div className="rightbarFollowing">
          <img src="/assets/persons/Capture5.PNG" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">David</span>
        </div>
       </div>
       </>
    )
  }
  return (
    <div className="rightbar" >
    <div className="rightbarWrapper">
     {profile ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
    </div>
  )
}
 