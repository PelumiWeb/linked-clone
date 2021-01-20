import React from 'react'
import {Avatar} from '@material-ui/core'
import './Sidebar.css'
import {useSelector} from 'react-redux'
import {selectUser} from '../../features/userSlice'

function Sidebar() {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar_controller">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
           <div className="sidebar_top">
               <img src="https://images.unsplash.com/photo-1588259200155-f1bf55edde71?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt=""/>
               <Avatar className="sidebar_avatar">
                   {user.email[0]}
               </Avatar>
               <h2>{user.displayName}</h2>
               <h4>{user.email}</h4>
               <div className="sidebar_stats">
                <div className="sidebar_stat">
            <p>who viewed you?</p>
            <p className="sidebar_statNumber">2,543</p>
                </div>
                <div className="sidebar_stat">
            <p>who viewed you?</p>
            <p className="sidebar_statNumber">2,543</p>
                </div>
             
            </div>
           </div>
            
            <div className="sidebar_bottom">
                <p>Recents</p>
                {recentItem('reactjs')}
                {recentItem('Node.js')}
                {recentItem('vanillaJs')}
                {recentItem('Developer')}
                {recentItem('UX designer')}
                
            </div>
        </div>
    )
}

export default Sidebar
