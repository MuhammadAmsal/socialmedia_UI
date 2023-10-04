import React  from "react";
import './Topbar.css';
import {Link} from 'react-router-dom';
import {Search,Person,Chat,Notifications} from '@mui/icons-material'

export default function Topbar(){
    return (
    <div className="topbarContainer"> 

      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}} > 
        <span className="logo" >Social Media</span>
        </Link>
      </div>

      <div className="topbarCenter">

        <div className="searchbar">
        <Search className="searchIcon"/>
        <input placeholder="Search for Friends, Post or Videos" className="searchInput" />
        </div>

      </div>
      <div className="topbarRight">
        <div className="topbarLinks" > 
        <div className="topbarLink">Homepage</div>
        <div className="topbarLink">Timeline</div>
        </div>

            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBadge">1</span>
                </div>
                 
            </div>
            <div><img src="/assets/persons/Capture2.PNG" alt="" className="topbarImg" /></div>
    </div>

    </div>
    )
}