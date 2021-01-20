import React,{useEffect} from 'react';
import './App.css';
import {useSelector, useDispatch } from 'react-redux'
import {auth} from './firebase'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Feeds from './Components/Feeds/Feeds'
import {selectUser, login, logout} from './features/userSlice'
import Login from './Components/Login/Login'
import Widgets from './Components/Widgets/Widgets'

function App() {
const user = useSelector(selectUser)
const dispatch = useDispatch()


useEffect(() => {
auth.onAuthStateChanged(userAuth => {
  if (userAuth) {
    // user is logged in
    dispatch(
      login({
      email: userAuth.email,
      uuid: userAuth.uuid,
      displayName:userAuth.displayName,
      photoUrl: userAuth.photoURL
    }))
  } else {
    // user is logged out.
    dispatch(logout)
  }

})
}, [dispatch])


  return (
    <div className="App">
      <header>
      <Header />

      {!user ? <Login /> :
      <div className="app__body">
       <Sidebar />
        <Feeds /> 
        <Widgets />
      </div>
}


      </header>
    </div>
  );
}

export default App;
