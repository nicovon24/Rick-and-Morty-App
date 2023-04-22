import "./App.css";
import Characters from "./pages/Characters.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Intro.jsx";
import Error from "./components/Error/Error.jsx";
import About from "./pages/About.jsx";
import CharacterDetails from "./components/Characters/Characters/CharacterDetails.jsx";
import Favorites from "./pages/Favorites.jsx";
import Profile from "./pages/Profile.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCreatedChar } from "./redux/actions";

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
	}, [dispatch]);

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
				<Route exact path="/" element={<Home />}></Route>
				<Route
					exact
					path="/characters"
					element={<Characters />}
				></Route>
				<Route
					exact
					path="/characters/:id"
					element={<CharacterDetails />}
				></Route>
				<Route exact path="/about" element={<About />}></Route>
				<Route
					exact
					path="/favorites"
					element={<Favorites />}
				></Route>
				<Route
					exact
					path="/profile"
					element={<Profile />}
				></Route>
				<Route path="/*" element={<Error />}></Route>{" "}
			</Routes>
		</div>
	);
}

export default App;
