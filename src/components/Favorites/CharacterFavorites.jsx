import styles from "./Favorites.module.css"
import {Link} from "react-router-dom"

export default function CharacterFavorites({character}){
    return(
        <div className={styles.character_item}>
            <div className={styles.character_info}>
            <Link to={`/characters/${character.id}`}><img src={character?.image} alt=""/></Link>
                <h2 className={styles.character_name}>{character?.name}</h2>
            </div>
        </div>
    )
}