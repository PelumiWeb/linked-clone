import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption/HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAvater from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat';
import Notification from '@material-ui/icons/Notifications';
import {useDispatch, useSelector} from 'react-redux'
import {logout, selectUser} from '../../features/userSlice'
import {auth} from '../../firebase'


function Header() {
  const user = useSelector(selectUser)

const dispatch = useDispatch()
 const logoutOfApp = () => {
   dispatch(logout())
   auth.signOut()
 }


    return (
        <div className="header">
          <div className="header_left">
        <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="Liked_in"/>
        <div className="header__search">
            {/* Search icon */}
            <SearchIcon  />
            <input placeholder="Search" type="text"/>
        </div>
          </div>
          <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAvater} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messaging'/>
        <HeaderOption Icon={Notification} title='Notifications'/>
        <HeaderOption 
        avatar={user?.photoUrl}
        title={user?.displayName} 
        onClick={logoutOfApp}
        />
        </div>
         
</div>
    )
}

export default Header
