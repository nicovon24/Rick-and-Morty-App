import {NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faUser} from '@fortawesome/free-solid-svg-icons'
import styles from "./Navbar.module.css"

export default function Navbar(){
    return(
        <nav className={styles.nav}>
            <img className={styles.logo} src="https://wallpapercave.com/wp/wp5794980.jpg"/>
            <ul>
                <li className={styles.nav_list}><NavLink className={styles.nav_links} to="/home"><FontAwesomeIcon icon={faHouseUser}/>Home</NavLink></li>
                <li className={styles.nav_list}><NavLink className={styles.nav_links} to="/characters"><FontAwesomeIcon icon={faUser}/>Characters</NavLink></li>
                <li className={styles.nav_list}><NavLink className={styles.nav_links} to="/about"><FontAwesomeIcon icon={faUser}/>About</NavLink></li>
            </ul>
        </nav>
    )
}



