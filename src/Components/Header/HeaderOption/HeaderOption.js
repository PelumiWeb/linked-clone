import React from 'react'
import './HeaderOption.css';
import Avatar from '@material-ui/core/Avatar'

function HeaderOption({avatar, Icon, title, onClick}) {
    return (
        <div onClick={onClick} className='HeaderOption'>
           { (Icon && <Icon className='HeaderOption__icon'/>)}
           {avatar && (
               <Avatar className="HeaderOption__icon" src={avatar}/>
           )}
            <h3 className="HeaderOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
