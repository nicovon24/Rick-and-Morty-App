import { useEffect } from "react"
import { useState } from "react"
import FavoritesComponent from "../components/Favorites/Favorites.jsx"
import Loader from "../components/Loader/Loader.jsx"
import Navbar  from "../components/Navbar/Navbar.jsx"

export default function Favorites(){
    let [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        }, [1000])
    }, [])
    return(
        <>
            <Navbar/>
            {isLoading
            ? <Loader/>
            : <FavoritesComponent/>}
        </>
    )
}