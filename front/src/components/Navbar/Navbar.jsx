import { useState } from "react"
import {NavLink} from "react-router-dom"
import { useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser, faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import styles from "./Navbar.module.css"

export default function Navbar(){
    let {initialFavorites} = useSelector(state=>state)
    let [isActive, setIsActive] = useState(false)
    let {profile} = useSelector(state=>state)
    let profile_image = profile.image

    return(
        <nav className={styles.nav}>
            
            <div className={styles.nav_title_desktop}><NavLink className={styles.nav_links} to="/home"><img className={styles.logo} src={require("../../assets/nico_nav.png")} alt="logo rick and morty"/></NavLink></div>
            
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
                    <img src={profile_image} className={styles.profile_image}/>
                    <div className={styles.profile_image_div}>
                        <p>{profile.name}</p>

                        <NavLink className={`${styles.nav_link_profile}`} to="/profile">
                            Profile
                        </NavLink>
                    </div>
                </li>
            </ul>

            <div className={styles.nav_phone}>
                <div className={styles.nav_phone_top}>
                    <div className={styles.nav_title} ><NavLink className={styles.nav_links} to="/ home"><p className={styles.nav_logo}>Rick and Morty</p></NavLink></div>

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



