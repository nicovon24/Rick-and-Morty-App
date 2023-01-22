import './App.css'
import Characters from './components/Characters/CharactersList.jsx'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Intro.jsx'
import Error from './components/Error/Error.jsx'
import About from './components/About/About.jsx'
import Login from './components/Login/Login.jsx'
import CharacterDetails from './components/Characters/Characters/CharacterDetails.jsx'
import Favorites from './components/Favorites/Favorites.jsx'

function App () {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/characters" element={<Characters/>}></Route>
        <Route exact path="/characters/:id" element={<CharacterDetails/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/favorites" element={<Favorites/>}></Route>
        <Route path="/*" element={<Error/>}></Route> {/* default */}
      </Routes>
    </div>
  )
}

export default App
