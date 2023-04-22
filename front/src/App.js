import "./App.css";
import Characters from "./pages/Characters.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Intro.jsx";
import Error from "./components/Error/Error.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import CharacterDetails from "./components/Characters/Characters/CharacterDetails.jsx";
import Favorites from "./pages/Favorites.jsx";
import SignUp from "./pages/Sign_up.jsx";
import Profile from "./pages/Profile.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCreatedChar } from "./redux/actions";
import Loader from "./components/Loader/Loader";

function App() {
	let [isLogin, setIsLogin] = useState(false);
	let { pathname } = useLocation();
	let [isLoading, setIsLoading] = useState(true); //sada
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, [4000]);
	}, []);

	let dispatch = useDispatch();
	let { profile } = useSelector((state) => state);

	useEffect(() => {
		dispatch(fetchCreatedChar());
	}, []);

	useEffect(() => {
		if (profile.hasOwnProperty("name")) {
			//profile tiene siempre img, edad, country, pero no name
			setIsLogin(true);
		}
	}, [pathname]);

	//user has to login in order to be able to enter the page
	return (
		<div className="App">
			<Routes>
				{/* <Route exact path="/" element={<Login/>}></Route> */}
				<Route exact path="/" element={<Home />}></Route>
				{/* <Route exact path="/characters" element={<Characters/>}></Route> */}
				<Route
					exact
					path="/characters"
					element={<Characters />}
					// element={isLogin ? <Characters /> : <Login />}
				></Route>
				{/* <Route exact path="/characters/:id" element={<CharacterDetails/>}></Route> */}
				<Route
					exact
					path="/characters/:id"
					element={<CharacterDetails />}
					// element={isLogin ? <CharacterDetails /> : <Login />}
				></Route>
				<Route exact path="/about" element={<About />}></Route>
				{/* <Route exact path="/about" element={isLogin ? <About/> : <Login/>}></Route> */}
				<Route
					exact
					path="/favorites"
					element={<Favorites />}
					// element={isLogin ? <Favorites /> : <Login />}
				></Route>
				{/* <Route exact path="/sign_up" element={<SignUp />}></Route> */}
				<Route
					exact
					path="/profile"
					element={<Profile />}
					// element={isLogin ? <Profile /> : <Login />}
				></Route>
				<Route path="/*" element={<Error />}></Route>{" "}
				{/* <Route path="/*" element={isLogin ? <Error /> : <Login />}></Route>{" "} */}
				{/* default */}
			</Routes>
		</div>
	);
}

export default App;
