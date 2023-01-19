// import {useSelector} from "react-redux"
import { useContext } from "react"
import { DataContext } from "../../context"
import styles from "./Favorites.module.css"
import Navbar from "../../components/Navbar/Navbar.jsx"
import Character from "../Characters/Characters/Character"
import CharacterFavorites from "./CharacterFavorites"

export default function Favorites(){
    // let listFavs = useSelector(state=>state.listFavs)
    let {favorites} = useContext(DataContext)

    return(
        <>
            <Navbar/>
            <div className={styles.favorites_container}>
                <h1 className={styles.subtitle}>FAVORITES</h1>

                <div className={styles.favorites_subcontainer}>
                    {favorites.map(el=><CharacterFavorites character={el} key={el.id}/>)}
                </div>
            </div>
        </>
                    
    )
}