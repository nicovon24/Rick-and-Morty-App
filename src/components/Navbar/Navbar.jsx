import {NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser} from '@fortawesome/free-solid-svg-icons'
import styles from "./Navbar.module.css"
import { useContext } from "react"
import { DataContext } from "../../context"

export default function Navbar(){
    let {favorites} = useContext(DataContext)
    return(
        <nav className={styles.nav}>
            {/* <img className={styles.logo} src="https://wallpapercave.com/wp/wp5794980.jpg"/> */}
            <div className={styles.nav_title_container}><NavLink className={styles.nav_links} to="/home"><p className={styles.nav_title}>Rick and Morty</p></NavLink></div>
            <ul>
                <li className={styles.nav_list}>
                    <NavLink className={styles.nav_links} to="/characters">
                    <FontAwesomeIcon className={styles.nav_icon} icon={faUser}/>Characters</NavLink>
                </li>

                <li className={styles.nav_list}>
                    <NavLink className={styles.nav_links} to="/about">
                    <FontAwesomeIcon className={styles.nav_icon} icon={faUser}/>About</NavLink>
                </li>

                <li className={styles.nav_list}>
                    <NavLink className={styles.nav_links} to="/favorites">
                    <FontAwesomeIcon className={styles.nav_icon} icon={faHeart}/>Favorites {`(${favorites?.length})`}</NavLink>
                </li>
            </ul>
        </nav>
    )
}



