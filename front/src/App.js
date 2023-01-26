import './App.css'
import Characters from './pages/Characters.jsx'
import {Routes, Route, useNavigate, useLocation} from "react-router-dom"
import Home from './components/Home/Intro.jsx'
import Error from './components/Error/Error.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import CharacterDetails from './components/Characters/Characters/CharacterDetails.jsx'
import Favorites from './pages/Favorites.jsx'
import SignUp from "./pages/Sign_up.jsx"
import Profile from './pages/Profile.jsx'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

function App () {
  let [isLogin, setIsLogin] = useState(false)
  let {pathname} = useLocation()
  let {profile}  = useSelector(state=>state)
  useEffect(()=>{
    if(profile.hasOwnProperty("name")){ //profile tiene siempre img, edad, country, pero no name
      setIsLogin(true)
    }
  }, [pathname])

  //user has to login in order to be able to enter the page
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/characters" element={isLogin ? <Characters/> : <Login/>}></Route>
        <Route exact path="/characters/:id" element={isLogin ? <CharacterDetails/> : <Login/>}></Route>
        <Route exact path="/about" element={isLogin ? <About/> : <Login/>}></Route>
        <Route exact path="/favorites" element={isLogin ? <Favorites/> : <Login/>}></Route>
        <Route exact path="/sign_up" element={<SignUp/>}></Route>
        <Route exact path="/profile" element={isLogin ? <Profile/> : <Login/>}></Route>
        <Route path="/*" element={isLogin ? <Error/> : <Login/>}></Route> {/* default */}
      </Routes>
    </div>
  )
}

export default App
