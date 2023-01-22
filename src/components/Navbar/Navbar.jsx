import { useState } from "react"
import {NavLink, useLocation} from "react-router-dom"
import { useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser, faBars, faClose, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import styles from "./Navbar.module.css"

export default function Navbar(){
    let {initialFavorites} = useSelector(state=>state)
    let [isActive, setIsActive] = useState(false)

    return(
        <nav className={styles.nav}>
            {/* <img className={styles.logo} src="https://wallpapercave.com/wp/wp5794980.jpg"/> */}
            <div className={styles.nav_title_desktop}><NavLink className={styles.nav_links} to="/home"><p className={styles.nav_title}>Rick and Morty</p></NavLink></div>
            
            <ul className={styles.nav_desktop}>
                <li className={styles.nav_list}>
                    <NavLink className={styles.nav_links} to="/characters">
                        <FontAwesomeIcon className={styles.nav_icon} icon={faUser}/>Characters
                    </NavLink>
                </li>

                <li className={styles.nav_list}>
                    <NavLink className={styles.nav_links} to="/about">
                    <FontAwesomeIcon className={styles.nav_icon} icon={faUser}/>About</NavLink>
                </li>

                <li className={styles.nav_list}>
                    <NavLink className={styles.nav_links} to="/favorites">
                    <FontAwesomeIcon className={styles.nav_icon} icon={faHeart}/>Favorites {`(${initialFavorites?.length})`}</NavLink>
                </li>

                <li className={styles.nav_list}>
                    <NavLink className={`${styles.nav_links} ${styles.profile_btn}`} to="/profile">Profile</NavLink>
                </li>
            </ul>

            <div className={styles.nav_phone}>
                <div className={styles.nav_phone_top}>
                    <div className={styles.nav_title} ><NavLink className={styles.nav_links} to="/ home"><p className={styles.nav_title_phone}>Rick and Morty</p></NavLink></div>

                    <FontAwesomeIcon icon={isActive ? faClose : faBars} className={styles.menu_icon}
                    onClick={()=>setIsActive(prev=>!prev)}/>
                </div>
                
                <ul className={`${styles.menu_phone} ${isActive ? styles.menu_active : styles.menu_inactive}`}>
                    <div className={`${styles.menu_phone_subcontainer} 
                    `}>
                        <li className={styles.nav_list}>
                            <NavLink className={styles.nav_links} to="/characters">
                                <FontAwesomeIcon className={styles.nav_icon} icon={faUser}/>Characters
                            </NavLink>
                        </li>

                        <li className={styles.nav_list}>
                            <NavLink className={styles.nav_links} to="/about">
                                <FontAwesomeIcon className={styles.nav_icon} icon={faUser}/>About
                            </NavLink>
                        </li>

                        <li className={styles.nav_list}>
                            <NavLink className={styles.nav_links} to="/favorites">
                                <FontAwesomeIcon className={styles.nav_icon} icon={faHeart}/>Favorites {`(${initialFavorites?.length})`}
                            </NavLink>
                        </li>

                        <li className={styles.nav_list}>
                            <NavLink className={`${styles.nav_links} ${styles.profile_btn}`} to="/profile">
                                Profile
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}



