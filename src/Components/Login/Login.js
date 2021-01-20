import React , {useState} from 'react'
import {useDispatch} from "react-redux"
import './Login.css'
import {auth} from '../../firebase'
import {login} from '../../features/userSlice'

function Login() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState(null)
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch()

const LoginUser = (e) => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(email, password).then(userAuth => {
        dispatch(login({
                email: userAuth.user.email,
                uuid: userAuth.user.uuid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
        }))
    }).catch((error) => alert(error))
  


}

const register = () => {
    if (!name) {
        return alert('Welcome')
    }
    
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
        userAuth.user.updateProfile({
            displayName: name,
            photoURL: profilePic
        })
        .then(() => {
            dispatch(login({
                email: userAuth.user.email,
                uuid: userAuth.user.uuid,
                displayName: name,
                photoUrl: profilePic
            }))
        })
    }).catch((error) => alert(error ))
}

    return (
        <div className="login">
            <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" alt=""/>

            <form>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full name is required"/>

            <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type="text" placeholder="Profile pic or URL"/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
            <button type="submit"  onClick={LoginUser}>Sign In</button>
            </form>
            <p> 
                Not a member
                {" "}
                 <span className="login_register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
