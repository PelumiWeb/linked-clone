import React , {useState, useEffect, useRef} from 'react'
import "./Feeds.css"
import Post from './Post/Post'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption/InputOption'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import {db} from '../../firebase'
import firebase from 'firebase'
import { useSelector} from 'react-redux'
import { selectUser} from '../../features/userSlice'
import FlipMove from 'react-flip-move'
import Bar from '../Bar/Bar'

function Feeds() {
    const user = useSelector(selectUser)
    const FeedsRef = useRef(null)
  
    
    

    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')
    const uploadPictures = () => {
        console.log('Clicked')
        //Show Bar
       return ( 
       <Bar />
        )
    }

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            } )))
        ))

        FeedsRef.current.focus()
    }, [])

   


    const sendPost = (e) => {
        e.preventDefault()
        // setPosts(e.target.value)

        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            // postImage: image || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }
 
    return (
        <div className="feed">
           <div className="feed_inputContainer">
               <div className="feed_input">
                   <CreateIcon />
                   <form >
                    
                    <input ref={FeedsRef} value={input} onChange={(e) => setInput(e.target.value)} type="text"/>
                    <button onClick={sendPost} type="submit">Send</button>
                   </form>
               </div>
                    {/* <Bar /> */}
               <div className="feed_inputOptions">
                   <div onClick={uploadPictures}>
                   <InputOption Icon={ImageIcon} Text="Photo" color="#70b5f9"
                   />
                   </div>
                   <div>
                   <InputOption Icon={SubscriptionIcon} Text="Video" color="#E7A33E"/>
                   </div>
                   <div>
                   <InputOption Icon={EventNoteIcon} Text="Event" color="#C0CBCD"/>
                   </div>
                   <div>
                   <InputOption Icon={CalendarViewDayIcon} Text="Write article" color="#7FC15E"/>
                   </div>
               </div>
            </div> 
        <FlipMove>
        {posts.map(({id, data: {name, description, message, photoUrl}}) =>
             <Post 
             key={id}
             name={name} 
             description={description}
             message={message} 
             photoUrl={photoUrl} 
             />
            )}  
        </FlipMove>
        </div> 
    )
}

export default Feeds
