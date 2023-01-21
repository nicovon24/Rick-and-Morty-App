import styles from "./Favorites.module.css"
import {Link} from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../../context"

export default function CharacterFavorites({character}){
    let {favorites, setFavorites, setInitialFavorites} = useContext(DataContext)
    const handleChangeFav = ()=>{
        let filter = favorites.filter(el=>el.id!==character.id)
        setFavorites([...filter])
        setInitialFavorites([...filter])
    }
    return(
        <div className={styles.character_item}>
            <div className={styles.character_info}>

                <div className={styles.fav_subcontainer}>
                    <img src={require("../../assets/delete_blue.png")} alt="delete btn"
                    onClick={handleChangeFav}/>
                </div>

                <Link to={`/characters/${character.id}`}><img src={character?.image} alt=""/></Link>
                
                <h2 className={styles.character_name}>{character?.name}</h2>
           
            </div>
        </div>
    )
}