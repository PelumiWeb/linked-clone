import React, {forwardRef} from 'react'
import './Post.css'
import {Avatar} from '@material-ui/core'
import InputOption from '../InputOption/InputOption'
import ThumbsUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ChatOutlined from '@material-ui/icons/Chat';
import SharedOutline from '@material-ui/icons/ShareOutlined'
import SendOutlined from '@material-ui/icons/SendOutlined'

const Post =forwardRef(({name, description, message, photoUrl}, ref) => {
    return (
        <div 
        ref={ref}
        className="post">
         <div className="post_header">
           <Avatar>{name[0]}</Avatar> 
           <div className="post_info">
               <h2>{name}</h2>
               <p>{description}</p>
            </div> 
         </div>
         <div className="post_body">
         <p>{message}</p>
         </div>
         <div className="post_buttons">
        <InputOption Icon={ThumbsUpOutlinedIcon} Text='Like' color='gray' />
        <InputOption Icon={ChatOutlined} Text='Chat' color='gray' />
        <InputOption Icon={SharedOutline} Text='Share' color='gray' />
        <InputOption Icon={SendOutlined} Text='Send' color='gray' />
         </div>

           
        </div>
    )
})

export default Post
